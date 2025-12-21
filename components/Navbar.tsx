"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { candidateData } from "@/data/candidateData"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function Navbar() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle } = useLanguage()
  const t = translations[lang]

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
    { href: "/manifesto", label: t.nav.manifesto },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/form/contact", label: t.nav.contact }
  ]

  // Close mobile menu when navigation occurs
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-800/20 group-hover:ring-teal-800/40 transition-all group-hover:scale-105 shadow-sm">
            <Image
              src={candidateData.images.logo}
              alt={candidateData.firstName}
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 test-stone-400 hover:bg-stone-10 hover:border-teal-800 hover:text-teal-800 text-sm"
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

            <Link
              href={candidateData.socialMedia?.facebook ?? "/"}
              className="hidden lg:inline-flex block rounded-full overflow-hidden w-10 h-10 ring-1 ring-teal-100 hover:scale-105 transition-transform"
              aria-label="Party logo"
            >
              <div className="relative w-full h-full">
                <Image src={candidateData.images.sideImage ?? "/humam/bnplogo.png"} alt="party" fill className="object-cover" />
              </div>
            </Link>
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

      {/* Mobile/Tablet menu drawer (shows on < lg) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6  ">
          <div className="container mx-auto px-2 bg-white">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full">
                  <Image src={candidateData.images.logo} alt={candidateData.firstName} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-teal-900">{candidateData.navName}</div>
                  <div className="text-xs text-stone-500">{candidateData.tagline}</div>
                </div>
              </Link>

              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100"
              >
                <X className="w-5 h-5 text-stone-700" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-6" >
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium ${
                      active ? "bg-teal-50 text-teal-900" : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex flex-col gap-3">
              <Link href="/form/volunteer" onClick={() => setMobileOpen(false)}>
                <Button asChild className="w-full bg-transparent border border-teal-700 text-teal-800 rounded-full h-12 hover:text-white hover:bg-teal-900">
                  <p>{t.buttons.volunteer}</p>
                </Button>
              </Link>

              <Link href="#donate" onClick={() => setMobileOpen(false)}>
                <Button asChild className="w-full bg-teal-800 text-white rounded-full h-12 hover:bg-teal-900">
                  <p>{t.buttons.donate}</p>
                </Button>
              </Link>

              <Link href={candidateData.socialMedia?.facebook ?? "/"} onClick={() => setMobileOpen(false)}>
                <div className="mt-2 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-teal-100 relative">
                    <Image src={candidateData.images.sideImage ?? "/humam/bnplogo.png"} alt="party" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">Bangladesh Nationalist Party</div>
                    <div className="text-xs text-stone-500">Follow on Facebook</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}