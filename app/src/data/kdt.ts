import type { CohortRow } from "@/types";

export const KDT_STATS = [
  {
    number: "100%",
    label: "2기수 연속 수료율",
    sub: "2024년 · 2025년 삼육대학교 KDT",
  },
  {
    number: "48 / 48",
    label: "총 수료생 (29명 + 19명)",
    sub: "전원 1,000시간 장기과정 수료",
  },
  {
    number: "100%",
    label: "교육과정 만족도 추천",
    sub: "만족도 조사 제출 인원 전원 추천",
  },
] as const;

export const KDT_COHORTS: readonly CohortRow[] = [
  {
    id: "kdt-2024",
    title: "2024년 삼육대학교 KDT 1,000시간 장기과정",
    badges: [
      { icon: "bi-people-fill", label: "29명 중 29명 수료 100%" },
      { icon: "bi-hand-thumbs-up-fill", label: "만족도 조사 제출 인원 전원 추천 100%" },
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
      { icon: "bi-hand-thumbs-up-fill", label: "만족도 조사 제출 인원 전원 추천 100%" },
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
] as const;
