import type { TimelineItem } from "@/types";

export const EDUCATION: readonly TimelineItem[] = [
  {
    period: "2025.08",
    title: "AI 빅데이터 MS & MBA",
    desc: "aSSIST · SDG MS (Switzerland, Geneva)",
  },
  {
    period: "2023.08",
    title: "컴퓨터과학 BA",
    desc: "한국방송통신대학교",
  },
  {
    period: "2016.02",
    title: "정치외교학 · 신문방송학 BA",
    desc: "서강대학교",
  },
  {
    period: "2008.02",
    title: "중국어 전공",
    desc: "서울외국어고등학교",
  },
] as const;

export const CERTIFICATIONS: readonly TimelineItem[] = [
  {
    period: "2024.06",
    title: "AWS Certified Solutions Architect Associate",
    badge: "Amazon Web Services",
  },
  {
    period: "2023.06",
    title: "AWS Certified Cloud Practitioner",
    badge: "Amazon Web Services",
  },
  {
    period: "2021.06",
    title: "정보처리기사",
    badge: "한국산업인력공단",
  },
  {
    period: "2017.07",
    title: "국가공인 SQL 개발자",
    badge: "한국데이터진흥원",
  },
] as const;
