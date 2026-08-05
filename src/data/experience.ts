export type ExperienceItem = {
  id: string;
  org: string;
};

// Role / description / period copy lives in messages/*.json -> experience.items.<id>
// (period is localized text, e.g. "Present" / "Présent" / "حاليًا").
export const experience: ExperienceItem[] = [
  { id: "yazaki", org: "YAZAKI Morocco" },
  { id: "voveId", org: "VOVE ID" },
  { id: "safran", org: "Safran Electrical & Power" },
];
