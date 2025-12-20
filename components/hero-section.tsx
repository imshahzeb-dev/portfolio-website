"use client"

import { ParticlesComponent } from "@/components/particles-component"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="particial-bg relative flex items-cnter">
            {/* Particles on top of overlay, behind content */}
            {/* <ParticlesComponent /> */}
            <div className="w-full flex items-center">
                <div className="lg:w-1/2 flex flex-col justify-center h-[60%] mb-20 p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-fit flex gap-3 items-center px-3 lg:px-5 py-2 lg:py-3 border-none bg-[#163872]/90 rounded-full mb-3 lg:mb-6"
                    >
                        <button className="px-3 lg:px-5 py-2 rounded-full text-white bg-[rgb(var(--p3))] font-medium">
                            Hot
                        </button>
                        <span className="text-white">Delivering Superior Services IT Solutions</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="fs-one text-5xl text-white font-bold mb-3 lg:mb-5"
                    >
                        Providing The Best <br /> Services & IT Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/80 text-lg mb-6 lg:mb-10"
                    >
                        Easily customize this template to your preferences. It's SEO-friendly and highly customizable for your unique needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-3 mb-5 lg:mb-10"
                    >
                        <a href="#" className="w-fit btn bg-[#1059E7] text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                            <span className="btn-text-one">Get Quotes</span>
                        </a>
                        <button className="w-fit btn-outline border border-white text-white px-6 py-3 rounded-full font-medium">
                            <span className="btn-text-one">Get Started</span>
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-3"
                    >
                        <a href="#" className="footer_icon w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-[#1059E7] transition-all duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="footer_icon w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-[#1059E7] transition-all duration-300">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="footer_icon w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-[#1059E7] transition-all duration-300">
                            <Linkedin size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 