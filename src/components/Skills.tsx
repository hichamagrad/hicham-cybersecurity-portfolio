import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <Reveal className="mb-12">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.id}
            delay={(i % 3) * 80}
            className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="rounded-md bg-accent-2 px-2 py-1 font-mono text-[11px] font-bold tracking-wide text-on-accent">
                {cat.tag}
              </span>
              <span className="font-semibold text-text">{t(`categories.${cat.id}`)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-chip px-2.5 py-1.5 text-xs font-medium text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
