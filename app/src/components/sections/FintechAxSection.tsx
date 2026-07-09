import type { ReactNode } from "react";
import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";

const DOMAIN_CHIPS = [
  "Compliance",
  "Security",
  "Reliability",
  "ISMS-P",
  "MSA · EKS",
] as const;

const METHOD_CHIPS = [
  "JTBD",
  "Porter's Five Forces",
  "Value Chain",
  "LLM Prompt",
  "Multi-Agent",
  "PRD",
] as const;

/** Turns `**foo**` segments in localized copy into <strong> nodes. */
function renderInlineStrong(text: string): ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part,
  );
}

export function FintechAxSection() {
  const t = useT();
  const s = STRINGS.fintech;
  const curriculum = t(s.curriculum);

  return (
    <section id="fintech-ax" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-bank" />
            </div>
            <h3>{t(s.card1Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card1Item1Lead)}</span>
                <a href="#project-hana" className="sub-line sub-line-link">
                  {renderInlineStrong(t(s.card1Item1Sub))}
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">{t(s.card1Item2Lead)}</span>
                <a href="#project-axia" className="sub-line sub-line-link">
                  {renderInlineStrong(t(s.card1Item2Sub))}
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
            </ul>
            <div className="mt-2">
              {DOMAIN_CHIPS.map((chip) => (
                <span key={chip} className="stack-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-graph-up-arrow" />
            </div>
            <h3>{t(s.card2Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card2Item1Lead)}</span>
                <a href="#project-kakao" className="sub-line sub-line-link">
                  {renderInlineStrong(t(s.card2Item1Sub))}
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">{t(s.card2Item2Lead)}</span>
                <span className="sub-line">{t(s.card2Item2Sub)}</span>
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-diagram-3" />
            </div>
            <h3>{t(s.card3Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card3Item1Lead)}</span>
                <span className="sub-line">
                  {renderInlineStrong(t(s.card3Item1Sub))}
                </span>
              </li>
              <li>
                <span className="lead-line">{t(s.card3Item2Lead)}</span>
                <span className="sub-line">{t(s.card3Item2Sub)}</span>
              </li>
            </ul>
            <div className="mt-2">
              {METHOD_CHIPS.map((chip) => (
                <span key={chip} className="stack-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="info-card">
            <h3>
              <i className="bi bi-mortarboard-fill" />
              {t(s.curriculumTitle)}
            </h3>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "28%" }}>
                      {t(s.curriculumHeaderModule)}
                    </th>
                    <th>{t(s.curriculumHeaderTopic)}</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.map((row) => (
                    <tr key={row.module}>
                      <td>
                        <strong>{row.module}</strong>
                      </td>
                      <td>{row.topic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
