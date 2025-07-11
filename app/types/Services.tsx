type LocalizedText = {
  en: string;
  fr: string;
};

type Service = {
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
};

const services: Service[] = [
  {
    title: {
      en: 'Landing Pages',
      fr: 'Pages d’atterrissage',
    },
    description: {
      en: 'High-impact, fast-loading landing pages - perfect for MVPs, product launches, or ad campaigns.',
      fr: 'Des pages d’atterrissage percutantes et rapides – idéales pour des MVPs, des lancements de produit ou des campagnes publicitaires.',
    },
    features: [
      { en: 'Responsive Design', fr: 'Design réactif' },
      { en: 'SEO Optimized', fr: 'Optimisé SEO' },
      { en: 'Fast Loading', fr: 'Chargement rapide' },
      { en: 'Conversion Focused', fr: 'Axé sur la conversion' },
    ],
  },
  {
    title: {
      en: 'Business Websites',
      fr: 'Sites vitrines professionnels',
    },
    description: {
      en: 'A professional online presence to showcase your brand, services and story. Fully responsive and easy to manage.',
      fr: 'Une présence en ligne professionnelle pour présenter votre marque, vos services et votre histoire. Responsive et facile à gérer.',
    },
    features: [
      { en: 'Custom Design', fr: 'Design personnalisé' },
      { en: 'CMS Integration', fr: 'Intégration CMS' },
      { en: 'Mobile Responsive', fr: 'Adapté mobile' },
      { en: 'Brand Alignment', fr: 'Alignement de marque' },
    ],
  },
  {
    title: {
      en: 'UI Implementation',
      fr: 'Intégration UI',
    },
    description: {
      en: 'Got a Figma or design file? I turn your UI into clean, pixel-perfect, production-ready code using React & Tailwind.',
      fr: 'Vous avez une maquette Figma ? Je transforme votre UI en code propre, pixel-perfect et prêt pour la production avec React & Tailwind.',
    },
    features: [
      { en: 'Figma to Code', fr: 'Figma en code' },
      { en: 'Interactive Elements', fr: 'Éléments interactifs' },
      { en: 'Cross-browser Compatible', fr: 'Compatible tous navigateurs' },
      { en: 'Performance Optimized', fr: 'Optimisé performance' },
    ],
  },
  {
    title: {
      en: 'E-Commerce Landing Pages',
      fr: 'Pages e-commerce',
    },
    description: {
      en: 'Fully functional, responsive online stores with custom checkout, product pages and CMS integration.',
      fr: 'Boutiques en ligne fonctionnelles et responsive avec paiement intégré, pages produits et CMS.',
    },
    features: [
      { en: 'Simple Add-to-Cart or Direct Checkout Flow', fr: 'Ajout au panier ou paiement direct' },
      { en: 'Secure Payment Integration', fr: 'Paiement sécurisé' },
      { en: 'Custom Product Page Layout', fr: 'Mise en page produit personnalisée' },
      { en: 'CMS Integration (optional)', fr: 'Intégration CMS (optionnelle)' },
      { en: 'Fully Responsive & Smooth Animations', fr: 'Responsive et animations fluides' },
    ],
  },
];

export default services;
