import { CAREER_ROWS } from "@/data/career";

export function CareerSection() {
  return (
    <section id="career" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">Career</span>
        <h2>현업 경력</h2>
        <p>
          국책기관 · 글로벌 사업개발 · 백엔드 엔지니어링 · 기술교육 — 다각도의 IT 산업
          이력.
        </p>
      </div>
      <div className="tile-container-wide">
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: "22%" }}>회사명</th>
                <th style={{ width: "22%" }}>기간</th>
                <th style={{ width: "26%" }}>직위 / 직책</th>
                <th>직무</th>
              </tr>
            </thead>
            <tbody>
              {CAREER_ROWS.map((row) => (
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
