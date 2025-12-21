"use client"

import { Button } from "@/components/ui/button"
import { Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function GetInvolvedSection() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? {}

  const title = t?.getInvolved?.title ?? "Get Involved"
  const description = t?.getInvolved?.description ?? "There are many ways to support the movement. Choose the one that suits you best."

  const volunteerTitle = t?.getInvolved?.volunteerTitle ?? "Become a Volunteer"
  const volunteerText = t?.getInvolved?.volunteerText ?? "Join our dedicated team on the ground. Help organize events, spread the message, and drive change in your local area."
  const volunteerButton = t?.buttons?.volunteer ?? "Join the Team"

  const contactTitle = t?.getInvolved?.contactTitle ?? `Contact ${candidateData.firstName}`
  const contactText = t?.getInvolved?.contactText ?? `Have a question, concern, or suggestion? Reach out directly to ${candidateData.firstName}'s office. We want to hear from you.`
  const contactButton = t?.getInvolved?.contactButton ?? "Send a Message"

  return (
    <section id="volunteer" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-teal-900">{title}</h2>
          <p className="text-stone-600 text-lg">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-800 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">{volunteerTitle}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              {volunteerText}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-teal-800 hover:bg-teal-900 text-white h-12 rounded-full"
            >
              <Link href="/form/volunteer">{volunteerButton}</Link>
            </Button>
          </div>

          <div
            id="contact"
            className="bg-stone-50 rounded-2xl p-8 border border-stone-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-800 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">{contactTitle}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              {contactText}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-stone-300 hover:bg-teal-50 hover:text-teal-900 h-12 rounded-full text-stone-700 bg-transparent"
            >
              <Link href="/form/contact">{contactButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}