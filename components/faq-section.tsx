"use client"

import { faqs } from "@/data/faqs"
import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 !== 0)

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 md:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            FAQ's
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build responsive, mobile-first projects on the web with the world's
            most popular front-end component library.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 mt-5 md:mt-10">
          <div className="space-y-2 md:space-y-4">
            {leftColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2
              const isOpen = openIndex === actualIndex
              return (
                <div
                  key={faq.id}
                  className="p-4 md:p-8 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"
                  onClick={() => toggleFAQ(actualIndex)}
                >
                  <div className="question flex gap-3 justify-between items-center">
                    <div className="flex gap-2 items-center flex-1">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 rounded">
                        <i className="ph ph-arrow-right text-white"></i>
                      </div>
                      <h3 className="text-blue-500 text-lg font-bold">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="relative">
                      <i
                        className={`ph ph-minus text-blue-500 text-2xl transition-transform ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`answer overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-[150%]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="space-y-2 md:space-y-4">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2 + 1
              const isOpen = openIndex === actualIndex
              return (
                <div
                  key={faq.id}
                  className="p-4 md:p-8 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"
                  onClick={() => toggleFAQ(actualIndex)}
                >
                  <div className="question flex gap-3 justify-between items-center">
                    <div className="flex gap-2 items-center flex-1">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 rounded">
                        <i className="ph ph-arrow-right text-white"></i>
                      </div>
                      <h3 className="text-blue-500 text-lg font-bold">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="relative">
                      <i
                        className={`ph ph-minus text-blue-500 text-2xl transition-transform ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`answer overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-[150%]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
