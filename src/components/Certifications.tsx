import { useTranslations } from "next-intl";
import { certifications } from "@/data/certifications";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function Certifications() {
  const t = useTranslations("certifications");

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <Reveal className="mb-12">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
        <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {certifications.map((cert, i) => {
          const year = new Date(cert.date).getFullYear();
          return (
            <Reveal key={cert.id} delay={(i % 4) * 70}>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-accent to-accent-2 font-mono text-[11px] font-bold text-on-accent">
                  {cert.initials}
                </div>
                <div className="mb-1 font-semibold leading-snug text-text">{cert.name}</div>
                <div className="mb-2.5 text-[13px] text-text-muted">{cert.issuer}</div>
                <div className="font-mono text-[11px] font-medium tracking-wide text-accent-2">
                  {t("earnedLabel")} {year}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {t("verifyLabel")} <ArrowRightIcon className="h-3 w-3 rtl:rotate-180" />
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
