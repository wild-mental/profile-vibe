import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS } from "@/data/nav";
import { LanguageToggle } from "./LanguageToggle";

type GlobalNavProps = {
  onToggleMobileMenu: () => void;
};

export function GlobalNav({ onToggleMobileMenu }: GlobalNavProps) {
  const t = useT();

  return (
    <nav className="global-nav">
      <div className="global-nav-inner">
        <a className="nav-brand" href="#top">
          <img
            className="nav-brand-icon"
            src="/assets/profile-icon-white.png"
            alt=""
            aria-hidden="true"
          />
          <span>{t(STRINGS.brand.name)}</span>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav-link-item" href={link.href}>
              {t(link.label)}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="btn-utility-dark" href={`mailto:${CONTACT_EMAIL}`}>
            <i className="bi bi-envelope" />
            {t(STRINGS.nav.contact)}
          </a>
          <a
            className="btn-utility-blue"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(STRINGS.nav.linkedin)}
          </a>
          <LanguageToggle />
          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label={t(STRINGS.nav.menuLabel)}
            onClick={onToggleMobileMenu}
          >
            <i className="bi bi-list" />
          </button>
        </div>
      </div>
    </nav>
  );
}
