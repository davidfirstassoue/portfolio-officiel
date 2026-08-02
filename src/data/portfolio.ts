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
    title: "E-Commerce Premium",
    description: "Une boutique en ligne moderne avec panier en temps réel, paiement sécurisé Stripe et tableau de bord administrateur complet.",
    longDescription: "Ce projet est une plateforme e-commerce complète conçue pour offrir une expérience d'achat fluide. Elle intègre un système de panier dynamique, l'authentification sécurisée, la gestion des paiements via Stripe et une interface d'administration pour suivre les commandes et gérer les produits.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    image: "project_ecommerce",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "project-2",
    title: "SaaS de Gestion de Tâches",
    description: "Une application collaborative de gestion de projet type Kanban avec notifications en temps réel et intégration calendrier.",
    longDescription: "Un SaaS conçu pour les équipes agiles. Il permet de gérer des projets via des tableaux Kanban interactifs, de planifier des sprints, d'assigner des tâches, d'intégrer des calendriers et de recevoir des notifications en temps réel lors des mises à jour d'équipe.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "project_saas",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "project-3",
    title: "Dashboard d'Analytics",
    description: "Visualisation de données financières et d'audience avec graphiques interactifs, rapports exportables et filtres avancés.",
    longDescription: "Un tableau de bord d'analyse de données complexes. Conçu pour le traitement de gros volumes d'informations, il offre des graphiques interactifs modulables, des filtres avancés par période et l'exportation de rapports détaillés en PDF et Excel.",
    tags: ["Next.js", "TypeScript", "Recharts", "Vanilla CSS", "PostgreSQL"],
    image: "project_analytics",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: "project-4",
    title: "Application Météo Interactive",
    description: "Météo géolocalisée en temps réel avec prévisions à 7 jours, cartes radar interactives et animations météo dynamiques.",
    longDescription: "Une application météo immersive. Elle utilise la géolocalisation pour fournir des prévisions météo précises à 7 jours, des graphiques d'évolution de température et des arrière-plans animés en fonction du climat actuel.",
    tags: ["React", "OpenWeatherMap API", "Framer Motion", "CSS Modules"],
    image: "project_weather",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
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
