export interface PricingPlan {
  id: number
  name: string
  price: number
  currency: string
  period: string
  description: string
  icon: string
  features: string[]
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic Plan",
    price: 25,
    currency: "$",
    period: "Month",
    description: "Basic Plan feature for Per Project",
    icon: "ph-paper-plane-tilt",
    features: [
      "Unlimited GB Space",
      "30 Domain Names",
      "Free SSL",
      "Daily Backup",
      "Free Templates",
      "Free Email",
      "10 Databases",
      "Unlimited Email Address",
      "Live Support",
    ],
  },
  {
    id: 2,
    name: "Professional Plan",
    price: 59,
    currency: "$",
    period: "Month",
    description: "Basic Plan feature for Per Project",
    icon: "ph-rocket-launch",
    features: [
      "Unlimited GB Space",
      "30 Domain Names",
      "Free SSL",
      "Daily Backup",
      "Free Templates",
      "Free Email",
      "10 Databases",
      "Unlimited Email Address",
      "Live Support",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: 199,
    currency: "$",
    period: "Month",
    description: "Basic Plan feature for Per Project",
    icon: "ph-lightning",
    features: [
      "Unlimited GB Space",
      "30 Domain Names",
      "Free SSL",
      "Daily Backup",
      "Free Templates",
      "Free Email",
      "10 Databases",
      "Unlimited Email Address",
      "Live Support",
    ],
  },
]
