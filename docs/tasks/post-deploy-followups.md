# Post-Deploy Follow-up Tasks (Draft)

Vercel 배포 준비 검토(2026-05-26) 직후 정리한 후속 작업 백로그입니다.
배포 자체에는 영향 없는 항목들이며, 운영 단계에서의 성능·유지보수성
개선을 목적으로 합니다.

> Status: Draft — 우선순위·담당자·일정은 추후 확정.

## 0. 범위와 측정 기준

- 대상: `app/` (React 19 + Vite 8 SPA), `assets/`, `pages/`
- 측정 도구: Lighthouse(모바일/데스크톱), WebPageTest, Chrome DevTools
  Performance + Network, `vite build --report` (gzip / brotli)
- 1차 목표 지표
  - LCP < 2.5s (모바일 4G)
  - 초기 JS (gzip) < 100KB
  - 페이지 총 전송량 < 1.5MB (1차 뷰)
  - 모든 이미지 lazy 로딩 + responsive

---

## 1. 이미지 최적화 (Priority: High)

### 현황

- `assets/` 총 27.6MB. 단일 PNG 가 3 ~ 4MB 단위로 산재.
- 주요 LCP 후보: `profile-byungjun-park.png` 4.6MB,
  `luxrobo-middle-east-edu-02.png` 4.2MB,
  `enterprise-it-training-satisfaction*.png` 3.8MB.
- 현재 `<img>` 만 사용 — `srcset`, `sizes`, `loading="lazy"`, fetchpriority
  모두 부재.

### 작업 항목

- [ ] `sharp` 기반 빌드 시 변환 스크립트 도입
  - 원본 `assets/source/` 분리, 빌드 시 `public/assets/` 로 다중 포맷 출력
    (`.webp`, `.avif`, fallback `.jpg`/`.png`)
  - 해상도 변형: `@1x` (1024 max), `@2x` (2048 max)
- [ ] `<picture>` + `srcset` / `sizes` 도입한 공용 `ResponsiveImage` 컴포넌트
- [ ] LCP 후보 이미지에만 `fetchpriority="high"`, 나머지 `loading="lazy"`
- [ ] 프로필 사진은 1024px 이내로 사전 리사이즈 (현재 1.0MB+ 인 4K 원본)
- [ ] 모달 evidence 이미지는 클릭 시점에만 풀해상도 로드 (현재 즉시 로드)

### 기대 효과

- 1차 전송량 30 ~ 70% 절감, 모바일 LCP 1.5초 이상 단축 예상

---

## 2. JS 코드 스플릿 (Priority: Medium)

### 현황

- `index-DXkiY4R6.js` 412.94 KB (gzip 135.68 KB) — Chart.js + react-chartjs-2
  가 메인 번들에 포함.
- `AdRevenueChart` 는 단일 섹션에서만 사용.

### 작업 항목

- [ ] `AdRevenueChart` 를 `React.lazy` + `Suspense` 로 분리
- [ ] `IntersectionObserver` 로 뷰포트 접근 직전에 prefetch
- [ ] `vite.config.ts` `build.rollupOptions.output.manualChunks` 로
  `chart.js` 를 별도 청크로 분리
- [ ] `EvidenceModal` 도 lazy import 고려 (초기 뷰 비차단)

### 기대 효과

- 메인 번들 gzip 100KB 미만, 초기 파싱 시간 30% 단축

---

## 3. 폰트·아이콘 자체 호스팅 (Priority: Medium)

### 현황

- `index.html` 에서 외부 CDN 직접 로드
  - Google Fonts Inter (`fonts.googleapis.com`)
  - Pretendard variable (`cdn.jsdelivr.net`)
  - Bootstrap Icons (`cdn.jsdelivr.net`)
- preconnect 만 적용되어 있고 `font-display`, subset 미적용

### 작업 항목

- [ ] `@fontsource/inter`, `pretendard` 패키지 도입 후 self-host
  (`@fontsource-variable/pretendard` 의 dynamic-subset CSS 활용)
- [ ] Bootstrap Icons 는 실제 사용된 글리프 ~20여 종만 SVG sprite 로 추출
  (`bootstrap-icons` 패키지 + `svg-sprite` 빌드 스크립트)
- [ ] 모든 폰트에 `font-display: swap` + Latin / Korean subset 분리
- [ ] `vercel.json` 의 `/assets/fonts/*` 에 `immutable` 캐시 헤더 추가

### 기대 효과

- CDN 의존도 ↓, 폰트 FOUT/CLS 안정화, 외부 호출 3개 제거

---

## 4. i18n 번들 분리 (Priority: Low ~ Medium)

### 현황

- `src/i18n/strings.ts`, `src/i18n/projects.ts` 가 한국어·영어 텍스트를
  동시에 들고 다님. 현재 분량은 작지만 향후 언어 추가 시 선형 증가.
- 사용자는 한 시점에 1개 언어만 사용.

### 작업 항목

- [ ] 언어별 JSON 분리 (`src/i18n/locales/ko.json`, `en.json`)
- [ ] `LanguageProvider` 에서 dynamic import 로 현재 언어 chunk 만 로드
- [ ] 기본 언어 (한국어) 는 HTML 에서 prefetch 힌트 추가
- [ ] 빌드 시 언어별 청크 해시 이름 확인 (`locales/ko-[hash].js`)

### 기대 효과

- 추후 언어 추가 시 자동 확장, 첫 페인트 시 비활성 언어 미전송

---

## 5. SEO / 메타 / 공유 카드 (Priority: Medium)

### 현황

- `<title>` 만 존재, OG/Twitter 카드 없음.
- 다국어 처리도 `<html lang="ko">` 로 고정.

### 작업 항목

- [ ] `og:title`, `og:description`, `og:image` (1200x630),
  `twitter:card=summary_large_image` 추가
- [ ] 언어 토글 시 `document.documentElement.lang` 동기화
- [ ] `robots.txt`, `sitemap.xml` 생성 (단일 페이지지만 명시적 표기)
- [ ] JSON-LD `Person` schema 삽입 (검색 노출 강화)

---

## 6. 운영 모니터링 (Priority: Low)

### 작업 항목

- [ ] Vercel **Web Analytics** 활성화 (무료, 1라인 추가)
- [ ] Vercel **Speed Insights** 활성화 (Core Web Vitals 실측)
- [ ] 외부: Sentry 또는 PostHog (선택, JS 에러 추적 목적)
- [ ] 404 페이지 (`/404.html`) 디자인 — 현재는 Vercel 기본 페이지

---

## 7. 빌드·CI 보강 (Priority: Low)

### 작업 항목

- [ ] GitHub Actions: PR 단위 `npm run lint && npm run build`
  (Vercel preview 와 별개로 빠른 신호용)
- [ ] `package.json` 의 `"engines"` 를 `"node": ">=22.0.0 <25"` 로 상한 명시
- [ ] Dependabot 또는 Renovate 셋업 (보안 패치 자동화)
- [ ] `tsc --noEmit` 만 돌리는 별도 `typecheck` 스크립트 추가
  (`build` 와 분리해 PR CI 시간 단축)

---

## 8. 접근성 (a11y) 보완 (Priority: Medium)

### 작업 항목

- [ ] `axe-core` 또는 Lighthouse a11y 실행 후 결과 첨부
- [ ] 모든 `<img>` 의 `alt` 검수 (장식용은 `alt=""`)
- [ ] `EvidenceModal` 의 focus trap·`aria-modal`·복귀 포커스 점검
- [ ] 색 대비 (WCAG AA) 검증 — 특히 sub 텍스트와 카드 보더 색

---

## 우선순위 요약

| 우선순위 | 항목 | 예상 효과 |
|---|---|---|
| P1 | 이미지 최적화 | LCP/전송량 즉시 개선 |
| P1 | Chart.js lazy split | 초기 JS 30%+ 감소 |
| P2 | 폰트 self-host | CDN 의존도 ↓, CLS ↓ |
| P2 | SEO/OG 메타 | 공유·검색 노출 |
| P2 | a11y 점검 | 품질 베이스라인 |
| P3 | i18n 분리 | 언어 확장성 |
| P3 | 모니터링 | 운영 가시성 |
| P3 | CI/CD 보강 | 회귀 방지 |

---

## 참고

- `vercel.json` 의 캐시·헤더 설정은 이미 적용됨 (2026-05-26 커밋).
- 이미지 최적화 작업 시 새 파일명을 사용하면 기존 1주 캐시와 충돌 없이
  교체 가능 (해시 또는 `@v2` 접미사 권장).
