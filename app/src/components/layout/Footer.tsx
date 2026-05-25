import {
  CONTACT_EMAIL,
  GITHUB_URL,
  KAKAO_URL,
  LINKEDIN_URL,
} from "@/data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-region">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span className="nav-brand-text">박병준 · AI &amp; IT Consultant</span>
          </div>
          <p className="footer-tagline">
            AI · 빅데이터 · 클라우드 생태계를 뉴스 속도로 교육과 엔지니어링에 적용합니다.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Profile</div>
          <a className="footer-link" href="#about">
            소개
          </a>
          <a className="footer-link" href="#strengths">
            핵심 역량
          </a>
          <a className="footer-link" href="#kdt-graduation">
            KDT 수료
          </a>
        </div>

        <div>
          <div className="footer-col-title">Track Record</div>
          <a className="footer-link" href="#teaching">
            강의 경력
          </a>
          <a className="footer-link" href="#career">
            현업 경력
          </a>
          <a className="footer-link" href="#projects">
            주요 프로젝트
          </a>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a
            className="footer-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 오픈프로필 열기"
          >
            Kakao · pbjworking
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© {year} Park Byungjun. All Rights Reserved.</span>
        <span>Designed with the Apple design system.</span>
      </div>
    </footer>
  );
}
