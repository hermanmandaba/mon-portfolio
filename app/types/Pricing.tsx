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
    price: "$499",
    description: {
      en: "Perfect for simple, one-page websites or MVPs.",
      fr: "Parfait pour les sites simples ou les MVPs.",
    },
    features: {
      en: [
        "1 Page Design",
        "Responsive Layout",
        "Basic Animations",
        "Delivery in 3–5 days",
      ],
      fr: [
        "Design 1 page",
        "Mise en page responsive",
        "Animations de base",
        "Livraison en 3 à 5 jours",
      ],
    },
  },
  {
    name: {
      en: "Pro",
      fr: "Pro",
    },
    price: "$999",
    description: {
      en: "For growing businesses and brands who need a full site.",
      fr: "Pour les entreprises ou marques qui veulent un site complet.",
    },
    features: {
      en: [
        "Up to 5 Pages",
        "Custom UI Components",
        "SEO Optimization",
        "Delivery in 5–8 days",
      ],
      fr: [
        "Jusqu’à 5 pages",
        "Composants UI personnalisés",
        "Optimisation SEO",
        "Livraison en 5 à 8 jours",
      ],
    },
    popular: true,
  },
  {
    name: {
      en: "E-Commerce",
      fr: "E-Commerce",
    },
    price: "$1499",
    description: {
      en: "Ideal for online stores with checkout and product pages.",
      fr: "Idéal pour les boutiques en ligne avec panier et pages produits.",
    },
    features: {
      en: [
        "Product Pages",
        "Stripe/PayPal Integration",
        "Admin CMS (optional)",
        "Delivery in 7–10 days",
      ],
      fr: [
        "Pages produits",
        "Intégration Stripe/PayPal",
        "CMS admin (optionnel)",
        "Livraison en 7 à 10 jours",
      ],
    },
  },
];

export default pricingPlans;
