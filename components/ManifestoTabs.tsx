"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import { MapPin, BookOpen, Phone, Heart, ShieldCheck, Leaf, Globe } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

type Section = {
  title?: string
  bullets?: string[]
  icon?: string
}

type Topic = {
  slug: string
  title: string
  icon?: string
  summary?: string
  sections?: Section[]
  cta?: { title?: string; text?: string }
}

const ICON_MAP: Record<string, React.FC<any>> = {
  MapPin,
  BookOpen,
  Phone,
  Heart,
  ShieldCheck,
  Leaf,
  Globe
}

/**
 * ManifestoTabs (horizontal pill nav + centered content card)
 *
 * This component renders:
 * - a centered row of rounded "pill" buttons (with icons) at the top (wraps on small screens)
 * - a centered content card below that shows the selected topic title, summary and sections
 *
 * This layout matches the "previous" design (horizontal pills on top + large centered content card).
 *
 * Props:
 * - topics: source topics array (candidateData.manifesto1.topics)
 *
 * Component will prefer translations[lang].manifesto1.topics entries (matched by slug)
 * and merge translated fields onto the source topics.
 */
export default function ManifestoTabs({ topics }: { topics: Topic[] }) {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en

  // Build translated topics map (by slug) if available
  const translatedTopicsBySlug = useMemo(() => {
    const map: Record<string, Topic> = {}
    const tt = (t as any).manifesto1?.topics
    if (Array.isArray(tt)) {
      for (const item of tt) {
        if (item?.slug) map[item.slug] = item
      }
    }
    return map
  }, [t])

  // Merge provided source topics with translations when available
  const mergedTopics: Topic[] = useMemo(() => {
    return (topics || []).map((src) => {
      const tr = translatedTopicsBySlug[src.slug] || {}
      return {
        slug: src.slug,
        title: tr.title ?? src.title,
        icon: tr.icon ?? src.icon,
        summary: tr.summary ?? src.summary,
        sections: tr.sections ?? src.sections,
        cta: tr.cta ?? src.cta
      }
    })
  }, [topics, translatedTopicsBySlug])

  const [activeSlug, setActiveSlug] = useState<string>(mergedTopics[0]?.slug ?? "")
  const activeTopic = mergedTopics.find((m) => m.slug === activeSlug) ?? mergedTopics[0]

  if (!mergedTopics || mergedTopics.length === 0) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-stone-600">No manifesto topics available.</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Top pill navigation (scrollable on mobile, centered on large screens) */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 w-full sm:w-auto overflow-x-auto pb-4 sm:pb-0 px-1 scrollbar-hide sm:justify-center">
            {mergedTopics.map((topic) => {
              const active = topic.slug === activeSlug
              const Icon = ICON_MAP[topic.icon ?? ""] ?? MapPin
              return (
                <button
                  key={topic.slug}
                  onClick={() => setActiveSlug(topic.slug)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all text-sm font-semibold shadow-sm ${
                    active
                      ? "bg-gradient-to-r from-teal-800 to-teal-900 text-white shadow-lg shadow-teal-900/30 border-teal-700"
                      : "bg-white text-teal-800 border-teal-200 hover:bg-gradient-to-r hover:from-teal-50 hover:to-green-50 hover:border-teal-300 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all ${
                      active ? "bg-white/20 text-white" : "bg-gradient-to-br from-teal-100 to-green-100 text-teal-800"
                    }`}
                    aria-hidden
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <span>{topic.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Centered content card */}
        <div className="max-w-5xl mx-auto">
          <article className="bg-gradient-to-br from-white to-teal-50/20 rounded-2xl p-5 sm:p-8 border-2 border-teal-100 shadow-xl hover:shadow-2xl transition-shadow">
            <header className="mb-6">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-teal-900 via-teal-800 to-green-800 bg-clip-text text-transparent mb-3">{activeTopic?.title}</h2>
              {activeTopic?.summary && <p className="text-sm sm:text-base text-stone-600">{activeTopic.summary}</p>}
            </header>

            <div className="mt-6 space-y-4 sm:space-y-6">
              {(activeTopic?.sections || []).map((sec, i) => {
                const Icon = ICON_MAP[sec.icon ?? activeTopic.icon ?? "MapPin"] ?? MapPin
                return (
                  <div key={i} className="bg-gradient-to-br from-stone-50 to-teal-50/30 rounded-xl p-4 sm:p-6 border border-teal-100 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
                    <div className="min-w-[48px] sm:min-w-[56px] flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 border border-teal-200 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {sec.title && <h3 className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 sm:mb-3">{sec.title}</h3>}
                      {sec.bullets && (
                        <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-stone-700 space-y-1.5 sm:space-y-2">
                          {sec.bullets.map((b, bi) => (
                            <li key={bi}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA block (if present) */}
            {activeTopic?.cta && (
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-teal-800 to-green-800 text-white text-center shadow-lg">
                {activeTopic.cta.title && <h4 className="text-xl font-bold">{activeTopic.cta.title}</h4>}
                {activeTopic.cta.text && <p className="mt-2">{activeTopic.cta.text}</p>}
                <div className="mt-4">
                  <Link
                    href="/#volunteer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-teal-900 font-semibold hover:opacity-95"
                  >
                    {(t as any).manifesto1?.choice}
                  </Link>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  )
}