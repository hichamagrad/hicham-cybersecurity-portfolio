export type SkillCategory = {
  id: string;
  tag: string;
  items: string[];
};

// Category "label" text is translated (see messages/*.json -> skills.categories.<id>).
// Items are proper nouns / technology names and stay identical across locales.
export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    tag: "SEC",
    items: ["Burp Suite (Learning)", "Kali Linux", "OWASP Top 10", "Vulnerability Assessment"],
  },
  {
    id: "network",
    tag: "NET",
    items: ["Network Segmentation", "pfSense Firewall / NAT", "Proxmox Virtualization", "Zero Trust Basics"],
  },
  {
    id: "aiSecurity",
    tag: "AI",
    items: ["LLM Security Auditing", "Prompt-Injection Awareness", "AI Usage Risk Assessment", "Multi-Provider LLM Integration"],
  },
  {
    id: "programming",
    tag: "DEV",
    items: ["Python", "Java", "C++", "PHP", "JavaScript / TypeScript"],
  },
  {
    id: "web",
    tag: "WEB",
    items: ["React", "Next.js", "Laravel", "Django", "FastAPI", "Node.js"],
  },
  {
    id: "systems",
    tag: "SYS",
    items: ["Linux (Kali / Ubuntu / RHEL)", "Git", "Docker", "CI/CD (GitHub Actions)"],
  },
  {
    id: "data",
    tag: "DATA",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Neo4j", "ELK Stack", "Prometheus / Grafana"],
  },
];
