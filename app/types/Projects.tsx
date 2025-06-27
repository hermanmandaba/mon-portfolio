export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with Next.js, Stripe integration, and responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "Chart.js", "TypeScript", "API Integration"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SaaS Landing Page",
    description: "High-converting landing page for a SaaS product with modern animations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "SEO Optimized"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Restaurant Website",
    description: "Beautiful restaurant website with online ordering and reservation system.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    tech: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default projects;


