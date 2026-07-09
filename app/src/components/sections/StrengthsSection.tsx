import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";

const NEWS_STACK = [
  "Cursor",
  "Claude Code",
  "Antigravity",
  "Agent Skills",
  "Multi Agent Orchestration",
  "OpenCode",
  "OMO",
  "OpenClaw",
  "Knowledge Base",
] as const;

export function StrengthsSection() {
  const t = useT();
  const s = STRINGS.strengths;

  return (
    <section id="strengths" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <div className="strengths-pills">
          {t(s.subtitleItems).map((item) => (
            <span key={item} className="strengths-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="highlight-card">
            <h3>{t(s.card1Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card1Item1Lead)}</span>
                <span className="sub-line">
                  {t(s.card1Item1SubPrefix)}
                  <strong>{t(s.card1Item1SubStrong)}</strong>
                  {t(s.card1Item1SubTail)}
                </span>
                <div className="mt-2">
                  {NEWS_STACK.map((tool) => (
                    <span key={tool} className="stack-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <span className="lead-line">{t(s.card1Item2Lead)}</span>
                <span className="sub-line">{t(s.card1Item2Sub)}</span>
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <h3>{t(s.card2Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card2Item1Lead)}</span>
                <a href="#kdt-graduation" className="sub-line sub-line-link">
                  {t(s.card2Item1SubPrefix)}
                  <strong>{t(s.card2Item1SubStrong)}</strong>
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">{t(s.card2Item2Lead)}</span>
                <a
                  href="#satisfaction-evidence"
                  className="sub-line sub-line-link"
                >
                  {t(s.card2Item2SubPrefix)}
                  <strong>{t(s.card2Item2SubStrong)}</strong>
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">{t(s.card2Item3Lead)}</span>
                <a href="#project-overseas" className="sub-line sub-line-link">
                  {t(s.card2Item3Sub)}
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <h3>{t(s.card3Title)}</h3>
            <ul>
              <li>
                <span className="lead-line">{t(s.card3Item1Lead)}</span>
                <span className="sub-line">
                  <strong>{t(s.card3Item1SubStrong)}</strong>
                  {t(s.card3Item1SubTail)}
                </span>
              </li>
              <li>
                <span className="lead-line">{t(s.card3Item2Lead)}</span>
                <span className="sub-line">
                  {t(s.card3Item2SubPrefix)}
                  <strong>{t(s.card3Item2SubStrong)}</strong>
                </span>
              </li>
              <li>
                <span className="lead-line">{t(s.card3Item3Lead)}</span>
                <span className="sub-line">{t(s.card3Item3Sub)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
