import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS } from "@/data/nav";

type GlobalNavProps = {
  onToggleMobileMenu: () => void;
};

export function GlobalNav({ onToggleMobileMenu }: GlobalNavProps) {
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
          <span>박병준 · AI &amp; IT 컨설턴트</span>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav-link-item" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="btn-utility-dark" href={`mailto:${CONTACT_EMAIL}`}>
            <i className="bi bi-envelope" />
            Contact
          </a>
          <a
            className="btn-utility-blue"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="nav-mobile-toggle"
            aria-label="메뉴 열기"
            onClick={onToggleMobileMenu}
          >
            <i className="bi bi-list" />
          </button>
        </div>
      </div>
    </nav>
  );
}
