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
import { useLang } from "@/i18n";
import { KAKAO } from "@/i18n/projects";

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

const avg = (arr: readonly number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

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

type Lang = "ko" | "en";

/**
 * Formats a "백만원" value to the chosen language's preferred currency-unit
 * format. KR → "8.4억" (Korean 100M units). EN → "₩840M".
 */
function fmtAxis(v: number, lang: Lang): string {
  if (v === 0) return "0";
  if (lang === "ko") return `${(v / 100).toFixed(0)}억`;
  // 1 unit of `v` == 1,000,000 KRW; v=100 == 100M KRW.
  return `₩${v}M`;
}

function fmtRefValue(v: number, lang: Lang): string {
  if (lang === "ko") {
    return `${parseFloat((v / 100).toFixed(2))}억`;
  }
  return `₩${parseFloat(v.toFixed(1))}M`;
}

function fmtBarLabel(v: number, lang: Lang): string {
  if (lang === "ko") return `${(v / 100).toFixed(1)}억`;
  return `₩${v.toFixed(0)}M`;
}

function buildLabels(lang: Lang): string[] {
  const months = KAKAO.monthShort[lang];
  const yearLabel = KAKAO.yearLabel[lang];
  const labels: string[] = [];
  for (let year = 2020; year <= 2023; year++) {
    const maxMonth = year === 2023 ? 7 : 12;
    for (let m = 1; m <= maxMonth; m++) {
      if (m === 1) {
        labels.push(yearLabel(year));
      } else {
        labels.push(months[m - 1]);
      }
    }
  }
  return labels;
}

function tooltipDateTitle(idx: number, lang: Lang): string {
  const year = 2020 + Math.floor(idx / 12);
  const monthIdx = idx % 12;
  if (lang === "ko") {
    return `${year}년 ${monthIdx + 1}월`;
  }
  return `${KAKAO.monthShort.en[monthIdx]} ${year}`;
}

export function AdRevenueChart() {
  const { lang } = useLang();

  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useChartScrollJacking({ blockRef, trackRef, stickyRef, scrollerRef });

  const labels = useMemo(() => buildLabels(lang), [lang]);

  const tenureTag = KAKAO.tooltipTenureTag[lang];
  const datasetLabel = lang === "ko" ? "광고매출 (백만원)" : "Ad revenue (KRW M)";

  /** Plugin — paints "x.x억" / "₩xxM" value labels on top of each bar. */
  const barValueLabelsPlugin: Plugin<"bar"> = useMemo(
    () => ({
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
          ctx.fillText(fmtBarLabel(v, lang), bar.x, bar.y - 4);
        });
        ctx.restore();
      },
    }),
    [lang],
  );

  /** Plugin — paints 4 horizontal reference lines with labelled chips. */
  const referenceLinesPlugin: Plugin<"bar"> = useMemo(
    () => ({
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
            label: `${KAKAO.refPreAvg[lang]} · ${fmtRefValue(stats.preAvg, lang)}`,
            above: true,
          },
          {
            v: stats.preMax,
            line: RED_LINE,
            text: RED_TEXT,
            label: `${KAKAO.refPreMax[lang]} · ${fmtRefValue(stats.preMax, lang)}`,
            above: true,
          },
          {
            v: stats.tenureAvg,
            line: BLUE_LINE,
            text: BLUE_TEXT,
            label: `${KAKAO.refTenureAvg[lang]} · ${fmtRefValue(stats.tenureAvg, lang)}`,
            above: true,
          },
          {
            v: stats.tenureMax,
            line: BLUE_LINE,
            text: BLUE_TEXT,
            label: `${KAKAO.refTenureMax[lang]} · ${fmtRefValue(stats.tenureMax, lang)}`,
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
    }),
    [lang],
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: datasetLabel,
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
    [labels, datasetLabel],
  );

  const yearMarker = lang === "ko" ? "년" : "Jan";

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
              return tooltipDateTitle(i, lang);
            },
            label: (ctx: TooltipItem<"bar">) => {
              const v = ctx.parsed.y ?? 0;
              const won = (v * 1_000_000).toLocaleString(
                lang === "ko" ? "ko-KR" : "en-US",
              );
              const tag = ctx.dataIndex >= TENURE_START ? tenureTag : "";
              const wonSuffix = lang === "ko" ? "원" : " KRW";
              return `${won}${wonSuffix}${tag}`;
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
              return typeof lbl === "string" && lbl.indexOf(yearMarker) !== -1
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.5)";
            },
            font(ctx) {
              const lbl = ctx.tick?.label;
              const isYear =
                typeof lbl === "string" && lbl.indexOf(yearMarker) !== -1;
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
            callback: (val) => fmtAxis(val as number, lang),
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
            callback: (val) => fmtAxis(val as number, lang),
          },
        },
      },
    }),
    [lang, tenureTag, yearMarker],
  );

  const ariaLabel =
    lang === "ko"
      ? "20~23년 키즈노트 광고매출 막대 그래프"
      : "Kidsnote ad-revenue bar chart, 2020–2023";

  return (
    <div className="ad-revenue-block" ref={blockRef}>
      <header className="ad-revenue-header">
        <p className="ad-revenue-eyebrow">{KAKAO.chartEyebrow[lang]}</p>
        <h4 className="ad-revenue-title">{KAKAO.chartTitle[lang]}</h4>
        <p className="ad-revenue-sub">
          {KAKAO.chartSubLead[lang]}{" "}
          <span className="ad-revenue-dot" />
          {KAKAO.chartSubTenureNote[lang]}
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
                aria-label={ariaLabel}
              />
            </div>
          </div>
          <p className="ad-revenue-hint">
            <span className="hint-desktop">{KAKAO.chartHintDesktop[lang]}</span>
            <span className="hint-mobile">{KAKAO.chartHintMobile[lang]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
