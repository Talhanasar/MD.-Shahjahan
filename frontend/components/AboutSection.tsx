"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function AboutSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  // About title: prefer translations.about.title, otherwise use candidateData.bio.aboutTitle
  const aboutTitle: string = (t?.about?.title as string) ?? candidateData.bio.aboutTitle

  // Paragraphs: prefer translations.about.paragraphs (array) otherwise use candidateData.bio.long
  const paragraphs: string[] = (t?.about?.paragraphs as string[]) ?? candidateData.bio.long

  // Experience label & years
  const experienceLabel: string = (t?.about?.experienceLabel as string) ?? candidateData.experience.label
  const experienceYears: string = candidateData.experience.years

  // Skills: prefer translations.about.skills (if present), else fallback to candidateData.skills
  const skillsLeft: string[] = (t?.about?.skills?.left as string[]) ?? candidateData.skills.left
  const skillsRight: string[] = (t?.about?.skills?.right as string[]) ?? candidateData.skills.right

  return (
    <section id="about" className="py-15 bg-gradient-to-r from-teal-600/5 to-teal-100/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            {/* Bottom Image (responsive with adjusted size for tablets and centered on md) */}
            <div className="aspect-4/4 relative rounded-3xl overflow-hidden shadow-2xl mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-full transition-all hover:scale-105">
              <Image
                src={candidateData.images.about}
                alt={candidateData.firstName}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center w-full h-auto sm:h-64 md:h-72 lg:h-full" // Adjust the height on mobile and tablet
              />
            </div>


            
           {/* <div className="absolute -bottom-6 -left-6 w-40 h-40 sm:w-48 md:w-40 bg-teal-800 rounded-3xl p-4 sm:p-6 flex flex-col justify-center items-start text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold">{experienceYears}</span>
              <span className="text-xs sm:text-sm font-medium opacity-90 mt-1">{experienceLabel}</span>
            </div>*/}
          </div>

          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            {/* Title with responsive font size */}
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-teal-900 leading-tight">
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
                <p key={i} className="transition-all hover:text-teal-700">{paragraph}</p>
              ))}
            </div>

            {/* Skills List with responsive columns */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-teal-200">
              <ul className="space-y-3">
                {skillsLeft.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 shrink-0 shadow-md">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {skillsRight.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center text-teal-700 shrink-0 shadow-md">
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
