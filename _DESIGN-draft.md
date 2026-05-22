# DESIGN.md — Business Profile (Final / Merged)

> **Reference implementation:** `05-business-profile-merged.html` + `05-business-profile-merged.css`
> **Status:** Single source of truth for new pages. This document supersedes
> `DESIGN-apple.md`, `DESIGN-notion.md`, and `DESIGN-spacex.md` (kept for archival lineage only).
>
> 새 페이지를 추가할 때는 이 문서의 **토큰 / 컴포넌트 / 시각화 규칙**만으로
> 동일한 외형이 재현되어야 한다. 인라인 hex / 임의 폰트 사이즈 / 즉흥 라디우스는 금지.

---

## 0. Design Lineage — 무엇이 살아남았고 무엇이 죽었는가

이 페이지는 3개의 디자인 시스템을 차례로 적용·병합한 결과물이다.
세 시스템에서 가져온 방침 중 **현재 최종본까지 그대로 남은 것**과
**의도적으로 폐기된 것**을 명시한다. 새 페이지에서는 _살아남은_ 방침만
참조해야 한다.

### 0.1 DESIGN-apple.md 에서 살아남은 방침 (Load-bearing)

* **단일 액션 블루.** `--primary: #0066cc` 하나만이 모든 인터랙티브 요소
  (링크, 1차 CTA, 포커스, 타임라인 닷, 아이콘 강조)를 담당. 보조 브랜드 컬러는
  존재하지 않음.
* **다크 타일 위에서는 `#2997ff`(`--primary-on-dark`).** 어두운 면 위의 인라인
  링크·강조점에 한해서만 사용. 라이트 면에는 절대 사용하지 않음.
* **SF Pro / Pretendard 폰트 스택.** `-apple-system, BlinkMacSystemFont,
  "SF Pro Display", "SF Pro Text", "Inter", "Pretendard Variable",
  Pretendard, system-ui, "Noto Sans KR", sans-serif`.
* **본문은 17px / 400 / line-height 1.47 / letter-spacing -0.022em.**
  16px 가 아니라 17px 이 본문 기본값이라는 점이 핵심.
* **디스플레이 사이즈에서 음수 letter-spacing (-0.005em ~ -0.022em).**
  소위 "Apple tight" 헤드라인 캐던스.
* **두께는 300 / 400 / 600 / 700 만 사용. 500 은 의도적으로 비움.**
  헤드라인은 600, 강조 본문도 600, 본문은 400.
* **풀-블리드 타일 알터네이션이 곧 섹션 디바이더.** light → parchment →
  light → parchment → dark → light. 타일 사이에 별도의 보더·그라데이션을
  쓰지 않음.
* **단 한 종류의 드롭 섀도.** `box-shadow: 3px 5px 30px rgba(0,0,0,0.22)`.
  프로필 사진(원형)에만 적용. 카드·버튼·텍스트에는 절대 사용하지 않음.
* **상단 글로벌 네비는 순흑(`#000`) 44px sticky.** 페이지에서 진짜 검정이
  나타나는 유일한 곳.
* **`scale(0.95)` 액티브 마이크로 인터랙션.** 모든 pill / utility 버튼에
  150ms ease 로 동일 적용.
* **`transition: opacity .2s ease, transform .2s ease`** 류의 짧고 절제된
  트랜지션. 0.6s 이상의 모션은 그래프 애니메이션 외에 없음.
* **풋터는 parchment 배경 + 다단 링크 컬럼.** 본문/상단과 색온도가 다른
  살짝 어두운 베이지(`#f5f5f7`).
* **포커스 링은 `outline: 2px solid var(--primary-focus); outline-offset: 2px;`.**

### 0.2 DESIGN-notion.md 에서 살아남은 방침 (Survivors)

* **레거시 클래스명 보존 + Apple 토큰으로 매핑.** `.badge-notion`,
  `.btn-primary-notion`, `.tag-purple`, `.tag-orange`, `.tag-green` 같은
  Notion 계열 클래스명은 마크업에 남겨두되, CSS에서 _전부 동일한
  parchment 칩 한 종류_로 통일했다. 컬러 분기는 없음.
* **Comparison Table 컴포넌트.** 강의·경력 리스트는 카드 그리드가 아니라
  Notion 식 `comparison-table` 로 표현한다. parchment 헤더 + hairline
  로우 디바이더.
* **`details / summary` 기반의 인-라인 expand 패턴.** KDT 섹션 만족도/후기
  이미지는 `<details open>` 으로 감싸 사용자가 닫을 수 있게 한다.
  서머리 좌측의 chevron(`F285`) 이 회전.

### 0.3 DESIGN-spacex.md 에서 살아남은 방침 (Survivors)

* **풀-블리드 다크 "Project Band"** (`section.project-band`).
  프로젝트 1건당 1밴드, 좌측 절반에 사진(`.band-photo`)을 깔고
  `brightness(0.45) saturate(0.85)` 로 그레이딩한 다음 그 위에 흰
  타이포를 얹는다.
* **`M-01` ~ `M-08` 형식의 "Mission Log" 넘버링** + 좌측 짧은 horizontal
  rule. SpaceX 의 mission counter 패턴을 그대로 차용.
* **다크 밴드 안에서는 모든 텍스트가 흰색/`--body-muted (#cccccc)`** 로
  떨어지고, 인라인 강조는 `<strong>` + `--on-dark` 로 처리.
* **`specs-table`.** 다크 밴드 안의 일정/구성표는 좌측 정렬 + 1px hairline-on-dark
  + 대문자 헤더로, SpaceX 스펙 시트 스타일을 그대로 유지.

### 0.4 의도적으로 폐기된 방침 (Do NOT reintroduce)

* ❌ **Notion purple primary (`#6e5494` 류).** 단일 블루 정책 위반.
* ❌ **Notion 의 노란/민트/라벤더 카드 틴트.** 본 페이지는 light /
  parchment / dark 세 종류 표면만 사용.
* ❌ **SpaceX 의 D-DIN-Bold 대문자 디스플레이.** 한글 가독성과 충돌.
  `.t-display-xl` 토큰은 SF Pro/Pretendard 600 으로 오버라이드 됐다.
* ❌ **SpaceX 의 1-CTA 룰.** Hero 와 Contact CTA 에서는 primary +
  secondary pill 2-CTA 페어 사용 (Apple 그래머).
* ❌ **Notion 의 8px 사각 버튼.** 1차 CTA 는 `--rounded-pill` (9999px) pill.
  사각형(`--rounded-sm` 8px) 은 utility-dark / utility-blue 마이크로 버튼에
  한정.
* ❌ **카드/버튼 드롭 섀도.** Apple 원칙 그대로. 단 1개 섀도만 살아있음.
* ❌ **그라데이션 배경.** 어떤 곳에도 쓰지 않음.

---

## 1. Design Tokens — 단일 소스 (`:root`)

> 모든 토큰은 `05-business-profile-merged.css` 상단 `:root` 에 정의되어 있다.
> 새 페이지는 토큰만 참조하고, 인라인 hex 를 박지 않는다.

### 1.1 Surface (배경/표면)

| Token | Value | 용도 |
|---|---|---|
| `--canvas` | `#ffffff` | 기본 라이트 타일·카드·info-card 내부 |
| `--canvas-parchment` | `#f5f5f7` | 교대 라이트 타일, footer, 칩 배경, comparison-table 헤더, 풀-퀘트 left-rail bg |
| `--surface-pearl` | `#fafafc` | comparison-table row hover 배경 |
| `--surface-tile-1` | `#272729` | Project Band 기본 (Apple "near-black 1") |
| `--surface-tile-2` | `#2a2a2c` | Project Band `tone-2` (한 단계 밝게) |
| `--surface-tile-3` | `#252527` | Project Band `tone-3` (한 단계 어둡게) |
| `--surface-black` | `#000000` | 글로벌 nav, 모바일 drawer, evidence-zoom-hint 배경 |
| `--surface-chip-translucent` | `rgba(210,210,215,0.64)` | (예비) 사진 위 둥근 컨트롤 |

### 1.2 Ink / Text

| Token | Value | 용도 |
|---|---|---|
| `--ink` | `#1d1d1f` | 라이트 면 모든 본문/헤드라인 (순흑 대신) |
| `--body` | `#1d1d1f` | 본문 (ink 와 동일 — 단일 톤) |
| `--on-dark` | `#ffffff` | 다크 면 헤드라인/강조 본문 |
| `--body-muted` | `#cccccc` | 다크 면 보조 본문, project-num |
| `--ink-muted-80` | `#333333` | 라이트 면 보조 본문, eyebrow, contact-list |
| `--ink-muted-48` | `#7a7a7a` | 카피라이트, fine-print, `.name-roman` |

### 1.3 Brand Accent

| Token | Value | 용도 |
|---|---|---|
| `--primary` | `#0066cc` | 모든 라이트 면 인터랙티브 (링크/pill/타임라인 닷/아이콘) |
| `--primary-focus` | `#0071e3` | 키보드 포커스 outline 색 |
| `--primary-on-dark` | `#2997ff` | 다크 면(`tile-dark*`, `project-band`) 인라인 링크 및 그래프 강조 |

### 1.4 Hairlines

| Token | Value | 용도 |
|---|---|---|
| `--divider-soft` | `rgba(0,0,0,0.04)` | secondary 버튼의 quasi-border |
| `--hairline` | `#e0e0e0` | 라이트 면 모든 1px 보더 (info-card, stat-card, comparison-table 등) |
| `--hairline-on-dark` | `rgba(255,255,255,0.16)` | 다크 면 1px 디바이더, project-body ul 보더 |

### 1.5 Radius

| Token | Value | 적용 대상 |
|---|---|---|
| `--rounded-none` | `0` | 풀-블리드 타일 / 다크 밴드 (코너 안 깎음) |
| `--rounded-xs` | `5px` | `badge-issuer` 같은 마이크로 칩 |
| `--rounded-sm` | `8px` | utility-dark/blue 버튼, evidence-image-btn, project-image, project-gallery 이미지 |
| `--rounded-md` | `11px` | ad-revenue-block, evidence-details 외곽 |
| `--rounded-lg` | `18px` | **모든 메인 카드** (info-card, highlight-card, stat-card, cohort-card, comparison-table 외곽) |
| `--rounded-pill` | `9999px` | **1차 CTA**, badge-notion, stack-chip, ad-revenue-dot, project-org |
| `--rounded-full` | `9999px` | 프로필 사진(50%), icon-circle, timeline 닷 |

### 1.6 Spacing (4·8·12·17·24·32·48·80)

| Token | Value |
|---|---|
| `--space-xxs` | `4px` |
| `--space-xs` | `8px` |
| `--space-sm` | `12px` |
| `--space-md` | `17px` (= 본문 1행) |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-xxl` | `48px` |
| `--space-section` | `80px` (데스크톱 `.tile` 상하 패딩 = `.project-band` 상하 패딩 96px 의 base) |

> **모바일 (≤734px) 일괄 축소.** `.tile { padding: 48px 0 }`,
> `.project-band { padding: 64px 0 }`, `.tile-header { margin-bottom: 40px }`.

### 1.7 Shadow

```css
--shadow-product: 0 10px 30px rgba(0, 0, 0, 0.22);
```

* **사용처는 단 1곳: `.profile-photo`** (Hero 의 원형 프로필).
* 카드/버튼/모달/이미지 어디에도 추가하지 않는다. 강조가 필요하면
  표면 색을 바꾸거나 `--hairline` 보더를 쓴다.

---

## 2. Typography Ladder

### 2.1 폰트 스택

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
             "Inter", "Pretendard Variable", Pretendard, system-ui,
             "Noto Sans KR", sans-serif;
```

`<head>` 에서 **Inter (Google Fonts) 와 Pretendard Variable (jsDelivr)** 을
프리로드한다. 한국어는 Pretendard 가, 영문 디스플레이는 Inter/SF Pro 가
받는 구조.

### 2.2 사이즈/웨이트 사다리

| 토큰/클래스 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| `.t-hero-display` / `.hero h1` | 56px | 600 | 1.07 | -0.005em | Hero 이름 |
| `.tile-header h2` / `.t-display-lg` / `.contact-cta-wrap h2` / `.project-title` | 40px | 600 | 1.1 | -0.005em | 섹션 타이틀, 프로젝트 타이틀 |
| `.stat-card .stat-number` | 48px | 600 | 1.05 | -0.005em | **유일하게 `--primary` 컬러로 칠하는 헤드라인** (KDT 통계) |
| `.t-display-md` / `.metric-callout .metric-value` | 34px | 600 | 1.15~1.2 | -0.011em | 메트릭 콜아웃 값 |
| `.ad-revenue-title` | 22px | 600 | 1.2 | -0.011em | 차트 카드 타이틀 |
| `.t-lead` | 24px | 400 | 1.33 | +0.009em | (예비) lead paragraph |
| `.t-tagline` / `.hero .tagline` / `.info-card h3` / `.highlight-card h3` / `.cohort-header h3` | 21px | 400~600 | 1.19~1.42 | +0.011em | 카드 H3, 히어로 태그라인 |
| `.t-body` / `.t-body-strong` / `.tile-header p` / `.btn-pill-*` | 17px | 400 / 600 | 1.47 | -0.022em | **본문 디폴트** |
| `.t-caption` / `.t-caption-strong` / `.btn-utility-*` / `.contact-list li` / `.timeline .desc` / `.sub-line` / `.stat-card .stat-sub` / `comparison-table td` | 14px | 400~600 | 1.43~1.47 | -0.016em | 보조 본문, 캡션, 칩, 버튼-마이크로 |
| `.t-fine-print` / `.stack-chip` / `.badge-*` / `.footer-link` / `.footer-bottom` / `comparison-table th` (caps) / `.project-num` (caps) | 12px | 400~600 | 1~1.5 | -0.01em ~ +0.06em | 칩, 라벨, 마이크로 |
| `.ad-revenue-eyebrow` | 11px | 600 | — | +0.08em uppercase | 차트 카드 eyebrow |
| `.t-micro-cap` / `.metric-label` / `.project-num` / `.project-org` / `comparison-table th` / `.specs-table th` | 12px | 600 | 1 | +0.04~0.08em **uppercase** | 모든 마이크로-캡 라벨 |

> **헤드라인 1색 원칙.** 라이트 면 헤드라인은 거의 모두 `--ink` 단색.
> **단 하나의 예외**가 `stat-card .stat-number` 로, 여기는
> `--primary` 컬러로 칠해 "100%", "48 / 48" 같은 수치를 강조한다.
> 새 페이지에서도 큰 수치 통계 카드에만 이 예외를 적용한다.

### 2.3 반응형 디스플레이 다운스텝

| 데스크톱 | ≤1024 | ≤833 | ≤734 | ≤640 |
|---|---|---|---|---|
| Hero h1 56 | 48 | 40 | — | 34 |
| `.tile-header h2` 40 / `.contact-cta-wrap h2` 40 | — | — | 32 | — |
| `.t-h2` 34 | — | — | 28 | — |
| `.project-title` 40 | — | — | 30 | — |
| `.metric-callout .metric-value` 34 | — | — | 26 | — |
| `.tagline` 21 | — | — | — | 17 |
| `.contact-cta-wrap p` 21 | — | — | 17 | — |
| `.ad-revenue-title` 22 (data: 모바일 19) | — | — | 19 | — |

---

## 3. 레이아웃 시스템

### 3.1 컨테이너 폭

| 컨테이너 | max-width | 좌우 padding | 사용처 |
|---|---|---|---|
| **글로벌 nav inner** | 1100px | 22px | `.global-nav-inner` |
| **Hero grid** | 1100px | 22px | `.hero-grid` |
| **표준 타일 내부 (.container)** | **1100px** (Bootstrap `.container` 를 `!important` 로 강제) | 22px | About, Strengths |
| **`.tile-container`** | 980px | 22px | (예비, 텍스트 헤비) |
| **`.tile-container-wide`** | **1200px** | 22px | Teaching / Career comparison-table |
| **`.comparison-table`** | 1100px | — | 모든 표 |
| **`.project-content`** | 1100px | 22px | 모든 다크 밴드 |
| **`.tile-header`** | 720px | 22px | 섹션 헤더 텍스트 블록 (eyebrow + h2 + p) |
| **`.contact-cta-wrap`** | 720px | 22px | Contact CTA 블록 |
| **`.footer-grid`** | 1100px | 22px | 풋터 그리드 |

> **새 페이지 룰.** 대부분의 콘텐츠는 1100px 안에서 처리한다.
> 표(comparison-table)만 1200px 까지 허용. 본문 한 컬럼이 너무 길면
> 720~980px 로 좁힌다.

### 3.2 섹션 리듬 (Tile Cadence)

페이지는 다음과 같은 **표면 알터네이션**을 따른다 — 색 변화가 곧 구분자다.

```
[Black 44px Global Nav]
   ↓
Hero          → tile-light     (#ffffff)
About         → tile-parchment (#f5f5f7)
Strengths     → tile-light
KDT           → tile-parchment   ← Track Record
Teaching      → tile-light
Career        → tile-parchment
Projects intro→ tile-dark      (#272729)
Project bands → 다크 톤 1/2/3 교차 (project-band, project-band.tone-2, .tone-3)
Contact CTA   → tile-light
Footer        → parchment (#f5f5f7)
```

* 연속한 두 light 또는 두 parchment 는 금지. 하나는 반드시 다른 색으로
  넘어가야 한다.
* Project Band 진입은 항상 **`tile-dark` Projects intro 한 장**으로 시작
  (다크 환경 진입을 시각적으로 선언).
* **다크 → 라이트 복귀는 Contact CTA 가 담당.** 풀-블리드 light tile +
  중앙정렬 2 pill 버튼.

### 3.3 Hero 그리드

```css
.hero-grid {
  grid-template-columns: minmax(180px, 280px) 1fr;
  gap: 64px;
  align-items: center;
}
@media (max-width: 833px) {
  grid-template-columns: 1fr; gap: 32px; text-align: center;
}
```

* 좌: 원형 프로필 사진 (max 280px, `border-radius: 50%`, `--shadow-product`).
* 우: eyebrow + h1 + 1줄 tagline + 1줄 sub-tagline(`#999999`) + 2단 contact-list.
* 833px 이하에서 1컬럼·중앙정렬로 스택.

### 3.4 카드 그리드 (Bootstrap row + col)

* About, Strengths, KDT 통계 카드는 **Bootstrap 5 grid** 사용
  (`.container > .row.g-4 > .col-lg-6 / col-lg-4 / col-md-4`).
* 카드 간 거터는 `g-4` = 1.5rem(24px). `mt-5` (3rem) 으로 카드 행과
  reference image 행 사이 호흡 확보.
* Bootstrap 의 `.container` 는 1100px / 22px padding 으로 `!important`
  오버라이드 되어 있다 — 즉 Bootstrap 의 기본 1140/1320px breakpoint
  컨테이너는 무시된다.

### 3.5 표면-반응형 글로벌 룰

* `section[id], header[id] { scroll-margin-top: 56px }` — sticky nav 44px +
  여유 12px.
* `html { scroll-behavior: smooth }`.
* `::selection { background: rgba(0,102,204,0.18); color: var(--ink) }` —
  파랑 셀렉션 톤.
* `:target.info-card / .highlight-card / .project-band` 는 1.6s 의
  `targetPulse` 키프레임(블루 ring) 으로 1회 펄스. 인페이지 점프 시
  착지 카드가 어디인지 시각적으로 알려주는 장치.

---

## 4. 콘텐츠 유형별 시각화 패턴

> 다음 표는 _"이 종류의 콘텐츠가 들어오면 어떤 컴포넌트로 렌더할 것인가"_
> 를 결정하는 의사결정 표다. 새 페이지는 좌측 콘텐츠 유형에서 출발해
> 우측 컴포넌트를 그대로 사용해야 한다.

| 콘텐츠 유형 | 컴포넌트 | 표면 | 핵심 토큰/그래머 |
|---|---|---|---|
| **자기소개 / 인물 카드** | `.hero` + `.hero-grid` + `.profile-photo` | `tile-light` | 원형 사진(50% + product-shadow), 16:9 비율 헤드라인 컬럼 |
| **연혁 / 자격 / 학력 (날짜+제목+설명 1세트)** | `.info-card > .timeline > li > .period / .title / .desc / .badge-issuer` | parchment | 좌측 1px hairline 레일 + 9px 파란 닷 |
| **3가지 핵심 역량** | `.highlight-card > .icon-circle + h3 + ul > li > .lead-line + .sub-line` | light | parchment 48px 원형 아이콘 + bootstrap-icon `F270` 체크-원형 마커, 3 컬럼 |
| **빅 통계 (수치 헤드라인)** | `.stat-card > .stat-number + .stat-label + .stat-sub` | parchment | **유일하게 헤드라인을 파란색으로 칠하는 카드** (48px / 600 / `--primary`) |
| **기간성 트랙 레코드 (기수/회차별)** | `.cohort-card > .cohort-header + .cohort-body > .evidence-details` | parchment | hairline 분리된 header (badges) + body (만족도/후기 이미지 토글) |
| **타임 시리즈 표 (강의/경력 등)** | `.comparison-table > table` | light/parchment | parchment 헤더 / hairline 로우 / pearl row-hover / `.badge-notion.tag-*` 운영기관 칩 |
| **프로젝트 1건 (대규모)** | `<section.project-band>` + `.band-photo` + `.project-meta-row + .project-title + .project-body` | dark (tile-1/2/3 교차) | 풀-블리드 사진 + brightness 0.45 그레이딩 + `M-01` 마이크로 캡 메타 |
| **프로젝트 안의 일정/구성표** | `.specs-table` | dark | hairline-on-dark + uppercase caps 헤더 + `.highlight-row` 강조 |
| **프로젝트 안의 큰 수치 콜아웃** | `.metric-callout > .metric-label + .metric-value` | dark | 상하 1px 흰 보더, 34px 600 흰 수치 |
| **시계열 정량 데이터 (월/분기/연)** | `<canvas>` + Chart.js (ad-revenue-block 패턴) | dark | 풀-블리드 가로 스크롤, 데스크톱 휠→가로, 모바일 sticky scroll-jacking |
| **레퍼런스 이미지 (만족도 그래프 등)** | `.info-card > .evidence-image-btn.is-natural + .evidence-summary` | light | parchment 좌측 3px 액센트 보더 인용 박스 |
| **인용/추천사** | `.info-card > blockquote.linkedin-quote > .linkedin-quote-text + .linkedin-quote-cite` | light | 좌측 3px `--primary` 보더, parchment bg, italic |
| **외부 사진 갤러리 (관련 사진 N장)** | `.project-gallery` | dark | `auto-fit minmax(220px, 1fr)` 4:3 크롭, `--rounded-sm` |
| **자유 본문 사진 1장** | `.project-image > img` | dark | `--rounded-sm`, no border, no shadow |
| **CTA 한 쌍 (의뢰/문의)** | `.contact-cta-wrap > h2 + p + .contact-cta-actions > .btn-pill-primary + .btn-pill-secondary` | light | 가운데 정렬, 두 pill 12px gap |
| **외부 링크 모음 (사이트맵)** | `.footer-grid > .footer-col-title + .footer-link` | parchment | 4컬럼 (2fr / 1fr / 1fr / 1fr) |

### 4.1 아이콘 그래머

* **모든 아이콘은 Bootstrap Icons (`bi-*`).** 외부 SVG 아이콘 세트 도입 금지.
* `<h3>` 내부 아이콘은 `color: var(--primary)`, font-size 22px (info-card h3 기준).
* `.icon-circle` 은 48×48px 원, parchment bg, primary icon 색, 22px 아이콘.
* 다크 면(`project-band`) 안의 아이콘은 `--on-dark` 또는 `--body-muted` 톤.
* 화살표(`bi-arrow-down-circle`, `bi-arrow-right`)는 _점프/액션 방향_ 을
  뜻하는 곳에만. 단순 데코로 쓰지 않는다.

### 4.2 chip / badge 통합 정책

페이지에는 사실상 **두 종류의 칩**만 존재한다. 새 페이지에서도 이 두 가지만 쓴다.

1. **Parchment chip** (가장 일반적인 라벨)
   * 12px / 400 / `--ink-muted-80`, `--canvas-parchment` bg,
     `--hairline` 1px border, `--rounded-pill`, padding `3~5px 10~14px`.
   * 적용: `.stack-chip`, `.badge-notion.tag-*`, `.cohort-meta .badge`(부트스트랩 색상 무력화), `.project-org`(다크 위에서는 transparent + 흰 보더 버전).
2. **Issuer chip** (자격증 발급기관 등 인라인 마이크로 라벨)
   * 12px / 400, `--canvas-parchment` bg, **보더 없음**, `--rounded-xs (5px)`,
     padding `2px 8px`.
   * 적용: `.timeline .badge-issuer`.

> **컬러 칩 금지.** 부트스트랩의 `bg-primary`, `bg-success` 등은 CSS 에서
> `!important` 로 parchment 칩으로 강제 변환되어 있다. 새 페이지에서도
> 색상 분기 칩을 추가하지 않는다.

---

## 5. 핵심 컴포넌트 상세

### 5.1 글로벌 Nav (`.global-nav`)

* `position: sticky; top: 0; z-index: 1000; height: 44px; background: #000;`
* 좌: 24px 흰 아이콘 + 14px / 600 브랜드명.
* 가운데: 12px / 400 텍스트 링크들, opacity 0.85 → hover 1.
* 우: `.btn-utility-dark` (Contact) + `.btn-utility-blue` (LinkedIn) +
  `.nav-mobile-toggle` (햄버거).
* **833px 이하**: nav-links 와 두 utility 버튼 숨김, 햄버거만 노출.
  클릭 시 `.mobile-drawer` 가 fixed full-height 로 슬라이드.

### 5.2 버튼 그래머 (4종)

| 버튼 | shape | bg | text | size | 사용처 |
|---|---|---|---|---|---|
| `.btn-pill-primary` | pill | `--primary` | `--on-dark` | 17px / 400, 12px·22px | 1차 CTA (이메일 의뢰) |
| `.btn-pill-secondary` | pill 1px border | transparent | `--primary` | 17px / 400, 11px·22px | 2차 CTA (LinkedIn) |
| `.btn-utility-dark` | 8px rect | `--ink` (#1d1d1f) | `--on-dark` | 14px / 400, 8px·15px | nav Contact |
| `.btn-utility-blue` | 8px rect | `--primary` | `--on-dark` | 14px / 400, 8px·15px | nav LinkedIn |

* 4종 모두 `transition: transform 150ms ease`, active 시 `scale(0.95)`.
* primary 만 `:focus-visible` 시 2px outline.
* 신규 페이지에서 또 다른 형상(e.g. ghost dark pill) 을 추가하지 말 것.

### 5.3 카드 패밀리

| 카드 | bg | border | radius | padding | shadow |
|---|---|---|---|---|---|
| `.info-card` | `--canvas` | 1px `--hairline` | 18px | 32px | none |
| `.highlight-card` | `--canvas` | 1px `--hairline` | 18px | 32px | none |
| `.stat-card` | `--canvas` | 1px `--hairline` | 18px | 32px / 24px | none |
| `.cohort-card` | `--canvas` | 1px `--hairline` | 18px | (header 24·32 + body 24·32·32) | none |
| `.comparison-table`(외곽) | `--canvas` | 1px `--hairline` | 18px | overflow hidden | none |
| `details.evidence-details` | `--canvas` | 1px `--hairline` | 11px | summary 14·18, body 16 | none |
| `.ad-revenue-block` | `rgba(255,255,255,0.03)` | 1px `--hairline-on-dark` | 11px | header 22·24 + 14 | none |

> **공통:** `:hover` 에서 transform·shadow 가 일체 변경되지 않는다.
> Apple 원칙 그대로 — _카드는 누르는 것이 아니라 읽는 것_.

### 5.4 Timeline (학력/자격 등)

```
li {
  border-left: 1px solid var(--hairline);
  padding-left: 24px;
  padding-bottom: 24px;
  margin-left: 4px;
}
li::before { 9×9 원, top:4px, left:-5px, background: var(--primary); }
```

* `.period` 14px / 600 / `--primary`.
* `.title` 17px / 600 / `--ink`.
* `.desc` 14px / 400 / `--ink-muted-80`.
* 자격증 발급기관은 `.title` 우측에 `.badge-issuer` 인라인 칩으로.

### 5.5 Comparison Table (강의 / 경력)

* 외곽 `.comparison-table` = 1100px 카드 (18px radius, hairline 보더, overflow hidden).
* `<thead> th` : parchment bg, **uppercase**, 12px / 600 / `--ink`,
  letter-spacing -0.01em, padding 16·20, bottom hairline.
* `<tbody> td` : 14px / 400 / `--ink`, padding 16·20, bottom hairline.
* `tbody tr:hover` 만 `--surface-pearl (#fafafc)` row 하이라이트
  (유일하게 살아남은 hover 인터랙션 중 하나).
* `<td><strong>` 600 / `--ink` (회사명 강조).
* 운영기관 컬럼은 `.badge-notion.tag-*` (parchment chip) 로 통일.
* `<th>` 폭은 inline `style="width: 200px"` 으로 컬럼별 지정 가능.

### 5.6 Highlight Card (3핵심역량 패턴)

* `.icon-circle` (48×48 parchment, primary 아이콘) → h3 → `<ul>`.
* `<ul>` 의 각 `<li>` 는 좌측 22px 들여쓰기, `::before` 가
  bootstrap-icons 의 체크-원형(`\F270`) glyph 를 파란색으로 출력.
* `.lead-line` 은 17px / 600, `.sub-line` 은 14px / 400 / muted.
* `.sub-line` 이 다른 섹션으로 점프하는 링크면 `.sub-line-link` 적용:
  * 텍스트 색은 muted (`--ink-muted-80`) 유지, **언더라인 없음**,
    우측에 `bi-arrow-down-circle` 아이콘.
  * hover 시 텍스트 + strong + 아이콘 전부 `--primary` 로 슬라이드.
* 동일 카드 안에 기술 스택을 보이려면 `<div class="mt-2">` 안에
  `.stack-chip` 들을 wrap 한다 (Bootstrap utility class 활용).

### 5.7 Stat Card (큰 수치)

* 가운데 정렬, padding 32·24, height 100%.
* `.stat-number` 48px / 600 / `--primary` (헤드라인 색 예외).
* `.stat-label` 17px / 600 / `--ink`.
* `.stat-sub` 14px / 400 / muted.
* 한 행에 3장 권장 (col-md-4). 새 페이지에서 더 많이 쓰려면 2장 또는
  4장으로 늘려도 좋으나 토큰은 그대로.

### 5.8 Cohort Card (기수별 트랙 레코드)

* 카드 안에 `cohort-header` + `cohort-body` 두 블록을 hairline 으로 분리.
* `cohort-header h3` 21px / 600, 좌측에 `bi-mortarboard-fill` 아이콘 (primary).
* `cohort-header .cohort-meta` 안의 `.badge.bg-primary` / `.bg-success` 는
  CSS 에서 강제로 parchment chip 으로 변환되어 있음 — 부트스트랩의
  컬러 분기를 살리지 않는다.
* `cohort-body` 안에는 `<div class="col-md-6">` 두 개로 만족도/후기 등
  2개의 `<details open class="evidence-details">` 토글을 나란히 배치.

### 5.9 Evidence Details + Image Button (증빙 이미지 토글)

```html
<details open class="evidence-details">
  <summary><i class="bi bi-bar-chart-fill"></i>만족도 조사</summary>
  <div class="evidence-body">
    <button class="evidence-image-btn"
            data-bs-toggle="modal" data-bs-target="#evidenceModal"
            data-bs-image="..."  data-bs-caption="...">
      <img src="..." loading="lazy">
      <span class="evidence-zoom-hint">
        <i class="bi bi-zoom-in"></i>원본 보기
      </span>
    </button>
  </div>
</details>
```

* `summary` 의 chevron 은 bootstrap-icons `\F285` 글리프를 `transform: rotate`
  로 토글. `open` 상태일 때 summary 행이 parchment 로 살짝 어두워짐.
* 썸네일 이미지는 기본적으로 `max-height: 260px; object-fit: cover; object-position: top`.
  **인포카드 안의 full-width 스크린샷**에는 `.is-natural` 클래스를 추가해
  높이 제한을 풀어 자연 비율로 보여준다 (만족도 그래프, LinkedIn 추천사).
* hover/focus 시 이미지가 `scale(1.02)` + 우하단 `--ink` pill 의 zoom-hint
  가 fade-in 한다.

### 5.10 Pull-quote / Summary 박스

두 가지 좌측 액센트 보더 박스가 있다.

* `.linkedin-quote` — left 3px solid `--primary`, parchment bg,
  14px italic 본문 + 12.5px / 600 / `--primary` 인용자.
* `.evidence-summary` — left 3px solid `--ink`, parchment bg,
  14px line-height 1.55, `.evidence-summary-clients` 600 / `--ink` 윗줄 +
  `.evidence-summary-tag` 400 muted 아랫줄.

> 두 박스는 `border-radius: 0 6px 6px 0` 로 좌측은 각지게, 우측만 라운드한다.

### 5.11 Project Band (다크 풀-블리드)

```
.project-band   {  base: surface-tile-1, padding 96px 0  }
   .tone-2      { surface-tile-2  (한 단계 밝게)            }
   .tone-3      { surface-tile-3  (한 단계 어둡게)            }
   .short       { 패딩 그대로 96px (mobile: 64px)            }
   .has-chart   { overflow: clip — 차트 sticky 가 viewport 까지 닿게 허용 }
```

* `.band-photo` 는 `position: absolute; inset: 0`,
  `filter: brightness(0.45) contrast(1.0) saturate(0.85); opacity: 0.7`.
* 사진 종류는 클래스로: `.lecture / .workshop / .overseas / .starfield`.
  `.starfield` 는 _사진 없음_ 을 의미 (background-image: none, opacity: 0)
  — 사진 자산이 없는 프로젝트에서 같은 골격을 쓰기 위한 fallback.
* `.project-content` 는 z-index 2 로 사진 위에 1100px 컨테이너로 떠 있음.
* **메타 행**: `.project-num` ("M-01", 12px / 600 caps, 좌측에 20px 가로 hr)
  + `.project-org` (12px / 600 caps, 흰 보더 pill).
* **본문 ul**: 상하 1px hairline-on-dark, 각 `<li>` 18px 패딩, 17px / 1.47.
* `<ul><li><ul>` 2단계 중첩 허용: 자식 ul 은 `→` 화살표 글리프 마커 (자식 li 12px 패딩, 15px / muted).

### 5.12 Specs Table (다크 밴드 안의 표)

* 풀-너비, 상하 1px hairline-on-dark, 행마다 1px hairline-on-dark.
* `<thead> th` 12px / 600 caps / `--on-dark`.
* `<tbody> td/th` 14px / 400 / `--body-muted`.
* `<tr.highlight-row>` 의 td/th 는 `--on-dark` 풀-화이트로 강조.

### 5.13 Metric Callout (다크 밴드 안의 큰 수치)

```html
<div class="metric-callout">
  <div class="metric-label">2년간 단독 책임개발 성과</div>
  <div class="metric-value">광고 매출 2배 이상 성장 · 개발 장애율 0%</div>
</div>
```

* 상하 1px solid rgba(255,255,255,0.5) 보더, padding 24px 0, margin 28px 0.
* label : 12px / 600 caps / muted.
* value : 34px / 600 / `--on-dark` (모바일 26px).

### 5.14 Footer (`.footer-region`)

* parchment bg, padding 48·0·24.
* `.footer-grid` 4컬럼 `2fr 1fr 1fr 1fr`, gap 32px, max 1100px.
  833px 이하 2컬럼, 576px 이하 1컬럼.
* `.footer-link` 12px / 400 / muted, line-height **2.4** (Apple 의 dense link 룰).
* 최하단 `.footer-bottom` 은 top hairline + space-between 으로
  카피라이트 / "Designed with the Apple design system." 좌우 정렬.

---

## 6. 이미지 처리 방향

### 6.1 이미지 자산 위치 규약

* 페이지 전반에 쓰이는 영구 자산은 `assets/` 루트.
* 특정 섹션에만 쓰이는 자산은 `pages/assets/<섹션-슬러그>/` 하위.
  (예: KDT 만족도/후기 이미지는 `pages/assets/2024-2025년-kdt-장기과정-2기수-연속-100-수료/`).
* 파일명은 **소문자-케밥-케이스** (`linkedin-recommendation-kakao-kidsnote.png`).
  한국어 디렉터리는 자산 그룹의 가독성을 위해서만 허용.

### 6.2 이미지 사용 패턴 4종

1. **원형 프로필 사진** (`.profile-photo`)
   * `aspect-ratio: 1/1; border-radius: 50%; object-fit: cover`.
   * `--shadow-product` 가 적용되는 **유일한 곳**.
2. **다크 밴드 배경 사진** (`.band-photo`)
   * `position: absolute; inset: 0; background-size: cover; background-position: center`.
   * `filter: brightness(0.45) saturate(0.85); opacity: 0.7` 로 그레이딩.
   * 새 프로젝트 추가 시 같은 필터 값을 그대로 사용한다 (사진별 보정 금지).
3. **인-바디 본문 사진** (`.project-image`, `.project-gallery`)
   * 보더 없음, `--rounded-sm` (8px).
   * 갤러리는 `auto-fit minmax(220px, 1fr)` 그리드 + `aspect-ratio: 4/3`
     `object-fit: cover` 균일 크롭.
4. **증빙 이미지** (`.evidence-image-btn` / `.evidence-image-btn.is-natural`)
   * 모달 트리거 버튼. 썸네일은 max-height 260px (또는 자연 높이).
   * `loading="lazy"` 필수. alt 텍스트는 한국어 자연어 문장.

### 6.3 이미지 alt / 접근성

* 모든 `<img>` 는 alt 보유. 장식용 아이콘은 `aria-hidden="true"` + 빈 alt.
* `evidence-image-btn` 은 `aria-label="<설명> 이미지 확대 보기"` 필수.
* 모달 닫기는 ESC + 우상단 close 버튼 + 백드롭 클릭 모두 동작 (Bootstrap 기본).

---

## 7. 모달 처리 방향 (`#evidenceModal`)

이 페이지는 **단 1개의 글로벌 라이트박스 모달**만 운영한다.
모든 증빙 이미지가 같은 모달을 트리거한다.

### 7.1 마크업 골격

```html
<div class="modal fade" id="evidenceModal" tabindex="-1"
     aria-labelledby="evidenceModalCaption" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <button class="btn-close" data-bs-dismiss="modal" aria-label="닫기"></button>
      <div class="modal-body">
        <img id="evidenceModalImage" src="" alt="" />
        <p class="modal-caption" id="evidenceModalCaption"></p>
      </div>
    </div>
  </div>
</div>
```

### 7.2 동작 규약

* 트리거는 `<button data-bs-toggle="modal" data-bs-target="#evidenceModal"
  data-bs-image="..." data-bs-caption="...">` 패턴.
* `show.bs.modal` 이벤트에서 `relatedTarget` 의 `data-bs-image / data-bs-caption`
  (없으면 inner `<img>` 의 src/alt) 을 읽어 모달의 img/caption 으로 주입.
* `hidden.bs.modal` 에서 src 와 caption 을 비워 누수 방지.

### 7.3 시각 규약

* `.modal-content` 는 **투명·보더 0·shadow 0 + `width: fit-content`** 으로
  실제 이미지 폭에 딱 맞게 줄어든다. modal-xl 의 1140px 회색 박스 안에서
  작은 스크린샷이 둥둥 떠 있는 느낌을 제거.
* `.modal-body` padding 0, text-align: center.
* `img { max-height: 86vh; border-radius: var(--rounded-sm); background: white }`.
* 캡션은 12·0 마진, 14px, `rgba(255,255,255,0.92)`.
* close 버튼은 `top: -2.5rem; right: 0; filter: invert(1) brightness(1.5)`
  — 이미지 위가 아니라 _이미지 바깥 위쪽_ 에 흰색으로 떠 있게 한다.

> 새 페이지에서 라이트박스가 필요하면 이 모달을 재사용한다 (모달을 추가로
> 만들지 않는다). 캡션·이미지 경로만 트리거 버튼에 넘기면 된다.

---

## 8. 차트 처리 방향 (Ad-Revenue Chart 패턴)

`pjt 03 — 카카오 키즈노트`(`section.project-band.tone-3.has-chart`) 안에
들어있는 시계열 막대 그래프가 **이 디자인 시스템의 차트 레퍼런스 구현**이다.
시계열 정량 데이터를 보여주는 차트는 동일 패턴을 따른다.

### 8.1 마크업 구조

```html
<div class="ad-revenue-block" data-chart-block>
  <header class="ad-revenue-header">
    <p class="ad-revenue-eyebrow">…</p>
    <h4 class="ad-revenue-title">…</h4>
    <p class="ad-revenue-sub">… <span class="ad-revenue-dot"></span> …</p>
  </header>
  <div class="ad-revenue-scroll-track" data-chart-track>
    <div class="ad-revenue-sticky" data-chart-sticky>
      <div class="ad-revenue-scroller" data-chart-scroller>
        <div class="ad-revenue-canvas-wrap">
          <canvas id="…Chart" aria-label="…"></canvas>
        </div>
      </div>
      <p class="ad-revenue-hint">
        <span class="hint-desktop">↔ 마우스 휠을 굴리면 …</span>
        <span class="hint-mobile">↕ 페이지를 내리면 …</span>
      </p>
    </div>
  </div>
</div>
```

### 8.2 표면

* 카드 외곽 `rgba(255,255,255,0.03)` bg + 1px hairline-on-dark + `--rounded-md`.
* 헤더 padding 22·24·14, eyebrow 11px / 600 caps / `--primary-on-dark`,
  타이틀 22px / 600 / `--on-dark`, sub 13px / muted.
* `.ad-revenue-dot` 은 9×9 `--primary-on-dark` 원 (재직기간 표식 범례용).

### 8.3 데이터 & 색 그래머 (Chart.js)

* **Bar chart**: 한 컬럼 = 한 시점 (예: 1개월).
* 카테고리/기간 분기 색:
  * **강조 구간** (재직기간 등): `#2997ff` (`--primary-on-dark`), hover `#5ab0ff`.
  * **기준 구간**: `rgba(255,255,255,0.22)`, hover `rgba(255,255,255,0.35)`.
* `borderRadius: 3, categoryPercentage: 0.78, barPercentage: 0.92`.

### 8.4 부가 시각요소

* **막대 위 값 라벨 (`barValueLabelsPlugin`)**: Chart.js custom plugin 으로
  각 막대 상단에 `x.x억` 형식 텍스트. 강조 구간은 0.92 alpha 흰색, 기준
  구간은 0.5 alpha.
* **수평 기준선 (`referenceLinesPlugin`)**: 4개 — `기존 평균/최대` 는
  레드 (`#ff8b8e` text, `rgba(255,90,95,0.65)` line), `재직 평균/최대` 는
  블루. dashed `[5,4]`, 라벨은 좌측 정렬 + `rgba(15,18,26,0.78)` 다크 칩
  배경 + 4px radius. 차트 상단 가까운 라벨은 라인 _아래_ 에 그려 클리핑 방지.
* **Y축 양쪽 미러링**: `y` (left) + `y1` (right) 둘 다 동일 스케일/틱 표시,
  grid 없음. 데이터셋은 y 한쪽만 참조.
* **X축 라벨**: 1월(연도 prefix 포함) 은 0.85 alpha + 11px / 600,
  나머지 월은 0.5 alpha + 10px / 400, `maxRotation 55 / autoSkip false`.
* **툴팁**: bg `rgba(20,20,24,0.95)`, displayColors false, 본문에 원 단위
  `toLocaleString("ko-KR")` 풀 텍스트 + "· 재직 기간" 태그.

### 8.5 인터랙션 (시그니처)

* **데스크톱 (>734px)**: `.ad-revenue-block` 위에서 마우스 휠 발생 시
  세로 deltaY 를 가로 `scrollLeft` 로 리다이렉트. 스크롤 양끝에서는
  리다이렉트 해제해 페이지 세로 스크롤로 자연스럽게 빠져나간다.
* **모바일 (≤734px)**: `.ad-revenue-scroll-track` 의 height 를 `220vh`
  로 늘리고 `.ad-revenue-sticky { position: sticky; top: 50%;
  transform: translateY(-50%) }` 으로 화면 가운데에 고정.
  사용자가 페이지를 세로로 내리면 그 진행도가 차트의 가로 스크롤로
  변환된다 (sticky scroll-jacking). 모바일에서는 `.ad-revenue-scroller`
  자체 가로 스크롤은 막고 `touch-action: pan-y` 유지.

### 8.6 캔버스 크기

* 데스크톱: `width: 1760px; height: 360px; padding: 10px 24px 4px`.
* 모바일: `width: 1280px; height: 300px`.
* canvas 자체는 100% 자식이므로 wrap 크기로 풀-너비/높이 결정.

### 8.7 새 차트 추가 가이드

새 페이지에 시계열 차트가 필요하면 다음을 그대로 복제한다:
* `ad-revenue-*` CSS 토큰 (block / header / sticky / scroller / canvas-wrap / hint).
* 두 inline 플러그인(`barValueLabelsPlugin`, `referenceLinesPlugin`).
* 데스크톱 wheel-redirect / 모바일 sticky scroll-jacking 두 IIFE.
* **항상 `project-band.has-chart`** 부모를 가져야 sticky 가 viewport 까지
  닿는다. 그렇지 않으면 `overflow: clip` 이 작동하지 않는다.

> 막대 외의 차트 (라인/도넛 등) 가 필요하면 동일 카드 외곽과 동일 색
> 시스템(`--primary-on-dark` + `rgba(255,255,255,0.22)`)을 유지하되, 막대
> 전용 플러그인 둘은 빼고 Chart.js 기본 옵션을 쓴다.

---

## 9. 마이크로 인터랙션 / 모션

| 인터랙션 | 트리거 | 효과 | duration |
|---|---|---|---|
| 모든 pill·utility 버튼 active | `:active` | `transform: scale(0.95)` | 150ms ease |
| evidence-image 줌 힌트 | hover/focus 시 | hint pill `opacity 0 → 1` + `translateY(4px → 0)` | 200ms ease |
| evidence-image 이미지 | hover/focus 시 | `transform: scale(1.02)` | 300ms ease |
| details/summary chevron | open 토글 | `transform: rotate(90deg)` | 200ms ease |
| 인페이지 점프 착지 카드 | `:target` 매칭 | `targetPulse` (blue ring 0 → 12px → 0) | 1.6s ease-out |
| 차트 막대 | initial render | Chart.js animation | 600ms |
| sub-line-link | hover | text+strong+icon → `--primary` | 150ms ease |
| 본문 스크롤 | 모든 페이지 | smooth scroll | browser default |

> **금지된 모션**: 카드 hover 시 elevate (translateY/shadow 증가), parallax,
> 스크롤 페이드인, 자동 회전 캐러셀. 이 페이지는 거의 정적이며,
> _움직임은 사용자 입력의 직접 응답일 때만_ 발생한다.

---

## 10. 반응형 일괄 룰

### 10.1 Breakpoint 표

| 이름 | 폭 | 핵심 변화 |
|---|---|---|
| Wide desktop | ≥ 1024px | 모든 그리드 풀 컬럼 |
| Tablet landscape | ≤ 1024px | hero h1 56 → 48 |
| Tablet portrait | ≤ 833px | global-nav 메뉴/utility 숨김, 모바일 햄버거. hero 1컬럼·중앙. footer 4→2 컬럼 |
| Phone large | ≤ 734px | tile padding 80→48. project-band 96→64. hero h1 → 40. project-title → 30. metric-value → 26. ad-revenue 모바일 sticky scroll-jacking 활성화 |
| Phone medium | ≤ 640px | hero h1 → 34. tagline → 17 |
| Phone small | ≤ 575.98px | evidence 썸네일 220px max-height. footer 2→1 컬럼 |

### 10.2 모바일 전용 UI

* `.nav-mobile-toggle` (햄버거) 와 `.mobile-drawer` (top:44px fixed full
  height, 검은 bg, 17px 흰 텍스트 + 하단 hairline-on-dark) 가
  833px 이하에서 활성화.
* `.hint-mobile` ↔ `.hint-desktop` 토글로 차트 안내문이 바뀜.

### 10.3 Print (`@media print`)

* nav / mobile-drawer / footer 숨김.
* 모든 다크 면(`tile-dark*`, `project-band`) bg → 흰색, 본문 색 → ink 로 강제 변환.
* `.band-photo` 숨김. 카드 box-shadow 제거.
* tile / hero padding → 1.5rem.

---

## 11. 접근성 / 시멘틱

* 모든 섹션은 `<section id="…">` + 내부 `<h2>` 1개를 가진다.
  글로벌 nav 의 모든 항목은 이 id 로 점프한다.
* Hero 는 `<header id="top">`, 메인 표지 영역.
* 아이콘은 `aria-hidden="true"` 또는 button/link 가 의미를 제공하는 형태.
* 모든 인터랙티브 요소는 키보드 포커스 가능 (`button`, `<a>`).
* `:focus-visible` outline 2px `--primary-focus` 일관 적용.
* 모달은 `role="dialog"` (Bootstrap), `aria-labelledby` 로 캡션 참조,
  `aria-hidden` 토글 자동.
* alt 텍스트는 한국어 자연어 문장 (스크린리더 친화).
* `loading="lazy"` 는 hero/above-the-fold 외 모든 이미지에 적용.
* 컬러 컨트라스트: 본문은 `--ink (#1d1d1f)` on white 로 WCAG AAA,
  muted (`#333`) 도 AA 이상. 다크 면에서는 `--on-dark` 또는 `--body-muted`
  로 AA 이상 확보.

---

## 12. 새 페이지 작성 체크리스트

새 페이지(예: 사이드 프로젝트 상세, 강의 후기 모음 등)를 추가할 때
다음 순서를 따른다.

1. [ ] **CSS 임포트는 1개**: `05-business-profile-merged.css` 만. 새
       토큰 정의 금지. 새 페이지 전용 스타일이 꼭 필요하면 동일 파일에
       섹션을 추가하고 토큰만 참조.
2. [ ] **head 폰트 로딩 그대로**: Bootstrap 5.3.3, Bootstrap Icons 1.11.3,
       Inter, Pretendard Variable.
3. [ ] **Global nav + Mobile drawer 그대로 복제.**
4. [ ] **타일 알터네이션 검증**: light → parchment → light → parchment →
       (다크 진입) → light closing → footer.
5. [ ] **콘텐츠 유형 표(4장) 으로 컴포넌트 결정.**
6. [ ] **칩/배지/버튼은 §5.2, §4.2 의 종류로 한정.**
7. [ ] **이미지/모달/차트는 §6·§7·§8 패턴 그대로 사용.** 신규 라이트박스
       모달을 만들지 않는다.
8. [ ] **모션은 §9 의 화이트리스트 안에서만.** hover elevate / parallax /
       autoplay carousel 금지.
9. [ ] **반응형 다운스텝은 §10 의 break 와 사이즈를 그대로 따른다.**
10. [ ] **풋터를 동일 컬럼/링크 컬렉션으로 마무리하고 `© <span id="year"></span>`
        + 자바스크립트 1줄로 연도 자동 업데이트.**

---

## 13. Known Gaps / 향후 결정 보류

* **다크 모드 전체 대응**: 본 페이지는 라이트 우선이며, 다크 영역은
  project-band 세 톤만 다룬다. OS 다크 모드 미디어 쿼리는 아직 정의하지 않음.
* **폼/입력**: contact 페이지를 별도 페이지로 분리할 때 input 토큰을
  추가해야 한다 (현재는 mailto 링크만 사용).
* **다국어 (영문)**: `assets/enterprise-it-training-satisfaction_en.png`
  자산은 있으나 i18n 라우팅/네비 전환 정책은 미정.
* **차트 라이브러리 확장**: 라인/도넛이 필요해질 때 §8.7 가이드만으로는
  부족할 수 있다. 그때 토큰을 정식화한다.
* **애니메이션 지속시간 토큰화**: 현재 150/200/300/600/1600ms 가 인라인
  값으로 흩어져 있다. 빈도가 더 늘어나면 `--motion-quick`, `--motion-base`
  같은 토큰으로 승격을 고려.
