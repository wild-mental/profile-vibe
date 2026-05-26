import { EvidenceImageButton } from "@/components/ui/EvidenceImageButton";
import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { KDT_COHORTS, KDT_STATS } from "@/data/kdt";
import type { CohortRow } from "@/types";

export function KdtGraduationSection() {
  const t = useT();
  const k = STRINGS.kdt;

  return (
    <section id="kdt-graduation" className="tile tile-parchment kdt-section">
      <div className="tile-header">
        <span className="eyebrow">{t(k.eyebrow)}</span>
        <h2>
          {t(k.titleLine1)}
          <br />
          {t(k.titleLine2)}
        </h2>
        <p>
          {t(k.subtitleLine1)}
          <br />
          {t(k.subtitleLine2)}
        </p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t(KDT_STATS).map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>

        {t(KDT_COHORTS).map((cohort) => (
          <CohortCard key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </section>
  );
}

function CohortCard({ cohort }: { cohort: CohortRow }) {
  const t = useT();
  const k = STRINGS.kdt;

  return (
    <article className="cohort-card">
      <div className="cohort-header">
        <h3>
          <i className="bi bi-mortarboard-fill text-primary me-1" />
          {cohort.title}
        </h3>
        <div className="cohort-meta">
          {cohort.badges.map((badge) => (
            <span key={badge.label} className="cohort-badge">
              <i className={`bi ${badge.icon}`} />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <div className="cohort-body grid grid-cols-1 md:grid-cols-2 gap-4">
        <details open className="evidence-details">
          <summary>
            <i className="bi bi-bar-chart-fill" />
            {t(k.satisfactionTab)}
          </summary>
          <div className="evidence-body">
            <EvidenceImageButton image={cohort.satisfaction} />
          </div>
        </details>
        <details open className="evidence-details">
          <summary>
            <i className="bi bi-chat-square-quote-fill" />
            {t(k.reviewsTab)}
          </summary>
          <div className="evidence-body">
            <EvidenceImageButton image={cohort.reviews} />
          </div>
        </details>
      </div>
    </article>
  );
}
