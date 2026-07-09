import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  KAKAO_URL,
  LINKEDIN_URL,
} from "@/data/nav";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  const s = STRINGS.footer;

  return (
    <footer className="footer-region">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span className="nav-brand-text">{t(STRINGS.brand.nameFooter)}</span>
          </div>
          <p className="footer-tagline">{t(STRINGS.brand.tagline)}</p>
        </div>

        <div>
          <div className="footer-col-title">{t(s.profileTitle)}</div>
          <a className="footer-link" href="#about">
            {t(s.profileAbout)}
          </a>
          <a className="footer-link" href="#strengths">
            {t(s.profileStrengths)}
          </a>
          <a className="footer-link" href="#achievements">
            {t(s.profileKdt)}
          </a>
        </div>

        <div>
          <div className="footer-col-title">{t(s.trackRecordTitle)}</div>
          <a className="footer-link" href="#teaching">
            {t(s.trackTeaching)}
          </a>
          <a className="footer-link" href="#career">
            {t(s.trackCareer)}
          </a>
          <a className="footer-link" href="#projects">
            {t(s.trackProjects)}
          </a>
        </div>

        <div>
          <div className="footer-col-title">{t(s.contactTitle)}</div>
          <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a
            className="footer-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(s.kakaoLabel)}
          >
            Kakao · pbjworking
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">
          © {year} Byungjun Park. {t(s.copyright)}
        </span>
      </div>
    </footer>
  );
}
