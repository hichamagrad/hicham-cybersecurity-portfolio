"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCvUrl } from "@/data/profile";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_KEYS = ["home", "about", "skills", "projects", "experience", "certifications", "contact"] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "#hero",
  about: "#about",
  skills: "#skills",
  projects: "#projects",
  experience: "#experience",
  certifications: "#certifications",
  contact: "#contact",
};

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const cvHref = getCvUrl(locale);
  const cvProps = { download: `Hicham_AGRAD_CV_${locale === "fr" ? "FR" : "EN"}.pdf` };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-bg/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-[18px] sm:px-8">
        <a href="#hero" className="font-mono text-base font-bold tracking-wide text-text">
          HA<span className="text-accent">.</span>sec
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden gap-5 lg:flex xl:gap-7">
            {NAV_KEYS.map((key) => (
              <a
                key={key}
                href={NAV_HREFS[key]}
                className="text-[13px] font-medium text-text-muted transition-colors hover:text-text"
              >
                {t(key)}
              </a>
            ))}
          </div>

          <ThemeToggle />
          <LocaleSwitcher />

          <a
            href={cvHref}
            {...cvProps}
            className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-br from-accent to-accent-2 px-4 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t("downloadCv")}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-text lg:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-0.5 border-t border-border px-5 pb-5 pt-2 sm:px-8 lg:hidden">
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={NAV_HREFS[key]}
              onClick={() => setOpen(false)}
              className="border-b border-border-subtle py-3 text-[15px] font-medium text-text-muted"
            >
              {t(key)}
            </a>
          ))}
          <a
            href={cvHref}
            {...cvProps}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-accent to-accent-2 px-4 py-3 text-[14px] font-semibold text-white sm:hidden"
          >
            {t("downloadCv")}
          </a>
        </div>
      )}
    </nav>
  );
}
