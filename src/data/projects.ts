export type Project = {
  id: string;
  categoryKey: string;
  dir: "row" | "row-reverse";
  tech: string[];
  github: string | null;
  demo: string | null;
  hasStatus: boolean;
  image?: string;
  imagePosition?: string;
  gallery?: string[];
  galleryAspect?: string;
  galleryFit?: "cover" | "contain";
  report?: string;
};

// Titles / descriptions / problem / solution / impact copy lives in
// messages/*.json under projects.items.<id> so every locale reads naturally
// instead of being a literal translation of the others.
export const projects: Project[] = [
  {
    id: "securewatch",
    categoryKey: "soc",
    dir: "row",
    tech: ["Python", "ELK Stack", "Prometheus", "Grafana", "Docker", "Nginx"],
    github: "https://github.com/hichamagrad/securewatch",
    demo: null,
    hasStatus: true,
    gallery: [
      "/images/projects/securewatch/01-dashboard.png",
      "/images/projects/securewatch/02-logs.png",
      "/images/projects/securewatch/03-alerts.png",
      "/images/projects/securewatch/04-alerts-scroll.png",
      "/images/projects/securewatch/05-geomap.png",
      "/images/projects/securewatch/06-geomap-table.png",
    ],
    galleryAspect: "1264/569",
  },
  {
    id: "sentinelllm",
    categoryKey: "aiSecurity",
    dir: "row-reverse",
    tech: ["FastAPI", "PostgreSQL", "Celery", "Redis", "React", "TypeScript", "Docker"],
    github: "https://github.com/hichamagrad/sentinelllm",
    demo: null,
    hasStatus: true,
    gallery: [
      "/images/projects/sentinelllm/01-login.png",
      "/images/projects/sentinelllm/02-dashboard.png",
      "/images/projects/sentinelllm/03-add-model.png",
      "/images/projects/sentinelllm/04-models-list.png",
      "/images/projects/sentinelllm/05-launch-audit.png",
      "/images/projects/sentinelllm/06-audit-progress.png",
      "/images/projects/sentinelllm/07-audit-results.png",
    ],
    galleryAspect: "16/9",
    report: "/documents/sentinelllm-sample-report.pdf",
  },
  {
    id: "networkSupervision",
    categoryKey: "networkSecurity",
    dir: "row",
    tech: ["VirtualBox", "Ubuntu Server", "Bash", "Nmap", "SNMP", "Zabbix", "PostgreSQL"],
    github: null,
    demo: null,
    hasStatus: true,
    gallery: [
      "/images/projects/network-supervision/01-virtualbox-lab.jpg",
      "/images/projects/network-supervision/02-zabbix-hosts.jpg",
      "/images/projects/network-supervision/03-zabbix-latest-data.jpg",
      "/images/projects/network-supervision/04-zabbix-dashboard.jpg",
    ],
    galleryAspect: "16/9",
    galleryFit: "contain",
  },
  {
    id: "faceRecognition",
    categoryKey: "appliedMl",
    dir: "row-reverse",
    tech: ["Django", "OpenCV", "face_recognition", "Bootstrap", "SQLite"],
    github: "https://github.com/hichamagrad/Systeme-de-Reconnaissance-Faciale-avec-Django",
    demo: null,
    hasStatus: false,
    image: "/images/projects/face-recognition.png",
  },
  {
    id: "secureEcommerce",
    categoryKey: "secureWeb",
    dir: "row",
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    github: "https://github.com/hichamagrad/aasPhones",
    demo: "https://aas-phones.vercel.app",
    hasStatus: false,
    image: "/images/projects/secure-ecommerce.png",
    imagePosition: "top",
  },
];
