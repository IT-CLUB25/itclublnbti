import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ResourceHubSection from "@/components/resource-hub-section"
import ResearchShowcaseSection from "@/components/research-showcase-section"
import ResourceExplorer from "@/components/resource-explorer"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"
import MotionEffects from "@/components/motion-effects"
import NetworkBackground from "@/components/network-background"

export const metadata: Metadata = {
  title: "Resources",
  description: "Browse student research papers, learning materials, and curated resources from the IT Club of LNBTI.",
}

export default function ResourcesPage() {
  return (
    <LanguageProvider>
      <main id="main-content" className="site-shell resources-page">
        <MotionEffects />
        <NetworkBackground />
        <div className="site-ambient" aria-hidden="true" />
        <Navbar />
        <ResourceHubSection />
        <ResearchShowcaseSection />
        <ResourceExplorer />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
