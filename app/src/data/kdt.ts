import type { Localized } from "@/i18n";
import type { CohortRow } from "@/types";

export const KDT_STATS: Localized<
  readonly { number: string; label: string; sub: string }[]
> = {
  ko: [
    {
      number: "100%",
      label: "2기수 연속 수료율",
      sub: "2024년 · 2025년 삼육대학교 KDT",
    },
    {
      number: "1,000시간",
      label: "풀스택 엔지니어 양성 장기과정",
      sub: "2년간 누적 수료생 48명 전원 이수",
    },
    {
      number: "100%",
      label: "교육과정 만족도 추천",
      sub: "만족도 조사 제출 인원 전원 추천",
    },
  ] as const,
  en: [
    {
      number: "100%",
      label: "Graduation rate · 2 consecutive cohorts",
      sub: "2024 · 2025 Sahmyook University KDT",
    },
    {
      number: "1,000 hrs",
      label: "Full-stack engineer long-track program",
      sub: "48 graduates in total over two years — all completed",
    },
    {
      number: "100%",
      label: "Would-recommend rate",
      sub: "All survey respondents recommended the course",
    },
  ] as const,
};

export const KDT_COHORTS: Localized<readonly CohortRow[]> = {
  ko: [
    {
      id: "kdt-2024",
      title: "2024년 삼육대학교 KDT 1,000시간 장기과정",
      badges: [
        { icon: "bi-people-fill", label: "29명 중 29명 수료 100%" },
        {
          icon: "bi-hand-thumbs-up-fill",
          label: "만족도 조사 제출 인원 전원 추천 100%",
        },
      ],
      satisfaction: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2024-satisfaction-survey.png",
        caption: "2024년 KDT 만족도 조사 결과",
      },
      reviews: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2024-student-reviews.png",
        caption: "2024년 KDT 수강생 후기",
      },
    },
    {
      id: "kdt-2025",
      title: "2025년 삼육대학교 KDT 1,000시간 장기과정",
      badges: [
        { icon: "bi-people-fill", label: "19명 중 19명 수료 100%" },
        {
          icon: "bi-hand-thumbs-up-fill",
          label: "만족도 조사 제출 인원 전원 추천 100%",
        },
      ],
      satisfaction: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2025-satisfaction-survey.png",
        caption: "2025년 KDT 만족도 조사 결과",
      },
      reviews: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2025-student-reviews.png",
        caption: "2025년 KDT 수강생 후기",
      },
    },
  ] as const,
  en: [
    {
      id: "kdt-2024",
      title: "2024 Sahmyook University KDT · 1,000-hour Long-track Program",
      badges: [
        { icon: "bi-people-fill", label: "29 of 29 graduated · 100%" },
        {
          icon: "bi-hand-thumbs-up-fill",
          label: "100% recommend rate among survey respondents",
        },
      ],
      satisfaction: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2024-satisfaction-survey.png",
        caption: "2024 KDT satisfaction-survey results",
      },
      reviews: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2024-student-reviews.png",
        caption: "2024 KDT learner reviews",
      },
    },
    {
      id: "kdt-2025",
      title: "2025 Sahmyook University KDT · 1,000-hour Long-track Program",
      badges: [
        { icon: "bi-people-fill", label: "19 of 19 graduated · 100%" },
        {
          icon: "bi-hand-thumbs-up-fill",
          label: "100% recommend rate among survey respondents",
        },
      ],
      satisfaction: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2025-satisfaction-survey.png",
        caption: "2025 KDT satisfaction-survey results",
      },
      reviews: {
        src: "/pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/kdt-2025-student-reviews.png",
        caption: "2025 KDT learner reviews",
      },
    },
  ] as const,
};
