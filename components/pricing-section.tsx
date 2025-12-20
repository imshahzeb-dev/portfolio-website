"use client"

import { pricingPlans } from "@/data/pricing"

export function PricingSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 lg:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            Choose Your Plan
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Choose the right plan for your business
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build responsive, mobile-first projects on the web with the world's
            most popular front-end component library.
          </p>
        </div>
        <div className="mt-8 lg:mt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="relative pricing_section">
                <div className="px-4 lg:px-8 py-5 lg:py-10 border border-[#CEE3FF] dark:border-[#0E2C63] rounded-lg hover:shadow-xl transition-all bg-white dark:bg-[#0B2451]">
                  <div className="price_icon bg-[#F5F9FF] dark:bg-[#0B2451] w-20 h-20 flex justify-center items-center mb-3 md:mb-6 rounded-lg">
                    <i
                      className={`ph-fill ${plan.icon} text-5xl text-[#0059E8]`}
                    ></i>
                  </div>
                  <h4 className="text-2xl text-gray-900 dark:text-white mb-5 lg:mb-10">
                    {plan.name}
                  </h4>
                  <h3 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {plan.currency}
                    {plan.price}
                    <span className="text-lg font-normal">/{plan.period}</span>
                  </h3>
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </span>
                  <hr className="border border-gray-200 dark:border-gray-700 my-4 lg:my-8" />
                  <h4 className="text-2xl text-gray-700 dark:text-gray-300 mb-4 lg:mb-8">
                    Quick look at all the features
                  </h4>
                  <ul className="mb-6 md:mb-12 space-y-2 md:space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex gap-3 items-center text-gray-600 dark:text-gray-400"
                      >
                        <i className="ph ph-check text-2xl"></i>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#0059E8] hover:bg-[#0046BA] text-white text-lg w-full rounded-full py-2 md:py-4 transition-all">
                    Get Started
                  </button>
                </div>
                {plan.popular && (
                  <div className="absolute top-5 right-0 bg-[#FF9958] px-3 py-2 sm:px-5 sm:py-4 text-white rounded-l-lg">
                    Popular Choice
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
