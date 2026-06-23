import type { Localized } from "./types";

/**
 * Central UI copy. Every translatable string used across the
 * resume site lives here, grouped by section, so that translators
 * (and reviewers) can scan the document in one place.
 *
 * Convention: keep Korean wording sharp/concise; English wording is
 * polished, business-grade, and reads naturally to a global audience.
 */
export const STRINGS = {
  brand: {
    name: {
      ko: "박병준 · AI & IT 컨설턴트",
      en: "Byungjun Park · AI & IT Consultant",
    } satisfies Localized,
    nameFooter: {
      ko: "박병준 · AI & IT Consultant",
      en: "Byungjun Park · AI & IT Consultant",
    } satisfies Localized,
    tagline: {
      ko: "AI · 빅데이터 · 클라우드 생태계의 최신 기술을 뉴스 속도로 교육과 엔지니어링에 적용합니다.",
      en: "Bringing the latest from the AI, big-data, and cloud ecosystem into classrooms and production at the speed of news.",
    } satisfies Localized,
    documentTitle: {
      ko: "박병준 | AI & IT 컨설턴트 프로필",
      en: "Byungjun Park | AI & IT Consultant Profile",
    } satisfies Localized,
  },

  nav: {
    about: { ko: "소개", en: "About" } satisfies Localized,
    strengths: { ko: "핵심 역량", en: "Strengths" } satisfies Localized,
    kdt: { ko: "KDT 수료", en: "KDT Outcomes" } satisfies Localized,
    teaching: { ko: "강의", en: "Teaching" } satisfies Localized,
    career: { ko: "경력", en: "Career" } satisfies Localized,
    fintech: { ko: "Fintech AX", en: "Fintech AX" } satisfies Localized,
    projects: { ko: "프로젝트", en: "Projects" } satisfies Localized,
    contact: { ko: "Contact", en: "Contact" } satisfies Localized,
    linkedin: { ko: "LinkedIn", en: "LinkedIn" } satisfies Localized,
    menuLabel: { ko: "메뉴 열기", en: "Open menu" } satisfies Localized,
    languageLabel: {
      ko: "언어 전환",
      en: "Switch language",
    } satisfies Localized,
  },

  hero: {
    eyebrow: {
      ko: "AI & IT Consultant",
      en: "AI & IT Consultant",
    } satisfies Localized,
    nameKr: { ko: "박병준", en: "Byungjun Park" } satisfies Localized,
    nameEn: { ko: "Byungjun Park", en: "박병준" } satisfies Localized,
    profilePhotoAlt: {
      ko: "박병준 프로필 사진",
      en: "Portrait of Byungjun Park",
    } satisfies Localized,
    taglineLead: {
      ko: "AI · 빅데이터 · 클라우드 생태계의 최신 트렌드를 ",
      en: "I apply the latest from the AI, big-data, and cloud ecosystem ",
    } satisfies Localized,
    taglineLeadStrong: {
      ko: "뉴스 속도로",
      en: "at the speed of news",
    } satisfies Localized,
    taglineLeadTail: {
      ko: " 교육과 엔지니어링에 적용합니다.",
      en: " — both as an educator and as an engineer.",
    } satisfies Localized,
    taglineSubPrefix: {
      ko: "KDT 장기과정 ",
      en: "Korea's national K-Digital Training (KDT), a year-long bootcamp",
    } satisfies Localized,
    taglineSubStrong: {
      ko: "2기수 연속 100% 수료, 만족도 100% 추천",
      en: "— two cohorts in a row · 100% graduation · 100% recommend rate",
    } satisfies Localized,
    kakaoLabel: {
      ko: "카카오톡 오픈프로필 열기",
      en: "Open KakaoTalk profile",
    } satisfies Localized,
  },

  about: {
    eyebrow: { ko: "About", en: "About" } satisfies Localized,
    title: {
      ko: "교육 사항 & 자격",
      en: "Education & Certifications",
    } satisfies Localized,
    subtitle: {
      ko: "학문적 배경과 클라우드 · 데이터 분야 공인 자격으로 다져진 기술 인프라.",
      en: "A technical foundation built on cross-disciplinary studies and industry-recognized cloud and data credentials.",
    } satisfies Localized,
    educationCardTitle: { ko: "교육 사항", en: "Education" } satisfies Localized,
    certCardTitle: {
      ko: "자격 사항",
      en: "Certifications",
    } satisfies Localized,
  },

  strengths: {
    eyebrow: { ko: "Core Strengths", en: "Core Strengths" } satisfies Localized,
    title: {
      ko: "차별화된 3가지 핵심 역량",
      en: "Three Defining Strengths",
    } satisfies Localized,
    subtitle: {
      ko: "뉴스 속도의 최신 교육, 100% 수료의 학습자 맞춤 교육, 장애율 0%의 엔지니어링.",
      en: "Education at the speed of news. Learner-centered teaching with a 100% graduation track record. Engineering with a zero-incident operating history.",
    } satisfies Localized,

    // Card 1
    card1Title: {
      ko: "급변하는 기술 생태계를 뉴스 속도로 업데이트하는 교육",
      en: "Teaching that tracks a fast-moving tech ecosystem at the speed of news",
    } satisfies Localized,
    card1Item1Lead: {
      ko: "AI · 빅데이터 · 클라우드 최신 도구의 즉시 도입",
      en: "Immediate adoption of the latest AI, big-data, and cloud tooling",
    } satisfies Localized,
    card1Item1SubPrefix: {
      ko: "진행 중인 교육과정에 트렌드를 곧바로 반영하는 ",
      en: "Curricula are continuously refreshed with current industry trends, delivering ",
    } satisfies Localized,
    card1Item1SubStrong: {
      ko: "뉴스 레벨의 최신 교육",
      en: "news-cycle-level relevance",
    } satisfies Localized,
    card1Item1SubTail: { ko: "", en: "" } satisfies Localized,
    card1Item2Lead: {
      ko: "교육 현장 ↔ 기술 실무의 가교 역할",
      en: "A bridge between the classroom and real-world engineering",
    } satisfies Localized,
    card1Item2Sub: {
      ko: "현업 엔지니어링 솔루션을 그대로 다루는 실무형 교육자료와 현장 니즈를 실시간 반영",
      en: "Hands-on materials built around production engineering solutions — continuously updated as the field evolves.",
    } satisfies Localized,

    // Card 2
    card2Title: {
      ko: "수료율 100%의 학습자 맞춤, 미래기술 + 실전기술 융합 교육",
      en: "Learner-centered teaching that fuses emerging and practical tech — with a 100% graduation rate",
    } satisfies Localized,
    card2Item1Lead: {
      ko: "복잡한 개념의 명확한 전달, 맞춤형 성장 경로 설계",
      en: "Clear delivery of complex concepts and individually tailored growth paths",
    } satisfies Localized,
    card2Item1SubPrefix: {
      ko: "2024 & 2025년 KDT 장기과정 ",
      en: "2024 & 2025 KDT long-track program — ",
    } satisfies Localized,
    card2Item1SubStrong: {
      ko: "2기수 연속 100% 수료",
      en: "100% graduation, two cohorts in a row",
    } satisfies Localized,
    card2Item2Lead: {
      ko: "실습 중심 기획 · AI · 클라우드 · 백엔드 교육 직접 설계",
      en: "Hands-on curriculum design across product planning, AI, cloud, and backend engineering",
    } satisfies Localized,
    card2Item2SubPrefix: {
      ko: "기업 IT 실무자 교육의 현장 중심 니즈를 완벽히 반영한 특강으로 ",
      en: "Special seminars precisely aligned with the on-the-job needs of enterprise IT practitioners, achieving ",
    } satisfies Localized,
    card2Item2SubStrong: {
      ko: "최고 수준의 만족도 달성",
      en: "top-tier satisfaction scores",
    } satisfies Localized,
    card2Item3Lead: {
      ko: "K-12 ~ 대학생 ~ 현직 기술 전문가까지 전 수준 멘토링",
      en: "Mentoring at every level — from K-12 and university students through to seasoned industry professionals",
    } satisfies Localized,
    card2Item3Sub: {
      ko: "미국 인디애나주 초중고 · 퍼듀대학교, 입직자 취업준비 · 진로 멘토링, 현직자 기술교육 전 영역",
      en: "K-12 schools in Indiana, USA · Purdue University · job-readiness and career mentoring for entry-level engineers · advanced technical training for working professionals.",
    } satisfies Localized,

    // Card 3
    card3Title: {
      ko: "확장성과 안정성 설계 기술력으로 장애율 0%의 엔지니어링",
      en: "Engineering built for scale and stability — with a zero-incident operating record",
    } satisfies Localized,
    card3Item1Lead: {
      ko: "확장 가능한 시스템 설계 · 구현 실무 경험",
      en: "Hands-on design and implementation of large-scale, high-throughput systems",
    } satisfies Localized,
    card3Item1SubStrong: { ko: "DAU 300만+", en: "DAU 3M+" } satisfies Localized,
    card3Item1SubTail: {
      ko: " 코인거래소 실시간 알림 시스템 & 광고 시스템에서 대량 트래픽 제어",
      en: " — high-volume traffic managed across a crypto-exchange real-time notification platform and an advertising system.",
    } satisfies Localized,
    card3Item2Lead: {
      ko: "클라우드 배포 · 운영 주도, 안정성과 효율성 극대화",
      en: "Led cloud deployment and operations — maximizing both stability and efficiency",
    } satisfies Localized,
    card3Item2SubPrefix: {
      ko: "(주)키즈노트 광고시스템 리뉴얼 런칭 후 ",
      en: "After the Kidsnote ad-system relaunch — ",
    } satisfies Localized,
    card3Item2SubStrong: {
      ko: "2년간 개발 장애율 0%",
      en: "zero engineering-side incidents for two consecutive years",
    } satisfies Localized,
    card3Item3Lead: {
      ko: "데이터 파이프라인 최적화 · 분산 아키텍처 설계",
      en: "Optimization of data pipelines and design of distributed architectures",
    } satisfies Localized,
    card3Item3Sub: {
      ko: "MSA 시스템 설계 · 구축, Kafka 기반 이벤트 스트리밍 및 재직자 직무 교육",
      en: "Design and build-out of MSA systems and Kafka-based event streaming — also delivered as in-service training for working engineers.",
    } satisfies Localized,

    satisfactionCardTitle: {
      ko: "기업 IT 실무자 교육 만족도",
      en: "Satisfaction · enterprise IT training",
    } satisfies Localized,
    satisfactionImageCaption: {
      ko: "기업 IT 실무자 교육 만족도 그래프",
      en: "Satisfaction-score chart · enterprise IT training",
    } satisfies Localized,
    satisfactionClients: {
      ko: "하나금융그룹 · KT · LG헬로비전 · KOICA · 모두의연구소",
      en: "Hana Financial Group · KT · LG HelloVision · KOICA · Modulabs",
    } satisfies Localized,
    satisfactionTag: {
      ko: "— 기업 실무자 대상 강의에서 최고 수준의 만족도를 달성합니다.",
      en: "— consistently top-tier satisfaction scores from enterprise practitioner audiences.",
    } satisfies Localized,

    linkedInCardTitle: {
      ko: "LinkedIn 동료 추천사 (2024)",
      en: "LinkedIn peer recommendation (2024)",
    } satisfies Localized,
    linkedInImageCaption: {
      ko: "카카오 키즈노트 동료 LinkedIn 추천사",
      en: "LinkedIn recommendation · Kakao Kidsnote teammate",
    } satisfies Localized,
    linkedInQuote: {
      ko: "“그가 감독하는 동안 발생한 서비스 장애는 0건이었습니다.”",
      en: "“Under his stewardship, the team recorded zero service incidents.”",
    } satisfies Localized,
    linkedInQuoteCite: {
      ko: "— 카카오 키즈노트 팀",
      en: "— Kakao Kidsnote team",
    } satisfies Localized,
  },

  kdt: {
    eyebrow: { ko: "Track Record", en: "Track Record" } satisfies Localized,
    titleLine1: {
      ko: "2024 & 2025년 KDT 장기과정",
      en: "2024 & 2025 KDT long-track program",
    } satisfies Localized,
    titleLine2: {
      ko: "2기수 연속 100% 수료",
      en: "100% graduation — two cohorts in a row",
    } satisfies Localized,
    subtitleLine1: {
      ko: "풀스택 엔지니어 양성 1,000시간 장기과정, 2년간 총 48명",
      en: "1,000-hour full-stack engineer program — 48 graduates over two years",
    } satisfies Localized,
    subtitleLine2: {
      ko: "— 두 기수 모두 100% 수료, 만족도 제출 인원 전원 추천.",
      en: "— both cohorts at 100% completion — every survey respondent recommended the course.",
    } satisfies Localized,

    stats: {
      gradRate: { ko: "2기수 연속 수료율", en: "Graduation rate (2 cohorts)" } satisfies Localized,
      gradRateSub: {
        ko: "2024년 · 2025년 삼육대학교 KDT",
        en: "2024 · 2025 Sahmyook University KDT",
      } satisfies Localized,
      totalLabel: {
        ko: "총 수료생 (29명 + 19명)",
        en: "Total graduates (29 + 19)",
      } satisfies Localized,
      totalSub: {
        ko: "전원 1,000시간 장기과정 수료",
        en: "Every graduate completed the full 1,000-hour program",
      } satisfies Localized,
      recommendLabel: {
        ko: "교육과정 만족도 추천",
        en: "Recommendation rate",
      } satisfies Localized,
      recommendSub: {
        ko: "만족도 조사 제출 인원 전원 추천",
        en: "100% of survey respondents recommended the course",
      } satisfies Localized,
    },

    satisfactionTab: {
      ko: "만족도 조사",
      en: "Satisfaction survey",
    } satisfies Localized,
    reviewsTab: { ko: "수강 후기", en: "Learner reviews" } satisfies Localized,
  },

  teaching: {
    eyebrow: { ko: "Teaching", en: "Teaching" } satisfies Localized,
    title: { ko: "강의 및 교육 경력", en: "Teaching History" } satisfies Localized,
    subtitle: {
      ko: "2018년부터 누적된 강의 트랙 — 대기업 재직자 교육부터 KDT 장기과정, 국제기구 협력교육까지.",
      en: "A continuous teaching track since 2018 — from corporate enterprise training to long-track KDT programs and international development cooperation.",
    } satisfies Localized,
    headerProgram: { ko: "강의 및 교육 활동", en: "Program" } satisfies Localized,
    headerPeriod: { ko: "기간", en: "Period" } satisfies Localized,
    headerOrg: { ko: "운영기관", en: "Operator" } satisfies Localized,
  },

  career: {
    eyebrow: { ko: "Career", en: "Career" } satisfies Localized,
    title: { ko: "현업 경력", en: "Work Experience" } satisfies Localized,
    subtitle: {
      ko: "국책기관 · 글로벌 사업개발 · 백엔드 엔지니어링 · 기술교육 — 다각도의 IT 산업 이력.",
      en: "A multidisciplinary IT career spanning public-sector institutions, global business development, backend engineering, and technical education.",
    } satisfies Localized,
    headerCompany: { ko: "회사명", en: "Company" } satisfies Localized,
    headerPeriod: { ko: "기간", en: "Period" } satisfies Localized,
    headerRole: { ko: "직위 / 직책", en: "Title / Role" } satisfies Localized,
    headerJob: { ko: "직무", en: "Responsibility" } satisfies Localized,
    present: { ko: "현재", en: "Present" } satisfies Localized,
  },

  fintech: {
    eyebrow: { ko: "Fintech × AX", en: "Fintech × AX" } satisfies Localized,
    title: {
      ko: "금융 특화 AX · PM 역량",
      en: "Fintech & Financial AX",
    } satisfies Localized,
    subtitle: {
      ko: "전통 금융 인프라에 대한 높은 이해와 가상자산 · 핀테크 실무를 바탕으로, 규제 · 보안 · 신뢰성을 충족하는 AI 전환(AX) 프로덕트 기획과 아키텍처 설계를 리드합니다.",
      en: "Built on deep traditional-finance infrastructure knowledge and hands-on crypto/fintech experience — I lead AX product strategy and architecture that meets compliance, security, and reliability requirements.",
    } satisfies Localized,

    // Card 1 — domain depth
    card1Title: {
      ko: "전통 금융 + 가상자산을 아우르는 도메인 실무 깊이",
      en: "Domain depth spanning traditional finance and digital assets",
    } satisfies Localized,
    card1Item1Lead: {
      ko: "하나금융그룹 현직자 대상 인프라 아키텍처 가이드",
      en: "Infrastructure-architecture guidance for Hana Financial Group practitioners",
    } satisfies Localized,
    card1Item1Sub: {
      ko: "MSA · EKS 클라우드 현대화 컨설팅 — 폐쇄망 · 망분리 규제 샌드박스와 금융 데이터 보안 가이드라인 컨텍스트 보유",
      en: "MSA · EKS cloud-modernization consulting — well-versed in closed networks, network-separation regulatory sandboxes, and financial-data security guidelines",
    } satisfies Localized,
    card1Item2Lead: {
      ko: "가상자산 플랫폼 대용량 트래픽 · 보안 인증 대응",
      en: "High-volume traffic and security certification on a digital-asset platform",
    } satisfies Localized,
    card1Item2Sub: {
      ko: "거래소 실시간성 보장을 위한 **분당 300만 건** 알림 분산 처리 아키텍처 설계 · **ISMS-P** 인증 개발 프로토콜 리드",
      en: "Designed a distributed alerting architecture handling **3M messages/min** to guarantee the exchange's real-time performance · led the development protocol for **ISMS-P** certification",
    } satisfies Localized,

    // Card 2 — data-driven PM
    card2Title: {
      ko: "지표와 규제를 동시에 다루는 데이터 기반 핀테크 PM",
      en: "Data-driven fintech PM that balances metrics and regulation",
    } satisfies Localized,
    card2Item1Lead: {
      ko: "데이터 기반 금융 프로덕트 고도화 (Data-driven PM)",
      en: "Data-driven financial product growth",
    } satisfies Localized,
    card2Item1Sub: {
      ko: "키즈노트 대규모 행동 데이터 분석 · ML 타게팅 로직 기획 · 적용으로 **BM 매출 2배 성장** 견인",
      en: "Analyzed large-scale user-behavior data and shipped ML targeting logic at Kidsnote — driving **2× revenue growth**",
    } satisfies Localized,
    card2Item2Lead: {
      ko: "지표(Data)와 규제를 동시에 고려한 PM 의사결정",
      en: "PM decisions that weigh data and regulation together",
    } satisfies Localized,
    card2Item2Sub: {
      ko: "데이터 근거와 컴플라이언스 제약을 통합하는, 핀테크 기획의 핵심 의사결정 역량 증명",
      en: "Proven ability to fuse data evidence with compliance constraints — the core decision skill in fintech planning",
    } satisfies Localized,

    // Card 3 — AX methodology
    card3Title: {
      ko: "경영 전략 프레임워크를 LLM에 이식한 AX 기획 방법론",
      en: "AX methodology that ports strategy frameworks onto LLMs",
    } satisfies Localized,
    card3Item1Lead: {
      ko: "프레임워크 융합형 핀테크 AX 기획",
      en: "Framework-fused fintech AX planning",
    } satisfies Localized,
    card3Item1Sub: {
      ko: "JTBD · Porter's Five Forces · Value Chain 등 정통 전략 프레임워크를 **LLM 프롬프트 엔지니어링 · Multi-Agent 워크플로우**로 이식",
      en: "Porting classic strategy frameworks — JTBD, Porter's Five Forces, Value Chain — into **LLM prompt engineering and multi-agent workflows**",
    } satisfies Localized,
    card3Item2Lead: {
      ko: "페인포인트 정의 → AI 에이전트 결합 → 자동화 PRD",
      en: "From pain-point definition to AI-agent automation PRDs",
    } satisfies Localized,
    card3Item2Sub: {
      ko: "고객 페인포인트 정의부터 AI 에이전트 결합 비용 최적화 · 자동화까지 아우르는 고도화된 PRD 작성 셋업 능력",
      en: "Advanced PRD setups spanning pain-point definition through AI-agent cost optimization and automation",
    } satisfies Localized,

    // Curriculum preview
    curriculumTitle: {
      ko: "Fintech AX PM 양성 과정 — 핵심 노하우 영역과 교육 키워드",
      en: "Fintech AX PM Program — teaching-module preview",
    } satisfies Localized,
    curriculumHeaderModule: { ko: "모듈", en: "Module" } satisfies Localized,
    curriculumHeaderTopic: { ko: "주제", en: "Topic" } satisfies Localized,
    curriculum: {
      ko: [
        { module: "핀테크 AI 트렌드", topic: "초개인화 자산관리 & 대화형 UI, 초지능화 및 초자율화 기반 운영 효율화, 핀테크 B2B 인프라 사업 확장" },
        { module: "금융 도메인 특성 이해", topic: "금융 규제 준수, 보안 및 신뢰성 유지, 망분리 및 성능 최적화, ISMS-P 인증 획득" },
        { module: "핀테크 시장 구조 분석", topic: "시장 구조 분석, 고객 분석, JTBD, Porter's Five Forces, Value Chain 기반 기획" },
        { module: "데이터 기반 의사결정", topic: "AI 활용 시장 기회 탐색, 메트릭 설계, 데이터 기반 의사결정, ML 타게팅 기획" },
        { module: "AX 기획 방법론", topic: "AI 기반 기존 워크플로우의 자동화 및 지능화, Multi-Agent 워크플로우 기반의 수준높은 AI 활용" },
        { module: "AI 활용 MVP 제작", topic: "AI 에이전트 활용 PRD 구체화 & 바이브코딩 기반 프로토타입 및 MVP 제작을 통한 기획 검증" },
      ],
      en: [
        { module: "Fintech AI trends", topic: "Personalized asset management & conversational UI, AI-powered operational efficiency, Fintech B2B infrastructure expansion" },
        { module: "Understanding the finance domain", topic: "Compliance, security, and reliability maintenance, network separation and performance optimization, ISMS-P certification" },
        { module: "Fintech market structure analysis", topic: "Market structure analysis, customer analysis, JTBD, Porter's Five Forces, Value Chain-based planning" },
        { module: "Data-driven decision-making", topic: "AI-driven market opportunity discovery, metric design, data-driven decision-making, ML targeting planning" },
        { module: "AX methodology", topic: "Intelligent automation of existing workflows; advanced AI use through multi-agent workflows" },
        { module: "AI-driven MVP creation", topic: "Fleshing out PRDs with AI agents, then validating plans through vibe-coding prototypes and MVPs" },
      ],
    } satisfies Localized<readonly { module: string; topic: string }[]>,
    curriculumNote: {
      ko: "하나금융그룹 · KT 등 현직 금융 · 기술 실무자 대상 강의에서 검증된 전달력 — ",
      en: "Proven delivery with working finance and tech practitioners at Hana Financial Group, KT, and more — ",
    } satisfies Localized,
    curriculumNoteLink: {
      ko: "교육 만족도 근거 보기",
      en: "see the satisfaction evidence",
    } satisfies Localized,
  },

  projectsIntro: {
    eyebrow: { ko: "Mission Log", en: "Mission Log" } satisfies Localized,
    title: { ko: "주요 프로젝트 이력", en: "Selected Projects" } satisfies Localized,
    subtitle: {
      ko: "기업 · 국제기구 · 연구기관과의 협업 — 콘텐츠 설계부터 엔지니어링 솔루션 출시까지.",
      en: "Engagements with enterprises, international agencies, and research institutes — from curriculum design to shipping engineering solutions.",
    } satisfies Localized,
  },

  evidence: {
    zoomHint: { ko: "원본 보기", en: "View original" } satisfies Localized,
    closeLabel: { ko: "닫기", en: "Close" } satisfies Localized,
    expandAriaSuffix: {
      ko: " 이미지 확대 보기",
      en: " — open image at full size",
    } satisfies Localized,
  },

  contactCta: {
    title: {
      ko: "강의 · 컨설팅 의뢰는 언제든 환영합니다.",
      en: "Always open to teaching engagements and consulting inquiries.",
    } satisfies Localized,
    subtitle: {
      ko: "기업 IT 실무자 교육, 장기과정 강의, 클라우드 아키텍처 설계 컨설팅까지 — 현장의 변화 속도에 맞춰 함께 일합니다.",
      en: "Enterprise IT training, long-track teaching, cloud-architecture consulting — I work at the pace your team and field demand.",
    } satisfies Localized,
    emailButton: {
      ko: "이메일로 의뢰하기",
      en: "Reach out by email",
    } satisfies Localized,
    linkedInButton: {
      ko: "LinkedIn 프로필",
      en: "LinkedIn profile",
    } satisfies Localized,
  },

  footer: {
    profileTitle: { ko: "Profile", en: "Profile" } satisfies Localized,
    profileAbout: { ko: "소개", en: "About" } satisfies Localized,
    profileStrengths: { ko: "핵심 역량", en: "Core Strengths" } satisfies Localized,
    profileKdt: { ko: "KDT 수료", en: "KDT Outcomes" } satisfies Localized,
    trackRecordTitle: { ko: "Track Record", en: "Track Record" } satisfies Localized,
    trackTeaching: { ko: "강의 경력", en: "Teaching" } satisfies Localized,
    trackCareer: { ko: "현업 경력", en: "Work Experience" } satisfies Localized,
    trackProjects: { ko: "주요 프로젝트", en: "Selected Projects" } satisfies Localized,
    contactTitle: { ko: "Contact", en: "Contact" } satisfies Localized,
    copyright: {
      ko: "All Rights Reserved.",
      en: "All Rights Reserved.",
    } satisfies Localized,
    kakaoLabel: {
      ko: "카카오톡 오픈프로필 열기",
      en: "Open KakaoTalk profile",
    } satisfies Localized,
  },
} as const;
