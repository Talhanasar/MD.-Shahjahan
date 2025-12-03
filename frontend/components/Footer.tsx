"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? {}

  const socialIcons = [
    { Icon: Facebook, url: candidateData.socialMedia.facebook },
    { Icon: Twitter, url: candidateData.socialMedia.twitter },
    { Icon: Instagram, url: candidateData.socialMedia.instagram },
    { Icon: Youtube, url: candidateData.socialMedia.youtube }
  ]

  const contactTitle = (t?.footer?.contactTitle as string) ?? "Contact"
  const quickLinksTitle = (t?.footer?.quickLinksTitle as string) ?? "Quick Links"
  const aboutLabel = (t?.footer?.aboutLabel as string) ?? `About ${candidateData.firstName}`
  const manifestoLabel = (t?.footer?.manifestoLabel as string) ?? "Manifesto"
  const volunteerLabel = (t?.footer?.volunteerLabel as string) ?? "Volunteer"
  const donateLabel = (t?.footer?.donateLabel as string) ?? "Donate"
  const privacyLabel = (t?.footer?.privacyLabel as string) ?? "Privacy Policy"
  const termsLabel = (t?.footer?.termsLabel as string) ?? "Terms of Service"

  return (
    <section className="py-24 bg-stone-900 text-stone-400 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-green-700/30 group-hover:ring-green-700/50 transition-all shadow-sm">
                <Image
                  src={candidateData.images.logo}
                  alt={candidateData.firstName}
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-serif font-bold text-white leading-tight truncate">
                  {candidateData.firstName.toUpperCase()} {candidateData.lastName.toUpperCase()}
                  <span className="text-red-600">.</span>
                </span>
                <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                  {candidateData.footer.officeLabel}
                </span>
              </div>
            </Link>
            <p className="max-w-md text-stone-400 leading-relaxed">
              {t?.footer?.partyDescription ?? candidateData.party.description}
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-green-800 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">{contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-700 shrink-0" />
                <span>
                  {candidateData.contact.address.line1},
                  <br />
                  {candidateData.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-700 shrink-0" />
                <span>{candidateData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-700 shrink-0" />
                <span>{candidateData.contact.email}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">{quickLinksTitle}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  {aboutLabel}
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:text-white transition-colors">
                  {manifestoLabel}
                </Link>
              </li>
              <li>
                <Link href="form/volunteer" className="hover:text-white transition-colors">
                  {volunteerLabel}
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:text-white transition-colors">
                  {donateLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>{candidateData.footer.copyright}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              {privacyLabel}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}