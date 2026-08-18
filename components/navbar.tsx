"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShieldCheck, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { useLanguage } from "@/components/language-context"

export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage()
  const pathname = usePathname()
  const isResourcesPage = pathname === "/resources"
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(isResourcesPage ? "resources" : "home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener("hashchange", close)
    window.addEventListener("resize", close)
    return () => { window.removeEventListener("hashchange", close); window.removeEventListener("resize", close) }
  }, [])

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 28)
    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    if (isResourcesPage) {
      setActiveSection("resources")
      return () => window.removeEventListener("scroll", updateScrollState)
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActiveSection(visible.target.id)
    }, { rootMargin: "-25% 0px -62%", threshold: [0, 0.1, 0.3] })

    sections.forEach((section) => observer.observe(section))
    return () => {
      window.removeEventListener("scroll", updateScrollState)
      observer.disconnect()
    }
  }, [isResourcesPage])

  const items = [
    { href: "/", section: "home", label: t("home") },
    { href: "/resources", section: "resources", label: t("resources") },
    { href: "/#events", section: "events", label: t("events") },
    { href: "/#about", section: "about", label: t("about") },
    { href: "/#contact", section: "contact", label: t("contact") },
  ]

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="nav-shell">
        <Link href="/" aria-label="IT Club of LNBTI home"><Logo useSilver /></Link>
        <nav id="primary-navigation" className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {items.map((item) => {
            const active = activeSection === item.section
            return <Link key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined} onClick={() => { setActiveSection(item.section); setOpen(false) }}>{item.label}</Link>
          })}
          <a className="mobile-verify" href="https://verify.itclublnbti.com">
            <ShieldCheck size={16} /> {t("verify")}
          </a>
        </nav>
        <div className="nav-actions">
          <button className="language-button" type="button" onClick={toggleLanguage} aria-label={t("changeLanguage")}>
            {language === "en" ? "日本語" : "EN"}
          </button>
          <a className="verify-button" href="https://verify.itclublnbti.com">
            <span className="nav-live-dot" aria-hidden="true" /><ShieldCheck size={16} /> {t("verify")}
          </a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={t("toggleNavigation")}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
