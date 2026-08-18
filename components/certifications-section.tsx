"use client"

import { ArrowUpRight, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function CertificationsSection() {
  const { t } = useLanguage()
  const features = [{ icon: ShieldCheck, title: t("instantChecks"), detail: t("instantChecksDetail") }, { icon: FileCheck2, title: t("secureRecords"), detail: t("secureRecordsDetail") }, { icon: BadgeCheck, title: t("shareConfidence"), detail: t("shareConfidenceDetail") }]
  return <section id="credentials" className="content-section credential-cta"><div><span className="section-label"><span /> {t("credentialsLabel")}</span><h2>{t("credentialsTitle")}</h2><p>{t("credentialsDescription")}</p><a className="button-primary" href="https://verify.itclublnbti.com">{t("openPortal")} <ArrowUpRight size={17} /></a></div><div className="credential-stack">{features.map(({ icon: Icon, title, detail }) => <article key={title}><Icon size={23} /><span>{title}</span><strong>{detail}</strong></article>)}</div></section>
}
