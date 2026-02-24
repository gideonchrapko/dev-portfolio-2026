export type ExperienceEntry = {
  company: string;
  /** Company website URL – if set, company name becomes a link */
  url?: string;
  role: string;
  type: string; // "Full-time On-site", "Contract · Remote", etc.
  location?: string;
  current?: boolean; // true = show "Current" badge (e.g. Botpress)
  /** e.g. "May 2025" */
  start: string;
  /** e.g. "Present" or "Jan 2026" */
  end: string;
  /** e.g. "10 mos", "2 yrs" */
  duration: string;
  scope: string[];
  capabilities: { label: string; slug: string }[]; // slug for /projects?tag=...
};

export const experience: ExperienceEntry[] = [
  {
    company: "Botpress",
    url: "https://botpress.com",
    role: "Graphic Designer",
    type: "Permanent Full-time",
    location: "Montreal, Quebec, Canada · On-site",
    current: true,
    start: "May 2025",
    end: "Present",
    duration: "10 mos",
    scope: [
      "Visual identity development",
      "Campaign + product design",
      "Cross-team collaboration",
    ],
    capabilities: [
      { label: "Graphic Design", slug: "graphic-design" },
      { label: "Typography", slug: "typography" },
      { label: "Visual Identity", slug: "visual-identity" },
      { label: "Editorial", slug: "editorial" },
      { label: "Illustration", slug: "illustration" },
      { label: "3D", slug: "3d" },
    ],
  },
  {
    company: "Unorthodox Studio",
    url: "https://www.uox.studio",
    role: "Front End Developer",
    type: "Contract Part-time",
    location: "Remote",
    start: "Jun 2021",
    end: "May 2025",
    duration: "4 yrs",
    scope: [
      "Shipped production web applications from prototype to deployment",
      "Translated wireframes into scalable front-end architecture",
      "Collaborated on interaction design and prototyping in Figma",
      "Contributed to GitHub workflows and delivery decisions",
      "Iterated on UX/UI improvements across client projects",
    ],
    capabilities: [
      { label: "React", slug: "react" },
      { label: "Vue", slug: "vue" },
      { label: "Remix", slug: "remix" },
      { label: "Next.js", slug: "nextjs" },
      { label: "Figma", slug: "figma" },
      { label: "Astro", slug: "astro" },
    ],
  },
  {
    company: "Coinbase",
    url: "https://coinbase.com",
    role: "Freelance Animator",
    type: "Contract",
    location: "Remote",
    start: "2022",
    end: "2023",
    duration: "1 yr",
    scope: [
      "Designed high-visibility in-app takeover animations",
      "Collaborated cross-functionally from concept to production",
      "Developed motion aligned with UX and technical constraints",
      "Delivered optimized, product-ready Lottie files for implementation",
    ],
    capabilities: [
      { label: "Animation", slug: "animation" },
      { label: "Lottie", slug: "lottie" },
      { label: "Product Motion", slug: "product-motion" },
      { label: "UX Motion", slug: "ux-motion" },
    ],
  },
];
