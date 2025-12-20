"use client"

import { teamMembers } from "@/data/team"
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="pt-[120px] pb-[120px] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 md:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            Our Team
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Meet the Masterminds
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build responsive, mobile-first projects on the web with the world's
            most popular front-end component library.
          </p>
        </div>
        <div className="mt-8 md:mt-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="single_team relative z-10 h-full overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                  <div className="team-content absolute bottom-0 left-0 right-0 bg-blue-900/90 p-3 md:p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="pb-6 md:pb-12">
                      <span className="text-orange-400 text-lg font-semibold mb-2 block">
                        {member.role}
                      </span>
                      <h4 className="text-white text-2xl mb-2 md:mb-3">
                        {member.name}
                      </h4>
                      <span className="text-white text-sm">FB - TW - IN</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
