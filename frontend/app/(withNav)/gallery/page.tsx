"use client"

import { useEffect, useRef, useState } from "react"
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { candidateData } from "@/data/candidateData"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/data/translations"

const galleryImages = candidateData.gallery.images
const categoryKeys = candidateData.gallery.categories

export default function GalleryPage() {
  const { lang } = useLanguage()
  const t = translations[lang] ?? translations.en

  // translated labels for categories (if provided in translations.gallery.categories as an array that matches candidateData order)
  const translatedCategories: string[] = (t.gallery && Array.isArray((t.gallery as any).categories))
    ? (t.gallery as any).categories
    : categoryKeys

  // state now stores the category KEY (from candidateData) so filtering works reliably
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>(categoryKeys[0] ?? "All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const lightboxRef = useRef<HTMLDivElement | null>(null)
  const lastActiveElementRef = useRef<HTMLElement | null>(null)

  // derive filtered images (compare against the canonical category key)
  const filteredImages =
    selectedCategoryKey === categoryKeys[0]
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategoryKey)

  // Read category key from URL on mount (deep-link support). Expect param to be the canonical key (same as candidateData.gallery.categories).
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const cat = params.get("category")
    if (cat && categoryKeys.includes(cat)) {
      setSelectedCategoryKey(cat)
    }
  }, [])

  // Update URL when category changes without reloading the page
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (selectedCategoryKey === categoryKeys[0]) {
      params.delete("category")
    } else {
      params.set("category", selectedCategoryKey)
    }
    const newUrl =
      window.location.pathname + (params.toString() ? `?${params.toString()}` : "")
    window.history.replaceState({}, "", newUrl)
  }, [selectedCategoryKey])

  // open lightbox: store last focused element, lock scroll
  const openLightbox = (imageId: number) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement | null
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
    setTimeout(() => closeButtonRef.current?.focus(), 0)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ""
    lastActiveElementRef.current?.focus?.()
  }

  // navigate within filtered images
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    if (currentIndex === -1) return
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex].id)
  }

  // keyboard navigation & focus trap while lightbox open
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        navigateImage("prev")
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        navigateImage("next")
      } else if (e.key === "Tab") {
        const container = lightboxRef.current
        if (!container) return
        const focusable = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) {
          e.preventDefault()
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredImages])

  // cleanup if component unmounts while modal open
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const selectedImageData = selectedImage
    ? filteredImages.find((img) => img.id === selectedImage)
    : null

  // localized strings (fallbacks provided)
  const headerTitle = t.gallery?.title ?? "Campaign Gallery"
  const headerSubtitle = t.gallery?.description ?? "Moments, memories, and milestones from our campaign for a better Bangladesh"
  const noImagesText = t.gallery?.noImages ?? "No images found in this category."
  const showingPhotosTemplate = t.gallery?.photos ?? "{count} photos" // example: "{count} photos" or "{count}টি ছবি"
  const prevLabel = t.gallery?.prevImage ?? "Previous image"
  const nextLabel = t.gallery?.nextImage ?? "Next image"
  const closeLabel = t.gallery?.close ?? "Close"

  return (
    <>
      {/* Gallery Header */}
      <section className="py-20 bg-linear-to-br from-teal-900 via-teal-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <Images className="w-6 h-6" />
              <span className="text-lg font-semibold">{headerTitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              {t.gallery?.heroTitle ?? headerTitle}
            </h1>
            <p className="text-lg text-green-100/80 max-w-2xl mx-auto">
              {headerSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categoryKeys.map((key, idx) => {
              const isActive = selectedCategoryKey === key
              const label = translatedCategories[idx] ?? key
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategoryKey(key)
                    setIsLoading(true)
                    setTimeout(() => setIsLoading(false), 250)
                  }}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-teal-800 text-white shadow-lg shadow-teal-900/20 scale-105"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {label}
                  {isActive && <span className="ml-2 text-xs">({filteredImages.length})</span>}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-stone-50 min-h-screen">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-800"></div>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg">{noImagesText}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(image.id)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block text-xs font-semibold text-white uppercase tracking-wider bg-teal-800/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {/* show translated label for category if available */}
                        {translatedCategories[categoryKeys.indexOf(image.category)] ?? image.category}
                      </span>
                      <p className="text-white text-sm mt-2 font-medium">{image.alt}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <Images className="w-4 h-4 text-teal-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image Count */}
          <div className="text-center mt-12">
            <p className="text-stone-600">
              {showingPhotosTemplate.replace("{count}", String(filteredImages.length))}{" "}
              {selectedCategoryKey !== categoryKeys[0] && (
                <span>{t.gallery?.inText ?? "in"} {translatedCategories[categoryKeys.indexOf(selectedCategoryKey)] ?? selectedCategoryKey}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImageData.alt}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div
            ref={lightboxRef}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white hover:text-green-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label={closeLabel}
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              priority
            />

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all z-50"
                  aria-label={prevLabel}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all z-50"
                  aria-label={nextLabel}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm">
              <span className="font-semibold">{selectedImageData.alt}</span>
              <span className="mx-2">•</span>
              <span className="text-green-400">{translatedCategories[categoryKeys.indexOf(selectedImageData.category)] ?? selectedImageData.category}</span>
              <span className="mx-2">•</span>
              <span>
                {filteredImages.findIndex((img) => img.id === selectedImage) + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}