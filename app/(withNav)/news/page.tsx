"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { newsData, NewsItem } from "@/data/news"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { Button } from "@/components/ui/button"

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
      date: match.date ?? s.date
    }
  })
}

export default function NewsPage() {
  const { language: lang, t, data } = useLanguageAndData()
  const translatedNews = (t as any).news as any[] | undefined

  const merged = mergeTranslations(newsData, translatedNews)

  const backToHomeLabel =
    (t as any).buttons?.backToHome ?? (t as any).contact?.backToHome ?? "Back to Home"

  return (
    <main className="py-16">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Top-left back button */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="text-stone-700 hover:bg-stone-50 hover:text-teal-900">
            <Link href="/#latest-news" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{backToHomeLabel}</span>
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-serif font-semibold text-teal-900 mb-8">
          {(t as any).newsPage?.heading ?? "All News"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merged.map((item) => (
            <article key={item.slug} className="bg-white rounded-lg shadow-sm overflow-hidden p-4 flex flex-col">
              <div className="mb-3">
                <div className="w-full h-40 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600">
                  <div className="text-center">
                    <div className="text-xs">Date</div>
                    <div className="text-sm font-semibold">{item.date}</div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="text-sm text-stone-600 mt-2 line-clamp-3">{item.summary}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link href={`/news/detail?id=${encodeURIComponent(item.slug)}`} className="text-teal-800 font-semibold">
                  {(t as any).newsPage?.moreBtn ?? "More >>"}
                </Link>
                <span className="text-xs text-stone-400">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}