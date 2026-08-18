import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EventsSection from "@/components/events-section"
import AboutSection from "@/components/about-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"
import MotionEffects from "@/components/motion-effects"
import NetworkBackground from "@/components/network-background"

export default function Home() {
  return (
    <LanguageProvider>
      <main id="main-content" className="site-shell">
        <MotionEffects />
        <NetworkBackground />
        <div className="site-ambient" aria-hidden="true" />
        <Navbar />
        <Hero />
        <EventsSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
