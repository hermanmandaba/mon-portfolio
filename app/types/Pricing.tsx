export interface PricingPlan {
  name: {
    en: string;
    fr: string;
  };
  price: string;
  description: {
    en: string;
    fr: string;
  };
  features: {
    en: string[];
    fr: string[];
  };
  popular?: boolean;
}


const pricingPlans: PricingPlan[] = [
  {
    name: {
      en: "Starter",
      fr: "Départ",
    },
    price: "$299",
    description: {
      en: "Perfect for freelancers, small businesses, or associations looking for a simple and fast solution..",
      fr: "Parfait pour les indépendants, TPE, ou associations souhaitant une solution simple et rapide.",
    },
    features: {
      en: [
        "Customized showcase website (up to 5 pages)",
        "1 optimized landing page (promotion or contact collection)",
        "Basic mobile optimization and SEO",
        "Maintenance and support included* for 1 month after delivery",
        "Responsive design* and contact form",
        "Modification*: 1 round of adjustments included",
        "Delivery time*: 10 days"
      ],
      fr: [
        "Site vitrine personnalisé (jusqu'à 5 pages)",
        "1 landing page* optimisée (promotion ou collecte de contacts)",
        "Optimisation mobile et SEO de base",
        "Maintenance et support compris pour 1 mois après livraison",
        "Design responsive et formulaire de contact",
        "Modifications : 1 round d’ajustements inclus",
        "Délai de livraison* : 10 jours",
      ],
    },
  },
  {
    name: {
      en: "Business",
      fr: "Business",
    },
    price: "$499",
    description: {
      en: "Designed for SMEs and startups seeking visibility and digital performance.",
      fr: "Destinée aux PME et startups en quête de visibilité et de performance digitale.",
    },
    features: {
      en: [
        "Professional showcase website (up to 10 pages)",
        "Up to 3 landing pages for your marketing campaigns",
        "Complete graphic and technical redesign (advanced SEO optimization)",
        "Integration of blog or news, media gallery, analytics",
        "Maintenance and support included for 3 months (updates, backups, fixes)",
        "Modifications: 5 rounds of adjustments included",
        "Delivery time: 3 weeks"
      ],
      fr: [
        "Site vitrine professionnel (jusqu'à 10 pages)",
        "Jusqu’à 3 landing pages pour vos campagnes marketing",
        "Refonte graphique et technique complète (optimisation SEO avancée)",
        "Intégration blog ou actualités, galerie média, analytics",
        "Maintenance et support sur 3 mois inclus (mises à jour, backups, corrections)",
        "Modifications : 5 rounds d’ajustements inclus",
        "Délai de livraison* : 3 semaines"
      ],
    },
    popular: true,
  },
  {
    name: {
      en: "Enterprise",
      fr: "Entreprise",
    },
    price: "$1199",
    description: {
      en: "For large organizations, NGOs, or government agencies requesting a premium, tailor-made service.",
      fr: "Pour les grandes structures, ONG ou administrations demandant un service haut de gamme sur-mesure.",
    },
    features: {
      en: [
        "Premium showcase website with unlimited pages and exclusive design",
        "Unlimited landing pages based on your marketing needs",
        "Advanced UX/UI optimization, in-depth technical SEO, and content migration",
        "Advanced options: animations, custom forms, CRM/ERP integration",
        "Premium maintenance and support: 6 months included with priority assistance and enhanced security",
        "Training and unlimited modifications during the maintenance period",
        "Modifications: 10 rounds of adjustments included",
        "Delivery time: 4 to 6 weeks depending on project complexity"
      ],
      fr: [
        "Site vitrine premium, nombre de pages illimité, design exclusif",
        "Landings pages illimitées selon vos besoins marketing",
        "Optimisation UX/UI avancée, SEO technique approfondi, migration de contenus",
        "Options avancées : animations, formulaires personnalisés, intégration CRM/ERP",
        "Maintenance et support premium : 6 mois inclus avec assistance prioritaire et sécurité renforcée",
        "Formation à l’utilisation et modifications illimitées pendant la période de maintenance",
        "Modifications: 10 rounds d’ajustements inclus",
        "Délai de livraison : 4 à 6 semaines selon la complexité du projet",
      ],
    },
  },
];

export default pricingPlans;
