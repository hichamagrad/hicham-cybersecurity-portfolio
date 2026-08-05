import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";
import ProjectGallery from "./ProjectGallery";
import { ArrowRightIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");

  const categoryLabel = t(`categories.${project.categoryKey}`);
  const title = t(`items.${project.id}.title`);
  const description = t(`items.${project.id}.description`);
  const problem = t(`items.${project.id}.problem`);
  const solution = t(`items.${project.id}.solution`);
  const status = t(`items.${project.id}.status`);
  const galleryCaptions = project.gallery
    ? (t.raw(`items.${project.id}.gallery`) as string[])
    : [];

  return (
    <div
      className="flex flex-wrap items-center gap-12 border-b border-border py-12"
      style={{ flexDirection: project.dir }}
    >
      <div className="min-w-[320px] flex-1">
        {project.gallery ? (
          <ProjectGallery
            images={project.gallery}
            captions={galleryCaptions}
            title={title}
            aspect={project.galleryAspect}
            fit={project.galleryFit}
          />
        ) : project.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
              style={{ objectPosition: project.imagePosition === "top" ? "50% 0%" : "50% 50%" }}
            />
          </div>
        ) : (
          <ProjectVisual categoryKey={project.categoryKey} tag={categoryLabel} />
        )}
      </div>

      <div className="min-w-[320px] flex-1">
        <div className="mb-2.5 font-mono text-xs font-semibold tracking-widest text-accent-2">
          {categoryLabel}
        </div>
        <h3 className="mb-3 text-[26px] font-bold leading-tight text-text">{title}</h3>
        <p className="mb-4 text-[15px] leading-relaxed text-text-muted">{description}</p>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-1 font-mono text-[11px] font-semibold text-accent">{t("labels.problem")}</div>
            <div className="text-[13px] leading-relaxed text-text-muted">{problem}</div>
          </div>
          <div>
            <div className="mb-1 font-mono text-[11px] font-semibold text-accent">{t("labels.solution")}</div>
            <div className="text-[13px] leading-relaxed text-text-muted">{solution}</div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-chip px-2.5 py-1 font-mono text-[11px] font-medium text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.hasStatus && <div className="mb-5 text-[13px] font-medium text-accent-2">{status}</div>}

        <div className="flex flex-wrap gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-text transition-colors hover:text-accent"
            >
              {t("labels.github")} <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-text transition-colors hover:text-accent"
            >
              {t("labels.demo")} <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-text transition-colors hover:text-accent"
            >
              {t("labels.report")} <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
