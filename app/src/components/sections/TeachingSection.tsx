import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { TEACHING_ROWS } from "@/data/teaching";

export function TeachingSection() {
  const t = useT();
  const s = STRINGS.teaching;
  const rows = t(TEACHING_ROWS);

  return (
    <section id="teaching" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
      </div>
      <div className="tile-container-wide">
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>{t(s.headerProgram)}</th>
                <th style={{ width: 200 }}>{t(s.headerPeriod)}</th>
                <th style={{ width: 180 }}>{t(s.headerOrg)}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={`${row.period}-${idx}`}>
                  <td>{row.title}</td>
                  <td>{row.period}</td>
                  <td>
                    <span className="badge-notion">{row.org}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
