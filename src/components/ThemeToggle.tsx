"use client";

import { useTranslations } from "next-intl";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
  const t = useTranslations("nav");

  const toggle = () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("toggleTheme")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-text-muted transition-colors hover:border-accent/40 hover:text-text"
    >
      <SunIcon className="h-4 w-4 [html[data-theme=light]_&]:hidden" />
      <MoonIcon className="hidden h-4 w-4 [html[data-theme=light]_&]:block" />
    </button>
  );
}
