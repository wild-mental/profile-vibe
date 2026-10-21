import type { Localized } from "@/i18n";

export const NEWSLETTER_SUBSCRIBE_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7481019879278411776";

export const NEWSLETTER_ISSUES: Localized<
  readonly { date: string; title: string }[]
> = {
  ko: [
    { date: "2026.08.15", title: "AI에게 내 사고의 운전대를 넘기지 않는 법" },
    { date: "2026.07.26", title: "AI 에이전트에 자신있게 명령하기 위한 기본기" },
    { date: "2026.07.10", title: "AI에게 당신과 함께하기 위한 '사회화'를 시켜보세요" },
  ] as const,
  en: [
    { date: "Aug. 15, 2026", title: "How to keep your hands on the wheel of your own thinking" },
    { date: "Jul. 26, 2026", title: "The fundamentals of commanding AI agents with confidence" },
    { date: "Jul. 10, 2026", title: "Give your AI the “socialization” it needs to work with you" },
  ] as const,
};

type Skill = { repo: string; desc: string };

const GITHUB_BASE = "https://github.com/wild-mental/";

export const skillUrl = (repo: string) => `${GITHUB_BASE}${repo}`;

/**
 * Published skills grouped by kind. Excluded on purpose:
 * aztks-review, grill-it, the notion-* skills, and profile-sum.
 */
export const SKILL_GROUPS: Localized<
  readonly { icon: string; title: string; skills: readonly Skill[] }[]
> = {
  ko: [
    {
      icon: "bi-compass",
      title: "에이전틱 작업 기준 · 문제해결",
      skills: [
        { repo: "aztks-skill", desc: "알잘딱깔센 5축 일머리 기준 — 수행(APPLY) · 평가(EVALUATE) 듀얼 모드 + 위임형 에이전트" },
        { repo: "grip-it-skill", desc: "착수 전 미해소 결정을 추출해 한 토픽씩 해소하고, 해소 즉시 문서 · 하네스에 반영" },
        { repo: "goal-setting-skill", desc: "장기 실행 /goal 프롬프트를 실행가능성 · 검증가능성 · 범위 한정 3원칙으로 설계" },
      ],
    },
    {
      icon: "bi-bar-chart-line",
      title: "프로덕트 기획 · 지표 설계",
      skills: [
        { repo: "jtbd-abtest-skill", desc: "JTBD 기반 A/B 테스트 시나리오(현재 화면 A vs Variant B) 설계" },
        { repo: "aarrr-nsm-report-skill", desc: "MVP 핵심지표 측정계획 — NSM · AARRR · 로그 감지 플랜 리포트" },
        { repo: "ga4-vibe-skill", desc: "앱의 기존 로깅 · 대시보드를 GA4 + BigQuery로 연결하는 재현 파이프라인" },
      ],
    },
    {
      icon: "bi-git",
      title: "개발 협업 · 운영 하네스",
      skills: [
        { repo: "review-merge-skill", desc: "PR을 한 건씩 검토하고, 검증 게이트를 통과한 뒤에만 머지하는 순차 리뷰" },
        { repo: "merge-review-skill", desc: "결합된 PR 묶음을 bottom-up으로 머지한 뒤 통합 결과를 라이브 검토" },
        { repo: "playboard-skill", desc: "레지스트리 파생 SoT 보드 재현 · 운영 하네스 (스킬 + 규칙 + 서브에이전트 + 워크플로우)" },
      ],
    },
  ] as const,
  en: [
    {
      icon: "bi-compass",
      title: "Agentic Work Standards & Problem-Solving",
      skills: [
        { repo: "aztks-skill", desc: "The AZTKS five-axis work standard — dual APPLY/EVALUATE modes plus a delegable agent" },
        { repo: "grip-it-skill", desc: "Surfaces unresolved decisions before kickoff, resolves them one at a time, and persists each into docs and the agent harness" },
        { repo: "goal-setting-skill", desc: "Designs paste-ready /goal prompts for long-running agents around feasibility, demonstrability, and boundedness" },
      ],
    },
    {
      icon: "bi-bar-chart-line",
      title: "Product Planning & Metrics",
      skills: [
        { repo: "jtbd-abtest-skill", desc: "Designs JTBD-based A/B test scenarios (current screen A vs. variant B)" },
        { repo: "aarrr-nsm-report-skill", desc: "MVP measurement plans — North Star Metric, AARRR funnel, and event-logging plan" },
        { repo: "ga4-vibe-skill", desc: "A reproducible pipeline that connects an app's logging and dashboards to GA4 + BigQuery" },
      ],
    },
    {
      icon: "bi-git",
      title: "Engineering Workflow & Harness",
      skills: [
        { repo: "review-merge-skill", desc: "Sequential PR review — each PR merges only after it passes a verification gate" },
        { repo: "merge-review-skill", desc: "Merges coupled PR stacks bottom-up, then reviews the integrated result live" },
        { repo: "playboard-skill", desc: "Harness for a registry-derived source-of-truth board — skills, rules, subagents, and workflows" },
      ],
    },
  ] as const,
};
