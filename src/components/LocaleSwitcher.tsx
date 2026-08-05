"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { GlobeIcon } from "./icons";

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("languageLabel")}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-text-muted transition-colors hover:border-accent/40 hover:text-text"
      >
        <GlobeIcon className="h-4 w-4" />
      </button>
      {open && (
        <div
          className="absolute end-0 top-11 z-50 min-w-[140px] overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/30"
          role="menu"
        >
          {routing.locales.map((l) => (
            <Link
              key={l}
              href="/"
              locale={l}
              onClick={() => setOpen(false)}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-hover ${
                l === locale ? "text-accent-2" : "text-text-muted hover:text-text"
              }`}
            >
              {LOCALE_LABELS[l]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
