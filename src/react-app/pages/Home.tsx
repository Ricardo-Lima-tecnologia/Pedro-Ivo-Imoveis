import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import VideoVSL from "@/react-app/components/VideoVSL";
import LeadForm from "@/react-app/components/LeadForm";
import Testimonials from "@/react-app/components/Testimonials";
import WhatsAppCTA from "@/react-app/components/WhatsAppCTA";
import Footer from "@/react-app/components/Footer";
import FloatingWhatsApp from "@/react-app/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <VideoVSL />
      <LeadForm />
      <Testimonials />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
