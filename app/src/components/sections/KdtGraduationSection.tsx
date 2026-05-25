import { EvidenceImageButton } from "@/components/ui/EvidenceImageButton";
import { KDT_COHORTS, KDT_STATS } from "@/data/kdt";
import type { CohortRow } from "@/types";

export function KdtGraduationSection() {
  return (
    <section
      id="kdt-graduation"
      className="tile tile-parchment kdt-section"
    >
      <div className="tile-header">
        <span className="eyebrow">Track Record</span>
        <h2>
          2024 &amp; 2025년 KDT 장기과정
          <br />
          2기수 연속 100% 수료
        </h2>
        <p>
          풀스택 엔지니어 양성 1,000시간 장기과정, 2년간 총 48명
          <br />— 두 기수 모두 100% 수료, 만족도 제출 인원 전원 추천.
        </p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {KDT_STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>

        {KDT_COHORTS.map((cohort) => (
          <CohortCard key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </section>
  );
}

function CohortCard({ cohort }: { cohort: CohortRow }) {
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
            만족도 조사
          </summary>
          <div className="evidence-body">
            <EvidenceImageButton image={cohort.satisfaction} />
          </div>
        </details>
        <details open className="evidence-details">
          <summary>
            <i className="bi bi-chat-square-quote-fill" />
            수강 후기
          </summary>
          <div className="evidence-body">
            <EvidenceImageButton image={cohort.reviews} />
          </div>
        </details>
      </div>
    </article>
  );
}
