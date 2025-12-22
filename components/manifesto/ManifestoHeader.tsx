"use client"

import React from "react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function ManifestoHeader() {
  const { language: lang, t, data } = useLanguageAndData()

  const heading = t.manifesto?.title ?? data.manifesto.title
  const description = t.manifesto?.description ?? data.manifesto.description

  return (
    <header className="text-center mb-6">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900">{heading}</h1>
      <p className="text-stone-600 mt-2">{description}</p>
    </header>
  )
}