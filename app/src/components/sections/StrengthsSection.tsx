import { EvidenceImageButton } from "@/components/ui/EvidenceImageButton";

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
  return (
    <section id="strengths" className="tile tile-light">
      <div className="tile-header">
        <span className="eyebrow">Core Strengths</span>
        <h2>차별화된 3가지 핵심 역량</h2>
        <p>
          뉴스 속도의 최신 교육, 100% 수료의 학습자 맞춤 교육, 장애율 0%의 엔지니어링.
        </p>
      </div>

      <div className="tile-container-1100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-newspaper" />
            </div>
            <h3>급변하는 기술 생태계를 뉴스 속도로 업데이트하는 교육</h3>
            <ul>
              <li>
                <span className="lead-line">
                  AI · 빅데이터 · 클라우드 최신 도구의 즉시 도입
                </span>
                <span className="sub-line">
                  진행 중인 교육과정에 트렌드를 곧바로 반영하는{" "}
                  <strong>뉴스 레벨의 최신 교육</strong>
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
                <span className="lead-line">교육 현장 ↔ 기술 실무의 가교 역할</span>
                <span className="sub-line">
                  현업 엔지니어링 솔루션을 그대로 다루는 실무형 교육자료와 현장 니즈를
                  실시간 반영
                </span>
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-people-fill" />
            </div>
            <h3>수료율 100%의 학습자 맞춤, 미래기술 + 실전기술 융합 교육</h3>
            <ul>
              <li>
                <span className="lead-line">
                  복잡한 개념의 명확한 전달, 맞춤형 성장 경로 설계
                </span>
                <a href="#kdt-graduation" className="sub-line sub-line-link">
                  2024 &amp; 2025년 KDT 장기과정{" "}
                  <strong>2기수 연속 100% 수료</strong>
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">
                  실습 중심 기획 · AI · 클라우드 · 백엔드 교육 직접 설계
                </span>
                <a href="#satisfaction-evidence" className="sub-line sub-line-link">
                  기업 IT 실무자 교육의 현장 중심 니즈를 완벽히 반영한 특강으로{" "}
                  <strong>최고 수준의 만족도 달성</strong>
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
              <li>
                <span className="lead-line">
                  K-12 ~ 대학생 ~ 현직 기술 전문가까지 전 수준 멘토링
                </span>
                <a href="#project-overseas" className="sub-line sub-line-link">
                  미국 인디애나주 초중고 · 퍼듀대학교, 입직자 취업준비 · 진로 멘토링,
                  현직자 기술교육 전 영역
                  <i className="bi bi-arrow-down-circle" />
                </a>
              </li>
            </ul>
          </div>

          <div className="highlight-card">
            <div className="icon-circle">
              <i className="bi bi-shield-check" />
            </div>
            <h3>확장성과 안정성 설계 기술력으로 장애율 0%의 엔지니어링</h3>
            <ul>
              <li>
                <span className="lead-line">
                  확장 가능한 시스템 설계 · 구현 실무 경험
                </span>
                <span className="sub-line">
                  <strong>DAU 300만+</strong> 코인거래소 실시간 알림 시스템 &amp; 광고
                  시스템에서 대량 트래픽 제어
                </span>
              </li>
              <li>
                <span className="lead-line">
                  클라우드 배포 · 운영 주도, 안정성과 효율성 극대화
                </span>
                <span className="sub-line">
                  (주)키즈노트 광고시스템 리뉴얼 런칭 후{" "}
                  <strong>2년간 개발 장애율 0%</strong>
                </span>
              </li>
              <li>
                <span className="lead-line">
                  데이터 파이프라인 최적화 · 분산 아키텍처 설계
                </span>
                <span className="sub-line">
                  MSA 시스템 설계 · 구축, Kafka 기반 이벤트 스트리밍 및 재직자 직무
                  교육
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 items-stretch">
          <div id="satisfaction-evidence" className="info-card h-full">
            <h3>
              <i className="bi bi-bar-chart-line-fill" />
              기업 IT 실무자 교육 만족도
            </h3>
            <EvidenceImageButton
              natural
              className="mt-2"
              image={{
                src: "/assets/enterprise-it-training-satisfaction.png",
                caption: "기업 IT 실무자 교육 만족도 그래프",
              }}
            />
            <p className="evidence-summary">
              <span className="evidence-summary-clients">
                하나금융그룹 · KT · LG헬로비전 · KOICA · 모두의연구소
              </span>
              <span className="evidence-summary-tag">
                — 기업 실무자 대상 강의에서 최고 수준의 만족도를 달성합니다.
              </span>
            </p>
          </div>

          <div className="info-card h-full">
            <h3>
              <i className="bi bi-chat-square-quote-fill" />
              LinkedIn 동료 추천사 (2024)
            </h3>
            <EvidenceImageButton
              natural
              className="mt-2"
              image={{
                src: "/assets/linkedin-recommendation-kakao-kidsnote.png",
                caption: "카카오 키즈노트 동료 LinkedIn 추천사",
              }}
            />
            <blockquote className="linkedin-quote">
              <p className="linkedin-quote-text">
                “그가 감독하는 동안 발생한 서비스 장애는 0건이었습니다.”
              </p>
              <cite className="linkedin-quote-cite">— 카카오 키즈노트 팀</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
