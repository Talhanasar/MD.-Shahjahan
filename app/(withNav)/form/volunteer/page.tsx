"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function VolunteerFormPage() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en
  const T = t as any // loosen typing for flexible translation keys

  // localized strings with fallbacks
  const backToHomeLabel = T.volunteer?.backToHome ?? T.contact?.backToHome ?? "Back to Home"
  const badgeLabel = T.volunteer?.badge ?? "Volunteer Application"
  const pageTitle = T.volunteer?.pageTitle ?? "Join Our Volunteer Team"
  const pageDescription =
    T.volunteer?.pageDescription ??
    `Help us make a difference in our community. Fill out the form below to become a volunteer for ${candidateData.firstName}'s campaign.`

  const personalInfoTitle = T.volunteer?.sections?.personalInfo?.title ?? "Personal Information"
  const addressInfoTitle = T.volunteer?.sections?.addressInfo?.title ?? "Address Information"
  const professionalInfoTitle = T.volunteer?.sections?.professionalInfo?.title ?? "Professional Information"
  const volunteerDetailsTitle = T.volunteer?.sections?.details?.title ?? "Volunteer Details"

  const labels = {
    fullName: T.volunteer?.labels?.fullName ?? "Full Name",
    email: T.volunteer?.labels?.email ?? "Email Address",
    phone: T.volunteer?.labels?.phone ?? "Phone Number",
    age: T.volunteer?.labels?.age ?? "Age",
    address: T.volunteer?.labels?.address ?? "Street Address",
    city: T.volunteer?.labels?.city ?? "City",
    district: T.volunteer?.labels?.district ?? "District",
    occupation: T.volunteer?.labels?.occupation ?? "Occupation",
    availability: T.volunteer?.labels?.availability ?? "Availability",
    skills: T.volunteer?.labels?.skills ?? "Skills & Expertise",
    previousExperience: T.volunteer?.labels?.previousExperience ?? "Previous Volunteer Experience",
    motivation: T.volunteer?.labels?.motivation ?? "Why do you want to volunteer?"
  }

  const placeholders = {
    fullName: T.volunteer?.placeholders?.fullName ?? "Enter your full name",
    email: T.volunteer?.placeholders?.email ?? "your.email@example.com",
    phone: T.volunteer?.placeholders?.phone ?? "+880 1XXX XXXXXX",
    age: T.volunteer?.placeholders?.age ?? "Your age",
    address: T.volunteer?.placeholders?.address ?? "House/Street address",
    city: T.volunteer?.placeholders?.city ?? "City name",
    district: T.volunteer?.placeholders?.district ?? "District name",
    occupation: T.volunteer?.placeholders?.occupation ?? "Your profession",
    skills: T.volunteer?.placeholders?.skills ?? "List any relevant skills (e.g., event management, social media, public speaking)",
    previousExperience:
      T.volunteer?.placeholders?.previousExperience ?? "Describe any previous volunteer or campaign experience",
    motivation: T.volunteer?.placeholders?.motivation ?? "Tell us what motivates you to join our campaign..."
  }

  const availabilityOptions = T.volunteer?.options?.availability ?? {
    "": T.volunteer?.options?.select ?? "Select availability",
    "full-time": T.volunteer?.options?.fullTime ?? "Full Time",
    "part-time": T.volunteer?.options?.partTime ?? "Part Time",
    "weekends": T.volunteer?.options?.weekends ?? "Weekends Only",
    "evenings": T.volunteer?.options?.evenings ?? "Evenings Only",
    "flexible": T.volunteer?.options?.flexible ?? "Flexible"
  }

  const submitLabel = T.volunteer?.submit ?? "Submit Application"
  const submittingLabel = T.volunteer?.submitting ?? "Submitting..."
  const cancelLabel = T.volunteer?.cancel ?? "Cancel"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    age: "",
    occupation: "",
    availability: "",
    skills: "",
    motivation: "",
    previousExperience: ""
  })

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call in production
    await new Promise((resolve) => setTimeout(resolve, 1400))

    setIsSubmitting(false)

    const params = new URLSearchParams({
      type: "volunteer",
      email: formData.email,
      name: formData.fullName
    })
    router.push(`/form/success?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <Button asChild variant="ghost" className="mb-6 text-stone-600 hover:text-stone-900 hover:bg-grey-700">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backToHomeLabel}
            </Link>
          </Button>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-100 text-teal-900 mb-6">
              <Users className="w-5 h-5" />
              <span className="font-semibold">{badgeLabel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{pageTitle}</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">{pageDescription}</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
            {/* Personal Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">{personalInfoTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.fullName} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.fullName}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.email} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.email}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.phone} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.phone}
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.age} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min={18}
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.age}
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">{addressInfoTitle}</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.address} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.address}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-stone-700 mb-2">
                      {labels.city} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                      placeholder={placeholders.city}
                    />
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-sm font-semibold text-stone-700 mb-2">
                      {labels.district} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                      placeholder={placeholders.district}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b border-stone-200 pb-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">{professionalInfoTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.occupation}
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                    placeholder={placeholders.occupation}
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.availability} <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">{availabilityOptions[""]}</option>
                    <option value="full-time">{availabilityOptions["full-time"]}</option>
                    <option value="part-time">{availabilityOptions["part-time"]}</option>
                    <option value="weekends">{availabilityOptions["weekends"]}</option>
                    <option value="evenings">{availabilityOptions["evenings"]}</option>
                    <option value="flexible">{availabilityOptions["flexible"]}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Volunteer Details */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">{volunteerDetailsTitle}</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="skills" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.skills}
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={placeholders.skills}
                  />
                </div>

                <div>
                  <label htmlFor="previousExperience" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.previousExperience}
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    rows={3}
                    value={formData.previousExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={placeholders.previousExperience}
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-stone-700 mb-2">
                    {labels.motivation} <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={placeholders.motivation}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-teal-800 hover:bg-teal-900 text-white h-14 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? submittingLabel : submitLabel}
              </Button>

              <Button type="button" asChild variant="outline" className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 hover:text-teal-900 h-14 text-lg rounded-full">
                <Link href="/">{cancelLabel}</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}