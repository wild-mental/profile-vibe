import { useEffect, useId, useState } from "react";
import { EvidenceImageButton } from "@/components/ui/EvidenceImageButton";
import { useLang, useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { KDT_COHORTS, KDT_STATS } from "@/data/kdt";
import type { CohortRow } from "@/types";

/**
 * "성과 증명 / Proven Results" — consolidates three evidence blocks:
 *  1. enterprise IT-training satisfaction,
 *  2. a LinkedIn peer recommendation,
 *  3. the KDT long-track program record (stats always visible; the bulky
 *     per-cohort evidence cards live behind a disclosure toggle, mirroring the
 *     hero "교육 & 자격 사항" pattern).
 */
export function AchievementsSection() {
  const t = useT();
  const { lang } = useLang();
  const k = STRINGS.kdt;
  const s = STRINGS.strengths;

  const [cohortsOpen, setCohortsOpen] = useState(false);
  const cohortsPanelId = useId();

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === "#kdt-graduation") setCohortsOpen(true);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="achievements" className="tile tile-light">
      <div className="tile-header">
        <span className="eyebrow">{t(k.eyebrow)}</span>
        <h2>{t(k.title)}</h2>
        <p>{t(k.subtitle)}</p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div id="satisfaction-evidence" className="info-card h-full">
            <h3>
              <i className="bi bi-bar-chart-line-fill" />
              {t(s.satisfactionCardTitle)}
            </h3>
            <EvidenceImageButton
              natural
              className="mt-2"
              image={{
                src:
                  lang === "en"
                    ? "/assets/enterprise-it-training-satisfaction_en.png"
                    : "/assets/enterprise-it-training-satisfaction.png",
                caption: t(s.satisfactionImageCaption),
              }}
            />
            <p className="evidence-summary">
              <span className="evidence-summary-tag">
                {t(s.satisfactionTag)}
              </span>
              <span className="evidence-summary-clients">
                {t(s.satisfactionClients)}
              </span>
            </p>
          </div>

          <div className="info-card h-full">
            <h3>
              <i className="bi bi-chat-square-quote-fill" />
              {t(s.linkedInCardTitle)}
            </h3>
            <EvidenceImageButton
              natural
              className="mt-2"
              image={{
                src: "/assets/linkedin-recommendation-kakao-kidsnote.png",
                caption: t(s.linkedInImageCaption),
              }}
            />
            <blockquote className="linkedin-quote">
              <p className="linkedin-quote-text">{t(s.linkedInQuote)}</p>
              <cite className="linkedin-quote-cite">
                {t(s.linkedInQuoteCite)}
              </cite>
            </blockquote>
          </div>
        </div>

        <div id="kdt-graduation" className="kdt-results">
          <div className="kdt-results-head">
            <h3>
              <i className="bi bi-mortarboard-fill" />
              {t(k.kdtResultsTitle)}
            </h3>
            <p>{t(k.kdtResultsSubtitle)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {t(KDT_STATS).map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>

          <div className="cohorts-disclosure">
            <button
              type="button"
              className="cohorts-toggle"
              aria-expanded={cohortsOpen}
              aria-controls={cohortsPanelId}
              onClick={() => setCohortsOpen((v) => !v)}
            >
              <i className="bi bi-collection-fill" aria-hidden="true" />
              <span className="cohorts-toggle-label">{t(k.cohortsToggle)}</span>
              <span className="cohorts-toggle-hint">
                {cohortsOpen
                  ? t(STRINGS.about.collapseHint)
                  : t(STRINGS.about.expandHint)}
              </span>
              <i
                className={`bi bi-chevron-down cohorts-chevron${cohortsOpen ? " is-open" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>

          <div id={cohortsPanelId} className="cohorts-panel" hidden={!cohortsOpen}>
            {t(KDT_COHORTS).map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
        </div>
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
      <div className="cohort-body">
        <div className="cohort-evidence">
          <span className="cohort-evidence-label">
            <i className="bi bi-bar-chart-fill" />
            {t(k.satisfactionTab)}
          </span>
          <EvidenceImageButton image={cohort.satisfaction} />
        </div>
        <div className="cohort-evidence">
          <span className="cohort-evidence-label">
            <i className="bi bi-chat-square-quote-fill" />
            {t(k.reviewsTab)}
          </span>
          <EvidenceImageButton image={cohort.reviews} />
        </div>
      </div>
    </article>
  );
}
