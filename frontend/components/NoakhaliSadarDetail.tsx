// frontend/components/NoakhaliSadarDetail.tsx
import React from "react"
import { MapPin, Truck, BookOpen, Heart, Cpu, Users, Trees } from "lucide-react"

type Section = { title: string; bullets: string[] }

type TabsTopic = {
  slug?: string
  title: string
  summary?: string
  bullets?: string[]
  sections?: Section[]
  cta?: { title: string; text: string }
}

export default function NoakhaliSadarDetail({ topic }: { topic: TabsTopic }) {
  const iconMap: Record<string, React.ReactNode> = {
    "Transportation Infrastructure": <Truck className="w-6 h-6 text-teal-900" />,
    "Education and Skills": <BookOpen className="w-6 h-6 text-teal-900" />,
    "Healthcare and Social Services": <Heart className="w-6 h-6 text-teal-900" />,
    "Urban Modernization & Technology": <Cpu className="w-6 h-6 text-teal-900" />,
    "Culture & Recreation": <Users className="w-6 h-6 text-teal-900" />,
    "Land & Environment": <Trees className="w-6 h-6 text-teal-900" />
  }

  // Normalize to sections[] so rendering is uniform
  const sections: Section[] =
    topic.sections && topic.sections.length > 0
      ? topic.sections
      : [{ title: topic.title ?? "Details", bullets: topic.bullets ?? [] }]

  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-teal-900">{topic.title}</h1>
        {topic.summary && <p className="mt-2 text-stone-600">{topic.summary}</p>}
      </header>

      <div className="grid gap-6">
        {sections.map((sec, idx) => (
          <section key={idx} className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-teal-50 flex items-center justify-center border border-green-100">
              <div className="text-teal-900">{iconMap[sec.title] ?? <MapPin className="w-6 h-6 text-teal-900" />}</div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-teal-900 mb-2">{sec.title}</h2>
              <ul className="list-none space-y-2">
                {sec.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-3 h-3 rounded-full bg-teal-900/80 shrink-0" />
                    <p className="text-stone-700">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {topic.cta && (
        <div className="mt-8 p-4 bg-teal-50 border border-teal-100 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-teal-900">{topic.cta.title}</h3>
            <p className="text-stone-700 mt-1">{topic.cta.text}</p>
          </div>
          <a href="/form/volunteer" className="ml-4 inline-flex items-center px-4 py-2 bg-teal-900 text-white rounded-full hover:bg-teal-800">
            Volunteer
          </a>
        </div>
      )}
    </article>
  )
}