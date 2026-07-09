import type { Lang } from "./types";

export const LANG_PARAM = "lang";
export const DEFAULT_LANG: Lang = "ko";

/** Normalizes a raw value (e.g. "ko", "EN", "ko-KR") to a `Lang`, or null. */
export function normalizeLang(raw: string | null | undefined): Lang | null {
  if (!raw) return null;
  const value = raw.trim().toLowerCase();
  if (value.startsWith("ko")) return "ko";
  if (value.startsWith("en")) return "en";
  return null;
}

/** Reads `?lang=` from the current URL, if present and valid. */
export function readLangFromUrl(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    return normalizeLang(params.get(LANG_PARAM));
  } catch {
    return null;
  }
}

/** Resolves the active language: URL param wins; otherwise Korean. */
export function resolveLangFromUrl(): Lang {
  return readLangFromUrl() ?? DEFAULT_LANG;
}

/**
 * Updates the URL to reflect the chosen language without a full reload.
 * User-driven changes always set `?lang=ko` or `?lang=en`.
 */
export function syncLangToUrl(lang: Lang): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  url.searchParams.set(LANG_PARAM, lang);

  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) {
    window.history.pushState(null, "", next);
  }
}
