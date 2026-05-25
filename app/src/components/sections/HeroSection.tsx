import {
  CONTACT_EMAIL,
  GITHUB_URL,
  KAKAO_URL,
  LINKEDIN_URL,
} from "@/data/nav";

export function HeroSection() {
  return (
    <header id="top" className="hero tile-light">
      <div className="hero-grid">
        <div>
          <img
            src="/assets/profile-byungjun-park.png"
            alt="박병준 프로필 사진"
            className="profile-photo"
          />
        </div>
        <div>
          <span className="hero-eyebrow">AI &amp; IT Consultant</span>
          <h1>
            박병준<span className="name-roman">Park Byungjun</span>
          </h1>
          <p className="tagline">
            <span className="tagline-line">
              AI · 빅데이터 · 클라우드 생태계를 <strong>뉴스 속도로</strong> 교육과
              엔지니어링에 적용합니다.
            </span>
            <span className="tagline-line tagline-subline">
              KDT 장기과정{" "}
              <strong>2기수 연속 100% 수료, 만족도 100% 추천</strong>
            </span>
          </p>

          <ul className="contact-list">
            <li>
              <i className="bi bi-linkedin" />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/pbjworking
              </a>
            </li>
            <li>
              <i className="bi bi-github" />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/wild-mental
              </a>
            </li>
          </ul>
          <ul className="contact-list" style={{ marginTop: 10 }}>
            <li>
              <i className="bi bi-envelope-fill" />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <i className="bi bi-chat-fill" />
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 오픈프로필 열기"
              >
                Kakao · pbjworking
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
