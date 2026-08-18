"use client"

import Image from "next/image"
import { ArrowDown, ArrowUpRight, CalendarDays, Trophy, UsersRound } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function Hero() {
  const { t } = useLanguage()
  const highlights = [
    { label: t("clubCommunity"), value: t("studentPowered"), icon: UsersRound },
    { label: t("clubEvents"), value: t("yearRound"), icon: CalendarDays },
    { label: t("clubChallenges"), value: t("learnCompete"), icon: Trophy },
  ]

  return <section id="home" className="hero-section">
    <div className="hero-copy">
      <h1 data-hero-reveal>{t("heroTitleA")}<br /><em>{t("heroTitleB")}</em><br />{t("heroTitleC")}</h1>
      <p data-hero-reveal>{t("heroDescription")}</p>
      <div className="hero-actions" data-hero-reveal><a className="button-primary" href="#events">{t("exploreEvents")} <ArrowDown size={17} /></a><a className="button-secondary" href="#about">{t("meetCommunity")} <ArrowUpRight size={17} /></a></div>
      <div className="club-highlight-strip" data-hero-reveal>{highlights.map(({ label, value, icon: Icon }) => <article key={label}><Icon size={18} /><div><strong>{label}</strong><span>{value}</span></div></article>)}</div>
    </div>
    <div className="hero-visual" data-hero-reveal>
      <span className="hero-tech-label label-north" aria-hidden="true">{t("communityCreativity")}</span><span className="hero-tech-label label-south" aria-hidden="true">LNBTI / 2026</span>
      <span className="hero-scan-ring" aria-hidden="true" /><span className="hero-orbit orbit-one" aria-hidden="true"><span className="orbit-node node-a" /><span className="orbit-node node-b" /></span><span className="hero-orbit orbit-two" aria-hidden="true"><span className="orbit-node node-c" /><span className="orbit-node node-d" /></span><span className="hero-orbit orbit-three" aria-hidden="true" />
      <div className="hero-logo"><span className="hero-logo-core" aria-hidden="true" /><span className="hero-logo-glint" aria-hidden="true" /><Image src="/images/logo-silver.webp" alt="IT Club of LNBTI emblem" width={430} height={430} priority /></div>
      <div className="floating-note note-top"><span>{t("clubCommunity")}</span><strong>{t("studentLed")}</strong></div><div className="floating-note note-bottom"><span>{t("since2024")}</span><strong>{t("ideasImpact")}</strong></div>
    </div>
  </section>
}
