import { useTranslations } from "next-intl";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <Reveal className="mb-12">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="relative ps-8">
        <div className="absolute bottom-1.5 top-1.5 start-[5px] w-0.5 bg-border" />
        {experience.map((item, i) => (
          <Reveal key={item.id} delay={i * 90} className="relative mb-10 last:mb-0">
            <div className="absolute top-1 start-[-32px] h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
            <div className="mb-1.5 font-mono text-xs font-semibold text-accent-2">
              {t(`items.${item.id}.period`)}
            </div>
            <h3 className="mb-1 text-lg font-bold text-text">{t(`items.${item.id}.role`)}</h3>
            <div className="mb-2.5 text-sm font-medium text-text-muted">{item.org}</div>
            <p className="text-sm leading-relaxed text-text-muted">{t(`items.${item.id}.description`)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
