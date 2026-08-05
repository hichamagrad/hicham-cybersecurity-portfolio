import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

type EducationEntry = { degree: string; place: string; period: string };

export default function About() {
  const t = useTranslations("about");
  const education = t.raw("education") as EducationEntry[];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <div className="flex flex-wrap gap-16">
        <Reveal className="min-w-[280px] flex-1">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
          <h2 className="mb-6 mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
            {t("heading")}
          </h2>
          <p className="mb-4 text-base leading-[1.8] text-text-muted">{t("paragraph1")}</p>
          <p className="text-base leading-[1.8] text-text-muted">{t("paragraph2")}</p>
        </Reveal>

        <Reveal delay={120} className="flex w-full max-w-[360px] flex-none flex-col gap-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-2 font-mono text-[11px] font-semibold tracking-widest text-accent-2">
              {t("educationLabel")}
            </div>
            <div className="flex flex-col gap-4">
              {education.map((entry, i) => (
                <div key={i} className={i > 0 ? "border-t border-border pt-4" : ""}>
                  <div className="mb-0.5 font-semibold text-text">{entry.degree}</div>
                  <div className="text-sm text-text-muted">{entry.place}</div>
                  <div className="text-sm text-text-muted">{entry.period}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-2 font-mono text-[11px] font-semibold tracking-widest text-accent-2">
              {t("missionLabel")}
            </div>
            <div className="text-[15px] leading-relaxed text-text-muted">{t("missionText")}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
