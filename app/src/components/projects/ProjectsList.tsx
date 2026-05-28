import type { ReactNode } from "react";
import { useT } from "@/i18n";
import {
  AXIA,
  HANA,
  HANBAT,
  KAKAO,
  KPC,
  KRIVET,
  LUXROBO,
  SRI_LANKA,
} from "@/i18n/projects";
import { AdRevenueChart } from "./AdRevenueChart";
import { ProjectBand } from "./ProjectBand";

export function ProjectsList() {
  return (
    <>
      <SriLankaWorkshop />
      <HanaDtTraining />
      <KakaoKidsnote />
      <AxiaSoftCoinbit />
      <KrivetResearch />
      <KpcGlobal />
      <HanbatResearch />
      <LuxroboOverseas />
    </>
  );
}

/* ---------------- M-01 KOICA · UBION (Sri Lanka AI Workshop) ---------------- */
function SriLankaWorkshop() {
  const t = useT();
  const schedule = t(SRI_LANKA.schedule);

  return (
    <ProjectBand
      num={SRI_LANKA.num}
      org={t(SRI_LANKA.org)}
      tone="tone-2"
      photo="workshop"
      title={
        <>
          {t(SRI_LANKA.titleLine1)}
          <br />
          {t(SRI_LANKA.titleLine2)}
        </>
      }
    >
      <p>{t(SRI_LANKA.lead)}</p>

      <table className="specs-table">
        <thead>
          <tr>
            <th>{t(SRI_LANKA.scheduleHeaderDay)}</th>
            <th>{t(SRI_LANKA.scheduleHeaderTopic)}</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={row.day} className={row.highlight ? "highlight-row" : ""}>
              <th>{row.day}</th>
              <td>{row.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BulletList items={t(SRI_LANKA.bullets)} />
    </ProjectBand>
  );
}

/* ---------------- M-02 Hana DT ---------------- */
function HanaDtTraining() {
  const t = useT();
  const sections = t(HANA.sections);

  return (
    <ProjectBand
      id="project-hana"
      num={HANA.num}
      org={t(HANA.org)}
      photo="lecture"
      title={
        <>
          {t(HANA.titleLine1)}
          <br />
          {t(HANA.titleLine2)}
        </>
      }
    >
      <p>{t(HANA.lead)}</p>
      <ul>
        {sections.map((sec) => (
          <li key={sec.title}>
            <strong>{sec.title}</strong>
            {sec.items && sec.items.length > 0 ? (
              <ul>
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-03 Kakao Kidsnote ---------------- */
function KakaoKidsnote() {
  const t = useT();

  return (
    <ProjectBand
      id="project-kakao"
      num={KAKAO.num}
      org={t(KAKAO.org)}
      tone="tone-3"
      photo="starfield"
      hasChart
      title={
        <>
          {t(KAKAO.titleLine1)}
          <br />
          {t(KAKAO.titleLine2)}
        </>
      }
    >
      <p>{t(KAKAO.lead)}</p>

      <AdRevenueChart />

      <div className="metric-callout">
        <div className="metric-label">{t(KAKAO.metricLabel)}</div>
        <div className="metric-value">{t(KAKAO.metricValue)}</div>
      </div>

      <BulletList items={t(KAKAO.bullets)} />
    </ProjectBand>
  );
}

/* ---------------- M-04 Axia Soft / Coinbit ---------------- */
function AxiaSoftCoinbit() {
  const t = useT();

  return (
    <ProjectBand
      id="project-axia"
      num={AXIA.num}
      org={t(AXIA.org)}
      tone="tone-2"
      photo="starfield"
      title={
        <>
          {t(AXIA.titleLine1)}
          <br />
          {t(AXIA.titleLine2)}
        </>
      }
    >
      <p>{t(AXIA.lead)}</p>

      <div className="metric-callout">
        <div className="metric-label">{t(AXIA.metricLabel)}</div>
        <div className="metric-value">{t(AXIA.metricValue)}</div>
      </div>

      <ul>
        {t(AXIA.bullets).map((bullet) => (
          <li key={bullet}>{renderInlineStrong(bullet)}</li>
        ))}
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-05 KRIVET ---------------- */
function KrivetResearch() {
  const t = useT();

  return (
    <ProjectBand
      num={KRIVET.num}
      org={t(KRIVET.org)}
      tone="tone-3"
      photo="starfield"
      short
      title={
        <>
          {t(KRIVET.titleLine1)}
          <br />
          {t(KRIVET.titleLine2)}
        </>
      }
    >
      <p>{t(KRIVET.lead)}</p>
      <BulletList items={t(KRIVET.bullets)} />
    </ProjectBand>
  );
}

/* ---------------- M-06 KPC ---------------- */
function KpcGlobal() {
  const t = useT();

  return (
    <ProjectBand
      num={KPC.num}
      org={t(KPC.org)}
      photo="overseas"
      title={
        <>
          {t(KPC.titleLine1)}
          <br />
          {t(KPC.titleLine2)}
        </>
      }
    >
      <p>{t(KPC.lead)}</p>

      <div className="project-image">
        <img
          src="/assets/band-photo-kpc-sw-global.jpg"
          alt={t(KPC.imageAlt)}
        />
      </div>

      <BulletList items={t(KPC.bullets)} />
    </ProjectBand>
  );
}

/* ---------------- M-07 Hanbat ---------------- */
function HanbatResearch() {
  const t = useT();

  return (
    <ProjectBand
      num={HANBAT.num}
      org={t(HANBAT.org)}
      tone="tone-2"
      photo="starfield"
      short
      title={
        <>
          {t(HANBAT.titleLine1)}
          <br />
          {t(HANBAT.titleLine2)}
        </>
      }
    >
      <p>{t(HANBAT.lead)}</p>
      <BulletList items={t(HANBAT.bullets)} />
    </ProjectBand>
  );
}

/* ---------------- M-08 Luxrobo ---------------- */
function LuxroboOverseas() {
  const t = useT();
  const sections = t(LUXROBO.sections);

  return (
    <ProjectBand
      id="project-overseas"
      num={LUXROBO.num}
      org={t(LUXROBO.org)}
      tone="tone-3"
      photo="overseas"
      title={
        <>
          {t(LUXROBO.titleLine1)}
          <br />
          {t(LUXROBO.titleLine2)}
        </>
      }
    >
      <p>{t(LUXROBO.lead)}</p>
      <ul>
        {sections.map((sec) => (
          <li key={sec.title}>
            <strong>{sec.title}</strong>
            {sec.noteAfter ? sec.noteAfter : null}
            {sec.pressIntro || (sec.pressLinks && sec.pressLinks.length) ? (
              <ul>
                <li>
                  {sec.pressIntro}
                  {sec.pressLinks?.map((link, idx) => (
                    <span key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                      {idx < (sec.pressLinks?.length ?? 0) - 1 ? ", " : null}
                    </span>
                  ))}
                </li>
              </ul>
            ) : null}
            {sec.gallery && sec.gallery.length > 0 ? (
              <div className="project-gallery">
                {sec.gallery.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} />
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </ProjectBand>
  );
}

/* ---------------- helpers ---------------- */

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{renderInlineStrong(item)}</li>
      ))}
    </ul>
  );
}

/**
 * Tiny formatter that turns `**foo**` segments in localized strings into
 * `<strong>` elements. Lets us keep bullet copy in a JSON-ish dictionary
 * while still emphasising key numbers (e.g. "3M notifications per minute").
 */
function renderInlineStrong(text: string): ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part,
  );
}
