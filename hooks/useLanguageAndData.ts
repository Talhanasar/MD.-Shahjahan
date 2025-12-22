"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { candidateData } from "@/data/candidateData"
import { translations } from "@/data/translations"

export function useLanguageAndData() {
  const { language } = useLanguage()

  const t = translations[language]
  const data = candidateData

  return {
    language,
    t,        // UI translations
    data,     // Candidate data
  }
}