"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Lang = "en" | "bn"

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggle: () => {}
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang") as Lang | null
      if (stored === "en" || stored === "bn") {
        setLang(stored)
      } else {
        setLang("en")
      }
    } catch {
      setLang("en")
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang)
    } catch {}
  }, [lang])

  const toggle = () => setLang((l) => (l === "en" ? "bn" : "en"))

  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}