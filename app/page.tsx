import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorSection from "@/components/DoctorSection";
import TeamCarousel from "@/components/TeamCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

// Página compacta em 5 blocos: hero, serviços, doutora (+ origem do nome),
// equipe e contato com mapa.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <DoctorSection />
        <TeamCarousel />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
