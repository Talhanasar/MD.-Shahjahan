import HeroSection from "@/components/HeroSection"
import VideoSection from "@/components/VideoSection"
import CalendarSection from "@/components/CalendarSection"
import GalleryCalendarSection from "@/components/GalleryCalendarSection"
import ManifestoSection from "@/components/ManifestoSection"
import AboutSection from "@/components/AboutSection"
import BannerSection from "@/components/BannerSection"
import GetInvolvedSection from "@/components/GetInvolvedSection"
import PollSection from "@/components/PollSection"
import LatestNews from "@/components/LatestNews"
export default function CandidatePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <GalleryCalendarSection/>
      <ManifestoSection />
      <AboutSection />
      <GetInvolvedSection />
      <PollSection />
      <LatestNews count={4} />
    </>
  )
}
