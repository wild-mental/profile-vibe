import type { ReactNode } from "react";

export type EvidenceImage = {
  src: string;
  caption: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  desc?: string;
  badge?: string;
};

export type StrengthBullet = {
  lead: ReactNode;
  /**
   * If `href` is provided, the sub-line renders as an in-page anchor link
   * (with the bouncing chevron from the source design).
   */
  sub?: ReactNode;
  href?: string;
  stack?: readonly string[];
};

export type StrengthCard = {
  icon: string;
  title: string;
  bullets: readonly StrengthBullet[];
};

export type CohortRow = {
  id: string;
  title: string;
  badges: readonly {
    icon: string;
    label: string;
  }[];
  satisfaction: EvidenceImage;
  reviews: EvidenceImage;
};

export type TeachingRow = {
  title: string;
  period: string;
  org: string;
};

export type CareerRow = {
  company: string;
  period: string;
  role: string;
  job: string;
};

export type ProjectBandTone = "base" | "tone-2" | "tone-3";
export type ProjectBandPhoto = "lecture" | "workshop" | "overseas" | "starfield";
