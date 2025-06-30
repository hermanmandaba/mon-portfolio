type Service = {
  title: string;
  description: string;
  features: string[];
};



  const services: Service[] = [
    {
      title: 'Landing Pages',
      description:
        'High-impact, fast-loading landing pages - perfect for MVPs, product launches, or ad compaigns.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
    },
    {
      title: 'Business Websites',
      description:
        'A professional online presence to showcase your brand, services and story. Folly responsive and easy to manage.',
      features: ['Custom Design', 'CMS Integration', 'Mobile Responsive', 'Brand Alignment'],
    },
    {
      title: 'UI Implementation',
      description:
        'Got a Figma or design file ? I turn your UI into clean, pixel-perfect, production-ready code using React & Tailwind.',
      features: ['Figma to Code', 'Interactive Elements', 'Cross-browser Compatible', 'Performance Optimized'],
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Fully functionnal, responsive online stores with custom checkout, product pages and CMS integration.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Order Management'],
    },
  ];

  export default services;

