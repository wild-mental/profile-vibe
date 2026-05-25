# profile-vibe (React)

Park Byungjun · AI &amp; IT Consultant 포트폴리오의 React 마이그레이션 버전입니다.
기존 `05-business-profile-merged.html` 의 시각적 결과를 픽셀 단위로 유지하면서,
React 19 + Vite 8 + Tailwind v4 기반의 모던 프론트엔드 구조로 전환했습니다.

## 기술 스택

| Layer       | Choice                                                     |
| ----------- | ---------------------------------------------------------- |
| Runtime     | Node.js 24 LTS                                             |
| Framework   | React 19 + react-dom 19 (StrictMode)                       |
| Build / Dev | Vite 8 (`@vitejs/plugin-react`)                            |
| Language    | TypeScript (strict, bundler resolution)                    |
| Styling     | Tailwind CSS v4 (CSS-first `@theme` tokens + `@layer`)     |
| Charts      | Chart.js 4 + `react-chartjs-2`                             |
| Icons       | Bootstrap Icons (font icons via CDN)                       |

## 디자인 충실도 전략

- 기존 `05-business-profile-merged.css` 의 모든 디자인 토큰
  (`--canvas`, `--primary`, `--rounded-lg`, …) 을 `src/styles/globals.css`
  의 `@theme` 블록으로 이식하여 한 곳에서 관리합니다.
- 컴포넌트 단위 패턴 (`.info-card`, `.highlight-card`, `.project-band`,
  `.ad-revenue-block`, …) 은 `src/styles/*.css` 의 `@layer components`
  로 분리해 Tailwind 유틸리티와 자연스럽게 공존시킵니다.
- 레이아웃·반응형은 Tailwind 유틸리티(`grid grid-cols-1 lg:grid-cols-3 …`)
  로 인라인 표현하며, Tailwind 의 `lg/xl` 브레이크포인트를 Bootstrap 5
  기준(992px / 1200px)으로 재정의하여 원본 그리드 동작을 유지합니다.
- Apple 시스템의 phone/tablet 보조 브레이크포인트(`734px`, `833px`,
  `1024px`)는 컴포넌트 CSS 의 미디어 쿼리에서 그대로 유지됩니다.

## React 품질 향상 포인트

- 섹션 / UI 컴포넌트 분리 (`src/components/{layout,sections,projects,ui}`).
- 반복 콘텐츠는 정적 데이터 모듈로 분리 (`src/data/{nav,about,kdt,teaching,career}.ts`).
- Bootstrap 모달 → React 포털 기반 `EvidenceModalProvider` + `EvidenceImageButton`
  컴포넌트로 대체 (Esc-to-close, body scroll lock, ARIA dialog 적용).
- Chart.js 차트 + 휠/스크롤-잭킹 인터랙션을 `AdRevenueChart` 컴포넌트와
  `useChartScrollJacking` 훅으로 캡슐화 (원본 vanilla JS 동작과 1:1 동일).
- Bootstrap CSS / JS / `bootstrap-icons` 외의 외부 CDN 자산 제거,
  Tailwind 유틸리티로 그리드·반응형 유틸 자체 호스팅.

## 디렉터리 구조

```
app/
├── public/
│   ├── assets/        # 상위 워크스페이스의 assets/ 심볼릭 링크
│   ├── pages/         # 상위 워크스페이스의 pages/ 심볼릭 링크
│   └── favicon.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── layout/    # GlobalNav, MobileDrawer, Footer
│   │   ├── sections/  # Hero/About/Strengths/KDT/Teaching/Career/Contact
│   │   ├── projects/  # ProjectBand, AdRevenueChart, ProjectsList
│   │   └── ui/        # Timeline, EvidenceImageButton, EvidenceModal
│   ├── data/          # nav, about, kdt, teaching, career
│   ├── hooks/         # useChartScrollJacking
│   ├── styles/        # globals.css + 모듈화된 layer 컴포넌트 스타일
│   └── types/
├── index.html
├── vite.config.ts
├── tsconfig.app.json
└── vercel.json
```

## 개발

```bash
nvm use            # .nvmrc → Node 24 LTS
npm install
npm run dev        # http://localhost:5173
```

## 프로덕션 빌드

```bash
npm run build      # tsc -b && vite build → dist/
npm run preview    # 빌드 산출물을 로컬에서 서빙
```

## Vercel 배포

- 프로젝트 루트는 `app/` 으로 설정합니다 (Project Settings → Root Directory).
- 프레임워크 자동 감지: **Vite**.
- `vercel.json` 의 `framework`, `buildCommand`, `outputDirectory`,
  `installCommand` 가 명시되어 있어 추가 설정 없이 배포 가능합니다.
- Node.js 버전은 `engines.node: ">=22.0.0"` 으로 선언되어 있어 Vercel 의
  Active LTS (22 또는 24) 어느 쪽이든 동작합니다.
- 자산 폴더(`public/assets`, `public/pages`)는 상위 워크스페이스의
  실제 자산을 가리키는 심볼릭 링크입니다. Vercel 빌드 환경은 빌드 시
  심링크를 follow 하므로 그대로 배포 가능합니다.
  (다른 빌드 시스템에서 문제가 있다면 `cp -RL` 로 실제 사본을 만들 수 있습니다.)

## 원본 디자인 소스

- `../05-business-profile-merged.html` (마크업 레퍼런스)
- `../05-business-profile-merged.css` (디자인 토큰 / 컴포넌트 스타일 레퍼런스)
- `../DESIGN.md` (디자인 시스템 의사결정 기록)
