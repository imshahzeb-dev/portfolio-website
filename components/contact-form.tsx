"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for your message! We'll get back to you as soon as possible.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 5000)
    }, 1500)
  }

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 lg:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 lg:mt-15">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ph ph-map-pin text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Main Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ph ph-phone text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ph ph-envelope text-white text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@technox.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
                      : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
