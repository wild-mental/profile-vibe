import type { CareerRow } from "@/types";

export const CAREER_ROWS: readonly CareerRow[] = [
  {
    company: "한국정보교육원",
    period: "2024.01 ~ 현재",
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
    job: "SW 전문가 자격평가시험 개발",
  },
] as const;
