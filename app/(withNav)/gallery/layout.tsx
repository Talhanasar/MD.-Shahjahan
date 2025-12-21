
import type { Metadata } from 'next'
import { candidateData } from '@/data/candidateData'

export const metadata: Metadata = {
  title: `Photo Gallery — ${candidateData.firstName}`,
  description: "Explore the campaign gallery: events, rallies, and key moments.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
