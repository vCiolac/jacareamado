import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import WhatsappFloatButton from "@/components/WhatsappFloatButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <ContactCta />
      <Footer />
      <WhatsappFloatButton />
    </main>
  );
}
