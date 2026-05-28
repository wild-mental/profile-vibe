---
name: chartjs-revenue-bar-chart
description: Chart.js + react-chartjs-2로 월별 매출 추이 막대 그래프(AdRevenueChart 형태)를 재현한다. 특정 기간 색 하이라이트, 막대 값 라벨/기준선 커스텀 플러그인, 데스크톱 휠→가로·모바일 세로→가로 scroll-jacking, 한/영 통화 포맷을 포함한다. 가로 스크롤 막대 차트, 기간 하이라이트, 기준선(reference line), scroll-jacking 차트, 시계열 매출/지표 막대 그래프를 새로 만들거나 요청할 때 사용. 단순 정적 막대 차트만 필요하면 과한 적용은 피한다.
---

# Chart.js 매출 추이 막대 그래프 (기간 하이라이트 + 기준선 + 스크롤잭킹)

`AdRevenueChart` 형태의 차트를 **재현성 높게** 다시 만들기 위한 스킬이다. 핵심은 평범한 Chart.js 막대 그래프가 아니라, 아래 8개 레이어가 합쳐진 "카드형 가로 스크롤 시계열 차트"라는 점이다.

원본 구현:
- `app/src/components/projects/AdRevenueChart.tsx` — 컴포넌트 + 2개 커스텀 플러그인
- `app/src/hooks/useChartScrollJacking.ts` — 데스크톱/모바일 스크롤 동작
- `app/src/styles/chart.css` — 카드/고정 폭/sticky 레이아웃

> 복붙용 전체 소스(자기완결 버전 포함)는 [reference.md](reference.md)에 있다. 이 파일은 "무엇을, 왜, 어떻게 조립하는지"를 설명한다.

## 언제 사용하나

- "이런(매출/추이) 막대 차트를 또 만들어줘", "AdRevenueChart 같은 거"
- 월별·기간별 시계열을 **가로로 긴 카드** 안에 스크롤로 보여주고 싶을 때
- 특정 구간(재직/캠페인/before-after)을 **색으로 하이라이트**하고 **평균/최대 기준선**으로 강조할 때
- 데스크톱 휠 ↔ 모바일 세로 스크롤을 가로 이동으로 매핑하는 **scroll-jacking**이 필요할 때

## 스택 / 의존성

```bash
npm i chart.js react-chartjs-2
# chart.js ^4.5, react-chartjs-2 ^5.3, React 18/19
```

Chart.js v4는 트리셰이킹이므로 **사용 모듈을 반드시 등록**한다(누락 시 "category is not a registered scale" 등 런타임 에러):

```tsx
import {
  BarController, BarElement, CategoryScale, LinearScale, Tooltip,
  Chart as ChartJS,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);
```

## 8개 구성 요소 (조립 체크리스트)

```
- [ ] 1. 데이터 모델 + 파생 통계 (flat 배열 + 하이라이트 분기 인덱스)
- [ ] 2. 구간별 색 분기 (per-bar backgroundColor 배열)
- [ ] 3. 막대 값 라벨 플러그인 (afterDatasetsDraw)
- [ ] 4. 기준선 + 칩 라벨 플러그인 (afterDatasetsDraw)
- [ ] 5. 포맷 헬퍼 (한/영 통화 단위)
- [ ] 6. 옵션: 듀얼 Y축 + 연/월 차등 X틱 + 고정 y.max/stepSize
- [ ] 7. scroll-jacking 훅 + DOM 4단 구조
- [ ] 8. CSS: 고정 캔버스 폭(가로 스크롤 유발) + 모바일 sticky
```

---

## 1. 데이터 모델 + 파생 통계

값은 **단일 평탄 배열**로 두고, 하이라이트 시작 인덱스 하나(`TENURE_START`)로 "이전 구간 / 강조 구간"을 가른다. 통계는 모듈 로드 시 1회 계산한다.

```tsx
const VALUES: readonly number[] = [
  280, 260, 245, /* ... 월별 값 ... */ 830,
];
const TENURE_START = 20; // 이 인덱스부터 "강조 구간"

const avg = (a: readonly number[]) => a.reduce((x, y) => x + y, 0) / a.length;
const stats = {
  preAvg: avg(VALUES.slice(0, TENURE_START)),
  preMax: Math.max(...VALUES.slice(0, TENURE_START)),
  tenureAvg: avg(VALUES.slice(TENURE_START)),
  tenureMax: Math.max(...VALUES.slice(TENURE_START)),
};
```

## 2. 구간별 색 분기

막대마다 색을 다르게 주려면 `backgroundColor`/`hoverBackgroundColor`에 **배열**을 넘긴다. 인덱스로 강조 여부를 판단한다.

```tsx
const COLOR_TENURE = "#2997ff";                 // 강조 구간(채움)
const COLOR_BEFORE = "rgba(255,255,255,0.22)";  // 이전 구간(흐림)
const colorFor = (i: number, hover: boolean) =>
  i >= TENURE_START
    ? (hover ? "#5ab0ff" : COLOR_TENURE)
    : (hover ? "rgba(255,255,255,0.35)" : COLOR_BEFORE);

// dataset 안에서:
backgroundColor: VALUES.map((_, i) => colorFor(i, false)),
hoverBackgroundColor: VALUES.map((_, i) => colorFor(i, true)),
```

## 3. 막대 값 라벨 플러그인

각 막대 위에 포맷된 값을 그린다. Chart.js에는 기본 기능이 없으므로 `afterDatasetsDraw`에서 캔버스에 직접 텍스트를 찍는다. **`ctx.save()`/`ctx.restore()`로 감싸는 것이 필수.**

```tsx
const barValueLabelsPlugin: Plugin<"bar"> = {
  id: "barValues",
  afterDatasetsDraw(chart) {
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
      ctx.fillStyle = i >= TENURE_START
        ? "rgba(255,255,255,0.92)"   // 강조: 밝게
        : "rgba(255,255,255,0.5)";   // 이전: 흐리게
      ctx.fillText(fmtBarLabel(v), bar.x, bar.y - 4); // 막대 꼭대기 위 4px
    });
    ctx.restore();
  },
};
```

## 4. 기준선 + 칩 라벨 플러그인

`stats`의 4개 값(이전 평균/최대, 강조 평균/최대)을 점선 가로선으로 긋고, 각 선에 둥근 사각형 "칩" 배경 + 라벨을 그린다. 이전 구간은 빨강 계열, 강조 구간은 파랑 계열로 의미를 색에 싣는다.

```tsx
const referenceLinesPlugin: Plugin<"bar"> = {
  id: "refLines",
  afterDatasetsDraw(chart) {
    const area = chart.chartArea;
    const yScale = chart.scales.y;
    if (!area || !yScale) return;
    const refs = [
      { v: stats.preAvg,    line: "rgba(255,90,95,0.65)",  text: "#ff8b8e", label: `기존 평균 · ${fmtRef(stats.preAvg)}`,    above: true  },
      { v: stats.preMax,    line: "rgba(255,90,95,0.65)",  text: "#ff8b8e", label: `기존 최대 · ${fmtRef(stats.preMax)}`,    above: true  },
      { v: stats.tenureAvg, line: "rgba(64,156,255,0.78)", text: "#5aafff", label: `재직 평균 · ${fmtRef(stats.tenureAvg)}`, above: true  },
      { v: stats.tenureMax, line: "rgba(64,156,255,0.78)", text: "#5aafff", label: `재직 최대 · ${fmtRef(stats.tenureMax)}`, above: false }, // above:false → 선 아래에 라벨(겹침 회피)
    ];
    const ctx = chart.ctx;
    ctx.save();
    for (const r of refs) {
      const y = yScale.getPixelForValue(r.v);
      if (y < area.top - 4 || y > area.bottom + 4) continue; // 차트 밖이면 skip

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

      // 칩(둥근 사각형) 배경
      const tw = ctx.measureText(r.label).width;
      const padX = 7, padY = 3, h = 11 + padY * 2, rad = 4;
      const cx = x - padX;
      const cy = r.above ? y + yOff - 11 - padY : y + yOff - padY;
      const cw = tw + padX * 2;
      ctx.fillStyle = "rgba(15,18,26,0.78)";
      roundRect(ctx, cx, cy, cw, h, rad);
      ctx.fill();

      ctx.fillStyle = r.text;
      ctx.fillText(r.label, x, y + yOff);
    }
    ctx.restore();
  },
};
```

`roundRect`는 `ctx.roundRect`가 있으면 그걸 쓰고, 없으면 `quadraticCurveTo`로 그린다(전체 구현은 reference.md).

## 5. 포맷 헬퍼 (한/영 통화 단위)

값 1 = 100만원(백만원)이라는 전제. 한국어는 억 단위, 영어는 `₩…M`로 변환한다. 축/막대/기준선/툴팁이 각각 다른 자리수를 쓴다.

```tsx
const fmtAxis    = (v: number) => v === 0 ? "0" : `${(v / 100).toFixed(0)}억`; // EN: `₩${v}M`
const fmtBarLabel = (v: number) => `${(v / 100).toFixed(1)}억`;                // EN: `₩${v}M`
const fmtRef      = (v: number) => `${parseFloat((v / 100).toFixed(2))}억`;    // EN: `₩${+v.toFixed(1)}M`
// 툴팁 본문: (v * 1_000_000).toLocaleString("ko-KR") + "원"
```

다국어가 필요 없으면 한 가지 포맷만 남기면 된다. 프로젝트의 한/영 동시 지원 패턴은 reference.md 참고.

## 6. 옵션의 핵심 포인트

평범한 옵션은 생략하고, 이 차트를 "이 차트답게" 만드는 부분만:

```tsx
const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false, // ★ 부모 wrap의 고정 height를 따름 (CSS와 한 세트)
  layout: { padding: { top: 8, right: 8 } },
  interaction: { mode: "nearest", intersect: true, axis: "x" },
  plugins: { legend: { display: false }, tooltip: { /* 커스텀 title/label */ } },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        autoSkip: false, maxRotation: 55, minRotation: 55, // ★ 모든 라벨 표시 + 기울임
        color: (c) => isYearLabel(c.tick?.label) ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
        font: (c) => ({ size: isYearLabel(c.tick?.label) ? 11 : 10, weight: isYearLabel(c.tick?.label) ? 600 : 400 }),
      },
    },
    y:  { position: "left",  min: 0, max: 1320, ticks: { stepSize: 200, callback: (v) => fmtAxis(+v) }, grid: { color: "rgba(255,255,255,0.08)" } },
    y1: { position: "right", min: 0, max: 1320, ticks: { stepSize: 200, callback: (v) => fmtAxis(+v) }, grid: { display: false } }, // ★ 우측 미러 축(넓은 차트 가독성)
  },
};
```

- **듀얼 Y축(`y` + `y1`)**: 차트가 가로로 넓어 오른쪽 끝에서도 눈금을 읽도록 우측에 같은 스케일을 미러링.
- **연/월 차등 X틱**: 1월(연도 라벨)은 굵고 밝게, 나머지 달은 작고 흐리게.
- **`max`/`stepSize` 고정**: 자동 스케일이 기준선/값 라벨과 충돌하지 않도록 수동 지정.

## 7. 스크롤잭킹 훅 + DOM 구조

DOM은 4단 중첩이 필요하다. 훅이 이 ref들을 받아 동작을 건다.

```tsx
<div className="ad-revenue-block" ref={blockRef}>        {/* 휠 캡처 + overflow:clip */}
  <header>…타이틀…</header>
  <div className="ad-revenue-scroll-track" ref={trackRef}>   {/* 모바일에서 height:220vh */}
    <div className="ad-revenue-sticky" ref={stickyRef}>      {/* 모바일에서 position:sticky */}
      <div className="ad-revenue-scroller" ref={scrollerRef}>{/* 가로 스크롤 컨테이너 */}
        <div className="ad-revenue-canvas-wrap">            {/* 고정 폭 → 가로 스크롤 유발 */}
          <Bar data={data} options={options}
               plugins={[barValueLabelsPlugin, referenceLinesPlugin]} />
        </div>
      </div>
    </div>
  </div>
</div>
```

동작:
- **데스크톱(>734px)**: `block`에서 `wheel`을 가로채 `deltaY`를 `scroller.scrollLeft`로 변환. 양 끝(start/end)에선 `preventDefault`를 풀어 페이지가 정상 스크롤되게 한다.
- **모바일(≤734px)**: `track`이 220vh로 길고 `sticky`가 화면 중앙(50%)에 고정. 페이지 세로 스크롤 진행도(0~1)를 `scroller.scrollLeft`에 매핑(scroll-jacking). `requestAnimationFrame`으로 throttle.

훅 전체 소스는 [reference.md](reference.md)에 그대로 있다(복붙용).

## 8. CSS 핵심

가로 스크롤은 **내부 캔버스 폭을 컨테이너보다 크게 고정**해서 만든다. `maintainAspectRatio:false`이므로 `height`도 wrap이 책임진다.

```css
.ad-revenue-canvas-wrap { width: 1760px; height: 360px; }     /* ★ 고정 폭/높이 */
.ad-revenue-scroller { overflow-x: auto; overflow-y: hidden; }
.ad-revenue-block { overflow: clip; }                          /* scroll 컨테이너 X */

@media (max-width: 734px) {
  .ad-revenue-scroll-track { height: 220vh; }                  /* sticky 런웨이 */
  .ad-revenue-sticky { position: sticky; top: 50%; transform: translateY(-50%); }
  .ad-revenue-scroller { overflow: hidden; touch-action: pan-y; }
  .ad-revenue-canvas-wrap { width: 1280px; height: 300px; }
}
```

차트를 감싸는 부모 밴드도 `overflow: clip`이어야 모바일 sticky가 viewport까지 붙는다(스크롤 컨테이너가 끼면 sticky가 그 안에 갇힌다). 전체 CSS는 reference.md.

---

## 새 데이터셋에 맞게 바꾸기

| 바꿀 것 | 어디 | 가이드 |
|--------|------|--------|
| 데이터 | `VALUES` | 월별/기간별 평탄 배열 |
| 하이라이트 구간 | `TENURE_START` | 강조 시작 인덱스 |
| Y축 상한/눈금 | `y.max`, `stepSize` | `max ≈ max(VALUES) × 1.25`를 눈금 단위로 올림 |
| 캔버스 폭 | `.ad-revenue-canvas-wrap width` | `막대 수 × 약 37px` (가독성에 맞게) |
| 라벨(연/월) | `buildLabels` | 연도 시작점에 연 라벨, 그 외 월 라벨 |
| 통화 단위 | `fmt*` 헬퍼 | 억/M 또는 도메인 단위로 교체 |
| 색 의미 | `colorFor`, 기준선 색 | 강조=파랑, 비교=빨강 등 |

## 흔한 함정

1. **스케일 미등록** → `ChartJS.register(...)` 빠뜨리면 런타임 에러. (1번 항목)
2. **플러그인 등록 위치**: `<Bar plugins={[...]}/>`로 넘기면 그 인스턴스에만 적용(권장). `ChartJS.register(plugin)`는 전역 적용이라 의도치 않게 다른 차트에 번진다.
3. **모바일 sticky가 안 붙음**: 조상 중 `overflow: auto/scroll` 컨테이너가 있으면 sticky가 그 안에 갇힌다 → `overflow: clip` 사용.
4. **캔버스가 안 보임/0 높이**: `maintainAspectRatio:false`인데 wrap에 고정 `height`가 없으면 발생.
5. **`afterDatasetsDraw`에서 save/restore 누락** → 폰트·dash·정렬 상태가 다음 프레임/다른 그리기로 새어나간다.
6. **값 라벨이 막대 안에 묻힘**: `textBaseline="bottom"` + `bar.y - 4`로 막대 꼭대기 위에 그린다.

## 빠른 시작

1. `npm i chart.js react-chartjs-2`
2. [reference.md](reference.md)의 **자기완결(single-file) 컴포넌트**를 복사 → 프로젝트 의존성(i18n/훅) 없이 바로 동작.
3. 또는 프로젝트 패턴을 따르려면 reference.md의 hook/CSS/i18n 전체 소스를 그대로 배치하고 위 8단계로 조립.

## 스킬 발견 (Cursor)

| 위치 | 경로 |
|------|------|
| 프로젝트 | `.cursor/skills/chartjs-revenue-bar-chart/` |
| 개인 | `~/.cursor/skills/chartjs-revenue-bar-chart/` |

`description`의 트리거 문구로 자동 로드된다. 직접 부르려면 채팅에서 스킬명을 언급한다. 복붙용 전체 소스는 [reference.md](reference.md).
