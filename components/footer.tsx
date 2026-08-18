"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Logo } from "@/components/logo"
import { useLanguage } from "@/components/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div>
        <Logo useSilver />
        <p>{t("footerTagline")}</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/resources">{t("resources")}</Link>
        <Link href="/#events">{t("events")}</Link>
        <Link href="/#about">{t("about")}</Link>
        <a href="https://verify.itclublnbti.com">{t("verify")}</a>
      </nav>
      <div>
        <span>© {new Date().getFullYear()} {t("rights")}</span>
        <Link href="/" aria-label={t("backTop")}><ArrowUp size={17} /></Link>
      </div>
    </footer>
  )
}
