"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, CheckCircle2 } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

const iconMap = {
  Users,
  CheckCircle2
}

export default function ManifestoSection() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? {}

  const title = t?.manifesto?.title ?? candidateData.manifesto.title
  const description = t?.manifesto?.description ?? candidateData.manifesto.description
  // manifesto items might be candidate-specific; we fall back to candidateData.manifesto.items
  const items = t?.manifesto?.items ?? candidateData.manifesto.items

  return (
    <section id="manifesto" className="py-24 bg-gradient-to-r from-teal-700/70 to-teal-900/70 text-white relative overflow-hidden">
      {/* Background pattern with enhanced opacity and smaller grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title and Description Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white-900">{title}</h2>
            <p className="text-lg text-teal-100/80 max-w-md leading-relaxed">
              {description}
            </p>
          </div>

          {/* Updated Button Design with Link to Full Policy */}
          <Button asChild variant="link" className="text-white hover:bg-teal-800 text-lg p-0 h-auto group  hover:no-underline">
            <Link href="/manifesto" className="flex items-center gap-2">
              {t?.manifesto?.viewFullText ?? "View Full Policy"} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>

        {/* Manifesto Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {(items || []).map((item: any, i: number) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2
            const itemTitle = item.title ?? item.heading ?? `Policy ${i + 1}`
            const itemDesc = item.description ?? item.text ?? ""
            return (
              <div
                key={i}
                className="bg-teal-800/60 backdrop-blur-md border border-teal-600/80 p-8 rounded-xl hover:bg-teal-700/80 transition-colors group"
              >
                {/* Icon Container with better hover effects */}
                <div className="w-14 h-14 bg-teal-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-teal-900 transition-colors">
                  <Icon className="w-8 h-8 text-white group-hover:text-teal-900" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 text-white font-serif">{itemTitle}</h3>
                <p className="text-teal-100 opacity-90">{itemDesc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}