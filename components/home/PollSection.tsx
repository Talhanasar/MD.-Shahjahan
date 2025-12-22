"use client"

import { useState } from "react"
import { BarChart3, CheckCircle2 } from "lucide-react"
import { candidateData } from "@/data/candidateData"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

export default function PollSection() {
  const { language: lang, t, data } = useLanguageAndData()

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  // Sample poll data - consider moving to translations if you want BN text too
  const pollOptions = [
    { id: "support", label: t?.poll?.options?.support ?? "I support BNP's vision for Bangladesh", votes: 1247 },
    { id: "considering", label: t?.poll?.options?.considering ?? "I'm considering supporting BNP", votes: 856 },
    { id: "neutral", label: t?.poll?.options?.neutral ?? "I'm neutral / undecided", votes: 432 },
    { id: "other", label: t?.poll?.options?.other ?? "I support another party", votes: 289 }
  ]

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = (optionId: string) => {
    if (!hasVoted) {
      setSelectedOption(optionId)
      setHasVoted(true)
    }
  }

  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0
  }

  const publicOpinionLabel = t?.poll?.publicOpinion ?? "Public Opinion"
  const heading = t?.poll?.heading ?? "What's Your Opinion?"
  const subtext = t?.poll?.subtext ?? `Share your thoughts about ${data.party.name} and help us understand the public sentiment.`
  const question = t?.poll?.question ?? `Do you support ${data.party.abbreviation}'s vision for Bangladesh?`
  const participatedText = t?.poll?.participatedText ?? `${totalVotes.toLocaleString()} people have participated in this poll`
  const selectOptionText = t?.poll?.selectOptionText ?? "Select an option above to cast your vote"
  const thankYouText = t?.poll?.thankYouText ?? "✓ Thank you for participating! Your vote has been recorded."

  return (
    <section id="poll" className="py-5 bg-white">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-4">
              <BarChart3 className="w-4 h-4" />
              {publicOpinionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal-900">
              {heading}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {subtext}
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border-2 border-stone-200">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                {question}
              </h3>
              <p className="text-stone-600 text-sm">
                {participatedText}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {pollOptions.map((option) => {
                const percentage = getPercentage(option.votes)
                const isSelected = selectedOption === option.id
                const showResults = hasVoted

                return (
                  <div
                    key={option.id}
                    className={`relative rounded-lg border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "border-teal-600 bg-teal-50"
                        : showResults
                        ? "border-stone-300 bg-white"
                        : "border-stone-300 bg-white hover:border-teal-400 hover:bg-teal-50/50"
                    }`}
                    onClick={() => handleVote(option.id)}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-3 cursor-pointer flex-1">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? "border-teal-600 bg-teal-600"
                                : "border-stone-400"
                            }`}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-stone-900">{option.label}</span>
                        </label>
                        {showResults && (
                          <span className="text-sm font-bold text-stone-700 ml-4">
                            {percentage}%
                          </span>
                        )}
                      </div>
                      {showResults && (
                        <div className="mt-2">
                          <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isSelected
                                  ? "bg-linear-to-r from-teal-600 to-teal-700"
                                  : "bg-stone-400"
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-stone-500 mt-1">
                            {option.votes.toLocaleString()} votes
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {!hasVoted && (
              <div className="text-center">
                <p className="text-sm text-stone-500 mb-4">
                  {selectOptionText}
                </p>
              </div>
            )}

            {hasVoted && (
              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4 text-center">
                <p className="text-teal-900 font-semibold">
                  {thankYouText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}