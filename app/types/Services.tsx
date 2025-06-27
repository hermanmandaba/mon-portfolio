type Service = {
  title: string;
  description: string;
  features: string[];
};



  const services: Service[] = [
    {
      title: 'Landing Pages',
      description:
        'High-converting landing pages that capture attention and drive results. Optimized for performance and SEO.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
    },
    {
      title: 'Business Websites',
      description:
        'Professional business websites that establish credibility and showcase your brand effectively.',
      features: ['Custom Design', 'CMS Integration', 'Mobile Responsive', 'Brand Alignment'],
    },
    {
      title: 'UI Implementation',
      description:
        'Pixel-perfect implementation of designs with attention to detail and user experience.',
      features: ['Figma to Code', 'Interactive Elements', 'Cross-browser Compatible', 'Performance Optimized'],
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Complete e-commerce platforms with secure payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Order Management'],
    },
  ];

  export default services;

