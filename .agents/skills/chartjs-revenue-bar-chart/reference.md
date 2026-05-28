# reference — 전체 소스 (복붙용)

이 파일은 두 가지를 제공한다.

- **A. 자기완결(single-file) 버전** — 프로젝트 의존성(i18n/커스텀 훅) 없이 어떤 React 프로젝트에도 그대로 떨어뜨려 동작. *재현이 목적이면 이것부터 복사.*
- **B. 원본 프로젝트 파일 3종** — `profile-vibe`의 실제 구현(컴포넌트 / 훅 / CSS)과 i18n 연동 패턴. 프로젝트 컨벤션을 그대로 따를 때 참고.

---

## A. 자기완결 단일 파일 버전

`chart.js`, `react-chartjs-2`만 있으면 동작한다. i18n·스크롤잭킹 훅을 파일 안에 inline 했고, 색/포맷은 상단 상수로 노출했다. CSS는 A-2에 있다.

### A-1. `RevenueBarChart.tsx`

```tsx
import { useEffect, useMemo, useRef } from "react";
import {
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Chart as ChartJS,
  type Chart,
  type ChartOptions,
  type Plugin,
  type TooltipItem,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

/* ─────────────── 1. 설정: 새 차트는 이 블록만 바꾸면 된다 ─────────────── */

// 월별 값 (단위는 자유: 여기선 "백만원" = 1 unit). 첫 항목 = startYear 1월.
const VALUES: readonly number[] = [
  280, 260, 245, 290, 310, 355, 325, 320, 270, 345, 435, 375, // Y0
  270, 325, 505, 470, 445, 440, 385, 365, 450, 625, 745, 680, // Y1
  720, 690, 820, 735, 665, 490, 600, 625, 560, 750, 1050, 1060, // Y2
  825, 805, 1000, 1000, 895, 800, 830, // Y3 (1~7월)
];
const START_YEAR = 2020;
const TENURE_START = 20; // 이 인덱스부터 강조 구간

const Y_MAX = 1320; // ≈ max(VALUES) × 1.25 를 stepSize 단위로 올림
const Y_STEP = 200;
const CANVAS_WIDTH = VALUES.length * 37; // 막대 수 × ~37px

const COLOR_TENURE = "#2997ff";
const COLOR_TENURE_HOVER = "#5ab0ff";
const COLOR_BEFORE = "rgba(255, 255, 255, 0.22)";
const COLOR_BEFORE_HOVER = "rgba(255, 255, 255, 0.35)";
const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, "Noto Sans KR", sans-serif';

const MONTHS_KO = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

// 포맷(한국어 억 기준). 도메인에 맞게 교체.
const fmtAxis = (v: number) => (v === 0 ? "0" : `${(v / 100).toFixed(0)}억`);
const fmtBar = (v: number) => `${(v / 100).toFixed(1)}억`;
const fmtRef = (v: number) => `${parseFloat((v / 100).toFixed(2))}억`;

/* ─────────────── 2. 파생 통계 ─────────────── */

const avg = (a: readonly number[]) => a.reduce((x, y) => x + y, 0) / a.length;
const stats = {
  preAvg: avg(VALUES.slice(0, TENURE_START)),
  preMax: Math.max(...VALUES.slice(0, TENURE_START)),
  tenureAvg: avg(VALUES.slice(TENURE_START)),
  tenureMax: Math.max(...VALUES.slice(TENURE_START)),
};
const colorFor = (i: number, hover: boolean) =>
  i >= TENURE_START
    ? hover ? COLOR_TENURE_HOVER : COLOR_TENURE
    : hover ? COLOR_BEFORE_HOVER : COLOR_BEFORE;

function buildLabels(): string[] {
  const out: string[] = [];
  for (let i = 0; i < VALUES.length; i++) {
    const m = i % 12;
    out.push(m === 0 ? `${START_YEAR + Math.floor(i / 12)} 1월` : MONTHS_KO[m]);
  }
  return out;
}
function tooltipTitle(i: number): string {
  return `${START_YEAR + Math.floor(i / 12)}년 ${(i % 12) + 1}월`;
}
// 연도 라벨("2020 1월")은 월 라벨("2월")보다 길다 → 길이로 구분.
const isYearLabel = (l: unknown) => typeof l === "string" && l.length > 3;

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
) {
  if (typeof (ctx as { roundRect?: unknown }).roundRect === "function") {
    ctx.beginPath();
    (ctx as CanvasRenderingContext2D & { roundRect: (x:number,y:number,w:number,h:number,r:number)=>void })
      .roundRect(x, y, w, h, r);
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* ─────────────── 3. scroll-jacking 훅 (inline) ─────────────── */

function useChartScrollJacking(refs: {
  blockRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  stickyRef: React.RefObject<HTMLDivElement | null>;
  scrollerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { blockRef, trackRef, stickyRef, scrollerRef } = refs;
  useEffect(() => {
    const block = blockRef.current, track = trackRef.current;
    const sticky = stickyRef.current, scroller = scrollerRef.current;
    if (!block || !track || !sticky || !scroller) return;
    const isMobile = () => window.matchMedia("(max-width: 734px)").matches;

    const onWheel = (e: WheelEvent) => {
      if (isMobile()) return;
      const dy = e.deltaY;
      if (dy === 0) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      if ((scroller.scrollLeft <= 0 && dy < 0) || (scroller.scrollLeft >= max && dy > 0)) return;
      e.preventDefault();
      scroller.scrollLeft += dy;
    };

    let ticking = false;
    const update = () => {
      if (!isMobile()) return;
      const rect = track.getBoundingClientRect();
      const runway = rect.height - (sticky.offsetHeight ?? 0);
      if (runway <= 0) return;
      const progress = Math.min(Math.max((window.innerHeight * 0.5 - rect.top) / runway, 0), 1);
      const max = scroller.scrollWidth - scroller.clientWidth;
      if (max <= 0) return;
      scroller.scrollLeft = progress * max;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(); ticking = false; });
    };
    const onResize = () => { if (isMobile()) update(); };

    block.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const raf = requestAnimationFrame(update);
    return () => {
      block.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [blockRef, trackRef, stickyRef, scrollerRef]);
}

/* ─────────────── 4. 컴포넌트 ─────────────── */

export function RevenueBarChart() {
  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useChartScrollJacking({ blockRef, trackRef, stickyRef, scrollerRef });

  const labels = useMemo(buildLabels, []);

  const barValueLabelsPlugin: Plugin<"bar"> = useMemo(() => ({
    id: "barValues",
    afterDatasetsDraw(chart: Chart) {
      const meta = chart.getDatasetMeta(0);
      if (!meta?.data) return;
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = `600 10px ${FONT_STACK}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      meta.data.forEach((bar, i) => {
        const v = VALUES[i];
        if (typeof v !== "number") return;
        ctx.fillStyle = i >= TENURE_START ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.5)";
        ctx.fillText(fmtBar(v), bar.x, bar.y - 4);
      });
      ctx.restore();
    },
  }), []);

  const referenceLinesPlugin: Plugin<"bar"> = useMemo(() => ({
    id: "refLines",
    afterDatasetsDraw(chart: Chart) {
      const area = chart.chartArea;
      const yScale = chart.scales.y;
      if (!area || !yScale) return;
      const RED = "rgba(255,90,95,0.65)", RED_T = "#ff8b8e";
      const BLUE = "rgba(64,156,255,0.78)", BLUE_T = "#5aafff";
      const refs = [
        { v: stats.preAvg,    line: RED,  text: RED_T,  label: `기존 평균 · ${fmtRef(stats.preAvg)}`,    above: true },
        { v: stats.preMax,    line: RED,  text: RED_T,  label: `기존 최대 · ${fmtRef(stats.preMax)}`,    above: true },
        { v: stats.tenureAvg, line: BLUE, text: BLUE_T, label: `재직 평균 · ${fmtRef(stats.tenureAvg)}`, above: true },
        { v: stats.tenureMax, line: BLUE, text: BLUE_T, label: `재직 최대 · ${fmtRef(stats.tenureMax)}`, above: false },
      ];
      const ctx = chart.ctx;
      ctx.save();
      for (const r of refs) {
        const y = yScale.getPixelForValue(r.v);
        if (y < area.top - 4 || y > area.bottom + 4) continue;
        ctx.strokeStyle = r.line;
        ctx.lineWidth = 1.4;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.moveTo(area.left, y);
        ctx.lineTo(area.right, y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = `600 11px ${FONT_STACK}`;
        ctx.textAlign = "left";
        ctx.textBaseline = r.above ? "bottom" : "top";
        const x = area.left + 18;
        const yOff = r.above ? -6 : 6;
        const tw = ctx.measureText(r.label).width;
        const padX = 7, padY = 3, h = 11 + padY * 2;
        const cx = x - padX;
        const cy = r.above ? y + yOff - 11 - padY : y + yOff - padY;
        ctx.fillStyle = "rgba(15,18,26,0.78)";
        roundRect(ctx, cx, cy, tw + padX * 2, h, 4);
        ctx.fill();

        ctx.fillStyle = r.text;
        ctx.fillText(r.label, x, y + yOff);
      }
      ctx.restore();
    },
  }), []);

  const data = useMemo(() => ({
    labels,
    datasets: [{
      label: "광고매출 (백만원)",
      data: [...VALUES],
      backgroundColor: VALUES.map((_, i) => colorFor(i, false)),
      hoverBackgroundColor: VALUES.map((_, i) => colorFor(i, true)),
      borderRadius: 3,
      borderSkipped: false as const,
      categoryPercentage: 0.78,
      barPercentage: 0.92,
    }],
  }), [labels]);

  const options = useMemo<ChartOptions<"bar">>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 600 },
    layout: { padding: { top: 8, right: 8, bottom: 0, left: 0 } },
    interaction: { mode: "nearest", intersect: true, axis: "x" },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(20,20,24,0.95)",
        titleColor: "#fff", bodyColor: "#ccc", padding: 12,
        borderColor: "rgba(255,255,255,0.15)", borderWidth: 1, displayColors: false,
        callbacks: {
          title: (c: TooltipItem<"bar">[]) => tooltipTitle(c[0].dataIndex),
          label: (c: TooltipItem<"bar">) => {
            const won = ((c.parsed.y ?? 0) * 1_000_000).toLocaleString("ko-KR");
            const tag = c.dataIndex >= TENURE_START ? "  · 재직 기간" : "";
            return `${won}원${tag}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          autoSkip: false, maxRotation: 55, minRotation: 55,
          color: (c) => isYearLabel(c.tick?.label) ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
          font: (c) => isYearLabel(c.tick?.label)
            ? { size: 11, weight: 600 }
            : { size: 10, weight: 400 },
        },
      },
      y: {
        position: "left", beginAtZero: true, min: 0, max: Y_MAX,
        grid: { color: "rgba(255,255,255,0.08)", drawTicks: false },
        border: { display: false },
        ticks: { color: "rgba(255,255,255,0.45)", padding: 10, stepSize: Y_STEP, callback: (v) => fmtAxis(+v) },
      },
      y1: {
        position: "right", beginAtZero: true, min: 0, max: Y_MAX,
        grid: { display: false, drawTicks: false }, border: { display: false },
        ticks: { color: "rgba(255,255,255,0.45)", padding: 10, stepSize: Y_STEP, callback: (v) => fmtAxis(+v) },
      },
    },
  }), []);

  return (
    <div className="ad-revenue-block" ref={blockRef}>
      <header className="ad-revenue-header">
        <p className="ad-revenue-eyebrow">Kidsnote · 광고매출 추이</p>
        <h4 className="ad-revenue-title">20 ~ 23년 키즈노트 광고매출</h4>
        <p className="ad-revenue-sub">월별 매출 (단위 · 백만원)</p>
      </header>
      <div className="ad-revenue-scroll-track" ref={trackRef}>
        <div className="ad-revenue-sticky" ref={stickyRef}>
          <div className="ad-revenue-scroller" ref={scrollerRef}>
            <div className="ad-revenue-canvas-wrap" style={{ width: CANVAS_WIDTH }}>
              <Bar data={data} options={options}
                   plugins={[barValueLabelsPlugin, referenceLinesPlugin]} />
            </div>
          </div>
          <p className="ad-revenue-hint">
            <span className="hint-desktop">↔ 마우스 휠을 굴리면 그래프가 좌우로 스크롤됩니다</span>
            <span className="hint-mobile">↕ 페이지를 내리면 그래프가 좌우로 펼쳐집니다</span>
          </p>
        </div>
      </div>
    </div>
  );
}
```

> 위 단일 파일은 다크 배경(흰색 텍스트 색상값) 기준이다. 라이트 테마면 텍스트/그리드 색만 바꾼다.

### A-2. CSS (단일 파일 버전용)

원본은 CSS 변수(`--color-*`, `--radius-md`)를 쓰지만, 아래는 변수 없이 동작하도록 풀어쓴 버전이다.

```css
.ad-revenue-block {
  margin: 28px 0;
  border-radius: 14px;
  background: rgb(255 255 255 / 0.03);
  border: 1px solid rgb(255 255 255 / 0.1);
  overflow: hidden;
  overflow: clip; /* scroll 컨테이너 만들지 않기 */
}
.ad-revenue-header {
  padding: 22px 24px 14px;
  border-bottom: 1px solid rgb(255 255 255 / 0.1);
}
.ad-revenue-eyebrow {
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: #2997ff; margin: 0 0 6px;
}
.ad-revenue-title {
  font-size: 22px; font-weight: 600; line-height: 1.2;
  color: #f5f5f7; margin: 0 0 6px;
}
.ad-revenue-sub { font-size: 13px; color: rgb(235 235 245 / 0.6); margin: 0; }

.ad-revenue-scroll-track { position: relative; }
.ad-revenue-sticky { padding: 18px 0 16px; }
.ad-revenue-scroller {
  overflow-x: auto; overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgb(255 255 255 / 0.18) transparent;
}
.ad-revenue-scroller::-webkit-scrollbar { height: 6px; }
.ad-revenue-scroller::-webkit-scrollbar-thumb { background: rgb(255 255 255 / 0.18); border-radius: 9999px; }
.ad-revenue-canvas-wrap { height: 360px; padding: 10px 24px 4px; } /* width는 컴포넌트에서 인라인 */
.ad-revenue-canvas-wrap canvas { width: 100% !important; height: 100% !important; display: block; }
.ad-revenue-hint { margin: 10px 24px 4px; font-size: 12px; color: rgb(235 235 245 / 0.6); text-align: center; }
.hint-desktop { display: inline; }
.hint-mobile { display: none; }

@media (max-width: 734px) {
  .ad-revenue-scroll-track { height: 220vh; }
  .ad-revenue-sticky { position: sticky; top: 50%; transform: translateY(-50%); padding: 14px 0; }
  .ad-revenue-scroller { overflow: hidden; touch-action: pan-y; }
  .ad-revenue-canvas-wrap { height: 300px; padding: 6px 16px 0; }
  .ad-revenue-header { padding: 18px 18px 12px; }
  .ad-revenue-title { font-size: 19px; }
  .hint-desktop { display: none; }
  .hint-mobile { display: inline; }
}
```

부모 밴드(차트를 감싸는 섹션)에도 `overflow: clip;`을 줘야 모바일 sticky가 viewport에 붙는다.

---

## B. 원본 프로젝트 파일 (profile-vibe 컨벤션)

프로젝트의 한/영 i18n과 분리된 훅/CSS를 그대로 따를 때 참고. 실제 경로:

- `app/src/components/projects/AdRevenueChart.tsx`
- `app/src/hooks/useChartScrollJacking.ts`
- `app/src/styles/chart.css` (`globals.css`에서 `@import "./chart.css"`)
- i18n: `app/src/i18n/projects.ts`(`KAKAO`), `app/src/i18n/useLang.ts`

### B-1. i18n 연동 패턴

값/라벨이 아니라 **카피(eyebrow, title, 기준선 라벨, 툴팁 태그, 월/연 라벨)** 가 한/영으로 갈린다. `useLang()`으로 현재 언어를 받고 `KAKAO.<key>[lang]`으로 꺼낸다. 포맷 함수는 `lang`을 인자로 받아 분기한다.

```ts
// app/src/i18n/projects.ts (발췌) — KakaoCopy 타입의 차트 관련 키
chartEyebrow, chartTitle, chartSubLead, chartHintDesktop, chartHintMobile,
tooltipTenureTag, refPreAvg, refPreMax, refTenureAvg, refTenureMax,
monthShort: Localized<readonly string[]>,        // ["1월"...] / ["Jan"...]
yearLabel: Localized<(year: number) => string>,  // ko: `${y-2000}년 1월`, en: `${y} Jan`
```

```tsx
// 컴포넌트에서
const { lang } = useLang();                       // "ko" | "en"
const labels = useMemo(() => buildLabels(lang), [lang]);
// 포맷 분기
function fmtAxis(v: number, lang: Lang) {
  if (v === 0) return "0";
  return lang === "ko" ? `${(v / 100).toFixed(0)}억` : `₩${v}M`;
}
```

언어가 바뀌면 `lang`에 의존한 `useMemo`(plugins/data/options)가 재생성되어 차트가 갱신된다.

### B-2. 원본 훅 (`useChartScrollJacking.ts`)

A-1에 inline 한 것과 동작 동일. 프로젝트에선 별도 파일로 분리되어 있으며, 주석에 "원본 vanilla JS(`05-business-profile-merged.html`)와 1:1 동작" 명시. 별도 파일로 쓰려면 `app/src/hooks/useChartScrollJacking.ts`를 그대로 복사한다.

### B-3. 원본 CSS (`chart.css`)

CSS 변수 사용 버전:

```css
@layer components {
  .ad-revenue-block {
    margin: 28px 0;
    border-radius: var(--radius-md);
    background: rgb(255 255 255 / 0.03);
    border: 1px solid var(--color-hairline-on-dark);
    overflow: hidden;
    overflow: clip;
  }
  .project-band.has-chart { overflow: hidden; overflow: clip; } /* 부모 밴드도 clip */
  /* …header/scroller/canvas-wrap/hint 및 @media (max-width:734px)는 A-2와 동일 구조… */
}
```

전체 규칙은 `app/src/styles/chart.css` 참고(A-2가 변수만 풀어쓴 동일 내용).

---

## 체크: 빌드 검증

```bash
cd app
npm run build   # tsc -b && vite build — 타입/번들 에러 확인
npm run dev     # 로컬에서 휠/세로 스크롤 동작 확인
```
