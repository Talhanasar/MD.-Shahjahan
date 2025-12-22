"use client"

import Image from "next/image"
import { Check, Award, Users, Briefcase, History } from "lucide-react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

interface Section {
  title: string
  items: string[]
}

export default function AboutPage() {
  const { data, t, language } = useLanguageAndData()

  // Extract all about data from translations
  const aboutHead = (t?.about?.head as string) ?? "About the Candidate"
  const aboutTitle = (t?.about?.title as string) ?? "About"
  const introduction = (t?.about?.introduction as string) ?? ""
  const paragraphs = (t?.about?.paragraphs as string[]) ?? []
  const sections = (t?.about?.sections as Section[]) ?? []
  const experienceLabel = (t?.about?.experienceLabel as string) ?? "Experience"
  const experienceYears = data?.experience?.years || "30+"
  const skillsLeft = (t?.about?.skills?.left as string[]) ?? []
  const skillsRight = (t?.about?.skills?.right as string[]) ?? []

  // Icon mapping for sections
  const iconMap: { [key: string]: React.ReactNode } = {
    "Central Leadership Positions": <Briefcase className="w-5 h-5" />,
    "কেন্দ্রীয় নেতৃত্বের পদ": <Briefcase className="w-5 h-5" />,
    "Local Leadership": <Users className="w-5 h-5" />,
    "স্থানীয় নেতৃত্ব": <Users className="w-5 h-5" />,
    "Political Ideology & Philosophy": <Award className="w-5 h-5" />,
    "রাজনৈতিক মতাদর্শ এবং দর্শন": <Award className="w-5 h-5" />,
    "Recent Activities & Challenges": <History className="w-5 h-5" />,
    "সাম্প্রতিক কার্যক্রম এবং চ্যালেঞ্জ": <History className="w-5 h-5" />,
  }

  return (
    <>
      {/* Hero / header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 md:w-[26rem] md:h-[26rem] bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className={`text-sm font-semibold uppercase ${language === "en" ? "tracking-[0.3em]" : ""} text-teal-200`}>
                {aboutHead}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                {data?.firstName} {data?.lastName}
              </h1>
              <p className="text-lg md:text-xl text-teal-50/90 leading-relaxed max-w-2xl">
                {introduction}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {[...skillsLeft, ...skillsRight].slice(0, 4).map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -top-6 -left-4 w-24 h-24 bg-teal-600/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-6 w-32 h-32 bg-teal-500/40 rounded-full blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={data?.images?.about || "/default-about.jpg"}
                      alt={data?.firstName || "Candidate"}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 via-white to-stone-50">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          
          {/* Introduction & Bio Paragraphs */}
          {paragraphs.length > 0 && (
            <div className="bg-white rounded-3xl shadow-lg border border-stone-200/70 p-8 md:p-12 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900">
                {aboutTitle}
              </h2>
              <div className="space-y-6">
                {paragraphs.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-base sm:text-lg text-stone-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Experience & Skills Card */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
                  {language === "en" ? "Experience" : "অভিজ্ঞতা"}
                </p>
                <p className="mt-6 text-5xl md:text-6xl font-serif font-bold">
                  {experienceYears}
                </p>
                <p className="mt-3 text-base text-stone-200 font-medium">
                  {experienceLabel}
                </p>
              </div>
              <p className="mt-8 text-sm text-stone-300 leading-relaxed">
                {language === "en"
                  ? "Decades of dedicated service and grassroots leadership in the region."
                  : "অঞ্চলে নিবেদিত সেবা এবং তৃণমূল নেতৃত্বের দশক।"}
              </p>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-stone-200/70 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-8">
                {language === "en" ? "Key Skills & Expertise" : "মূল দক্ষতা ও দক্ষতা"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {skillsLeft.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shrink-0 shadow-md">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {skillsRight.map((skill: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shrink-0 shadow-md">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-sm sm:text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Political Career & Leadership Sections */}
          {sections.length > 0 && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 ${language === "en" ? "tracking-wide" : ""}`}>
                  {language === "en" ? "Political Career & Leadership" : "রাজনৈতিক ক্যারিয়ার এবং নেতৃত্ব"}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {sections.map((section: Section, sectionIdx: number) => (
                  <div
                    key={sectionIdx}
                    className="group bg-white rounded-2xl p-8 shadow-md border border-stone-200/70 hover:shadow-xl hover:border-teal-200/50 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-teal-100 to-green-100 rounded-xl text-teal-700 group-hover:from-teal-600 group-hover:to-green-600 group-hover:text-white transition-all shadow-md">
                        {iconMap[section.title] || <Briefcase className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-teal-900">{section.title}</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      {section.items.map((item: string, itemIdx: number) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-green-500 mt-2.5 shrink-0" />
                          <span className="text-sm sm:text-base text-stone-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}


