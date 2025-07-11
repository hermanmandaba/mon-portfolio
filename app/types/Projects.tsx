export interface Project {
  id: number;
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "E-Commerce Landing Pages",
      fr: "Pages de Destination E-Commerce",
    },
    description: {
      en: "Modern e-commerce landing page built with Next.js, Stripe integration, and responsive design.",
      fr: "Page de destination e-commerce moderne avec Next.js, intégration Stripe et design responsive.",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: {
      en: "Dashboard Analytics",
      fr: "Tableau de Bord Analytics",
    },
    description: {
      en: "Real-time analytics dashboard with interactive charts and data visualization.",
      fr: "Tableau de bord analytique en temps réel avec graphiques interactifs et visualisation de données.",
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "Chart.js", "TypeScript", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: {
      en: "SaaS Landing Page",
      fr: "Page de Destination SaaS",
    },
    description: {
      en: "High-converting landing page for a SaaS product with modern animations.",
      fr: "Page d'atterrissage performante pour un produit SaaS avec animations modernes.",
    },
    image: "/Guiwara-Landing-Page-.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "SEO Optimized"],
    liveUrl: "https://guiwara.vercel.app/",
    githubUrl: "https://github.com/hermanmandaba/guiwara",
  },
  {
    id: 4,
    title: {
      en: "Restaurant Website",
      fr: "Site de Restaurant",
    },
    description: {
      en: "Beautiful restaurant website with online ordering and reservation system.",
      fr: "Superbe site de restaurant avec commande en ligne et système de réservation.",
    },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tech: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  }
];
