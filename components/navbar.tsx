"use client"

import { useEffect, useRef, useState, useCallback } from "react"
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
  const navRef = useRef<HTMLElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onHashChange = () => close()
    let lastWidth = window.innerWidth
    const onResize = () => {
      const newWidth = window.innerWidth
      if ((lastWidth >= 980 && newWidth < 980) || (lastWidth < 980 && newWidth >= 980)) close()
      lastWidth = newWidth
    }
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("resize", onResize)
    return () => { window.removeEventListener("hashchange", onHashChange); window.removeEventListener("resize", onResize) }
  }, [close])

  useEffect(() => {
    if (!open) return
    const nav = navRef.current
    if (!nav) return
    const focusable = nav.querySelectorAll<HTMLElement>("a, button")
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus() } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus() } }
    }
    const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", handleTab)
    document.addEventListener("keydown", handleEscape)
    first.focus()
    return () => { document.removeEventListener("keydown", handleTab); document.removeEventListener("keydown", handleEscape) }
  }, [open, close])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

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
        <nav id="primary-navigation" ref={navRef} className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
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
      {open && <div className="nav-backdrop visible" onClick={close} aria-hidden="true" />}
    </header>
  )
}
