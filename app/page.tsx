import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorSection from "@/components/DoctorSection";
import OriginSection from "@/components/OriginSection";
import Services from "@/components/Services";
import GalleryCarousel from "@/components/GalleryCarousel";
import VideoSection from "@/components/VideoSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import PawTrail from "@/components/PawTrail";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DoctorSection />
        <OriginSection />
        <Services />
        <GalleryCarousel />
        <VideoSection />
        <InstagramSection />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <PawTrail />
    </>
  );
}
