"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function HeroSection() {
  const { language, t, data } = useLanguageAndData()

  return (
    <section className="relative min-h-[95vh] lg:min-h-[100vh] flex items-center bg-stone-50 overflow-hidden pt-2 lg:pt-0 pb-12 lg:pb-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[0%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[100px] animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-red-500/5 rounded-full blur-[80px]" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('/noise.png')] mix-blend-overlay" /> 
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(to right, #0f766e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start relative min-h-[85vh] lg:min-h-0">
          
          {/* Text Content (Left Side - 5 columns) */}
          <div className="lg:col-span-5 space-y-4 lg:space-y-6 order-2 lg:order-1 relative z-20">
            {/* Party Logo */}
            <div className="w-1/2 max-w-[200px] sm:max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700 mb-2">
               <Image
                 src={data.images.bnpPoster}
                 alt="BNP Logo"
                 width={500}
                 height={300}
                 className="object-contain w-full h-auto"
               />
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-serif font-black leading-[1.1] tracking-tight text-stone-900 drop-shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <span className="text-teal-900">{t.hero.firstName}</span>
                <span className="relative inline-block">
                  {t.hero.lastName}
                  <span className="text-red-600 text-2xl sm:text-4xl md:text-4xl">.</span>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                {t.hero.lead}
                <br className="hidden sm:block" />
                <span className="text-stone-500 font-normal">{t.hero.bioSecond}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-teal-800 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                <span>{t.hero.tags.democracyFirst}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>{t.hero.tags.economicGrowth}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>{t.hero.tags.socialJustice}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 lg:pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Button
                asChild
                size="lg"
                className="bg-teal-900 hover:bg-teal-950 text-white h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg rounded-full shadow-xl shadow-teal-900/20 hover:shadow-teal-900/40 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <Link href="/form/volunteer" className="flex items-center justify-center gap-2">
                  {t.buttons.join}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-800/10 text-teal-900 hover:bg-teal-50 hover:border-teal-800/20 h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg bg-white/60 backdrop-blur-sm rounded-full font-bold w-full sm:w-auto transition-all hover:-translate-y-1"
              >
                <Link href="/manifesto" className="flex items-center justify-center">
                  {t.buttons.readManifesto}
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated Center Element (Dhan) - Middle 2 columns */}
          <div className="lg:col-span-2 absolute top-6 right-6 lg:relative lg:top-[40%] xl:top-[50%] lg:right-auto lg:-translate-y-[50%] lg:order-2 flex justify-center items-center pointer-events-none z-30 lg:py-0">
             <div className="relative w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 animate-float-dhan">
               <Image
                 src="/shahjahan/dhan.png"
                 alt="Sheaf of Paddy"
                 fill
                 className="object-contain drop-shadow-2xl opacity-95"
               />
             </div>
          </div>

          {/* Hero Image Section (Right Side - 5 columns) */}
          <div className="lg:col-span-5 relative order-1 lg:order-3 flex items-start justify-center lg:justify-end pt-4">
            <div className="relative w-full h-[380px] sm:h-[600px] md:h-[700px] lg:h-[75vh] xl:h-[80vh] max-h-[850px]">
               {/* Decorative Backdrop Blobs behind image */}
               <div className="absolute top-[20%] right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-linear-to-br from-teal-50 via-green-50 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
               
               {/* The Hero Image */}
               <Image
                 src={data.images.hero}
                 alt={data.firstName}
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-contain object-center drop-shadow-2xl"
                 style={{
                   maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                   WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                 }}
                 priority
                 unoptimized
               />
             
               {/* Floating "Vote via" Badge */}
               <div className="absolute bottom-6 sm:bottom-12 left-0 sm:left-4 lg:-left-4 xl:-left-8 z-20 bg-white/95 backdrop-blur-md p-2 sm:p-4 rounded-xl shadow-xl border border-teal-100 animate-pulse" style={{ animationDuration: '4s' }}>
                 <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-linear-to-br from-red-100 to-red-50 p-2 rounded-full">
                      <Image src="/shahjahan/dhan.png" alt="Icon" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-stone-500 font-bold uppercase tracking-wide">{t.hero.voteBadge.prefix}</p>
                      <p className="text-xs sm:text-sm font-bold text-stone-900">{t.hero.voteBadge.symbol}</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
