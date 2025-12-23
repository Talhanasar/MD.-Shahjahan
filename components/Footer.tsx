"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function Footer() {
  const { language: lang, t, data } = useLanguageAndData()

  const socialIcons = [
    { Icon: Facebook, url: data.socialMedia.facebook },
    { Icon: Twitter, url: data.socialMedia.twitter },
    { Icon: Instagram, url: data.socialMedia.instagram },
    { Icon: Youtube, url: data.socialMedia.youtube }
  ]

  const contactTitle = (t?.footer?.contactTitle as string) ?? "Contact"
  const quickLinksTitle = (t?.footer?.quickLinksTitle as string) ?? "Quick Links"
  const aboutLabel = (t?.footer?.aboutLabel as string) ?? `About ${data.firstName}`
  const manifestoLabel = (t?.footer?.manifestoLabel as string) ?? "Manifesto"
  const volunteerLabel = (t?.footer?.volunteerLabel as string) ?? "Volunteer"
  const donateLabel = (t?.footer?.donateLabel as string) ?? "Donate"
  const privacyLabel = (t?.footer?.privacyLabel as string) ?? "Privacy Policy"
  const termsLabel = (t?.footer?.termsLabel as string) ?? "Terms of Service"

  return (
    <section className="pt-24 pb-7 bg-linear-to-br from-stone-900 via-stone-900 to-teal-950 text-stone-400 border-t border-stone-800">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-700/40 group-hover:ring-teal-600/60 group-hover:scale-110 transition-all shadow-lg shadow-teal-900/20">
                <Image
                  src={data.images.logo}
                  alt={data.firstName}
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-serif font-bold text-white leading-tight truncate">
                  {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
                  <span className="text-red-600">.</span>
                </span>
                <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                  {data.footer.officeLabel}
                </span>
              </div>
            </Link>
            <p className="max-w-md text-stone-400 leading-relaxed">
              {t?.footer?.partyDescription ?? data.party.description}
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  className="w-10 h-10 rounded-full bg-linear-to-br from-stone-800 to-stone-900 flex items-center justify-center text-stone-400 hover:from-teal-600 hover:to-green-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-teal-500/30"
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
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>
                  {data.contact.address.line1},
                  <br />
                  {data.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>{data.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>{data.contact.email}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">{quickLinksTitle}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-teal-400 transition-colors">
                  {aboutLabel}
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:text-teal-400 transition-colors">
                  {manifestoLabel}
                </Link>
              </li>
              <li>
                <Link href="form/volunteer" className="hover:text-teal-400 transition-colors">
                  {volunteerLabel}
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:text-teal-400 transition-colors">
                  {donateLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm mb-6">
            <p>{data.footer.copyright}</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-teal-400 transition-colors">
                {privacyLabel}
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">
                {termsLabel}
              </Link>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-stone-500">
            <div className="text-center md:text-left">
              <p className="text-stone-400 font-medium mb-1">{lang === 'bn' ? 'দ্বারা বিকশিত' : 'Developed by'}</p>
              <p className="text-teal-500 font-semibold">QP Consultancy Group</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-stone-700"></div>
            <div className="text-center md:text-left">
              <p className="text-stone-400 font-medium mb-1">{lang === 'bn' ? 'দ্বারা স্পন্সর করা' : 'Sponsored by'}</p>
              <p className="text-teal-500 font-semibold">Jakir Hossain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}