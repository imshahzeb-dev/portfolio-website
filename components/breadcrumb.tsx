"use client"

import Link from "next/link"
import { Fragment } from "react"
import { Icon } from "@/components/icons"

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[#CEE3FF] dark:border-[#0E2C63] bg-[#F5F9FF] dark:bg-[#0B2451] py-4"
    >
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center gap-2 text-base">
          <li>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#0059E8]"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <Fragment key={`${item.label}-${index}`}>
              <li aria-hidden className="text-gray-400 dark:text-gray-600">
                <Icon name="caret-right" className="text-xs" />
              </li>
              <li>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 transition-colors hover:text-[#0059E8]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-[#FF9958] line-clamp-1">
                    {item.label}
                  </span>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  )
}
