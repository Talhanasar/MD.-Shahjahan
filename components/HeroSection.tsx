"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

export default function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="relative min-h-[90vh] flex items-center bg-linear-to-br from-stone-50 via-white to-teal-50/30 overflow-hidden">
      {/* Political pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-red-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid layout for medium and large screens */}
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="space-y-6 order-2 md:order-1 pt-10 md:pt-0">
            {/* Flex container for the two images */}
            <div className="flex items-center gap-6 flex-col md:flex-row ">
              {/* BNP Poster */}
              <div className="relative w-full md:w-3/4 sm:w-2/3 sm:items-left"> {/* Adjust width for medium and small screens */}
                <Image
                  src={candidateData.images.bnpPoster}
                  alt="BNP Campaign Poster"
                  width={350}
                  height={100}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Candidate Name - Elegant Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-stone-900">
              {t.hero.firstName} {t.hero.lastName}
              <span className="text-red-600">.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-900 max-w-lg leading-relaxed">
              {t.hero.lead}{" "}
              <span className="text-lg md:text-xl text-stone-900 max-w-lg leading-relaxed">
                {t.hero.bioSecond}
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-teal-950 text-white h-14 px-8 text-lg rounded-full shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="#volunteer" className="flex items-center justify-center">
                  {t.buttons.join}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-800/30 text-teal-900 hover:bg-teal-50 hover:border-teal-800/50 hover:text-teal-800 h-14 px-8 text-lg bg-white/50 backdrop-blur-sm rounded-full font-semibold w-full sm:w-auto"
              >
                <Link href="#manifesto" className="flex items-center justify-center">
                  {t.buttons.readManifesto}
                </Link>
              </Button>
            </div>
          </div>

          {/* Additional content (portrait image) */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end h-[650px] sm:h-[500px] md:h-[700px]">
            <div className="relative -top-15 w-full max-w-lg h-full select-none">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-800/10 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-600/10 rounded-full blur-2xl z-0" />
                {/* Main hero container (portrait) */}
                <div className="relative w-full h-full max-w-md mx-auto z-10 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Main portrait (fills the container) */}
                    <div className="relative w-5/6 h-[650px] md:h-[700px] lg:h-[800px] rounded-md overflow-hidden">
                      <Image
                        src={candidateData.images.hero}
                        alt={candidateData.firstName}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-contain object-center drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>

              <div className="absolute bottom-2 sm-bottom-20 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-200 ">
                <div className="flex items-center gap-2 ">
                  <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse " />
                  <span className="text-sm font-bold text-teal-900 uppercase tracking-wider ">
                    {translations[lang].partySlogan}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
