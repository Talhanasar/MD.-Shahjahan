"use client"

import React from "react"
import Link from "next/link"
import { newsData, NewsItem } from "@/data/news"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

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
  const { language: lang, t, data } = useLanguageAndData()
  const translatedNews = (t as any).news as any[] | undefined

  const merged = mergeTranslations(newsData, translatedNews)
  const latest = merged.slice(0, count)

  return (
    <section id="latest-news" className="py-16">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Title centered on all screen sizes */}
        <h2 className="text-3xl font-serif font-semibold bg-gradient-to-r from-teal-900 via-teal-800 to-green-800 bg-clip-text text-transparent mb-8 text-center">
          {(t as any).latestNews?.heading ?? "Latest News"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {latest.map((item) => (
            <article key={item.slug} className="flex gap-6 items-start bg-gradient-to-br from-teal-50/50 to-green-50/30 hover:from-teal-50 hover:to-green-50 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-teal-100/50">
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
                    className="inline-block bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-green-900 text-white px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
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
            className="inline-block bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-green-900 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            {(t as any).latestNews?.moreInSection ?? "More in this section"}
          </Link>
        </div>
      </div>
    </section>
  )
}
