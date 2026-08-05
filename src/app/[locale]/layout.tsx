import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getDirection } from "@/lib/locale";
import { profile } from "@/data/profile";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${profile.siteUrl}/${l}`;
  }
  languages["x-default"] = `${profile.siteUrl}/${routing.defaultLocale}`;

  return {
    metadataBase: new URL(profile.siteUrl),
    title: {
      default: t("title"),
      template: `%s | Hicham AGRAD`,
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    keywords: [
      "Hicham AGRAD",
      "cybersecurity",
      "penetration testing",
      "offensive security",
      "AI security",
      "LLM security",
      "Morocco",
      "EMSI",
    ],
    authors: [{ name: "Hicham AGRAD", url: profile.siteUrl }],
    creator: "Hicham AGRAD",
    openGraph: {
      type: "profile",
      title: t("title"),
      description: t("description"),
      url: `${profile.siteUrl}/${locale}`,
      siteName: "Hicham AGRAD",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = getDirection(locale as AppLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Cybersecurity Engineering Student",
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
    sameAs: [profile.github, profile.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "EMSI (École Marocaine des Sciences de l'Ingénieur)" },
      { "@type": "CollegeOrUniversity", name: "ISTA NTIC" },
    ],
    worksFor: {
      "@type": "Organization",
      name: "YAZAKI Morocco",
    },
  };

  const themeInitScript = `
    try {
      var t = localStorage.getItem('theme');
      if (t !== 'light' && t !== 'dark') {
        t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', t);
    } catch (e) {}
  `;

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
