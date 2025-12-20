export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "MANNY DANIEL",
    role: "DEVELOPER",
    image: "/assets/images/team1.png",
    social: {},
  },
  {
    id: 2,
    name: "Aradhya",
    role: "DEVELOPER",
    image: "/assets/images/team2.png",
    social: {},
  },
  {
    id: 3,
    name: "Jhone Doe",
    role: "DEVELOPER",
    image: "/assets/images/team3.png",
    social: {},
  },
  {
    id: 4,
    name: "Keena Lara",
    role: "Store Owner",
    image: "/assets/images/team4.png",
    social: {},
  },
  {
    id: 5,
    name: "John Rose",
    role: "DESIGNER",
    image: "/assets/images/team5.png",
    social: {},
  },
  {
    id: 6,
    name: "Afa Rose",
    role: "DEVELOPER",
    image: "/assets/images/team6.png",
    social: {},
  },
  {
    id: 7,
    name: "Keena Lara",
    role: "DEVELOPER",
    image: "/assets/images/team7.png",
    social: {},
  },
  {
    id: 8,
    name: "Jane Smith",
    role: "MARKETING",
    image: "/assets/images/team8.png",
    social: {},
  },
]
