export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  avatar: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level?: number; // 1 to 5 or percentage
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  previewMode?: "iframe" | "image";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export const profileData: Profile = {
  name: "David",
  role: "Développeur Full-Stack & UI/UX Designer",
  tagline: "Je conçois et développe des expériences web modernes, performantes et esthétiques.",
  bio: "Passionné par l'intersection du code et du design, je crée des applications web de bout en bout en utilisant les dernières technologies. Mon objectif est d'allier performance technique et excellence visuelle pour offrir la meilleure expérience utilisateur possible.",
  location: "Libreville , Gabon",
  avatar: "/assets/profile.png", // Will be created or customized
  email: "davidfirstassoue@gmail.com",
  github: "https://github.com/davidfirstassoue",
  linkedin: "https://www.linkedin.com/in/david-first-a-23394434b/",
  twitter: "https://twitter.com",
  resumeUrl: "#"
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 5, icon: "Atom" },
  { name: "Next.js", category: "frontend", level: 5, icon: "Globe" },
  { name: "TypeScript", category: "frontend", level: 5, icon: "Code" },
  { name: "HTML5 & CSS3", category: "frontend", level: 5, icon: "FileCode" },
  { name: "JavaScript", category: "frontend", level: 5, icon: "Code" },
  { name: "Framer Motion", category: "frontend", level: 4, icon: "Layers" },

  // Backend
  { name: "Node.js", category: "backend", level: 4, icon: "Cpu" },
  { name: "Express", category: "backend", level: 4, icon: "Server" },
  { name: "Supabase", category: "backend", level: 4, icon: "Database" },
  { name: "PostgreSQL", category: "backend", level: 4, icon: "Database" },
  { name: "MongoDB", category: "backend", level: 4, icon: "Database" },
  { name: "REST APIs & GraphQL", category: "backend", level: 4, icon: "Network" },

  // Tools & Others
  { name: "Git & GitHub", category: "tools", level: 5, icon: "GitBranch" },
  { name: "Claude Code", category: "tools", level: 5, icon: "Brain" },
  { name: "Figma", category: "tools", level: 4, icon: "Figma" },
  { name: "Docker", category: "tools", level: 3, icon: "Boxes" },
  { name: "Vercel", category: "tools", level: 4, icon: "Triangle" },
  { name: "SEO & Accessibilité", category: "other", level: 4, icon: "Search" },
  { name: "Intégration IA", category: "other", level: 4, icon: "Sparkles" },
  { name: "UI/UX Design", category: "other", level: 4, icon: "Palette" },
  { name: "Automatisation IA", category: "other", level: 4, icon: "Workflow" }
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Artelly",
    description: "Site e-commerce élégant pour vêtements et accessoires pour femmes.",
    longDescription: "Plateforme e-commerce moderne dédiée à la mode féminine. Propose une interface fluide, un catalogue détaillé pour les vêtements et accessoires, et une expérience utilisateur optimisée pour l'achat en ligne.",
    tags: ["E-commerce", "Mode", "UI/UX", "Next.js"],
    image: "https://image.thum.io/get/width/1200/crop/800/https://artelly-kipm.vercel.app/",
    githubUrl: "",
    liveUrl: "https://artelly-kipm.vercel.app/",
    featured: true,
    previewMode: "image"
  },
  {
    id: "project-2",
    title: "LPO",
    description: "Site web pour une ONG dédiée à la protection de l'enfant.",
    longDescription: "Plateforme de présentation et de sensibilisation pour l'ONG LPO, dont la mission est la protection et le bien-être des enfants. Le site met en avant les actions, les campagnes et permet de s'informer sur leurs missions essentielles.",
    tags: ["ONG", "React", "Frontend", "UI/UX"],
    image: "project_saas",
    githubUrl: "",
    liveUrl: "https://lpo-swjd.vercel.app/",
    featured: true
  },
  {
    id: "project-3",
    title: "Notre Gabon",
    description: "Plateforme pour une ONG spéciale dédiée à la jeunesse.",
    longDescription: "Site vitrine pour l'ONG Notre Gabon, une organisation centrée sur l'accompagnement, l'éducation et l'autonomisation des jeunes. Le site sert de point de rassemblement pour les initiatives de la jeunesse gabonaise.",
    tags: ["ONG", "Jeunesse", "Next.js", "Design"],
    image: "project_analytics",
    githubUrl: "",
    liveUrl: "https://notre-gabon.vercel.app/",
    featured: false
  },
  {
    id: "project-4",
    title: "Eatvite",
    description: "Site web moderne et attractif pour un restaurant.",
    longDescription: "Un site vitrine appétissant pour un restaurant, présentant le menu et l'ambiance des lieux. L'interface est conçue pour mettre en valeur les plats et offrir une navigation intuitive qui donne envie.",
    tags: ["Restaurant", "Vitrines", "React", "Animations"],
    image: "project_weather",
    githubUrl: "",
    liveUrl: "https://eatvite-psi.vercel.app/",
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Développeur Full-Stack Senior",
    company: "Tech Solutions",
    location: "Libreville  (Hybride)",
    period: "2024 - Présent",
    description: [
      "Direction technique d'une équipe de 4 développeurs pour la refonte de l'application SaaS principale sous Next.js.",
      "Optimisation des performances web, division par deux du temps de chargement initial (LCP réduit de 50%).",
      "Mise en place d'une architecture de composants réutilisables et mise en œuvre des bonnes pratiques d'accessibilité (WCAG)."
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "CI/CD"]
  },
  {
    id: "exp-2",
    role: "Développeur Front-End",
    company: "Digital Agency",
    location: "Libreville , Gabon",
    period: "2022 - 2024",
    description: [
      "Développement de plus de 15 sites web haut de gamme et d'applications interactives pour des clients internationaux.",
      "Intégration d'animations complexes fluides et réactives avec Framer Motion pour des expériences immersives.",
      "Collaboration étroite avec les UI/UX designers sur Figma pour garantir une fidélité parfaite des designs."
    ],
    skills: ["React", "JavaScript", "CSS Grid/Flexbox", "Figma", "Sass"]
  }
];
