import type { NavLink } from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#about", label: "소개" },
  { href: "#strengths", label: "핵심 역량" },
  { href: "#kdt-graduation", label: "KDT 수료" },
  { href: "#teaching", label: "강의" },
  { href: "#career", label: "경력" },
  { href: "#projects", label: "프로젝트" },
] as const;

export const CONTACT_EMAIL = "prfsr.limitless@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/pbjworking/";
export const GITHUB_URL = "https://github.com/wild-mental";
export const KAKAO_URL = "https://open.kakao.com/me/pbjworking";
