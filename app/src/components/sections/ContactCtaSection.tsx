import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/data/nav";

export function ContactCtaSection() {
  const t = useT();
  const s = STRINGS.contactCta;

  return (
    <section className="tile tile-light">
      <div className="contact-cta-wrap">
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
        <div className="contact-cta-actions">
          <a className="btn-pill-primary" href={`mailto:${CONTACT_EMAIL}`}>
            {t(s.emailButton)}
            <i className="bi bi-arrow-right" />
          </a>
          <a
            className="btn-pill-secondary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(s.linkedInButton)}
          </a>
        </div>
      </div>
    </section>
  );
}
