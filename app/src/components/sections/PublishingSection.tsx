import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import {
  NEWSLETTER_ISSUES,
  NEWSLETTER_SUBSCRIBE_URL,
  SKILL_GROUPS,
  skillUrl,
} from "@/data/publishing";

export function PublishingSection() {
  const t = useT();
  const s = STRINGS.publishing;

  return (
    <section id="publishing" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
      </div>

      <div className="tile-container-1100">
        <div className="info-card">
          <a
            className="publishing-banner"
            href={NEWSLETTER_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/ai-skills-for-everyone-banner.jpg"
              alt={t(s.bannerAlt)}
              width={1840}
              height={855}
              loading="lazy"
            />
          </a>
          <h3>
            <i className="bi bi-envelope-paper" />
            {t(s.newsletterTitle)}
          </h3>
          <p className="publishing-lead">{t(s.newsletterLead)}</p>
          <ul className="timeline">
            {t(NEWSLETTER_ISSUES).map((issue) => (
              <li key={issue.date}>
                <span className="period">{issue.date}</span>
                <span className="title">{issue.title}</span>
              </li>
            ))}
          </ul>
          <div className="publishing-actions">
            <a
              className="btn-pill-primary"
              href={NEWSLETTER_SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin" />
              {t(s.subscribeButton)}
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="publishing-skills-title">{t(s.skillsTitle)}</h3>
          <p className="publishing-skills-sub">{t(s.skillsSub)}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t(SKILL_GROUPS).map((group) => (
              <div key={group.icon} className="highlight-card">
                <div className="icon-circle">
                  <i className={`bi ${group.icon}`} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill.repo}>
                      <a
                        className="lead-line"
                        href={skillUrl(skill.repo)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {skill.repo}{" "}
                        <i className="bi bi-box-arrow-up-right" />
                      </a>
                      <span className="sub-line">{skill.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
