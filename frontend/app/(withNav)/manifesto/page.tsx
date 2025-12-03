import { Metadata } from "next"
import ManifestoTabs from "@/components/ManifestoTabs"
import ManifestoHeader from "@/components/ManifestoHeader"
import { candidateData } from "@/data/candidateData"

export const metadata: Metadata = {
  title: `Manifesto — ${candidateData.firstName}`,
  description: candidateData.manifesto1?.description ?? "Full manifesto"
}

export default function ManifestoPage() {
  const topics = candidateData.manifesto1?.topics ?? []

  return (
    <main className="bg-stone-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Client-side localized header */}
        <ManifestoHeader />

        <ManifestoTabs topics={topics} />
      </div>
    </main>
  )
}