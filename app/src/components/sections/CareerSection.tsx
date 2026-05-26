import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";
import { CAREER_ROWS } from "@/data/career";

export function CareerSection() {
  const t = useT();
  const s = STRINGS.career;
  const rows = t(CAREER_ROWS);

  return (
    <section id="career" className="tile tile-parchment">
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
                <th style={{ width: "22%" }}>{t(s.headerCompany)}</th>
                <th style={{ width: "22%" }}>{t(s.headerPeriod)}</th>
                <th style={{ width: "26%" }}>{t(s.headerRole)}</th>
                <th>{t(s.headerJob)}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.company}>
                  <td>
                    <strong>{row.company}</strong>
                  </td>
                  <td>{row.period}</td>
                  <td>{row.role}</td>
                  <td>{row.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
