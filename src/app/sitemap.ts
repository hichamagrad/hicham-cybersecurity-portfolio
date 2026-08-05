import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${profile.siteUrl}/${locale}`;
  }

  return routing.locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
