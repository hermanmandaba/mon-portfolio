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
      en:'Site Optimization & Redesign',
      fr: 'Optimisation & Refonte de Sites',
    },
    description: {
      en: 'Bring your website back to life with a complete optimization and redesign service, crafted to maximize your online impact and align with today’s digital standards.',
      fr: 'Redonnez vie à votre site web avec un service complet d’optimisation et de refonte, pensé pour maximiser votre impact en ligne et vous aligner sur les standards digitaux actuels.',
    },
    features: [
      { en: 'Detailed audit of the existing website', fr: 'Audit détaillé du site existant' },
      { en: 'Design modernization', fr: 'Modernisation du design' },
      { en: 'Advanced technical optimization', fr: 'Optimisation technique avancée' },
      { en: 'Migration and security', fr: 'Migration et sécurité' },
    ],
  },
  {
    title: {
      en: 'Maintenance & Technical Support',
      fr: 'Maintenance & Support Technique',
    },
    description: {
      en: 'Fully functional, responsive online stores with custom checkout, product pages and CMS integration.',
      fr: 'La maintenance et le support technique sont essentiels pour garantir que votre site internet reste fonctionnel, sécurisé et performant sur le long terme.',
    },
    features: [
      { en: 'Continuous update', fr: 'Mises à jour constinue' },
      { en: 'Data cleaning and optimization', fr: 'Nettoyage et optimisation des données' },
      { en: 'Continuous performance monitoring', fr: 'Surveillance continue des performances' },
      { en: 'Technical Support', fr: 'Assistance technique' },
    ],
  },
];

export default services;
