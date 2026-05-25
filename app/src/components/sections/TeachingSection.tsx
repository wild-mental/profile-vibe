import { TEACHING_ROWS } from "@/data/teaching";

export function TeachingSection() {
  return (
    <section id="teaching" className="tile tile-light">
      <div className="tile-header">
        <span className="eyebrow">Teaching</span>
        <h2>강의 및 교육 경력</h2>
        <p>
          2018년부터 누적된 강의 트랙 — 대기업 재직자 교육부터 KDT 장기과정, 국제기구
          협력교육까지.
        </p>
      </div>
      <div className="tile-container-wide">
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>강의 및 교육 활동</th>
                <th style={{ width: 200 }}>기간</th>
                <th style={{ width: 180 }}>운영기관</th>
              </tr>
            </thead>
            <tbody>
              {TEACHING_ROWS.map((row, idx) => (
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
