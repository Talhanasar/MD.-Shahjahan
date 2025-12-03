"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, MessageSquare, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function ContactFormPage() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en

  // localized strings with sensible fallbacks
  const backToHomeLabel = t.contact?.backToHome ?? "Back to Home"
  const contactBadge = t.contact?.badge ?? "Contact Form"
  const pageTitle = t.contact?.pageTitle ?? `Contact ${candidateData.firstName} ${candidateData.lastName}`
  const pageDescription =
    t.contact?.pageDescription ??
    "Have a question, concern, or suggestion? We want to hear from you. Fill out the form below and we'll get back to you as soon as possible."

  const contactInfoTitle = t.contact?.infoTitle ?? "Contact Information"
  const emailLabel = t.contact?.emailLabel ?? "Email"
  const phoneLabel = t.contact?.phoneLabel ?? "Phone"
  const officeLabel = t.contact?.officeLabel ?? "Office"

  const fullNameLabel = t.contact?.labels?.fullName ?? "Full Name"
  const emailLabelForm = t.contact?.labels?.email ?? "Email Address"
  const phoneLabelForm = t.contact?.labels?.phone ?? "Phone Number"
  const subjectLabel = t.contact?.labels?.subject ?? "Subject"
  const messageLabel = t.contact?.labels?.message ?? "Message"

  const placeholder = {
    fullName: t.contact?.placeholders?.fullName ?? "Enter your full name",
    email: t.contact?.placeholders?.email ?? "your.email@example.com",
    phone: t.contact?.placeholders?.phone ?? "+880 1XXX XXXXXX",
    message: t.contact?.placeholders?.message ?? "Please share your thoughts, questions, or concerns..."
  }

  const selectDefaultLabel = t.contact?.selectDefault ?? "Select a subject"

  const optionLabels = {
    general: t.contact?.options?.general ?? "General Inquiry",
    support: t.contact?.options?.support ?? "Campaign Support",
    event: t.contact?.options?.event ?? "Event Information",
    policy: t.contact?.options?.policy ?? "Policy Question",
    media: t.contact?.options?.media ?? "Media Inquiry",
    other: t.contact?.options?.other ?? "Other"
  }

  const sendLabel = t.contact?.send ?? "Send Message"
  const sendingLabel = t.contact?.sending ?? "Sending..."
  const cancelLabel = t.contact?.cancel ?? "Cancel"

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with real API call in production
    await new Promise((resolve) => setTimeout(resolve, 1400))

    setIsSubmitting(false)

    const params = new URLSearchParams({
      type: "contact",
      email: formData.email,
      subject: formData.subject || "general",
      name: formData.fullName
    })
    router.push(`/form/success?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button asChild variant="ghost" className="mb-6 text-stone-600 hover:text-stone-900 hover:bg-grey-700">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backToHomeLabel}
            </Link>
          </Button>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-100 text-teal-900 mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">{contactBadge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              {pageTitle}
            </h1>

            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {pageDescription}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-stone-900 mb-6">{contactInfoTitle}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{emailLabel}</h3>
                    <a
                      href={`mailto:${candidateData.contact.email}`}
                      className="text-stone-600 hover:text-teal-900 transition-colors text-sm break-all"
                    >
                      {candidateData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{phoneLabel}</h3>
                    <a
                      href={`tel:${candidateData.contact.phone}`}
                      className="text-stone-600 hover:text-teal-900 transition-colors text-sm"
                    >
                      {candidateData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{officeLabel}</h3>
                    <p className="text-stone-600 text-sm">
                      {candidateData.contact.address.line1}
                      <br />
                      {candidateData.contact.address.line2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-stone-700 mb-2">
                    {fullNameLabel} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-900 focus:border-transparent outline-none transition-all"
                    placeholder={placeholder.fullName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    {emailLabelForm} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholder.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                  {phoneLabelForm}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                  placeholder={placeholder.phone}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                  {subjectLabel} <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                >
                  <option value="">{selectDefaultLabel}</option>
                  <option value="general">{optionLabels.general}</option>
                  <option value="support">{optionLabels.support}</option>
                  <option value="event">{optionLabels.event}</option>
                  <option value="policy">{optionLabels.policy}</option>
                  <option value="media">{optionLabels.media}</option>
                  <option value="other">{optionLabels.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  {messageLabel} <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={placeholder.message}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-teal-800 hover:bg-teal-900 text-white h-14 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? sendingLabel : sendLabel}
                </Button>

                <Button
                  type="button"
                  asChild
                  variant="outline"
                  className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 hover:text-teal-900 h-14 text-lg rounded-full"
                >
                  <Link href="/">{cancelLabel}</Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}