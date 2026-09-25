import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorSection from "@/components/DoctorSection";
import Services from "@/components/Services";
import GalleryCarousel from "@/components/GalleryCarousel";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import PawTrail from "@/components/PawTrail";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DoctorSection />
        <Services />
        <GalleryCarousel />
        <VideoSection />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <PawTrail />
    </>
  );
}
