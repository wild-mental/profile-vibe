import type { Localized } from "@/i18n";
import type { TimelineItem } from "@/types";

export const EDUCATION: Localized<readonly TimelineItem[]> = {
  ko: [
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
      title: "정치외교학 · 커뮤니케이션학 BA",
      desc: "서강대학교",
    },
  ] as const,
  en: [
    {
      period: "Aug. 2025",
      title: "MS in AI & Big Data · MBA",
      desc: "aSSIST · SDG MS (Geneva, Switzerland)",
    },
    {
      period: "Aug. 2023",
      title: "BA in Computer Science",
      desc: "Korea National Open University",
    },
    {
      period: "Feb. 2016",
      title: "BA in Political Science & Communication",
      desc: "Sogang University",
    },
  ] as const,
};

export const CERTIFICATIONS: Localized<readonly TimelineItem[]> = {
  ko: [
    {
      period: "2024.06",
      title: "AWS Certified Solutions Architect Associate",
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
  ] as const,
  en: [
    {
      period: "Jun. 2024",
      title: "AWS Certified Solutions Architect — Associate",
      badge: "Amazon Web Services",
    },
    {
      period: "Jun. 2021",
      title: "Engineer Information Processing (National License, KR)",
      badge: "Human Resources Development Service of Korea",
    },
    {
      period: "Jul. 2017",
      title: "SQL Developer (National Certification, KR)",
      badge: "Korea Data Agency",
    },
  ] as const,
};
