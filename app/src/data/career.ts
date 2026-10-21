import type { Localized } from "@/i18n";
import type { CareerRow } from "@/types";

export const CAREER_ROWS: Localized<readonly CareerRow[]> = {
  ko: [
    {
      company: "UD IMPACT",
      period: "2026.07 ~ 2026.10",
      role: "리드 강사 및 커리큘럼 아키텍트",
      job: "핀테크 AI PM 과정 369시간 설계 · 운영 (SBA SeSAC 영등포캠퍼스)",
    },
    {
      company: "한국정보교육원",
      period: "2024.01 ~ 2026.07",
      role: "기술 교육 컨설턴트 및 강사",
      job: "교육과정 설계 컨설팅 및 기술교육",
    },
    {
      company: "데이터스토리 허브",
      period: "2024.02 ~ 2025.12",
      role: "(사외) 기술 컨설턴트 및 강사",
      job: "기업 IT 컨설팅 및 기술교육",
    },
    {
      company: "키즈노트",
      period: "2021.09 ~ 2024.01",
      role: "연구원",
      job: "광고 시스템 백엔드 엔지니어",
    },
    {
      company: "엑시아소프트",
      period: "2021.03 ~ 2021.09",
      role: "연구원",
      job: "코인 거래소 백엔드 엔지니어",
    },
    {
      company: "메이커스월드",
      period: "2020.09 ~ 2021.03",
      role: "컨설턴트 및 강사",
      job: "메이커교육 해외시장개척 지원",
    },
    {
      company: "한국생산성본부",
      period: "2020.02 ~ 2020.09",
      role: "연구원",
      job: "SW기업 해외시장개척 지원",
    },
    {
      company: "럭스로보",
      period: "2018.06 ~ 2019.12",
      role: "팀장",
      job: "모듈형 로봇 글로벌 사업 개발",
    },
    {
      company: "한국소프트웨어산업협회",
      period: "2016.11 ~ 2018.06",
      role: "선임연구원",
      job: "SW 전문가 자격평가시험(TOPCIT) 개발",
    },
  ] as const,
  en: [
    {
      company: "UD IMPACT",
      period: "Jul. 2026 — Oct. 2026",
      role: "Lead Instructor & Curriculum Architect",
      job: "Designed and led the 369-hour Fintech AI PM program (SBA SeSAC Academy, Yeongdeungpo Campus)",
    },
    {
      company: "Korea Information Education Institute",
      period: "Jan. 2024 — Jul. 2026",
      role: "Tech Education Consultant & Instructor",
      job: "Curriculum-design consulting and technical instruction",
    },
    {
      company: "Datastory Hub",
      period: "Feb. 2024 — Dec. 2025",
      role: "External Tech Consultant & Instructor",
      job: "Enterprise IT consulting and technical training",
    },
    {
      company: "Kakao Kidsnote",
      period: "Sep. 2021 — Jan. 2024",
      role: "Research Engineer",
      job: "Backend Engineer for Advertising Systems",
    },
    {
      company: "Axiasoft (Coinbit)",
      period: "Mar. 2021 — Sep. 2021",
      role: "Research Engineer",
      job: "Backend Engineer for Cryptocurrency Exchange",
    },
    {
      company: "Makers World",
      period: "Sep. 2020 — Mar. 2021",
      role: "Consultant & Instructor",
      job: "Overseas market development for maker-education",
    },
    {
      company: "Korea Productivity Center",
      period: "Feb. 2020 — Sep. 2020",
      role: "Researcher",
      job: "Global market expansion support for Korean SW companies",
    },
    {
      company: "Luxrobo",
      period: "Jun. 2018 — Dec. 2019",
      role: "Team Lead",
      job: "Global business development for modular robotics",
    },
    {
      company: "Korea Software Industry Association",
      period: "Nov. 2016 — Jun. 2018",
      role: "Senior Researcher",
      job: "Development of national SW professional certification exams (TOPCIT)",
    },
  ] as const,
};
