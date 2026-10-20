"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCvUrl } from "@/data/profile";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon, DownloadIcon } from "./icons";
import Monogram from "./Monogram";

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
  const [active, setActive] = useState<string>("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // A section counts as current once it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.values(NAV_HREFS).forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const cvHref = getCvUrl(locale);
  const navIn = (i: number) => ({ "--d": `${0.15 + i * 0.06}s` }) as React.CSSProperties;
  const cvProps = { download: `Hicham_AGRAD_CV_${locale === "fr" ? "FR" : "EN"}.pdf` };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? "border-border bg-bg/85 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "border-transparent bg-bg/50"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[padding] duration-300 sm:px-8 ${
          scrolled ? "py-3" : "py-[18px]"
        }`}
      >
        <a href="#hero" dir="ltr" className="ha-logo-link flex items-center gap-2.5 text-text">
          <Monogram className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight">Hicham</span>
            <span className="mt-0.5 font-mono text-[11px] font-semibold tracking-[0.28em] text-accent">AGRAD</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden gap-5 lg:flex xl:gap-7">
            {NAV_KEYS.map((key, i) => (
              <a
                key={key}
                href={NAV_HREFS[key]}
                style={navIn(i)}
                aria-current={active === NAV_HREFS[key] ? "location" : undefined}
                className="nav-in nav-link text-[13px] font-medium text-text-muted transition-colors duration-300 hover:text-text aria-[current=location]:text-text"
              >
                {t(key)}
              </a>
            ))}
          </div>

          <span style={navIn(NAV_KEYS.length)} className="nav-in flex">
            <ThemeToggle />
          </span>
          <span style={navIn(NAV_KEYS.length + 1)} className="nav-in flex">
            <LocaleSwitcher />
          </span>

          <a
            href={cvHref}
            {...cvProps}
            style={navIn(NAV_KEYS.length + 2)}
            className="nav-in btn-shine group hidden items-center gap-1.5 rounded-lg bg-gradient-to-br from-accent to-accent-2 px-4 py-2.5 text-[13px] font-semibold text-white transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)] sm:inline-flex"
          >
            <DownloadIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
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
          {NAV_KEYS.map((key, i) => (
            <a
              key={key}
              href={NAV_HREFS[key]}
              onClick={() => setOpen(false)}
              style={{ "--d": `${i * 0.04}s` } as React.CSSProperties}
              aria-current={active === NAV_HREFS[key] ? "location" : undefined}
              className="menu-in flex items-center gap-2 border-b border-border-subtle py-3 text-[15px] font-medium text-text-muted transition-colors aria-[current=location]:text-text"
            >
              {active === NAV_HREFS[key] && <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />}
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
