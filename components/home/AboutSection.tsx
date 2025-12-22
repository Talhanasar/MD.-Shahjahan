"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function AboutSection() {
  const { language: lang, t, data } = useLanguageAndData()

  // About title: prefer translations.about.title, otherwise use candidateData.bio.aboutTitle
  const aboutTitle: string = (t?.about?.title as string) ?? data.bio.aboutTitle

  // Paragraphs: prefer translations.about.paragraphs (array) otherwise use candidateData.bio.long
  const paragraphs: string[] = (t?.about?.paragraphs as string[]) ?? data.bio.long

  // Experience label & years
  const experienceLabel: string = (t?.about?.experienceLabel as string) ?? data.experience.label
  const experienceYears: string = data.experience.years

  // Skills: prefer translations.about.skills (if present), else fallback to candidateData.skills
  const skillsLeft: string[] = (t?.about?.skills?.left as string[]) ?? data.skills.left
  const skillsRight: string[] = (t?.about?.skills?.right as string[]) ?? data.skills.right

  return (
    <section id="about" className="py-20 bg-linear-to-br from-teal-50 via-green-50/30 to-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            {/* Bottom Image (responsive with adjusted size for tablets and centered on md) */}
            <div className="aspect-4/4 relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-teal-100/50 mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-full transition-all hover:scale-105 hover:shadow-teal-500/20 hover:ring-teal-200/60">
              <Image
                src={data.images.about}
                alt={data.firstName}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center w-full h-auto sm:h-64 md:h-72 lg:h-full" // Adjust the height on mobile and tablet
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            {/* Small title section */}
            <p
              className={`text-sm font-semibold uppercase ${
                lang === "en" ? "tracking-[0.3em]" : ""
              } text-teal-700`}
            >
              {t?.about?.title ?? "About"}
            </p>
            {/* Title with responsive font size */}
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold bg-linear-to-r from-teal-900 via-teal-800 to-green-800 bg-clip-text text-transparent leading-tight">
              {aboutTitle.split(', ').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            {/* Bio content */}
            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="transition-all hover:text-teal-800">{paragraph}</p>
              ))}
            </div>

            {/* Skills List with responsive columns */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t-2 border-gradient-to-r from-teal-200 via-green-200 to-teal-200">
              <ul className="space-y-3">
                {skillsLeft.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/30">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {skillsRight.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/30">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
