type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'Landing Page',
    price: '$299',
    description: 'Perfect for startups and small businesses',
    features: [
      'Single page design',
      'Mobile responsive',
      'SEO optimized',
      'Contact form',
      '1 week delivery',
      '2 rounds of revisions'
    ],
    popular: false
  },
  {
    name: 'Business Website',
    price: '$799',
    description: 'Ideal for established businesses',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'CMS integration',
      'SEO optimized',
      'Contact & inquiry forms',
      '2 week delivery',
      '3 rounds of revisions',
      'Performance optimization'
    ],
    popular: true
  },
  {
    name: 'E-Commerce',
    price: '$1,299',
    description: 'Complete online store solution',
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment integration',
      'Admin dashboard',
      'Order management',
      'Mobile responsive',
      '3 week delivery',
      'Unlimited revisions',
      'Training & support'
    ],
    popular: false
  }
];

export default pricingPlans;