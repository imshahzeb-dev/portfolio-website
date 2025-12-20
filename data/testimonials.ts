export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  feedback: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jhone Doe",
    role: "Freelancer",
    image: "/assets/images/team8.png",
    rating: 5,
    feedback:
      "Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.",
  },
  {
    id: 2,
    name: "Olivia Jon",
    role: "Digital Marketing",
    image: "/assets/images/team1.png",
    rating: 5,
    feedback:
      "Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.",
  },
  {
    id: 3,
    name: "Russel Doe",
    role: "Web Designer",
    image: "/assets/images/team7.png",
    rating: 5,
    feedback:
      "Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.",
  },
  {
    id: 4,
    name: "Smith Johnson",
    role: "CEO & Founder",
    image: "/assets/images/team3.png",
    rating: 5,
    feedback:
      "Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.",
  },
]
