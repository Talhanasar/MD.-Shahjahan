import HeroSection from "@/components/home/HeroSection"
import VideoSection from "@/components/home/VideoSection"
import GalleryCalendarSection from "@/components/home/GalleryCalendarSection"
import ManifestoSection from "@/components/home/ManifestoSection"
import AboutSection from "@/components/home/AboutSection"
import BannerSection from "@/components/home/BannerSection"
import GetInvolvedSection from "@/components/home/GetInvolvedSection"
import PollSection from "@/components/home/PollSection"
import LatestNews from "@/components/home/LatestNews"
export default function CandidatePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <VideoSection />
      <GalleryCalendarSection/>
      <GetInvolvedSection />
      <PollSection />
      <BannerSection />
      <LatestNews count={4} />
    </>
  )
}
