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
          <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-teal-900 via-teal-800 to-green-800 bg-clip-text text-transparent">{title}</h2>
          <p className="text-stone-600 text-lg">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-stone-50 to-teal-50/30 rounded-2xl p-8 border-2 border-teal-100 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:border-teal-200 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-teal-500/40 transition-all duration-300">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">{volunteerTitle}</h3>
            <p className="text-stone-600 mb-8 grow leading-relaxed">
              {volunteerText}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-green-900 text-white h-12 rounded-full shadow-lg shadow-teal-800/30 hover:shadow-xl hover:shadow-teal-900/40 transition-all"
            >
              <Link href="/form/volunteer">{volunteerButton}</Link>
            </Button>
          </div>

          <div
            id="contact"
            className="bg-gradient-to-br from-stone-50 to-red-50/20 rounded-2xl p-8 border-2 border-red-100 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 hover:border-red-200 transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-red-500/40 transition-all duration-300">
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
              className="w-full border-2 border-teal-700/30 hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-900 hover:text-white hover:border-teal-800 h-12 rounded-full text-teal-800 bg-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/form/contact">{contactButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}