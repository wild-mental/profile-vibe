import { CONTACT_EMAIL, LINKEDIN_URL } from "@/data/nav";

export function ContactCtaSection() {
  return (
    <section className="tile tile-light">
      <div className="contact-cta-wrap">
        <h2>강의 · 컨설팅 의뢰는 언제든 환영합니다.</h2>
        <p>
          기업 IT 실무자 교육, 장기과정 강의, 클라우드 아키텍처 설계 컨설팅까지 — 현장의
          변화 속도에 맞춰 함께 일합니다.
        </p>
        <div className="contact-cta-actions">
          <a className="btn-pill-primary" href={`mailto:${CONTACT_EMAIL}`}>
            이메일로 의뢰하기
            <i className="bi bi-arrow-right" />
          </a>
          <a
            className="btn-pill-secondary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn 프로필
          </a>
        </div>
      </div>
    </section>
  );
}
