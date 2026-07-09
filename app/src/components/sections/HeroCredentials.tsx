import { Timeline } from "@/components/ui/Timeline";
import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CERTIFICATIONS, EDUCATION } from "@/data/about";

type HeroCredentialsToggleProps = {
  open: boolean;
  panelId: string;
  onToggle: () => void;
};

/**
 * Compact "Education & Certifications" disclosure toggle, rendered beneath the
 * hero contact group (right column). Carries the `#about` anchor so the global
 * nav "About" link still resolves. The matching {@link HeroCredentialsPanel} is
 * rendered separately as a full-width row so expanding it fills the hero width
 * (down under the profile photo) instead of only the text column.
 */
export function HeroCredentialsToggle({
  open,
  panelId,
  onToggle,
}: HeroCredentialsToggleProps) {
  const t = useT();

  return (
    <div id="about" className="hero-credentials">
      <button
        type="button"
        className="hero-credentials-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <i className="bi bi-mortarboard-fill" aria-hidden="true" />
        <span className="hero-credentials-title">{t(STRINGS.about.title)}</span>
        <span className="hero-credentials-hint">
          {open ? t(STRINGS.about.collapseHint) : t(STRINGS.about.expandHint)}
        </span>
        <i
          className={`bi bi-chevron-down hero-credentials-chevron${open ? " is-open" : ""}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

type HeroCredentialsPanelProps = {
  id: string;
  open: boolean;
};

/** Full-width reveal panel holding the education & certification timelines. */
export function HeroCredentialsPanel({ id, open }: HeroCredentialsPanelProps) {
  const t = useT();

  return (
    <div id={id} className="hero-credentials-panel" hidden={!open}>
      <div className="hero-credentials-grid">
        <div className="hero-credentials-card">
          <h3>
            <i className="bi bi-mortarboard-fill" />
            {t(STRINGS.about.educationCardTitle)}
          </h3>
          <Timeline items={t(EDUCATION)} />
        </div>
        <div className="hero-credentials-card">
          <h3>
            <i className="bi bi-patch-check-fill" />
            {t(STRINGS.about.certCardTitle)}
          </h3>
          <Timeline items={t(CERTIFICATIONS)} />
        </div>
      </div>
    </div>
  );
}
