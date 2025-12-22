"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { newsData, NewsItem } from "@/data/news"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import { Button } from "@/components/ui/button"

/**
 * NewsDetail
 * - Client component that reads ?id=<slug> from URL and displays the news article.
 * - Back button shows icon + text on larger screens, icon-only on small (phone) screens.
 */
export default function NewsDetail() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { language: lang, t, data } = useLanguageAndData()
  const translatedNews = (t as any).news as any[] | undefined

  const id = searchParams.get("id") || ""
  const [item, setItem] = useState<NewsItem | undefined>()

  useEffect(() => {
    if (!id) {
      router.replace("/news")
      return
    }

    let merged: NewsItem[] = newsData
    if (Array.isArray(translatedNews) && translatedNews.length > 0) {
      merged = newsData.map((s) => {
        const match = translatedNews.find((t) => t && t.slug && t.slug === s.slug)
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

    const found = merged.find((n) => n.slug === id)
    if (!found) {
      router.replace("/news")
      return
    }

    setItem(found)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, lang])

  if (!item) return null

  const backToHomeLabel = (t as any).buttons?.backToHome ?? (t as any).contact?.backToHome ?? "Back to Home"

  return (
    <article className="py-16 relative">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Back button: icon-only on small screens, icon + text from `sm` and up */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="text-stone-700 hover:bg-stone-100 px-0 hover:text-teal-900">
            <Link href="/#latest-news" aria-label={backToHomeLabel} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 " />
              <span className="hidden sm:inline ">{backToHomeLabel}</span>
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">{item.title}</h1>
        <p className="text-xs text-stone-400 mb-6">{item.date}</p>

        <div className="prose max-w-none">
          <p>{item.content}</p>
        </div>
      </div>
    </article>
  )
}