"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { COMPANY, CONTACT, ENGAGEMENT_MODELS, SOCIALS } from "@/data/company"
import { services } from "@/data/services"
import { Icon } from "@/components/icons"

interface FormState {
  name: string
  email: string
  company: string
  service: string
  engagement: string
  message: string
}

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  engagement: "",
  message: "",
}

const inputClass =
  "w-full rounded-lg border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 outline-none transition-colors focus:border-[#0059E8] focus:ring-2 focus:ring-[#0059E8]/20"

export function ContactForm({ showHeading = true }: { showHeading?: boolean }) {
  const [formData, setFormData] = useState<FormState>(EMPTY)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    // TODO(founder): point this at the real inbox or CRM endpoint. Until then
    // the form validates and confirms locally without sending anything.
    await new Promise((resolve) => setTimeout(resolve, 900))

    setIsSubmitting(false)
    setStatus({
      type: "success",
      message:
        "Thanks — your message is with us. A senior engineer, not a salesperson, will reply within one working day.",
    })
    setFormData(EMPTY)
  }

  return (
    <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us what you're building."
            description="We'll tell you exactly how we'd approach it — including the parts we think are wrong, and the parts you don't need to build at all."
            className="mb-12 lg:mb-16"
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7 h-full">
              <h3 className="fs-five font-semibold text-gray-900 dark:text-white mb-6">
                Contact details
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#0059E8]">
                    <Icon name="map-pin" className="text-2xl text-white" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {CONTACT.address.join(", ")}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#0059E8]">
                    <Icon name="envelope" className="text-2xl text-white" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-[#0059E8] transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#0059E8]">
                    <Icon name="phone" className="text-2xl text-white" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a
                      href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-[#0059E8] transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#0059E8]">
                    <Icon name="clock" className="text-2xl text-white" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">{CONTACT.hours}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#CEE3FF] dark:border-[#0E2C63]">
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                  {COMPANY.trustLine}
                </p>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F9FF] dark:bg-[#0E2C63] text-[#0059E8] transition-all hover:bg-[#0059E8] hover:text-white"
                    >
                      <Icon name={social.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    Work email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="engagement" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    Preferred engagement model
                  </label>
                  <select
                    id="engagement"
                    name="engagement"
                    value={formData.engagement}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a model</option>
                    {ENGAGEMENT_MODELS.map((model) => (
                      <option key={model.slug} value={model.slug}>
                        {model.name}
                      </option>
                    ))}
                    <option value="advise-me">Recommend one for me</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block font-medium text-gray-900 dark:text-white">
                    What are you building? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="The problem, where you are now, and what success looks like."
                    className={cn(inputClass, "resize-y")}
                  />
                </div>
              </div>

              {status.type && (
                <div
                  role="status"
                  className={cn(
                    "mt-6 flex items-start gap-3 rounded-lg p-4",
                    status.type === "success"
                      ? "bg-[#0059E8]/10 text-[#0059E8] dark:text-[#4d92ff]"
                      : "bg-red-500/10 text-red-500"
                  )}
                >
                  <Icon
                    name={status.type === "success" ? "check-circle" : "warning-circle"}
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                  <p className="text-base">{status.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all hover:bg-[#0046BA] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                We reply to every enquiry within one working day. No automated sales sequence.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
