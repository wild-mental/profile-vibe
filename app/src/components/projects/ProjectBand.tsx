import type { ReactNode } from "react";
import type { ProjectBandPhoto, ProjectBandTone } from "@/types";

type ProjectBandProps = {
  id?: string;
  num: string;
  org: string;
  title: ReactNode;
  tone?: ProjectBandTone;
  photo?: ProjectBandPhoto;
  short?: boolean;
  hasChart?: boolean;
  children: ReactNode;
};

export function ProjectBand({
  id,
  num,
  org,
  title,
  tone = "base",
  photo = "starfield",
  short,
  hasChart,
  children,
}: ProjectBandProps) {
  const classes = [
    "project-band",
    tone === "tone-2" ? "tone-2" : "",
    tone === "tone-3" ? "tone-3" : "",
    short ? "short" : "",
    hasChart ? "has-chart" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <div className={`band-photo ${photo}`} />
      <div className="project-content">
        <div className="project-meta-row">
          <span className="project-num">{num}</span>
          <span className="project-org">{org}</span>
        </div>
        <h3 className="project-title">{title}</h3>
        <div className="project-body">{children}</div>
      </div>
    </section>
  );
}
