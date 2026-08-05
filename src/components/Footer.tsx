import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-8 sm:px-8">
      <span className="text-[13px] font-medium text-text-muted">{t("rights", { year })}</span>
      <span className="font-mono text-xs font-medium text-text-muted">{t("tagline")}</span>
    </footer>
  );
}
