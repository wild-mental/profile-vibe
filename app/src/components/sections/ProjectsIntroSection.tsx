import { useT } from "@/i18n";
import { STRINGS } from "@/i18n/strings";

export function ProjectsIntroSection() {
  const t = useT();
  const s = STRINGS.projectsIntro;

  return (
    <section id="projects" className="tile tile-dark">
      <div className="tile-header">
        <span className="eyebrow">{t(s.eyebrow)}</span>
        <h2>{t(s.title)}</h2>
        <p>{t(s.subtitle)}</p>
      </div>
    </section>
  );
}
