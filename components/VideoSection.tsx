"use client"

import React, { useEffect, useState } from "react"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

type Video = {
  title?: string
  description?: string
  url: string
  thumbnail?: string
}

export default function VideoSection() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en

  // canonical videos from candidateData
  const sourceVideos: Video[] = candidateData.videos ?? (candidateData.video ? [candidateData.video] : [])

  // translations may contain a videos array with localized title/description (same order or same url)
  const translatedVideos: Video[] = Array.isArray((t as any).videos) ? (t as any).videos : []

  // merge translations onto source videos:
  // prefer matching by url (if translation provides url) otherwise fall back to same index
  const localizedVideos: Video[] = sourceVideos.map((src, idx) => {
    let loc: Partial<Video> = {}
    if (translatedVideos.length) {
      loc = translatedVideos.find((tv) => tv && tv.url && src.url && tv.url === src.url) ?? translatedVideos[idx] ?? {}
    }
    return {
      url: loc.url ?? src.url,
      thumbnail: loc.thumbnail ?? src.thumbnail,
      title: loc.title ?? src.title,
      description: loc.description ?? src.description
    }
  })

  const videos = localizedVideos
  const [index, setIndex] = useState(0)

  // reset to first video whenever language changes so user sees localized first item
  useEffect(() => {
    setIndex(0)
  }, [lang])

  const current = videos[index]

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, videos.length])

  function prev() {
    setIndex((i) => (i - 1 + videos.length) % videos.length)
  }
  function next() {
    setIndex((i) => (i + 1) % videos.length)
  }
  function goTo(i: number) {
    setIndex(i)
  }

  if (!videos.length) return null

  // guard: ensure we have a url to embed
  if (!current?.url) return null

  const src = `${current.url}${current.url.includes("?") ? "&" : "?"}modestbranding=1&rel=0`
  const prevLabel = (t as any)?.video?.prevLabel ?? "Prev"
  const nextLabel = (t as any)?.video?.nextLabel ?? "Next"

  return (
    <section id="media" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Localized title & description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
              {current.title}
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              {current.description}
            </p>
          </div>

          {/* Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-900">
              <iframe
                width="100%"
                height="100%"
                src={src}
                title={`${candidateData.firstName} ${candidateData.lastName} - ${current.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
                loading="lazy"
              />
            </div>

            {/* Desktop overlay prev/next */}
            <button
              aria-label={prevLabel}
              onClick={prev}
              className="hidden md:flex items-center justify-center absolute left-[-90px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 shadow-md hover:bg-white hover:scale-105 transition-transform z-20"
            >
              <span className="text-2xl font-bold select-none">&lt;</span>
            </button>

            <button
              aria-label={nextLabel}
              onClick={next}
              className="hidden md:flex items-center justify-center absolute right-[-90px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 shadow-md hover:bg-white hover:scale-105 transition-transform z-20"
            >
              <span className="text-2xl font-bold select-none">&gt;</span>
            </button>
          </div>

          {/* Mobile nav + dots */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              aria-label={prevLabel}
              onClick={prev}
              className="md:hidden px-4 py-2 rounded-full bg-teal-800 text-white shadow-sm"
            >
              {prevLabel}
            </button>

            <div className="flex items-center gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to video ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-teal-800" : "bg-stone-300"}`}
                />
              ))}
            </div>

            <button
              aria-label={nextLabel}
              onClick={next}
              className="md:hidden px-4 py-2 rounded-full bg-teal-800 text-white shadow-sm"
            >
              {nextLabel}
            </button>
          </div>

          {/* Optional plain title-only list (no images) so user can pick a video; this ensures titles/descriptions are visible in Bangla */}
          
        </div>
      </div>
    </section>
  )
}