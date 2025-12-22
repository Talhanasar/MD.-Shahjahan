"use client"

import { useSearchParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clock,
  Heart,
  HandHeart,
  Users
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { useEffect, useState, Suspense } from "react"
import { useLanguageAndData } from "@/hooks/useLanguageAndData"

type FormType = "contact" | "volunteer"

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { language: lang, t, data } = useLanguageAndData()
  // Cast to any to avoid TypeScript complaining about optional/extra keys in translations
  const T = t as any

  const formType = (searchParams.get("type") || "contact") as FormType
  const email = searchParams.get("email") || ""
  const subject = searchParams.get("subject") || ""
  const name = searchParams.get("name") || ""

  useEffect(() => {
    setMounted(true)
    // If no type is provided, redirect to home
    if (!searchParams.get("type")) {
      router.push("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  if (!mounted) return null

  const isContact = formType === "contact"
  const formPath = isContact ? "/form/contact" : "/form/volunteer"

  // Localized strings with sensible fallbacks
  const title = isContact
    ? T.success?.contactTitle ?? "Message Sent Successfully!"
    : T.success?.volunteerTitle ?? "Application Submitted!"

  const subtitle = isContact
    ? T.success?.contactSubtitle ?? `Thank you for reaching out to ${data.firstName} ${data.lastName}`
    : T.success?.volunteerSubtitle ?? "Thank you for your interest in volunteering"

  const badgeText = isContact
    ? T.success?.badgeContact ?? "We appreciate your message"
    : T.success?.badgeVolunteer ?? "We're excited to have you on board"

  const checkEmailLabel = T.success?.checkEmailTitle ?? "Check Your Email"
  const checkEmailValue = email || (T.success?.confirmationSent ?? "Confirmation sent")

  const responseTimeLabel = T.success?.responseTimeTitle ?? "Response Time"
  const responseTimeValue = isContact
    ? T.success?.responseTimeContact ?? "24-48 hours"
    : T.success?.responseTimeVolunteer ?? "3-5 business days"

  const subjectLabel = T.success?.subjectTitle ?? "Subject"
  const subjectValue = subject || (T.success?.subjectDefault ?? "General")

  const appStatusLabel = T.success?.applicationStatusTitle ?? "Application Status"
  const appStatusValue = T.success?.applicationStatusValue ?? "Under Review"

  const confirmationLabel = T.success?.confirmationTitle ?? "Confirmation"
  const confirmationValue = email || (T.success?.confirmationSent ?? "Sent to your email")

  const nextTitle = isContact ? T.success?.nextTitleContact ?? "What's Next?" : T.success?.nextTitleVolunteer ?? "What Happens Next?"

  const nextList: string[] = isContact
    ? Array.isArray(T.success?.nextStepsContact)
      ? T.success.nextStepsContact
      : [
          "Our team will review your message and categorize it appropriately.",
          "You will receive a confirmation email shortly.",
          "We will respond to your inquiry as soon as possible."
        ]
    : Array.isArray(T.success?.nextStepsVolunteer)
    ? T.success.nextStepsVolunteer
    : [
        "Our team will review your application and qualifications.",
        "You will receive a confirmation email with your application details.",
        "We will contact you via email or phone to discuss next steps.",
        "If selected, you will receive information about orientation and training."
      ]

  // Use T (any) for optional keys so TypeScript doesn't complain when translations shape varies
  const backToHomeLabel = T.buttons?.backToHome ?? T.contact?.backToHome ?? "Back to Home"
  const sendAnother = isContact ? (T.success?.sendAnotherContact ?? "Send Another Message") : (T.success?.sendAnotherVolunteer ?? "Submit Another Application")
  const needImmediatePrefix = T.success?.needImmediatePrefix ?? "Need immediate assistance?"
  const callUsText = T.success?.callUsText ?? "Call us at"
  const questionsPrefix = T.success?.questionsPrefix ?? "Questions about your application?"
  const contactUsText = T.success?.contactUsText ?? "Contact us at"

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-900 via-stone-50 to-teal-900/30 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-900">
            {/* Header Section with Gradient */}
            <div className="bg-linear-to-r from-teal-900 to-teal-800 px-8 py-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                {/* Animated Success Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-4 border-white/30 animate-in zoom-in duration-500">
                  {isContact ? (
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  ) : (
                    <HandHeart className="w-12 h-12 text-white" />
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {title}
                </h1>
                <p className="text-white text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              {/* Thank You Message */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-900 text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" />
                  <span>{badgeText}</span>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                  {isContact ? (
                    <>
                      {T.success?.receivedMessage ?? "We've received your message and our team will review it carefully. We typically respond within "}
                      <span className="font-semibold text-teal-900">{responseTimeValue}</span>.
                    </>
                  ) : (
                    <>
                      {T.success?.receivedVolunteer ?? "Your volunteer application has been received successfully. Our team will review your application and get back to you within "}
                      <span className="font-semibold text-teal-900">{responseTimeValue}</span>.
                    </>
                  )}
                </p>
              </div>

              {/* Information Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {isContact ? (
                  <>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-5 h-5 text-teal-900" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{checkEmailLabel}</h3>
                      <p className="text-xs text-stone-600 break-all">{checkEmailValue}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-5 h-5 text-teal-900" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{responseTimeLabel}</h3>
                      <p className="text-xs text-stone-600">{responseTimeValue}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-5 h-5 text-teal-800" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{subjectLabel}</h3>
                      <p className="text-xs text-stone-600 capitalize">{subjectValue}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-5 h-5 text-teal-900" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{appStatusLabel}</h3>
                      <p className="text-xs text-stone-600">{appStatusValue}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-5 h-5 text-teal-900" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{T.success?.reviewTimeLabel ?? "Review Time"}</h3>
                      <p className="text-xs text-stone-600">{responseTimeValue}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-5 h-5 text-teal-900" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1 text-sm">{confirmationLabel}</h3>
                      <p className="text-xs text-stone-600 break-all">{confirmationValue}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Next Steps */}
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200 mb-8">
                <h3 className="font-semibold text-teal-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {nextTitle}
                </h3>
                <ul className="space-y-2 text-stone-700 text-sm">
                  {nextList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-900 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="flex-1 bg-teal-800 hover:bg-teal-900 text-white h-14 text-lg rounded-full shadow-lg shadow-teal-900/20"
                >
                  <Link href="/" className="flex items-center justify-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {backToHomeLabel}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-teal-900 text-teal-900 hover:bg-teal-50 h-14 text-lg rounded-full"
                >
                  <Link href={formPath}>{sendAnother}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-stone-600 text-sm">
              {isContact ? (
                <>
                  {needImmediatePrefix}{" "}
                  <a href={`tel:${data.contact.phone}`} className="text-teal-900 hover:underline font-semibold">
                    {callUsText} {data.contact.phone}
                  </a>
                </>
              ) : (
                <>
                  {questionsPrefix}{" "}
                  <a href={`mailto:${data.contact.email}`} className="text-teal-800 hover:underline font-semibold">
                    {contactUsText} {data.contact.email}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-linear-to-br from-teal-50 via-stone-50 to-teal-50/30 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-teal-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-stone-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}