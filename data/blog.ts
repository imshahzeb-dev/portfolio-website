export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of IT Solutions in Business",
    excerpt:
      "Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.",
    image: "/assets/images/blog1.png",
    date: "2024-05-14",
    author: "Admin",
    category: "Technology",
    slug: "future-of-it-solutions",
  },
  {
    id: 2,
    title: "Cloud Computing: Transform Your Business",
    excerpt:
      "Discover how cloud computing can revolutionize your business operations and drive growth in the digital age.",
    image: "/assets/images/blog2.png",
    date: "2024-05-12",
    author: "Admin",
    category: "Cloud Services",
    slug: "cloud-computing-transform-business",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for 2024",
    excerpt:
      "Learn essential cybersecurity practices to protect your business from evolving threats in the digital landscape.",
    image: "/assets/images/blog3.png",
    date: "2024-05-10",
    author: "Admin",
    category: "Security",
    slug: "cybersecurity-best-practices-2024",
  },
  {
    id: 4,
    title: "AI and Machine Learning in Modern IT",
    excerpt:
      "Explore how artificial intelligence and machine learning are reshaping the IT industry and creating new opportunities.",
    image: "/assets/images/blog4.png",
    date: "2024-05-08",
    author: "Admin",
    category: "AI & ML",
    slug: "ai-machine-learning-modern-it",
  },
]
