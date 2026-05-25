import type { TimelineItem } from "@/types";

type TimelineProps = {
  items: readonly TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`}>
          <span className="period">{item.period}</span>
          <span className="title">{item.title}</span>
          {item.desc ? <span className="desc">{item.desc}</span> : null}
          {item.badge ? (
            <span className="badge-issuer">{item.badge}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
