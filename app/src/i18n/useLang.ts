import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Lang, Localized } from "./types";

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a <LanguageProvider>");
  }
  return ctx;
}

/**
 * Returns a stable `pick(localized)` helper bound to the active language.
 * Example: `const t = useT(); t({ ko: "안녕", en: "Hello" })`.
 */
export function useT(): <T>(localized: Localized<T>) => T {
  const { lang } = useLang();
  return <T,>(localized: Localized<T>) => pick(localized, lang);
}

export function pick<T>(localized: Localized<T>, lang: Lang): T {
  return localized[lang];
}
