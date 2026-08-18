"use client"

import { FileText } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { studentResearchPapers } from "@/data/site-content"

export default function ResearchShowcaseSection() {
  const { t, language } = useLanguage()

  return (
    <section id="research-showcase" className="content-section research-showcase">
      <div className="research-showcase-summary" data-reveal>
        <div>
          <span className="section-label"><span /> {t("researchShowcaseLabel")}</span>
          <h2>{t("researchShowcaseTitle")}</h2>
        </div>
        <p>{t("researchShowcaseDescription")}</p>
        <div className="research-showcase-meta">
          <span><FileText size={16} /> {studentResearchPapers.length} {t("researchPaperCount")}</span>
          <span>{t("researchShowcaseLabel")}</span>
        </div>
      </div>

      <div className="research-preview-grid" aria-label={t("researchShowcaseLabel")}>
        {studentResearchPapers.map((paper, index) => {
          const paperHref = encodeURI(`/resources/${paper.file}#page=1&view=FitH`)

          return (
            <a className="research-preview-card" data-reveal href={paperHref} target="_blank" rel="noreferrer" key={paper.file}>
              <div className="research-preview-sheet" aria-hidden="true">
                <span className="research-preview-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="research-preview-doc-head">
                  <FileText size={18} />
                  <span>{t("studentResearchPaper")}</span>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.summary[language]}</p>
                <div className="research-preview-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="research-preview-copy">
                <strong>{paper.student}</strong>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
