import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <Reveal className="mb-6">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
          {t("heading")}
        </h2>
      </Reveal>

      {projects.map((project) => (
        <Reveal key={project.id}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </section>
  );
}
