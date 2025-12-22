"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

const iconMap = {
  Users,
  CheckCircle2
}

export default function ManifestoSection() {
  const { language: lang, t, data } = useLanguageAndData()

  const title = t?.manifesto?.title ?? data.manifesto.title
  const description = t?.manifesto?.description ?? data.manifesto.description
  // manifesto items might be candidate-specific; we fall back to data.manifesto.items
  const items = t?.manifesto?.items ?? data.manifesto.items

  return (
    <section id="manifesto" className="py-24 bg-gradient-to-br from-teal-800 via-teal-900 to-green-900 text-white relative overflow-hidden">
      {/* Background pattern with enhanced opacity and smaller grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
      />

      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title and Description Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white drop-shadow-lg">{title}</h2>
            <p className="text-lg text-teal-50/90 max-w-md leading-relaxed mt-3">
              {description}
            </p>
          </div>

          {/* Updated Button Design with Link to Full Policy */}
          <Button asChild variant="link" className="text-white hover:bg-white/10 text-lg p-0 h-auto group hover:no-underline transition-all">
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
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-teal-950/50 transition-all duration-300 group"
              >
                {/* Icon Container with better hover effects */}
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:from-white group-hover:to-teal-50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white group-hover:text-teal-900 transition-colors" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 text-white font-serif group-hover:text-white transition-colors">{itemTitle}</h3>
                <p className="text-teal-50/95 leading-relaxed">{itemDesc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}