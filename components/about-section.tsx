"use client"

import Image from "next/image"
import { BookOpenCheck, Code2, Lightbulb, UsersRound } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function AboutSection() {
  const { t } = useLanguage()
  const values = [
    { title: t("studentLed"), detail: t("studentLedDetail"), icon: UsersRound },
    { title: t("learnDoing"), detail: t("learnDoingDetail"), icon: Code2 },
    { title: t("shareOpenly"), detail: t("shareOpenlyDetail"), icon: BookOpenCheck },
    { title: t("stayCurious"), detail: t("stayCuriousDetail"), icon: Lightbulb },
  ]
  return (
    <section id="about" className="content-section about-section">
      <div className="about-story">
        <div className="about-image"><Image src="/images/team.webp" alt="LNBTI IT Club community" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="about-copy">
          <span className="section-label"><span /> {t("aboutLabel")}</span>
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutDescription")}</p>
          <div className="value-grid">
            {values.map(({ title, detail, icon: Icon }) => (
              <article key={title}><Icon size={20} /><div><strong>{title}</strong><span>{detail}</span></div></article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
