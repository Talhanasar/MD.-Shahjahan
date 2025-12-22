"use client"

import React from "react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

/**
 * VideoSection.tsx
 *
 * Shows a single YouTube video player.
 *
 * Uses the single video object from candidateData.video
 *
 * Translations:
 * - Uses localized title/description from translations if available
 * - Falls back to candidateData.video if no translations
 *
 * Responsive:
 * - Works on all screen sizes
 *
 * Embed features:
 * - modest branding
 * - hide related videos
 * - lazy loading
 */

type Video = {
  title?: string
  description?: string
  url: string
  thumbnail?: string
}

export default function VideoSection() {
  const { language: lang, t, data } = useLanguageAndData()

  // Use single video from candidateData
  const video: Video = data.video

  // Check if video exists
  if (!video || !video.url) return null

  const src = `${video.url}${video.url.includes("?") ? "&" : "?"}modestbranding=1&rel=0`

  return (
    <section id="media" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Localized title & description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
              {video.title}
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              {video.description}
            </p>
          </div>

          {/* Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-900">
              <iframe
                width="100%"
                height="100%"
                src={src}
                title={`${data.firstName} ${data.lastName} - ${video.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}