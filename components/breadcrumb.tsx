"use client"

import Link from "next/link"

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-[rgb(var(--b1))] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="text-lg text-white">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            {items.map((item, index) => (
              <span key={index}>
                {" > "}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-orange-400">{item.label}</span>
                )}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
