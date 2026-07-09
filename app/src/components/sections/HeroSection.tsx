import { useEffect, useId, useState } from "react";
import { useLang, useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  KAKAO_URL,
  LINKEDIN_URL,
} from "@/data/nav";
import {
  HeroCredentialsPanel,
  HeroCredentialsToggle,
} from "./HeroCredentials";

export function HeroSection() {
  const t = useT();
  const { lang } = useLang();
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  const credentialsPanelId = useId();

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === "#about") setCredentialsOpen(true);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <header id="top" className="hero tile-light">
      <div className="hero-grid">
        <div>
          <img
            src="/assets/profile-byungjun-park.png"
            alt={t(STRINGS.hero.profilePhotoAlt)}
            className="profile-photo"
          />
        </div>
        <div>
          <span className="hero-eyebrow">{t(STRINGS.hero.eyebrow)}</span>
          <h1>
            {t(STRINGS.hero.nameKr)}
            <span className="name-roman">{t(STRINGS.hero.nameEn)}</span>
          </h1>
          <p className="tagline">
            <span className="tagline-line">
              {t(STRINGS.hero.taglineLead)}
              {/* Line is long — break so the speed phrase (KO: 뉴스 속도로 / EN: at the speed of news) starts a new line. */}
              <br />
              <strong>{t(STRINGS.hero.taglineLeadStrong)}</strong>
              {t(STRINGS.hero.taglineLeadTail)}
            </span>
            <span className="tagline-line tagline-subline">
              {t(STRINGS.hero.taglineSubPrefix)}
              {/* EN subline is long — break before the em-dash so the metrics start a new line. */}
              {lang === "en" && <br />}
              <strong>{t(STRINGS.hero.taglineSubStrong)}</strong>
            </span>
          </p>

          <ul className="contact-list">
            <li>
              <i className="bi bi-linkedin" />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/pbjworking
              </a>
            </li>
            <li>
              <i className="bi bi-github" />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/wild-mental
              </a>
            </li>
          </ul>
          <ul className="contact-list" style={{ marginTop: 10 }}>
            <li>
              <i className="bi bi-envelope-fill" />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <i className="bi bi-chat-fill" />
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(STRINGS.hero.kakaoLabel)}
              >
                Kakao · pbjworking
              </a>
            </li>
          </ul>

          <HeroCredentialsToggle
            open={credentialsOpen}
            panelId={credentialsPanelId}
            onToggle={() => setCredentialsOpen((v) => !v)}
          />
        </div>

        <HeroCredentialsPanel id={credentialsPanelId} open={credentialsOpen} />
      </div>
    </header>
  );
}
