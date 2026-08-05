export const profile = {
  name: "Hicham AGRAD",
  initials: "HA",
  location: "Rabat, Morocco",
  email: "Hicham.Agrad@emsi-edu.ma",
  phone: "+212 608 244 562",
  github: "https://github.com/hichamagrad",
  linkedin: "https://www.linkedin.com/in/hicham-agrad",
  photoUrl: "/images/hero-portrait.jpg" as string | null,
  siteUrl: "https://hicham-agrad.dev",
};

// No Arabic CV yet, so Arabic-locale visitors get the English version
// (the more broadly-used language for résumés) rather than a dead link.
const CV_URLS: Record<string, string> = {
  en: "/documents/Hicham_AGRAD_CV_EN.pdf",
  fr: "/documents/Hicham_AGRAD_CV_FR.pdf",
  ar: "/documents/Hicham_AGRAD_CV_EN.pdf",
};

export function getCvUrl(locale: string): string {
  return CV_URLS[locale] ?? CV_URLS.en;
}
