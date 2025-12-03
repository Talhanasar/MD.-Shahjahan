"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { candidateData } from "@/data/candidateData"

export default function AboutPage() {

  return (
    <>
      {/* Hero / header */}
      <section className="py-16 md:py-24 bg-linear-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 md:w-[26rem] md:h-[26rem] bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                {candidateData.firstName} {candidateData.lastName}
              </h1>
              <p className="text-lg md:text-xl text-green-50/90 max-w-2xl">
                {candidateData.bio.short}
              </p>
              <p className="text-lg md:text-xl text-green-50/90 max-w-2xl">
                {candidateData.bio.long}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[...candidateData.skills.left, ...candidateData.skills.right].slice(0, 3).map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs sm:text-sm"
                  >
                    <Check className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -top-6 -left-4 w-24 h-24 bg-green-600/40 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-6 w-32 h-32 bg-emerald-500/40 rounded-full blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={candidateData.images.about}
                      alt={candidateData.firstName}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* Biography */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200/70 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {candidateData.bio.aboutTitle}
            </h2>
            
          </div>


          
        </div>
      </section>
    </>
  )
}


