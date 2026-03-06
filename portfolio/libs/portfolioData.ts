import type { IconType } from "react-icons";
import {
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  RiCodeBoxFill,
  RiCodeSSlashFill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiGitBranchFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiLeafFill,
  RiMicrosoftFill,
  RiReactjsLine,
} from "react-icons/ri";
import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "Tools";
export type ProjectFilter =
  | "All"
  | "React"
  | "Next.js"
  | "Typescript"
  | "C#"
  | "Razor"
  | "MongoDB"
  | "Vite"
  | "Javascript";
export type ExperienceGroup = "it" | "other";

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, "All">;
  level: number;
  icon: IconType;
  iconColor: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  titleKey: string;
  textKey: string;
  tools: string[];
  filters: ProjectFilter[];
  gitHubUrl: string;
  webSiteUrl: string;
  accentClassName: string;
  eyebrow: string;
}

export interface ExperienceItem {
  id: string;
  group: ExperienceGroup;
  label: string;
  technologies: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const skillFilters: SkillCategory[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export const projectFilters: ProjectFilter[] = [
  "All",
  "React",
  "Next.js",
  "Typescript",
  "C#",
  "MongoDB",
  "Vite",
  "Javascript"
];

export const skills: SkillItem[] = [
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    level: 60,
    icon: RiHtml5Fill,
    iconColor: "#f97316",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: 45,
    icon: SiTailwindcss,
    iconColor: "#67e8f9",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: 35,
    icon: SiNextdotjs,
    iconColor: "#f8fafc",
    color: "from-slate-500 to-slate-700",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    level: 45,
    icon: RiReactjsLine,
    iconColor: "#60a5fa",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: 45,
    icon: RiCodeSSlashFill,
    iconColor: "#4f46e5",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    level: 40,
    icon: RiJavascriptFill,
    iconColor: "#facc15",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: "java",
    name: "Java",
    category: "Backend",
    level: 15,
    icon: FaJava,
    iconColor: "#ef4444",
    color: "from-red-500 to-red-700",
  },
  {
    id: "dotnet",
    name: ".NET / C#",
    category: "Backend",
    level: 55,
    icon: RiCodeBoxFill,
    iconColor: "#a855f7",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    category: "Tools",
    level: 10,
    icon: RiMicrosoftFill,
    iconColor: "#4f46e5",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    level: 50,
    icon: RiDatabase2Fill,
    iconColor: "#94a3b8",
    color: "from-slate-500 to-slate-700",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    level: 10,
    icon: RiLeafFill,
    iconColor: "#22c55e",
    color: "from-green-500 to-green-700",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    level: 55,
    icon: RiGitBranchFill,
    iconColor: "#f97316",
    color: "from-orange-600 to-orange-800",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "domus-unify",
    title: "Domus Unify Web",
    description:
      "A family-focused web platform designed to centralize household organization, onboarding, and secure account access within a clean multi-step experience.",
    titleKey: "projects-doumusUnify-title",
    textKey: "projects-domusUnify-text",
    tools: ["React", "Typescript", "Vite", "Tailwind CSS", "C#"],
    filters: ["C#", "Razor", "Vite"],
    gitHubUrl: "https://github.com/MarleneCondesso/DomusUnify",
    webSiteUrl: "https://domus-unify.vercel.app/",
    accentClassName:
      "from-fuchsia-500/35 via-violet-500/15 to-slate-900/30",
    eyebrow: "Family Platform",
  },
  {
    id: "heart-game",
    title: "Heart Game Web",
    description:
      "An interactive relationship-themed web experience that combines a digital love card with memories, a timeline, a gallery, quiz moments, and playful private content.",
    titleKey: "projects-heartgame-title",
    textKey: "projects-heartgame-text",
    tools: ["React", "Javascript", "Vite"],
    filters: ["React", "Javascript", "Vite"],
    gitHubUrl: "https://github.com/MarleneCondesso/HeartGame",
    webSiteUrl: "https://heart-game-pink.vercel.app/",
    accentClassName:
      "from-fuchsia-500/35 via-violet-500/15 to-slate-900/30",
    eyebrow: "Interactive Gift",
  },

  {
    id: "spidergame",
    title: "Spider Game Web",
    description:
      "A browser-based Spider Solitaire experience with selectable difficulty levels, intuitive controls, and live progress tracking for completed suit sequences.",
    titleKey: "projects-spidergame-title",
    textKey: "projects-spidergame-text",
    tools: ["Razor", "C#"],
    filters: ["C#", "Razor"],
    gitHubUrl: "https://github.com/MarleneCondesso/SpiderGameWeb",
    webSiteUrl: "https://spider-game-web-vevl.vercel.app/",
    accentClassName:
      "from-fuchsia-500/35 via-violet-500/15 to-slate-900/30",
    eyebrow: "Card Game",
  },
  {
    id: "sudoku",
    title: "Sudoku Game Web",
    description:
      "A clean Sudoku web application with multiple difficulty levels and a focused puzzle flow built for quick, accessible, and engaging gameplay sessions.",
    titleKey: "projects-sudoku-title",
    textKey: "projects-sudoku-text",
    tools: ["Typescript", "Tailwind CSS", "React"],
    filters: ["React", "Typescript"],
    gitHubUrl: "https://github.com/MarleneCondesso/sudoku.lena",
    webSiteUrl: "https://sudoku-lena.vercel.app/",
    accentClassName:
      "from-emerald-500/35 via-cyan-500/15 to-slate-900/30",
    eyebrow: "Logic Game",
  },
  {
    id: "netflix",
    title: "Netflix Page Web",
    description:
      "A Netflix-inspired streaming interface featuring authentication screens, polished dark visuals, and a user flow tailored to content-first browsing.",
    titleKey: "projects-netflix-title",
    textKey: "projects-netflix-text",
    tools: ["Next.js", "Tailwind CSS", "MongoDB"],
    filters: ["Next.js", "MongoDB"],
    gitHubUrl: "https://github.com/MarleneCondesso/netflix-clone",
    webSiteUrl: "https://netflix-clone-alpha-bice.vercel.app",
    accentClassName: "from-red-500/40 via-rose-500/15 to-slate-900/30",
    eyebrow: "Streaming UI",
  },
  {
    id: "todo",
    title: "Todo Web",
    description:
      "A task management application focused on everyday productivity, with clear create, update, and delete flows wrapped in a simple and practical interface.",
    titleKey: "projects-todo-title",
    textKey: "projects-todo-text",
    tools: ["Next.js", "Tailwind CSS", "MongoDB"],
    filters: ["Next.js", "MongoDB"],
    gitHubUrl: "https://github.com/MarleneCondesso/todolist-web",
    webSiteUrl: "https://todolist-web-brown.vercel.app/",
    accentClassName: "from-cyan-500/35 via-sky-500/15 to-slate-900/30",
    eyebrow: "Productivity",
  },
];

export const sideProjects: ProjectItem[] = [
  {
    id: "project-management",
    title: "Project Management",
    description:
      "A lightweight project management dashboard that lets users create projects, switch context quickly, and organize work through a clear two-panel layout.",
    titleKey: "exercise-projectManagement-title",
    textKey: "exercise-projectManagement-text",
    tools: ["React", "Vite"],
    filters: ["React"],
    gitHubUrl: "https://github.com/MarleneCondesso/Simple-ProjectsManagement",
    webSiteUrl: "https://simple-projects-management.vercel.app/",
    accentClassName:
      "from-amber-500/35 via-orange-400/15 to-slate-900/30",
    eyebrow: "Mini Product",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Game Web",
    description:
      "A polished Tic-Tac-Toe game with multiplayer and computer modes, editable player profiles, and a clean interface built around fast interactive rounds.",
    titleKey: "exercise-tictacGame-title",
    textKey: "exercise-tictacGame-text",
    tools: ["React", "Vite"],
    filters: ["React"],
    gitHubUrl: "https://github.com/MarleneCondesso/tictac-game",
    webSiteUrl: "https://tictac-game-zeta.vercel.app/",
    accentClassName:
      "from-indigo-500/35 via-blue-500/15 to-slate-900/30",
    eyebrow: "Game",
  },
  {
    id: "news-home",
    title: "News Home Page",
    description:
      "A responsive editorial landing page that combines hero stories, trending articles, and ranked content cards with strong typography and visual hierarchy.",
    titleKey: "",
    textKey: "",
    tools: ["JavaScript", "HTML", "CSS"],
    filters: [],
    gitHubUrl:
      "https://github.com/MarleneCondesso/news-homepage/tree/main/news-homepage-main",
    webSiteUrl: "https://news-homepage-two-chi.vercel.app/",
    accentClassName:
      "from-orange-500/35 via-amber-500/15 to-slate-900/30",
    eyebrow: "Frontend Challenge",
  },
  {
    id: "qr-code",
    title: "QR Code Component",
    description:
      "A minimalist QR code card component focused on spacing, typography, and responsive alignment, recreated from a Frontend Mentor design challenge.",
    titleKey: "",
    textKey: "",
    tools: ["JavaScript", "HTML", "CSS"],
    filters: [],
    gitHubUrl:
      "https://github.com/MarleneCondesso/Frontend-CHALLENGE-HUB-QR-code-component/tree/main/qr-code-component-main",
    webSiteUrl:
      "https://marlenecondesso.github.io/Frontend-CHALLENGE-HUB-QR-code-component/",
    accentClassName:
      "from-sky-500/35 via-cyan-500/15 to-slate-900/30",
    eyebrow: "Frontend Challenge",
  },
  {
    id: "result-summary",
    title: "Result Summary Component",
    description:
      "A results summary interface that presents score feedback, category metrics, and call-to-action states through a compact and component-driven layout.",
    titleKey: "",
    textKey: "",
    tools: ["JavaScript", "HTML", "CSS"],
    filters: [],
    gitHubUrl:
      "https://github.com/MarleneCondesso/result-summary-component/tree/main/results-summary-component-main",
    webSiteUrl: "https://result-summary-component-dkk5.vercel.app/",
    accentClassName:
      "from-pink-500/35 via-rose-500/15 to-slate-900/30",
    eyebrow: "Frontend Challenge",
  },
];

export const exerciseFallbackCopy = {
  "news-home": {
    title: "News Home Page",
    text: "Responsive landing page built from a Frontend Mentor challenge.",
  },
  "qr-code": {
    title: "QR Code Component",
    text: "Compact UI exercise focused on spacing, card layout and visual hierarchy.",
  },
  "result-summary": {
    title: "Result Summary Component",
    text: "Component challenge centered on score presentation and clean UI states.",
  },
};

export const experiences: ExperienceItem[] = [

  {
    id: "kaizen",
    group: "it",
    label: "Kaizen Tech",
    technologies: ["C#", "SQL", "TrackSys-Parsec", "Git", "Scrum"]
  },
  {
    id: "n4it",
    group: "it",
    label: "N4IT Software",
    technologies: ["React", ".NET", "Git", "Scrum"],
  },
  {
    id: "ruga",
    group: "other",
    label: "RUGA",
    technologies: ["Quality", "Packaging", "Textile"],
  },
  {
    id: "dolores",
    group: "other",
    label: "Dolores Hipólito",
    technologies: ["Operations", "Packing", "Machines"],
  },
  {
    id: "fm",
    group: "other",
    label: "FM Têxteis",
    technologies: ["Cutting", "Confection", "Textile"],
  },
  {
    id: "esposende",
    group: "other",
    label: "Esposende 2000",
    technologies: ["Events", "Sports", "Coordination"],
  },
  {
    id: "bombeiros",
    group: "other",
    label: "Bombeiros de Fão",
    technologies: ["Safety", "Field Work", "Environment"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MarleneCondesso",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marleneflima/",
    icon: FaLinkedinIn,
  },
  {
    label: "Codepen",
    href: "https://codepen.io/MarleneCondesso",
    icon: FaCodepen,
  },
];

export const contactLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:marleneflima.official@gmail.com",
    icon: FaEnvelope,
  },
  ...socialLinks,
];
