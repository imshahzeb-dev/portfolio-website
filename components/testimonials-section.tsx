"use client"

import { testimonials } from "@/data/testimonials"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function TestimonialsSection() {
  return (
    <section className="testimonial pt-[120px] pb-[120px]">
      <div className="process_heading w-full text-center mb-8 lg:mb-15">
        <span className="text-lg font-semibold text-orange-400 mb-2 block">
          Testimonials
        </span>
        <h2 className="text-4xl font-semibold text-white mb-6">
          Our Client Recent Feedback
        </h2>
      </div>
      <div className="mt-8 lg:mt-15 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="px-4 sm:px-8 py-5 sm:py-10 border border-blue-200/20 bg-blue-50/5 rounded-lg hover:shadow-xl transition-all"
            >
              <div className="flex gap-4 lg:gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-2xl text-white">{testimonial.name}</h4>
                  <span className="text-base block mb-3 text-gray-300">
                    {testimonial.role}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <i
                        key={i}
                        className="ph-fill ph-star text-orange-400"
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white mt-4 lg:mt-8">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
