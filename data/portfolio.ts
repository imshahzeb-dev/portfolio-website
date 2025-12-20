export interface PortfolioItem {
  id: number
  title: string
  category: "Branding" | "Design" | "Development" | "Solution" | "All"
  image: string
  description?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Mobile App Development",
    category: "Development",
    image: "/assets/images/portfolio1.png",
    description: "Custom mobile application for iOS and Android platforms",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/assets/images/portfolio2.png",
    description: "Complete brand identity design for modern businesses",
  },
  {
    id: 3,
    title: "UI/UX Design Project",
    category: "Design",
    image: "/assets/images/portfolio3.png",
    description: "User interface and experience design for web applications",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Solution",
    category: "Solution",
    image: "/assets/images/portfolio4.png",
    description: "Scalable cloud infrastructure for enterprise clients",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Development",
    image: "/assets/images/portfolio5.png",
    description: "Full-featured e-commerce platform with payment integration",
  },
  {
    id: 6,
    title: "Corporate Branding",
    category: "Branding",
    image: "/assets/images/portfolio6.png",
    description: "Professional branding for corporate clients",
  },
  {
    id: 7,
    title: "Web Design Project",
    category: "Design",
    image: "/assets/images/portfolio7.png",
    description: "Modern and responsive web design solutions",
  },
  {
    id: 8,
    title: "IT Consulting Solution",
    category: "Solution",
    image: "/assets/images/portfolio8.png",
    description: "Comprehensive IT consulting and strategy services",
  },
]
