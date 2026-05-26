import { Timeline } from "@/components/ui/Timeline";
import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CERTIFICATIONS, EDUCATION } from "@/data/about";

export function AboutSection() {
  const t = useT();

  return (
    <section id="about" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">{t(STRINGS.about.eyebrow)}</span>
        <h2>{t(STRINGS.about.title)}</h2>
        <p>{t(STRINGS.about.subtitle)}</p>
      </div>
      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="info-card">
            <h3>
              <i className="bi bi-mortarboard-fill" />
              {t(STRINGS.about.educationCardTitle)}
            </h3>
            <Timeline items={t(EDUCATION)} />
          </div>
          <div className="info-card">
            <h3>
              <i className="bi bi-patch-check-fill" />
              {t(STRINGS.about.certCardTitle)}
            </h3>
            <Timeline items={t(CERTIFICATIONS)} />
          </div>
        </div>
      </div>
    </section>
  );
}
