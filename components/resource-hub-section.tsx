"use client"

import { ArrowRight, BookOpenCheck } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { studentResearchPapers } from "@/data/site-content"

export default function ResourceHubSection() {
  const { t } = useLanguage()

  return (
    <section id="resources" className="content-section resource-overview">
      <div className="section-heading" data-reveal>
        <div>
          <span className="section-label"><span /> {t("researchShowcaseLabel")}</span>
          <h2>{t("researchShowcaseTitle")}</h2>
        </div>
        <p>{t("researchShowcaseDescription")}</p>
      </div>
      <div className="resource-callout" data-reveal>
        <BookOpenCheck size={26} />
        <div><strong>{studentResearchPapers.length} {t("researchPaperCount")}</strong><span>{t("researchShowcaseHint")}</span></div>
        <a href="#research-showcase">{t("seeShowcase")} <ArrowRight size={16} /></a>
      </div>
    </section>
  )
}
