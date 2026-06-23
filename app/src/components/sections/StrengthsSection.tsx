import { EvidenceImageButton } from "@/components/ui/EvidenceImageButton";
import { useLang, useT } from "@/i18n";
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
  const { lang } = useLang();
  const s = STRINGS.strengths;

  return (
    <section id="strengths" className="tile tile-light">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-newspaper" />
            </div>
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
            <div className="icon-circle">
              <i className="bi bi-people-fill" />
            </div>
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
            <div className="icon-circle">
              <i className="bi bi-shield-check" />
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 items-stretch">
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
              <span className="evidence-summary-clients">
                {t(s.satisfactionClients)}
              </span>
              <span className="evidence-summary-tag">
                {t(s.satisfactionTag)}
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
      </div>
    </section>
  );
}
