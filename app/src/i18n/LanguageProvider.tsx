import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type LanguageContextValue } from "./LanguageContext";
import { STRINGS } from "./strings";
import type { Lang } from "./types";
import { resolveLangFromUrl, syncLangToUrl } from "./urlLang";

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<Lang>(() => resolveLangFromUrl());

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = STRINGS.brand.documentTitle[lang];
  }, [lang]);

  useEffect(() => {
    const onPopState = () => {
      setLangState(resolveLangFromUrl());
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    syncLangToUrl(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      syncLangToUrl(next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
