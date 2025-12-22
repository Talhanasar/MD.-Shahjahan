"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"
import LanguageContext from "@/store/LanguageContext"

export default function Navbar() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language: lang, t, data } = useLanguageAndData()
  // Import the context to get the setLanguage function
  const languageContext = useContext(LanguageContext)
  const toggle = () => {
    if (languageContext && languageContext.setLanguage) {
      languageContext.setLanguage(lang === "en" ? "bn" : "en")
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("scroll", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleHashChange)
    }
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return pathname === href
    }
    if (href.startsWith("#")) {
      return activeHash === href || (href === "#about" && activeHash === "")
    }
    return false
  }

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/manifesto", label: t.nav.manifesto },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/form/contact", label: t.nav.contact }
  ]

  // Close mobile menu when navigation occurs
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-800/20 group-hover:ring-teal-800/40 transition-all group-hover:scale-105 shadow-sm">
            <Image
              src={data.images.logo}
              alt={data.firstName}
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-teal-900 leading-tight truncate">
              {t.nav.firstName}
              <span className="text-red-600">.</span>
            </span>
            <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">
              {t.nav.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop / Large screens: show full nav at lg and up (so tablet uses the "tab" menu) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  active ? "text-teal-900 font-semibold" : "text-stone-600 hover:text-teal-800"
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-800 rounded-full" />}
              </Link>
            )
          })}
        </nav>

        {/* Actions + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language toggle button (visible always) */}
          <button
            aria-label="Toggle language"
            onClick={toggle}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 text-stone-400 hover:bg-stone-10 hover:border-teal-800 hover:text-teal-800 text-sm"
            title={lang === "en" ? "Switch to Bangla" : "Switch to English"}
          >
            {lang === "en" ? "EN" : "বাংলা"}
          </button>

          {/* visible on large screens only (lg+) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden lg:inline-flex border-teal-700 text-teal-800 hover:bg-teal-900 hover:text-white  rounded-full bg-transparent"
            >
              <Link href="/form/volunteer">{t.buttons.volunteer}</Link>
            </Button>

            <Button
              asChild
              className="hidden lg:inline-flex bg-teal-800 hover:bg-teal-900 text-white rounded-full px-4 lg:px-6 shadow-lg shadow-teal-900/20 h-10"
            >
              <Link href="#donate">{t.buttons.donate}</Link>
            </Button>
          </div>

          {/* Mobile / Tablet menu button — visible below lg (i.e., on md and smaller) */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-teal-200"
          >
            {mobileOpen ? <X className="w-5 h-5 text-stone-700" /> : <Menu className="w-5 h-5 text-stone-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active ? "bg-teal-50 text-teal-900" : "text-stone-600 hover:bg-stone-50 hover:text-teal-800"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-100">
            <Link href="/form/volunteer" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" className="w-full border-teal-200 text-teal-800 hover:bg-teal-50 rounded-full">
                {t.buttons.volunteer}
              </Button>
            </Link>
            
            <Link href="#donate" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-teal-800 hover:bg-teal-900 text-white rounded-full shadow-lg shadow-teal-900/10">
                {t.buttons.donate}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 pt-2 pb-2">
             <span className="text-xs text-stone-400 font-medium uppercase tracking-widest">Follow us</span>
             <Link href={data.socialMedia?.facebook ?? "/"} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 text-teal-700 hover:bg-teal-100 transition-colors">
               <div className="relative w-5 h-5">
                 <Image src={data.images.sideImage ?? "/humam/bnplogo.png"} alt="party" fill className="object-cover" />
               </div>
             </Link>
          </div>
        </div>
      </div>
    </header>
  )
}