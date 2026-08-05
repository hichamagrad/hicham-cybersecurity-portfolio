import { useLocale, useTranslations } from "next-intl";
import { profile, getCvUrl } from "@/data/profile";
import { MailIcon, LinkedinIcon, GithubIcon, PhoneIcon, MapPinIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const cvHref = getCvUrl(locale);
  const cvProps = { download: `Hicham_AGRAD_CV_${locale === "fr" ? "FR" : "EN"}.pdf` };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-36">
      <Reveal>
        <span className="font-mono text-xs font-semibold tracking-widest text-accent">{t("eyebrow")}</span>
        <h2 className="mb-5 mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
          {t("heading")}
        </h2>
        <p className="mb-9 text-base leading-relaxed text-text-muted">{t("subtext")}</p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-accent to-accent-2 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
          >
            <MailIcon className="h-4 w-4" />
            {t("emailCta")}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong px-7 py-3.5 text-[15px] font-semibold text-text transition-colors hover:border-accent hover:bg-accent/8"
          >
            <LinkedinIcon className="h-4 w-4" />
            {t("linkedinCta")}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong px-7 py-3.5 text-[15px] font-semibold text-text transition-colors hover:border-accent hover:bg-accent/8"
          >
            <GithubIcon className="h-4 w-4" />
            {t("githubCta")}
          </a>
          <a
            href={cvHref}
            {...cvProps}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong px-7 py-3.5 text-[15px] font-semibold text-text transition-colors hover:border-accent hover:bg-accent/8"
          >
            {t("resumeCta")}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <PhoneIcon className="h-4 w-4" />
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-text">
              {profile.phone}
            </a>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
