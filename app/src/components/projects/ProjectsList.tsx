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
  return (
    <ProjectBand
      num="M-01"
      org="KOICA · UBION"
      tone="tone-2"
      photo="workshop"
      title={
        <>
          스리랑카 방문단 국내 연수
          <br />
          AI Workshop
        </>
      }
    >
      <p>
        스리랑카 방문단 국내 연수 AI Workshop — 머신러닝에서 LLM까지 시각적 · 심층적
        이해부터 본격 Application 개발 워크샵까지 완주.
      </p>

      <table className="specs-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Day 1</th>
            <td>IT 플랫폼 기술 트렌드 (MSA, 컨테이너 가상화, 클라우드 네이티브)</td>
          </tr>
          <tr>
            <th>Day 2</th>
            <td>AWS 클라우드 서비스 실습</td>
          </tr>
          <tr className="highlight-row">
            <th>Day 3 — 5</th>
            <td>AI 산업 및 기술 트렌드 / 생성형 AI 활용 워크샵</td>
          </tr>
          <tr>
            <th>Day 6</th>
            <td>ITSQF 소개 및 IT 역량 기반 교육 플랫폼 설계</td>
          </tr>
          <tr>
            <th>Day 7 — 8</th>
            <td>플랫폼 운영을 위한 인프라 관리 자동화 (AWS - EKS)</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>머신러닝에서 LLM까지 핵심 개념에 대한 시각적 &amp; 심층적 이해</li>
        <li>LLM 관련 기술 소개를 통한 패러다임 학습 및 직관적인 핸즈온 실습</li>
        <li>AI 활용 역량 종합 활용을 통한 본격적인 Application 개발 워크샵</li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-02 Hana DT ---------------- */
function HanaDtTraining() {
  return (
    <ProjectBand
      num="M-02"
      org="하나금융그룹 DT"
      photo="lecture"
      title={
        <>
          클라우드 네이티브 DevOps
          <br />+ 리눅스 심화 특강
        </>
      }
    >
      <p>
        하나금융그룹 재직자 대상 클라우드 네이티브 DevOps + 리눅스 심화 특강 — EKS
        인프라부터 Rocky 리눅스 기반 보안·웹 서비스 배포까지.
      </p>
      <ul>
        <li>
          <strong>EKS 인프라 활용 MSA 기반 솔루션 배포 및 인프라 자동화</strong>
          <ul>
            <li>AWS 서비스 기초 및 심화 이해와 실전 프로젝트</li>
            <li>MSA 시스템 기본 이해와 온프레미스, 클라우드 네이티브 실습</li>
            <li>AWS K8s 관리형 서비스 EKS 활용 기초</li>
            <li>EKS 기반 MSA 아키텍처 솔루션 배포</li>
            <li>EKS에 GitOps 및 무중단 배포 전략을 적용한 CI/CD 운영 자동화</li>
            <li>AWS 관리형 서비스와 Prometheus &amp; Grafana 모니터링 · 알림 결합</li>
          </ul>
        </li>
        <li>
          <strong>
            리눅스 심화과정 — Rocky 리눅스 기반의 네트워크와 보안, 웹 서비스 배포
          </strong>
          <ul>
            <li>
              구체적인 물리적 컴퓨터 장비 레벨에서 발생하는 인프라 관리 기법과 웹 서비스
              운영
            </li>
          </ul>
        </li>
        <li>
          <strong>금융 엔지니어링에 대한 미래 기술 인사이트 질문 답변 세션</strong>
          <ul>
            <li>DevOps와 Enterprise Architecture 기술의 AI 결합 고도화 트렌드 토론</li>
          </ul>
        </li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-03 Kakao Kidsnote ---------------- */
function KakaoKidsnote() {
  return (
    <ProjectBand
      num="M-03"
      org="카카오 키즈노트"
      tone="tone-3"
      photo="starfield"
      hasChart
      title={
        <>
          클라우드 네이티브 MSA
          <br />
          광고 서비스 책임 개발
        </>
      }
    >
      <p>
        클라우드 네이티브 MSA 광고 서비스 책임 개발 — 광고집행 백엔드 서버 리뉴얼 런칭,
        광고 매출 증대를 위한 ML 적용 송출 로직 고도화 개발.
      </p>

      <AdRevenueChart />

      <div className="metric-callout">
        <div className="metric-label">2년간 단독 책임개발 성과</div>
        <div className="metric-value">광고 매출 2배 이상 성장 · 개발 장애율 0%</div>
      </div>

      <ul>
        <li>
          광고집행 백엔드 서버 리뉴얼 런칭 및 유지보수, ML 적용 송출 로직 고도화 개발
        </li>
        <li>
          카카오 클라우드 인프라 활용 서비스 개발 · 배포 · 모니터링, 분석계 구축 참여 등
          전체 프로세스 수행
        </li>
        <li>
          데이터 파이프라인 구축과 광고 서비스 성과 분석 및 타게팅 구조 수립을 위한 기반
          분석 프로젝트 참여
        </li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-04 Axia Soft / Coinbit ---------------- */
function AxiaSoftCoinbit() {
  return (
    <ProjectBand
      num="M-04"
      org="엑시아소프트 · 코인빗"
      tone="tone-2"
      photo="starfield"
      title={
        <>
          AWS 기반 초고속 유저 알림 서비스
          <br />&amp; 백오피스 / 대용량 데이터 추출 개발
        </>
      }
    >
      <p>
        AWS 기반 초고속 유저 알림 서비스 개발 &amp; 백오피스 대시보드 · 대용량 데이터
        추출 — 암호화폐 거래소 “코인빗” 초고속 거래 체결 서버 유지관리.
      </p>

      <div className="metric-callout">
        <div className="metric-label">초고속 처리 시스템 성능</div>
        <div className="metric-value">분당 300만 건 알림 발송</div>
      </div>

      <ul>
        <li>
          유저별 관심 자산 가격 모니터링 알림 시스템 — <strong>분당 300만 건 발송</strong>{" "}
          가능한 초고속 처리 시스템 구축
        </li>
        <li>AWS 클라우드 서비스를 활용한 백엔드 API 개발 및 데이터 관리 프로세스 개발</li>
        <li>
          가상자산 거래소 대상의 강화된 정보보호 및 개인정보보호 관리체계(ISMS-P) 백엔드
          인증 개발 참여
        </li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-05 KRIVET ---------------- */
function KrivetResearch() {
  return (
    <ProjectBand
      num="M-05"
      org="한국직업능력연구원"
      tone="tone-3"
      photo="starfield"
      short
      title={
        <>
          중국 AI 교육 고도화
          <br />
          사례 벤치마킹 연구
        </>
      }
    >
      <p>중국 AI 교육 고도화 사례 벤치마킹 연구.</p>
      <ul>
        <li>
          “중국의 대학 인공지능 교육과 메이커(創客) 창업 정책 연구 (2021)” 참여 —
          한국직업능력연구원
        </li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-06 KPC ---------------- */
function KpcGlobal() {
  return (
    <ProjectBand
      num="M-06"
      org="한국생산성본부"
      photo="overseas"
      title={
        <>
          국내 SW 고성장 기업
          <br />
          글로벌 시장 개척 컨설팅
        </>
      }
    >
      <p>
        국내 SW 고성장 기업 글로벌 시장 개척 컨설팅 — Purdue 대학교 · Plug&amp;Play
        협력 지원 등.
      </p>

      <div className="project-image">
        <img
          src="/assets/band-photo-kpc-sw-global.jpg"
          alt="SW 고성장클럽 200 글로벌 진출 지원사업"
        />
      </div>

      <ul>
        <li>
          “SW 고성장클럽 200” 소프트웨어기업 글로벌 진출 지원사업 주관 (Purdue 대학교,
          Plug&amp;Play 협력 지원 등)
        </li>
        <li>“글로벌 에듀테크센터 구축” 신남방 교육사업 개발 (말레이시아 · 캄보디아 등)</li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-07 Hanbat ---------------- */
function HanbatResearch() {
  return (
    <ProjectBand
      num="M-07"
      org="한밭대학교"
      tone="tone-2"
      photo="starfield"
      short
      title={
        <>
          산학협력단 SW &amp; HW 융합
          <br />
          메이커 교육 방법론 연구
        </>
      }
    >
      <p>산학협력단 SW &amp; HW 융합 메이커 교육 방법론 연구.</p>
      <ul>
        <li>“대학주도형 창의융합 미래인재 양성 교육과정 혁신 연구” 수행</li>
      </ul>
    </ProjectBand>
  );
}

/* ---------------- M-08 Luxrobo ---------------- */
function LuxroboOverseas() {
  return (
    <ProjectBand
      id="project-overseas"
      num="M-08"
      org="럭스로보"
      tone="tone-3"
      photo="overseas"
      title={
        <>
          미국 · 중동 · 중국 시장 진출 및
          <br />
          파트너십 · 기술교류 수행
        </>
      }
    >
      <p>미국 · 중동 · 중국 시장 진출 및 파트너십 · 기술교류 수행.</p>
      <ul>
        <li>
          <strong>
            미국 파트너사 교육사업 개발 협력 (USRA 연구재단, SDI Innovation 등)
          </strong>
          <ul>
            <li>
              보도자료:{" "}
              <a
                href="https://www.sciencetimes.co.kr/nscvrg/view/menu/255?searchCategory=226&nscvrgSn=188400"
                target="_blank"
                rel="noopener noreferrer"
              >
                사이언스타임스 — 로봇키즈의 열정으로 혁신 일궈내
              </a>
              ,{" "}
              <a
                href="https://www.koreadaily.com/article/7769750"
                target="_blank"
                rel="noopener noreferrer"
              >
                미주중앙일보 — “로봇은 시작, 미래인재 양성이 목표”
              </a>
            </li>
          </ul>
          <div className="project-gallery">
            <img
              src="/assets/luxrobo-us-partnership-01.jpg"
              alt="미국 파트너사 교육사업 협력 1"
            />
            <img
              src="/assets/luxrobo-us-partnership-02.jpg"
              alt="미국 파트너사 교육사업 협력 2"
            />
          </div>
        </li>
        <li>
          <strong>중동 지역 교육사업 개발 (UAE · 오만 · 바레인 · 말레이시아 등)</strong>
          <div className="project-gallery">
            <img
              src="/assets/luxrobo-middle-east-edu-01.png"
              alt="중동 교육사업 1"
            />
            <img
              src="/assets/luxrobo-middle-east-edu-02.png"
              alt="중동 교육사업 2"
            />
            <img
              src="/assets/luxrobo-middle-east-edu-03.png"
              alt="중동 교육사업 3"
            />
          </div>
        </li>
        <li>
          <strong>아두이노 제품 및 교육전략 고도화 기술협력 수행</strong> — 엔지니어 간
          교류, 로마 Maker Fair, 상호 방문미팅 등
          <div className="project-gallery">
            <img
              src="/assets/luxrobo-arduino-techexchange-01.png"
              alt="아두이노 기술협력 1"
            />
            <img
              src="/assets/luxrobo-arduino-techexchange-02.png"
              alt="아두이노 기술협력 2"
            />
          </div>
        </li>
      </ul>
    </ProjectBand>
  );
}
