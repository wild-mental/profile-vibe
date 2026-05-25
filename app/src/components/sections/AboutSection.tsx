import { Timeline } from "@/components/ui/Timeline";
import { CERTIFICATIONS, EDUCATION } from "@/data/about";

export function AboutSection() {
  return (
    <section id="about" className="tile tile-parchment">
      <div className="tile-header">
        <span className="eyebrow">About</span>
        <h2>교육 사항 &amp; 자격</h2>
        <p>학문적 배경과 클라우드 · 데이터 분야 공인 자격으로 다져진 기술 인프라.</p>
      </div>
      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="info-card">
            <h3>
              <i className="bi bi-mortarboard-fill" />
              교육 사항
            </h3>
            <Timeline items={EDUCATION} />
          </div>
          <div className="info-card">
            <h3>
              <i className="bi bi-patch-check-fill" />
              자격 사항
            </h3>
            <Timeline items={CERTIFICATIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
