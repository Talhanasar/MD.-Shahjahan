"use client"

import Image from "next/image"
import { candidateData } from "@/data/candidateData"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function BannerSection() {
  const { language: lang, t, data } = useLanguageAndData()

  const altPrefix = (t?.banner?.altPrefix as string) ?? ""
  const altText = `${altPrefix} ${data.campaignSlogan}`.trim()

  return (
    <section className="w-full">
      <div className="relative h-[250px] md:h-[450px] w-full">
        <div className="w-1/2 mx-auto overflow-hidden relative">
          <div className="relative w-full h-full">
            <Image
              src={data.images.banner}
              alt={altText}
              width={1000} // Fixed width
              height={450} // Fixed height
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}