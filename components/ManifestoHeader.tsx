"use client"

import React from "react"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"
import { candidateData } from "@/data/candidateData"

export default function ManifestoHeader() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en

  const heading = t.manifesto?.title ?? candidateData.manifesto.title
  const description = t.manifesto?.description ?? candidateData.manifesto.description

  return (
    <header className="text-center mb-6">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900">{heading}</h1>
      <p className="text-stone-600 mt-2">{description}</p>
    </header>
  )
}