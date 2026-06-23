import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type LanguageContextValue } from "./LanguageContext";
import { STRINGS } from "./strings";
import type { Lang } from "./types";

const STORAGE_KEY = "profile.lang";
/** URL query params checked (in order) for an explicit language override. */
const URL_PARAM_KEYS = ["lang", "locale", "hl"] as const;

/** Normalizes a raw value (e.g. "ko", "EN", "ko-KR") to a `Lang`, or null. */
function normalizeLang(raw: string | null | undefined): Lang | null {
  if (!raw) return null;
  const value = raw.trim().toLowerCase();
  if (value.startsWith("ko")) return "ko";
  if (value.startsWith("en")) return "en";
  return null;
}

/** Reads an explicit language override from the URL query string, if present. */
function readLangFromUrl(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of URL_PARAM_KEYS) {
      const match = normalizeLang(params.get(key));
      if (match) return match;
    }
  } catch {
    /* malformed URL / unavailable location */
  }
  return null;
}

/**
 * Determines the initial language, in priority order:
 * 1. URL query param (`?lang=ko` / `?locale=en` / `?hl=…`) — highest, so shared
 *    links and QR codes pin the language regardless of prior visits.
 * 2. Persisted choice in localStorage.
 * 3. Browser language (`navigator.language`).
 * 4. Korean fallback (SSR / no signal).
 */
function readInitialLang(): Lang {
  if (typeof window === "undefined") return "ko";

  const fromUrl = readLangFromUrl();
  if (fromUrl) return fromUrl;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") return stored;
  } catch {
    /* localStorage may be unavailable (private mode / SSR) */
  }

  const browser = typeof navigator !== "undefined" ? navigator.language : "";
  return normalizeLang(browser) ?? "en";
}

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Lang>(() => readInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = STRINGS.brand.documentTitle[lang];
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
