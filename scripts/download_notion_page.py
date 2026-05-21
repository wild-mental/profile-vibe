#!/usr/bin/env python3
"""Recursively download Notion pages with local images and relative links."""

from __future__ import annotations

import json
import re
import subprocess
import sys
import urllib.parse
import urllib.request
from collections import deque
from dataclasses import dataclass
from pathlib import Path

ROOT_PAGE_ID = "305d03212bd4807d9be2f771c42a8cb6"
ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "pages"

PAGE_TAG_RE = re.compile(r'<page url="([^"]+)">(.*?)</page>', re.DOTALL)
PAGE_ID_RE = re.compile(r"(?:notion\.so/|notion\.site/)(?:[^/\s?#]+-)?([0-9a-f]{32})", re.I)
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\((file://[^)]+)\)")
TITLE_RE = re.compile(r"^---\s*\ntitle:\s*(.+?)\s*\n---", re.MULTILINE)


@dataclass
class PageJob:
    page_id: str
    out_path: Path
    assets_dir: Path


def get_token() -> str:
    return subprocess.check_output(
        ["security", "find-generic-password", "-s", "notion-cli", "-w"],
        stderr=subprocess.DEVNULL,
    ).decode().strip()


def normalize_page_id(value: str) -> str | None:
    value = value.strip()
    if re.fullmatch(r"[0-9a-f]{32}", value, re.I):
        return value.lower()
    match = PAGE_ID_RE.search(value)
    return match.group(1).lower() if match else None


def fetch_markdown(page_id: str) -> str:
    return subprocess.check_output(
        ["ntn", "pages", "get", page_id],
        text=True,
        stderr=subprocess.STDOUT,
    )


def parse_title(markdown: str) -> str:
    match = TITLE_RE.search(markdown)
    if not match:
        return ""
    title = match.group(1).strip().strip("'\"")
    return title


def slugify(title: str, page_id: str) -> str:
    cleaned = re.sub(r"[*_`]", "", title)
    cleaned = re.sub(r"[^\w\s가-힣-]", " ", cleaned)
    cleaned = re.sub(r"\s+", "-", cleaned.strip()).strip("-").lower()
    cleaned = cleaned[:70].strip("-")
    return cleaned or page_id[:12]


def strip_page_label(html: str) -> str:
    text = re.sub(r"<[^>]+>", "", html)
    text = text.replace("\\*", "*").replace("\\|", "|")
    text = re.sub(r"\*+", "", text)
    return " ".join(text.split())


def extract_page_links(markdown: str) -> list[str]:
    ids: list[str] = []
    seen: set[str] = set()
    for url, _ in PAGE_TAG_RE.findall(markdown):
        page_id = normalize_page_id(url)
        if page_id and page_id not in seen:
            seen.add(page_id)
            ids.append(page_id)
    return ids


def parse_file_ref(url: str) -> dict | None:
    if not url.startswith("file://"):
        return None
    decoded = urllib.parse.unquote(url[len("file://") :])
    try:
        return json.loads(decoded)
    except json.JSONDecodeError:
        return None


def signed_url(token: str, ref: dict) -> str:
    payload = {
        "urls": [
            {
                "url": ref["source"],
                "permissionRecord": ref["permissionRecord"],
            }
        ]
    }
    req = urllib.request.Request(
        "https://www.notion.so/api/v3/getSignedFileUrls",
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.load(resp)
    urls = data.get("signedUrls") or []
    if not urls:
        raise RuntimeError(f"No signed URL for {ref.get('source')}")
    return urls[0]


def safe_image_name(source: str, index: int) -> str:
    filename = source.split(":", 2)[-1] if ":" in source else source
    filename = Path(filename).name
    filename = re.sub(r"[^\w.\-()가-힣]+", "_", filename)
    return filename or f"image-{index:02d}.png"


def download_file(url: str, dest: Path) -> None:
    parts = urllib.parse.urlsplit(url)
    safe_path = urllib.parse.quote(parts.path, safe="/")
    safe_url = urllib.parse.urlunsplit(
        (parts.scheme, parts.netloc, safe_path, parts.query, parts.fragment)
    )
    req = urllib.request.Request(safe_url, headers={"User-Agent": "profile-vibe/1.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def rel_link(from_path: Path, to_path: Path) -> str:
    return Path(
        urllib.parse.unquote(to_path.relative_to(from_path.parent).as_posix())
    ).as_posix()


def localize_images(
    markdown: str,
    token: str,
    assets_dir: Path,
    asset_prefix: str,
) -> str:
    assets_dir.mkdir(parents=True, exist_ok=True)
    cache: dict[str, str] = {}
    counter = {"n": 0}

    def replace(match: re.Match[str]) -> str:
        alt = match.group(1)
        ref = parse_file_ref(match.group(2))
        if not ref:
            return match.group(0)
        source = ref.get("source", "")
        if source not in cache:
            counter["n"] += 1
            filename = safe_image_name(source, counter["n"])
            dest = assets_dir / filename
            if not dest.exists():
                download_file(signed_url(token, ref), dest)
            cache[source] = f"{asset_prefix}/{filename}"
        return f"![{alt}]({cache[source]})"

    return IMAGE_RE.sub(replace, markdown)


def replace_page_links(markdown: str, from_path: Path, page_paths: dict[str, Path]) -> str:
    def replace(match: re.Match[str]) -> str:
        url = match.group(1)
        label_html = match.group(2)
        page_id = normalize_page_id(url)
        if not page_id or page_id not in page_paths:
            label = strip_page_label(label_html) or page_id or "linked page"
            return f"[{label}]({url})"
        target = page_paths[page_id]
        label = strip_page_label(label_html) or parse_title(
            target.read_text(encoding="utf-8")
        ) or page_id
        return f"[{label}]({rel_link(from_path, target)})"

    return PAGE_TAG_RE.sub(replace, markdown)


def discover_pages(root_page_id: str) -> dict[str, str]:
    """Return page_id -> raw markdown for all reachable internal pages."""
    pages: dict[str, str] = {}
    queue = deque([root_page_id])
    while queue:
        page_id = queue.popleft()
        if page_id in pages:
            continue
        markdown = fetch_markdown(page_id)
        pages[page_id] = markdown
        for child_id in extract_page_links(markdown):
            if child_id not in pages:
                queue.append(child_id)
    return pages


def assign_paths(page_ids: dict[str, str], root_page_id: str) -> dict[str, Path]:
    paths: dict[str, Path] = {}
    used_names: set[str] = set()

    for page_id, markdown in page_ids.items():
        if page_id == root_page_id:
            paths[page_id] = ROOT / "ai-it-profile.md"
            used_names.add("ai-it-profile")
            continue
        slug = slugify(parse_title(markdown), page_id)
        base = slug
        n = 2
        while slug in used_names:
            slug = f"{base}-{n}"
            n += 1
        used_names.add(slug)
        paths[page_id] = PAGES_DIR / f"{slug}.md"
    return paths


def main() -> int:
    token = get_token()
    raw_pages = discover_pages(ROOT_PAGE_ID)
    page_paths = assign_paths(raw_pages, ROOT_PAGE_ID)

    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    (ROOT / "assets").mkdir(parents=True, exist_ok=True)

    for page_id, markdown in raw_pages.items():
        out_path = page_paths[page_id]
        out_path.parent.mkdir(parents=True, exist_ok=True)

        if page_id == ROOT_PAGE_ID:
            assets_dir = ROOT / "assets"
            asset_prefix = "assets"
        else:
            slug = out_path.stem
            assets_dir = PAGES_DIR / "assets" / slug
            asset_prefix = f"assets/{slug}"

        processed = localize_images(markdown, token, assets_dir, asset_prefix)
        processed = replace_page_links(processed, out_path, page_paths)
        out_path.write_text(processed, encoding="utf-8")
        print(f"saved {out_path.relative_to(ROOT)} ({len(extract_page_links(raw_pages[page_id]))} outbound links)")

    print(f"\ntotal pages: {len(raw_pages)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
