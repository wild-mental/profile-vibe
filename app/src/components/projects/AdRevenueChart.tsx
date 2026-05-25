import { useMemo, useRef } from "react";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  type Chart,
  type ChartOptions,
  type Plugin,
  type TooltipItem,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useChartScrollJacking } from "@/hooks/useChartScrollJacking";

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

const VALUES: readonly number[] = [
  // 2020 (12)
  280, 260, 245, 290, 310, 355, 325, 320, 270, 345, 435, 375,
  // 2021 (12)
  270, 325, 505, 470, 445, 440, 385, 365, 450, 625, 745, 680,
  // 2022 (12)
  720, 690, 820, 735, 665, 490, 600, 625, 560, 750, 1050, 1060,
  // 2023.01 ~ 07 (7)
  825, 805, 1000, 1000, 895, 800, 830,
];

const TENURE_START = 20; // 2021.09 onwards
const COLOR_TENURE = "#2997ff";
const COLOR_BEFORE = "rgba(255, 255, 255, 0.22)";
const COLOR_TENURE_HOVER = "#5ab0ff";
const COLOR_BEFORE_HOVER = "rgba(255, 255, 255, 0.35)";

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Pretendard Variable", system-ui, "Noto Sans KR", sans-serif';

function buildLabels(): string[] {
  const labels: string[] = [];
  for (let year = 20; year <= 23; year++) {
    const maxMonth = year === 23 ? 7 : 12;
    for (let m = 1; m <= maxMonth; m++) {
      labels.push(m === 1 ? `${year}년 ${m}월` : `${m}월`);
    }
  }
  return labels;
}

const avg = (arr: readonly number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

const fmtBillion = (v: number): string => {
  // 백만원 -> 억원, 소수 2자리 (trailing zeros trimmed)
  const b = v / 100;
  return `${parseFloat(b.toFixed(2))}억`;
};

const stats = {
  preAvg: avg(VALUES.slice(0, TENURE_START)),
  preMax: Math.max(...VALUES.slice(0, TENURE_START)),
  tenureAvg: avg(VALUES.slice(TENURE_START)),
  tenureMax: Math.max(...VALUES.slice(TENURE_START)),
};

const colorFor = (i: number, hover: boolean) => {
  if (i >= TENURE_START) return hover ? COLOR_TENURE_HOVER : COLOR_TENURE;
  return hover ? COLOR_BEFORE_HOVER : COLOR_BEFORE;
};

/** Plugin — paints "x.x억" value labels on top of each bar. */
const barValueLabelsPlugin: Plugin<"bar"> = {
  id: "adRevenueBarValues",
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
      const isTenure = i >= TENURE_START;
      ctx.fillStyle = isTenure
        ? "rgba(255, 255, 255, 0.92)"
        : "rgba(255, 255, 255, 0.5)";
      const text = `${(v / 100).toFixed(1)}억`;
      ctx.fillText(text, bar.x, bar.y - 4);
    });
    ctx.restore();
  },
};

/** Plugin — paints 4 horizontal reference lines with labelled chips. */
const referenceLinesPlugin: Plugin<"bar"> = {
  id: "adRevenueRefLines",
  afterDatasetsDraw(chart: Chart) {
    const area = chart.chartArea;
    const yScale = chart.scales.y;
    const xScale = chart.scales.x;
    if (!area || !yScale || !xScale) return;

    const RED_LINE = "rgba(255, 90, 95, 0.65)";
    const RED_TEXT = "#ff8b8e";
    const BLUE_LINE = "rgba(64, 156, 255, 0.78)";
    const BLUE_TEXT = "#5aafff";

    const refs = [
      {
        v: stats.preAvg,
        line: RED_LINE,
        text: RED_TEXT,
        label: `기존 평균 · ${fmtBillion(stats.preAvg)}`,
        above: true,
      },
      {
        v: stats.preMax,
        line: RED_LINE,
        text: RED_TEXT,
        label: `기존 최대 · ${fmtBillion(stats.preMax)}`,
        above: true,
      },
      {
        v: stats.tenureAvg,
        line: BLUE_LINE,
        text: BLUE_TEXT,
        label: `재직 평균 · ${fmtBillion(stats.tenureAvg)}`,
        above: true,
      },
      {
        // Tenure-max sits near the chart top — label BELOW its line.
        v: stats.tenureMax,
        line: BLUE_LINE,
        text: BLUE_TEXT,
        label: `재직 최대 · ${fmtBillion(stats.tenureMax)}`,
        above: false,
      },
    ];

    const LABEL_LEFT_PAD = 18;
    const LABEL_BG_PAD_X = 7;
    const LABEL_BG_PAD_Y = 3;

    const ctx = chart.ctx;
    ctx.save();
    refs.forEach((r) => {
      const yPos = yScale.getPixelForValue(r.v);
      if (yPos < area.top - 4 || yPos > area.bottom + 4) return;

      ctx.strokeStyle = r.line;
      ctx.lineWidth = 1.4;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(area.left, yPos);
      ctx.lineTo(area.right, yPos);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = `600 11px ${FONT_STACK}`;
      ctx.textAlign = "left";
      ctx.textBaseline = r.above ? "bottom" : "top";
      const xPos = area.left + LABEL_LEFT_PAD;
      const yOff = r.above ? -6 : 6;

      const textW = ctx.measureText(r.label).width;
      const chipX = xPos - LABEL_BG_PAD_X;
      const chipY = r.above
        ? yPos + yOff - 11 - LABEL_BG_PAD_Y
        : yPos + yOff - LABEL_BG_PAD_Y;
      const chipW = textW + LABEL_BG_PAD_X * 2;
      const chipH = 11 + LABEL_BG_PAD_Y * 2;
      ctx.fillStyle = "rgba(15, 18, 26, 0.78)";

      const radius = 4;
      ctx.beginPath();
      ctx.moveTo(chipX + radius, chipY);
      ctx.lineTo(chipX + chipW - radius, chipY);
      ctx.quadraticCurveTo(chipX + chipW, chipY, chipX + chipW, chipY + radius);
      ctx.lineTo(chipX + chipW, chipY + chipH - radius);
      ctx.quadraticCurveTo(
        chipX + chipW,
        chipY + chipH,
        chipX + chipW - radius,
        chipY + chipH,
      );
      ctx.lineTo(chipX + radius, chipY + chipH);
      ctx.quadraticCurveTo(chipX, chipY + chipH, chipX, chipY + chipH - radius);
      ctx.lineTo(chipX, chipY + radius);
      ctx.quadraticCurveTo(chipX, chipY, chipX + radius, chipY);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = r.text;
      ctx.fillText(r.label, xPos, yPos + yOff);
    });
    ctx.restore();
  },
};

export function AdRevenueChart() {
  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useChartScrollJacking({ blockRef, trackRef, stickyRef, scrollerRef });

  const labels = useMemo(() => buildLabels(), []);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "광고매출 (백만원)",
          data: [...VALUES],
          yAxisID: "y",
          backgroundColor: VALUES.map((_, i) => colorFor(i, false)),
          hoverBackgroundColor: VALUES.map((_, i) => colorFor(i, true)),
          borderRadius: 3,
          borderSkipped: false as const,
          categoryPercentage: 0.78,
          barPercentage: 0.92,
        },
      ],
    }),
    [labels],
  );

  const options = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600 },
      layout: { padding: { top: 8, right: 8, bottom: 0, left: 0 } },
      interaction: { mode: "nearest", intersect: true, axis: "x" },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(20, 20, 24, 0.95)",
          titleColor: "#ffffff",
          bodyColor: "#cccccc",
          padding: 12,
          borderColor: "rgba(255,255,255,0.15)",
          borderWidth: 1,
          displayColors: false,
          callbacks: {
            title: (ctx: TooltipItem<"bar">[]) => {
              const i = ctx[0].dataIndex;
              const year = 2020 + Math.floor(i / 12);
              const month = (i % 12) + 1;
              return `${year}년 ${month}월`;
            },
            label: (ctx: TooltipItem<"bar">) => {
              const v = ctx.parsed.y ?? 0;
              const won = (v * 1_000_000).toLocaleString("ko-KR");
              const tag = ctx.dataIndex >= TENURE_START ? "  · 재직 기간" : "";
              return `${won}원${tag}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color(ctx) {
              const lbl = ctx.tick?.label;
              return typeof lbl === "string" && lbl.indexOf("년") !== -1
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.5)";
            },
            font(ctx) {
              const lbl = ctx.tick?.label;
              const isYear = typeof lbl === "string" && lbl.indexOf("년") !== -1;
              return {
                family: "inherit",
                size: isYear ? 11 : 10,
                weight: isYear ? 600 : 400,
              };
            },
            maxRotation: 55,
            minRotation: 55,
            autoSkip: false,
          },
        },
        y: {
          position: "left",
          beginAtZero: true,
          min: 0,
          max: 1320,
          grid: { color: "rgba(255,255,255,0.08)", drawTicks: false },
          border: { display: false },
          ticks: {
            color: "rgba(255,255,255,0.45)",
            font: { family: "inherit", size: 11 },
            padding: 10,
            stepSize: 200,
            callback: (val) => {
              if (val === 0) return "0";
              return `${((val as number) / 100).toFixed(0)}억`;
            },
          },
        },
        y1: {
          position: "right",
          display: true,
          beginAtZero: true,
          min: 0,
          max: 1320,
          grid: { display: false, drawTicks: false },
          border: { display: false },
          ticks: {
            color: "rgba(255,255,255,0.45)",
            font: { family: "inherit", size: 11 },
            padding: 10,
            stepSize: 200,
            callback: (val) => {
              if (val === 0) return "0";
              return `${((val as number) / 100).toFixed(0)}억`;
            },
          },
        },
      },
    }),
    [],
  );

  return (
    <div className="ad-revenue-block" ref={blockRef}>
      <header className="ad-revenue-header">
        <p className="ad-revenue-eyebrow">Kidsnote · 광고매출 추이</p>
        <h4 className="ad-revenue-title">20 ~ 23년 키즈노트 광고매출</h4>
        <p className="ad-revenue-sub">
          월별 매출 (단위 · 백만원) · 재직 기간(21.09 ~ 23.07){" "}
          <span className="ad-revenue-dot" /> 표시
        </p>
      </header>

      <div className="ad-revenue-scroll-track" ref={trackRef}>
        <div className="ad-revenue-sticky" ref={stickyRef}>
          <div className="ad-revenue-scroller" ref={scrollerRef}>
            <div className="ad-revenue-canvas-wrap">
              <Bar
                data={data}
                options={options}
                plugins={[barValueLabelsPlugin, referenceLinesPlugin]}
                aria-label="20~23년 키즈노트 광고매출 막대 그래프"
              />
            </div>
          </div>
          <p className="ad-revenue-hint">
            <span className="hint-desktop">
              ↔ 마우스 휠을 굴리면 그래프가 좌우로 스크롤됩니다
            </span>
            <span className="hint-mobile">
              ↕ 페이지를 내리면 그래프가 좌우로 펼쳐집니다
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
