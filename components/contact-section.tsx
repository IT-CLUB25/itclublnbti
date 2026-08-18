"use client"

import { ArrowUpRight, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { socialChannels } from "@/data/site-content"

const icons = { instagram: Instagram, linkedin: Linkedin, facebook: Facebook }

export default function ContactSection() {
  const { t } = useLanguage()
  return <section id="contact" className="content-section contact-section"><div><span className="section-label"><span /> {t("contactLabel")}</span><h2>{t("contactTitle")}</h2><p>{t("contactDescription")}</p><span className="contact-note"><MessageCircle size={17} /> {t("contactNote")}</span></div><div className="contact-channels">{socialChannels.map(({ label, detail, href, icon }) => { const Icon = icons[icon]; return <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} · ${t("officialChannel")}`}><Icon size={20} /><div><strong>{label}</strong><span>{detail}</span></div><ArrowUpRight size={17} /></a> })}</div></section>
}
