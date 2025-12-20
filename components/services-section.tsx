"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"

export function ServicesSection() {
  return (
    <section className="py-[120px] px-[12px] bg-[#111827]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-[rgb(var(--p3))] font-semibold text-lg block mb-2">Our Services</span>
        <h2 className="fs-two font-bold text-white text-4xl mb-4">Services We Offer</h2>
        <p className="text-white/80 text-lg mb-6">
          Technox is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use Best services & IT solutions.
        </p>
        <Link href="/services" className="inline-block bg-[#2563eb] text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300">
          See Services
        </Link>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            className="flex flex-col items-center text-center rounded-xl cursor-pointer transition-all duration-300 group focus:bg-[#0b2451] hover:bg-[#0b2451] p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={80}
              height={80}
              className="mx-auto mb-6"
            />
            <h4 className="font-semibold text-white text-2xl mb-4">{service.title}</h4>
            <p className="text-white/80 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}