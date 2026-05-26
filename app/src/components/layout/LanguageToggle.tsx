import { useLang } from "@/i18n";

type LanguageToggleProps = {
  /** Adds an extra class — useful for variant styles (e.g. inside a drawer). */
  className?: string;
};

/**
 * Compact KO / EN segmented control rendered in the global nav (rightmost).
 * Persists the chosen language via `LanguageProvider`.
 */
export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang } = useLang();

  const finalClass = ["lang-toggle", className ?? ""].filter(Boolean).join(" ");

  return (
    <div
      className={finalClass}
      role="group"
      aria-label={lang === "ko" ? "언어 전환" : "Switch language"}
    >
      <button
        type="button"
        className={`lang-toggle-option${lang === "ko" ? " is-active" : ""}`}
        aria-pressed={lang === "ko"}
        onClick={() => setLang("ko")}
      >
        KO
      </button>
      <span className="lang-toggle-sep" aria-hidden="true" />
      <button
        type="button"
        className={`lang-toggle-option${lang === "en" ? " is-active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
