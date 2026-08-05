export type Certification = {
  id: string;
  name: string;
  issuer: string;
  initials: string;
  date: string; // ISO, for the "EARNED <year>" status + <time> element
  verifyUrl: string;
};

// All verifiable Coursera course certificates: real, not placeholder credentials.
export const certifications: Certification[] = [
  {
    id: "rhel124",
    name: "Administration Linux avec Red Hat RH124",
    issuer: "Honoris (Red Hat Academy)",
    initials: "RHEL",
    date: "2026-05-31",
    verifyUrl: "https://coursera.org/verify/JJH5MY5CEG0K",
  },
  {
    id: "pythonDs",
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    initials: "PY",
    date: "2025-04-26",
    verifyUrl: "https://coursera.org/verify/OJBJ9JJ9FKYD",
  },
  {
    id: "blockchain",
    name: "Fundamentals of Blockchain Architecture",
    issuer: "LearnQuest",
    initials: "BC",
    date: "2026-04-27",
    verifyUrl: "https://coursera.org/verify/BGDX28M1HSOK",
  },
  {
    id: "swEngineering",
    name: "Software Engineering: Software Design and Project Management",
    issuer: "HKUST",
    initials: "SE",
    date: "2025-04-25",
    verifyUrl: "https://coursera.org/verify/5GI6Z4C01DAB",
  },
  {
    id: "agilePm",
    name: "Agile Project Management",
    issuer: "Google",
    initials: "PM",
    date: "2026-04-27",
    verifyUrl: "https://coursera.org/verify/05B5KWEEF293",
  },
  {
    id: "cppOop",
    name: "Introduction à la programmation orientée objet (C++)",
    issuer: "EPFL",
    initials: "C++",
    date: "2024-11-21",
    verifyUrl: "https://coursera.org/verify/ZPNIPPUULIVR",
  },
  {
    id: "jsInteractivity",
    name: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    initials: "JS",
    date: "2024-11-19",
    verifyUrl: "https://coursera.org/verify/UB1FDWR08QQ4",
  },
  {
    id: "docResearch",
    name: "La recherche documentaire",
    issuer: "École Polytechnique",
    initials: "DOC",
    date: "2025-04-25",
    verifyUrl: "https://coursera.org/verify/H30ASCFNS6FP",
  },
];
