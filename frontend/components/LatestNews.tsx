"use client"

import React from "react"
import Link from "next/link"
import { newsData, NewsItem } from "@/data/news"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

/**
 * LatestNewsNoSlug
 * - shows latest `count` items and links to a non-dynamic detail route using query params.
 * - Link target: /news/detail?id=<slug>
 */
function mergeTranslations(source: NewsItem[], translated: any[] | undefined) {
  if (!Array.isArray(translated) || translated.length === 0) return source
  return source.map((s, i) => {
    const match = translated.find((t) => t && t.slug && t.slug === s.slug) ?? translated[i]
    if (!match) return s
    return {
      ...s,
      title: match.title ?? s.title,
      summary: match.summary ?? s.summary,
      content: match.content ?? s.content,
      tdat: match.tdat ?? s.tdat,
      date: match.date ?? s.date
    }
  })
}

export default function LatestNews({ count = 4 }: { count?: number }) {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en
  const translatedNews = (t as any).news as any[] | undefined

  const merged = mergeTranslations(newsData, translatedNews)
  const latest = merged.slice(0, count)

  return (
    <section id="latest-news" className="py-16">
      <div className="container mx-auto sm:px-6 md:px-0">
        {/* Title centered on all screen sizes */}
        <h2 className="text-3xl font-serif font-semibold text-teal-900 mb-8 text-center">
          {(t as any).latestNews?.heading ?? "Latest News"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {latest.map((item) => (
            <article key={item.slug} className="flex gap-6 items-start bg-teal-100/5 hover:bg-teal-500/4 p-4 rounded-lg shadow-sm">
              <div className="w-28 h-20 flex-shrink-0 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center text-center p-2 sm:w-25 h-15">
                <div>
                  <div className="text-xs text-stone-500">{item.tdat}</div>
                  <div className="text-sm font-semibold text-stone-800">{item.date}</div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-stone-900 leading-snug">{item.title}</h3>
                <p className="text-sm text-stone-600 mt-2 line-clamp-3">{item.summary}</p>

                <div className="mt-4">
                  <Link
                    href={`/news/detail?id=${encodeURIComponent(item.slug)}`}
                    className="inline-block bg-teal-800 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-900 transition"
                  >
                    {(t as any).latestNews?.readMoreBtn ?? "Read More >>"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-block bg-teal-800 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-900 transition"
          >
            {(t as any).latestNews?.moreInSection ?? "More in this section"}
          </Link>
        </div>
      </div>
    </section>
  )
}
