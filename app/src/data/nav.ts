import { STRINGS } from "@/i18n/strings";
import type { Localized } from "@/i18n";
import type { NavLink } from "@/types";

/**
 * Nav links are localized via the STRINGS dictionary at render time.
 * Each entry pairs a stable `href` with its `label` translations so
 * downstream components can simply iterate and `t(...)` the label.
 */
export const NAV_LINKS: ReadonlyArray<{
  href: string;
  label: Localized;
}> = [
  { href: "#about", label: STRINGS.nav.about },
  { href: "#strengths", label: STRINGS.nav.strengths },
  { href: "#achievements", label: STRINGS.nav.kdt },
  { href: "#teaching", label: STRINGS.nav.teaching },
  { href: "#career", label: STRINGS.nav.career },
  { href: "#fintech-ax", label: STRINGS.nav.fintech },
  { href: "#projects", label: STRINGS.nav.projects },
] as const;

/**
 * Legacy KO-only export retained for callers that haven't migrated yet.
 * Prefer importing {@link NAV_LINKS} directly.
 */
export const NAV_LINKS_KO: readonly NavLink[] = NAV_LINKS.map((link) => ({
  href: link.href,
  label: link.label.ko,
}));

export const CONTACT_EMAIL = "prfsr.limitless@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/pbjworking/";
export const GITHUB_URL = "https://github.com/wild-mental";
export const KAKAO_URL = "https://open.kakao.com/me/pbjworking";
