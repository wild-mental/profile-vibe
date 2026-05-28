import type { Localized } from "./types";

/**
 * Project-band copy. Each entry pairs a stable id with Korean + English
 * variants. The React `ProjectsList` consumes this directly so the JSX
 * stays a single source of layout while text swaps with `lang`.
 */

type SimpleProject = {
  num: string;
  org: Localized;
  titleLine1: Localized;
  titleLine2: Localized;
  lead: Localized;
  bullets: Localized<readonly string[]>;
};

export type SriLankaCopy = Omit<SimpleProject, "bullets"> & {
  scheduleHeaderDay: Localized;
  scheduleHeaderTopic: Localized;
  schedule: Localized<readonly { day: string; topic: string; highlight?: boolean }[]>;
  bullets: Localized<readonly string[]>;
};

export type HanaCopy = Omit<SimpleProject, "bullets"> & {
  sections: Localized<
    readonly {
      title: string;
      detail?: string;
      items?: readonly string[];
    }[]
  >;
};

export type KakaoCopy = Omit<SimpleProject, "bullets"> & {
  chartEyebrow: Localized;
  chartTitle: Localized;
  chartSubLead: Localized;
  chartSubTenureNote: Localized;
  chartHintDesktop: Localized;
  chartHintMobile: Localized;
  metricLabel: Localized;
  metricValue: Localized;
  bullets: Localized<readonly string[]>;
  tooltipTenureTag: Localized;
  refPreAvg: Localized;
  refPreMax: Localized;
  refTenureAvg: Localized;
  refTenureMax: Localized;
  yAxisUnitSuffix: Localized;
  monthShort: Localized<readonly string[]>;
  yearLabel: Localized<(year: number) => string>;
};

export type AxiaCopy = Omit<SimpleProject, "bullets"> & {
  metricLabel: Localized;
  metricValue: Localized;
  bullets: Localized<readonly string[]>;
};

export type LuxroboCopy = Omit<SimpleProject, "bullets"> & {
  sections: Localized<
    readonly {
      title: string;
      pressIntro?: string;
      pressLinks?: readonly { href: string; label: string }[];
      noteAfter?: string;
      gallery?: readonly { src: string; alt: string }[];
    }[]
  >;
};

/* ---------------- M-01 ---------------- */
export const SRI_LANKA: SriLankaCopy = {
  num: "M-01",
  org: { ko: "KOICA · UBION", en: "KOICA · UBION" },
  titleLine1: {
    ko: "스리랑카 방문단 국내 연수",
    en: "Sri Lanka Delegation · In-Korea Training",
  },
  titleLine2: {
    ko: "AI Workshop",
    en: "AI Workshop",
  },
  lead: {
    ko: "스리랑카 방문단 국내 연수 AI Workshop — 머신러닝에서 LLM까지 시각적 · 심층적 이해부터 본격 Application 개발 워크샵까지 완주.",
    en: "In-Korea AI workshop for the Sri Lanka delegation — from a visual, in-depth grounding in machine learning through LLMs all the way to building real applications end-to-end.",
  },
  scheduleHeaderDay: { ko: "Day", en: "Day" },
  scheduleHeaderTopic: { ko: "Topic", en: "Topic" },
  schedule: {
    ko: [
      {
        day: "Day 1",
        topic: "IT 플랫폼 기술 트렌드 (MSA, 컨테이너 가상화, 클라우드 네이티브)",
      },
      { day: "Day 2", topic: "AWS 클라우드 서비스 실습" },
      {
        day: "Day 3 — 5",
        topic: "AI 산업 및 기술 트렌드 / 생성형 AI 활용 워크샵",
        highlight: true,
      },
      { day: "Day 6", topic: "ITSQF 소개 및 IT 역량 기반 교육 플랫폼 설계" },
      {
        day: "Day 7 — 8",
        topic: "플랫폼 운영을 위한 인프라 관리 자동화 (AWS - EKS)",
      },
    ] as const,
    en: [
      {
        day: "Day 1",
        topic:
          "IT platform tech trends (MSA, container virtualization, cloud-native)",
      },
      { day: "Day 2", topic: "Hands-on with AWS cloud services" },
      {
        day: "Day 3 — 5",
        topic:
          "AI industry and tech trends / generative-AI applied workshop",
        highlight: true,
      },
      {
        day: "Day 6",
        topic:
          "Intro to ITSQF and designing competency-based learning platforms",
      },
      {
        day: "Day 7 — 8",
        topic:
          "Infrastructure automation for platform operations (AWS — EKS)",
      },
    ] as const,
  },
  bullets: {
    ko: [
      "머신러닝에서 LLM까지 핵심 개념에 대한 시각적 & 심층적 이해",
      "LLM 관련 기술 소개를 통한 패러다임 학습 및 직관적인 핸즈온 실습",
      "AI 활용 역량 종합 활용을 통한 본격적인 Application 개발 워크샵",
    ] as const,
    en: [
      "Visual, deep-dive coverage of core concepts from classical ML through LLMs",
      "Paradigm-level walk-throughs of LLM-related tech, paired with intuitive hands-on labs",
      "A capstone-style application-development workshop that ties the full AI skillset together",
    ] as const,
  },
};

/* ---------------- M-02 ---------------- */
export const HANA: HanaCopy = {
  num: "M-02",
  org: { ko: "하나금융그룹 DT", en: "Hana Financial Group DT" },
  titleLine1: {
    ko: "클라우드 네이티브 DevOps",
    en: "Cloud-Native DevOps",
  },
  titleLine2: {
    ko: "+ 리눅스 심화 특강",
    en: "+ Linux Deep-Dive",
  },
  lead: {
    ko: "하나금융그룹 재직자 대상 클라우드 네이티브 DevOps + 리눅스 심화 특강 — EKS 인프라부터 Rocky 리눅스 기반 보안·웹 서비스 배포까지.",
    en: "In-service training for Hana Financial Group on cloud-native DevOps and advanced Linux — from EKS infrastructure to Rocky-Linux–based security and web-service deployment.",
  },
  sections: {
    ko: [
      {
        title: "EKS 인프라 활용 MSA 기반 솔루션 배포 및 인프라 자동화",
        items: [
          "AWS 서비스 기초 및 심화 이해와 실전 프로젝트",
          "MSA 시스템 기본 이해와 온프레미스, 클라우드 네이티브 실습",
          "AWS K8s 관리형 서비스 EKS 활용 기초",
          "EKS 기반 MSA 아키텍처 솔루션 배포",
          "EKS에 GitOps 및 무중단 배포 전략을 적용한 CI/CD 운영 자동화",
          "AWS 관리형 서비스와 Prometheus & Grafana 모니터링 · 알림 결합",
        ],
      },
      {
        title:
          "리눅스 심화과정 — Rocky 리눅스 기반의 네트워크와 보안, 웹 서비스 배포",
        items: [
          "구체적인 물리적 컴퓨터 장비 레벨에서 발생하는 인프라 관리 기법과 웹 서비스 운영",
        ],
      },
      {
        title: "금융 엔지니어링에 대한 미래 기술 인사이트 질문 답변 세션",
        items: [
          "DevOps와 Enterprise Architecture 기술의 AI 결합 고도화 트렌드 토론",
        ],
      },
    ] as const,
    en: [
      {
        title:
          "MSA-based solution deployment and infrastructure automation on EKS",
        items: [
          "AWS fundamentals through advanced topics, anchored in hands-on projects",
          "MSA foundations with both on-prem and cloud-native exercises",
          "Working with AWS' managed Kubernetes service (EKS)",
          "Deploying MSA architecture solutions on EKS",
          "CI/CD automation on EKS using GitOps and zero-downtime deployment strategies",
          "Integrating AWS managed services with Prometheus & Grafana for monitoring and alerting",
        ],
      },
      {
        title:
          "Advanced Linux — Rocky-Linux–based networking, security, and web-service deployment",
        items: [
          "Infrastructure management and web-service operations at the physical-host level",
        ],
      },
      {
        title:
          "Future-tech insight Q&A for financial engineering",
        items: [
          "Discussion of trends in fusing DevOps and Enterprise Architecture with AI",
        ],
      },
    ] as const,
  },
};

/* ---------------- M-03 ---------------- */
export const KAKAO: KakaoCopy = {
  num: "M-03",
  org: { ko: "카카오 키즈노트", en: "Kakao Kidsnote" },
  titleLine1: {
    ko: "클라우드 네이티브 MSA",
    en: "Cloud-Native MSA",
  },
  titleLine2: {
    ko: "광고 서비스 책임 개발",
    en: "Advertising Platform · Lead Developer",
  },
  lead: {
    ko: "클라우드 네이티브 MSA 광고 서비스 책임 개발 — 광고집행 백엔드 서버 리뉴얼 런칭, 광고 매출 증대를 위한 ML 적용 송출 로직 고도화 개발.",
    en: "Lead developer for the cloud-native MSA advertising service — relaunched the ad-serving backend and built ML-driven delivery-logic enhancements that grew ad revenue.",
  },
  chartEyebrow: {
    ko: "Kidsnote · 광고매출 추이",
    en: "Kidsnote · ad-revenue timeline",
  },
  chartTitle: {
    ko: "20 ~ 23년 키즈노트 광고매출",
    en: "Kidsnote ad revenue · 2020 — 2023",
  },
  chartSubLead: {
    ko: "월별 매출 (단위 · 백만원) · 재직 기간(21.09 ~ 23.07)",
    en: "Monthly revenue (KRW millions) · tenure window: Sep. 2021 — Jul. 2023",
  },
  chartSubTenureNote: { ko: " 표시", en: " marker" },
  chartHintDesktop: {
    ko: "↔ 마우스 휠을 굴리면 그래프가 좌우로 스크롤됩니다",
    en: "↔ Scroll the wheel to pan the chart left ↔ right",
  },
  chartHintMobile: {
    ko: "↕ 페이지를 내리면 그래프가 좌우로 펼쳐집니다",
    en: "↕ Scroll the page to unfold the chart horizontally",
  },
  metricLabel: {
    ko: "2년간 단독 책임개발 성과",
    en: "Outcome over 2 years as sole owner",
  },
  metricValue: {
    ko: "광고 매출 2배 이상 성장 · 개발 장애율 0%",
    en: "Ad revenue more than 2× · zero engineering incidents",
  },
  bullets: {
    ko: [
      "광고집행 백엔드 서버 리뉴얼 런칭 및 유지보수, ML 적용 송출 로직 고도화 개발",
      "카카오 클라우드 인프라 활용 서비스 개발 · 배포 · 모니터링, 분석계 구축 참여 등 전체 프로세스 수행",
      "데이터 파이프라인 구축과 광고 서비스 성과 분석 및 타게팅 구조 수립을 위한 기반 분석 프로젝트 참여",
    ] as const,
    en: [
      "Relaunched and maintained the ad-serving backend; built ML-powered upgrades to the delivery logic",
      "Owned the end-to-end lifecycle on Kakao Cloud — development, deployment, monitoring, and participation in the analytics-layer build-out",
      "Built data pipelines and contributed to analytics groundwork for ad-performance measurement and targeting architecture",
    ] as const,
  },
  tooltipTenureTag: {
    ko: "  · 재직 기간",
    en: "  · tenure",
  },
  refPreAvg: { ko: "기존 평균", en: "Pre-tenure avg." },
  refPreMax: { ko: "기존 최대", en: "Pre-tenure max" },
  refTenureAvg: { ko: "재직 평균", en: "Tenure avg." },
  refTenureMax: { ko: "재직 최대", en: "Tenure max" },
  yAxisUnitSuffix: { ko: "억", en: "00M" },
  monthShort: {
    ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"] as const,
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const,
  },
  yearLabel: {
    ko: (year: number) => `${year - 2000}년 1월`,
    en: (year: number) => `${year} Jan`,
  },
};

/* ---------------- M-04 ---------------- */
export const AXIA: AxiaCopy = {
  num: "M-04",
  org: {
    ko: "엑시아소프트 · 코인빗",
    en: "Axiasoft · Coinbit",
  },
  titleLine1: {
    ko: "AWS 기반 초고속 유저 알림 서비스",
    en: "AWS-based High-Throughput User Notifications",
  },
  titleLine2: {
    ko: "& 백오피스 / 대용량 데이터 추출 개발",
    en: "& Back-office / Large-Volume Data Extraction",
  },
  lead: {
    ko: 'AWS 기반 초고속 유저 알림 서비스 개발 & 백오피스 대시보드 · 대용량 데이터 추출 — 암호화폐 거래소 "코인빗" 초고속 거래 체결 서버 유지관리.',
    en: 'Built an AWS-based high-throughput user-notification service plus back-office dashboards and large-volume data-extraction tools — also responsible for maintaining the matching-engine servers behind the "Coinbit" crypto exchange.',
  },
  metricLabel: {
    ko: "초고속 처리 시스템 성능",
    en: "High-throughput system performance",
  },
  metricValue: {
    ko: "분당 300만 건 알림 발송",
    en: "3M notifications dispatched per minute",
  },
  bullets: {
    ko: [
      "유저별 관심 자산 가격 모니터링 알림 시스템 — **분당 300만 건 발송** 가능한 초고속 처리 시스템 구축",
      "AWS 클라우드 서비스를 활용한 백엔드 API 개발 및 데이터 관리 프로세스 개발",
      "가상자산 거래소 대상의 강화된 정보보호 및 개인정보보호 관리체계(ISMS-P) 백엔드 인증 개발 참여",
    ] as const,
    en: [
      "Built a per-user watchlist price-alert system — a high-throughput pipeline able to **dispatch 3M notifications per minute**",
      "Developed backend APIs and data-management workflows on AWS",
      "Contributed to ISMS-P backend certification work — Korea's hardened information- and personal-data-protection management standard for crypto exchanges",
    ] as const,
  },
};

/* ---------------- M-05 ---------------- */
export const KRIVET: SimpleProject = {
  num: "M-05",
  org: {
    ko: "한국직업능력연구원",
    en: "KRIVET (Korea Research Institute for Vocational Education & Training)",
  },
  titleLine1: {
    ko: "중국 AI 교육 고도화",
    en: "Benchmarking China's Advanced AI Education",
  },
  titleLine2: {
    ko: "사례 벤치마킹 연구",
    en: "Case-Study Research",
  },
  lead: {
    ko: "중국 AI 교육 고도화 사례 벤치마킹 연구.",
    en: "Benchmarking research on advanced AI-education practices in China.",
  },
  bullets: {
    ko: [
      '"중국의 대학 인공지능 교육과 메이커(創客) 창업 정책 연구 (2021)" 참여 — 한국직업능력연구원',
    ] as const,
    en: [
      'Contributing researcher · "University AI Education and Maker (chuàngkè) Entrepreneurship Policy in China (2021)" — KRIVET',
    ] as const,
  },
};

/* ---------------- M-06 ---------------- */
export const KPC: SimpleProject & { imageAlt: Localized } = {
  num: "M-06",
  org: {
    ko: "한국생산성본부",
    en: "Korea Productivity Center (KPC)",
  },
  titleLine1: {
    ko: "국내 SW 고성장 기업",
    en: "Global Market Expansion Consulting",
  },
  titleLine2: {
    ko: "글로벌 시장 개척 컨설팅",
    en: "for Korea's High-Growth SW Companies",
  },
  lead: {
    ko: "국내 SW 고성장 기업 글로벌 시장 개척 컨설팅 — Purdue 대학교 · Plug&Play 협력 지원 등.",
    en: "Global market-expansion consulting for high-growth Korean software companies — including partnerships with Purdue University and Plug & Play.",
  },
  imageAlt: {
    ko: "SW 고성장클럽 200 글로벌 진출 지원사업",
    en: "SW High-Growth Club 200 · Global Expansion Support Program",
  },
  bullets: {
    ko: [
      '"SW 고성장클럽 200" 소프트웨어기업 글로벌 진출 지원사업 주관 (Purdue 대학교, Plug&Play 협력 지원 등)',
      '"글로벌 에듀테크센터 구축" 신남방 교육사업 개발 (말레이시아 · 캄보디아 등)',
    ] as const,
    en: [
      'Program lead for the "SW High-Growth Club 200" global-expansion initiative for SW companies (partnership support with Purdue University, Plug & Play, etc.)',
      'Designed New Southern Policy education programs as part of the "Global EdTech Center" initiative (Malaysia, Cambodia, etc.)',
    ] as const,
  },
};

/* ---------------- M-07 ---------------- */
export const HANBAT: SimpleProject = {
  num: "M-07",
  org: { ko: "한밭대학교", en: "Hanbat National University" },
  titleLine1: {
    ko: "산학협력단 SW & HW 융합",
    en: "University Industry-Academia Cooperation Foundation",
  },
  titleLine2: {
    ko: "메이커 교육 방법론 연구",
    en: "SW & HW Convergence · Maker-Education Methodology",
  },
  lead: {
    ko: "산학협력단 SW & HW 융합 메이커 교육 방법론 연구.",
    en: "Research on SW–HW convergence maker-education methodology for the university's industry-academia cooperation foundation.",
  },
  bullets: {
    ko: [
      '"대학주도형 창의융합 미래인재 양성 교육과정 혁신 연구" 수행',
    ] as const,
    en: [
      'Carried out the study "University-led Curriculum Innovation for Cultivating Creative-Convergence Future Talent"',
    ] as const,
  },
};

/* ---------------- M-08 ---------------- */
export const LUXROBO: LuxroboCopy = {
  num: "M-08",
  org: { ko: "럭스로보", en: "Luxrobo" },
  titleLine1: {
    ko: "미국 · 중동 · 중국 시장 진출 및",
    en: "US · Middle East · China Market Entry",
  },
  titleLine2: {
    ko: "파트너십 · 기술교류 수행",
    en: "Partnership & Technical-Exchange Operations",
  },
  lead: {
    ko: "미국 · 중동 · 중국 시장 진출 및 파트너십 · 기술교류 수행.",
    en: "Led market entry, partnership development, and technical exchange across the U.S., Middle East, and China.",
  },
  sections: {
    ko: [
      {
        title:
          "미국 파트너사 교육사업 개발 협력 (USRA 연구재단, SDI Innovation 등)",
        pressIntro: "보도자료: ",
        pressLinks: [
          {
            href: "https://www.sciencetimes.co.kr/nscvrg/view/menu/255?searchCategory=226&nscvrgSn=188400",
            label: "사이언스타임스 — 로봇키즈의 열정으로 혁신 일궈내",
          },
          {
            href: "https://www.koreadaily.com/article/7769750",
            label: '미주중앙일보 — "로봇은 시작, 미래인재 양성이 목표"',
          },
        ],
        gallery: [
          {
            src: "/assets/luxrobo-us-partnership-01.jpg",
            alt: "미국 파트너사 교육사업 협력 1",
          },
          {
            src: "/assets/luxrobo-us-partnership-02.jpg",
            alt: "미국 파트너사 교육사업 협력 2",
          },
        ],
      },
      {
        title:
          "중동 지역 교육사업 개발 (UAE · 오만 · 바레인 · 말레이시아 등)",
        gallery: [
          {
            src: "/assets/luxrobo-middle-east-edu-01.png",
            alt: "중동 교육사업 1",
          },
          {
            src: "/assets/luxrobo-middle-east-edu-02.png",
            alt: "중동 교육사업 2",
          },
          {
            src: "/assets/luxrobo-middle-east-edu-03.png",
            alt: "중동 교육사업 3",
          },
        ],
      },
      {
        title: "아두이노 제품 및 교육전략 고도화 기술협력 수행",
        noteAfter: " — 엔지니어 간 교류, 로마 Maker Fair, 상호 방문미팅 등",
        gallery: [
          {
            src: "/assets/luxrobo-arduino-techexchange-01.png",
            alt: "아두이노 기술협력 1",
          },
          {
            src: "/assets/luxrobo-arduino-techexchange-02.png",
            alt: "아두이노 기술협력 2",
          },
        ],
      },
    ] as const,
    en: [
      {
        title:
          "Education-business co-development with US partners (USRA Research Foundation, SDI Innovation, etc.)",
        pressIntro: "Press: ",
        pressLinks: [
          {
            href: "https://www.sciencetimes.co.kr/nscvrg/view/menu/255?searchCategory=226&nscvrgSn=188400",
            label:
              'Science Times — "Driving innovation with the passion of robot kids"',
          },
          {
            href: "https://www.koreadaily.com/article/7769750",
            label:
              'Korea Daily (US) — "Robots are just the start; the goal is nurturing future talent"',
          },
        ],
        gallery: [
          {
            src: "/assets/luxrobo-us-partnership-01.jpg",
            alt: "US partner co-development · 1",
          },
          {
            src: "/assets/luxrobo-us-partnership-02.jpg",
            alt: "US partner co-development · 2",
          },
        ],
      },
      {
        title:
          "Education-program development across the Middle East (UAE · Oman · Bahrain · Malaysia, etc.)",
        gallery: [
          {
            src: "/assets/luxrobo-middle-east-edu-01.png",
            alt: "Middle East education program · 1",
          },
          {
            src: "/assets/luxrobo-middle-east-edu-02.png",
            alt: "Middle East education program · 2",
          },
          {
            src: "/assets/luxrobo-middle-east-edu-03.png",
            alt: "Middle East education program · 3",
          },
        ],
      },
      {
        title:
          "Technical cooperation to evolve Arduino's product line and education strategy",
        noteAfter:
          " — engineer-to-engineer exchange, the Rome Maker Faire, and reciprocal site visits",
        gallery: [
          {
            src: "/assets/luxrobo-arduino-techexchange-01.png",
            alt: "Arduino technical exchange · 1",
          },
          {
            src: "/assets/luxrobo-arduino-techexchange-02.png",
            alt: "Arduino technical exchange · 2",
          },
        ],
      },
    ] as const,
  },
};
