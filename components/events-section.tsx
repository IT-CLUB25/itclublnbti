"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { animate, stagger } from "animejs"
import { Bot, Braces, CalendarDays, ChevronLeft, ChevronRight, Flag, Gamepad2, MapPin, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { eventGallery, pastEvents, upcomingEvent } from "@/data/site-content"

export default function EventsSection() {
  const { t, language } = useLanguage()
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [page, setPage] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryPaused, setGalleryPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const pageCount = Math.ceil(pastEvents.length / itemsPerPage)
  const visibleEvents = useMemo(() => pastEvents.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage), [page, itemsPerPage])
  const activityIcons = [Braces, Flag, Bot, Gamepad2]
  const workshopDescriptions = {
    "Day 01": { en: "Introducing students to why research is conducted and why it matters.", ja: "研究を行う理由と、その重要性について学ぶ入門セッションでした。" },
    "Day 02": { en: "Understanding how to read and analyse a research paper effectively.", ja: "研究論文を効果的に読み、分析する方法を学びました。" },
    "Day 03": { en: "Writing a proper research paper, including its structure and referencing style.", ja: "適切な研究論文の書き方、論文構成、参考文献の記載スタイルを学びました。" },
  } as const

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 720 ? 1 : window.innerWidth < 980 ? 2 : 3)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    setPage((current) => Math.min(current, Math.ceil(pastEvents.length / itemsPerPage) - 1))
  }, [itemsPerPage])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    animate(".event-carousel .event-card", { opacity: { from: 0 }, x: { from: 24 }, duration: 520, delay: stagger(80), ease: "outCubic" })
  }, [page, itemsPerPage])

  useEffect(() => {
    if (galleryPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(() => setGalleryIndex((current) => (current + 1) % eventGallery.length), 4800)
    return () => window.clearInterval(timer)
  }, [galleryPaused])

  const goTo = (nextPage: number) => setPage((nextPage + pageCount) % pageCount)
  const moveGallery = (direction: number) => setGalleryIndex((current) => (current + direction + eventGallery.length) % eventGallery.length)
  const galleryPosition = (index: number) => {
    let offset = (index - galleryIndex + eventGallery.length) % eventGallery.length
    if (offset > eventGallery.length / 2) offset -= eventGallery.length
    if (offset === 0) return "is-active"
    if (offset === -1) return "is-previous"
    if (offset === 1) return "is-next"
    if (offset === -2) return "is-far-previous"
    if (offset === 2) return "is-far-next"
    return "is-hidden"
  }

  return (
    <section id="events" className="content-section events-section">
      <div className="section-heading"><div><span className="section-label"><span /> {t("eventsLabel")}</span><h2>{t("eventsTitle")}</h2></div><p>{t("eventsIntro")}</p></div>
      <div
        className="event-gallery"
        aria-roledescription="carousel"
        aria-label={t("galleryLabel")}
        tabIndex={0}
        onMouseEnter={() => setGalleryPaused(true)}
        onMouseLeave={() => setGalleryPaused(false)}
        onFocusCapture={() => setGalleryPaused(true)}
        onBlurCapture={() => setGalleryPaused(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveGallery(-1)
          if (event.key === "ArrowRight") moveGallery(1)
        }}
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchStart === null) return
          const distance = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart
          if (Math.abs(distance) > 45) moveGallery(distance > 0 ? -1 : 1)
          setTouchStart(null)
        }}
      >
        <div className="gallery-copy">
          <span className="section-label"><span /> {t("galleryLabel")}</span>
          <h3>{t("galleryTitle")}</h3>
          <p>{t("galleryDescription")}</p>
        </div>
        <div className="gallery-stage" aria-live="polite">
          {eventGallery.map((photo, index) => {
            const position = galleryPosition(index)
            const active = position === "is-active"
            return (
              <button
                type="button"
                className={`gallery-photo ${position}`}
                key={photo.image}
                aria-label={`${t("galleryPhoto")} ${index + 1}: ${photo.alt[language]}`}
                aria-hidden={!active}
                tabIndex={active ? 0 : -1}
                onClick={() => setGalleryIndex(index)}
              >
                <Image src={photo.image} alt={photo.alt[language]} fill sizes="(max-width: 720px) 82vw, 42vw" />
                <span><b>{String(index + 1).padStart(2, "0")}</b> / {String(eventGallery.length).padStart(2, "0")}</span>
              </button>
            )
          })}
        </div>
        <div className="gallery-controls">
          <button type="button" onClick={() => moveGallery(-1)} aria-label={t("galleryPrevious")}><ChevronLeft size={20} /></button>
          <div aria-hidden="true">{eventGallery.map((photo, index) => <span className={index === galleryIndex ? "active" : ""} key={photo.image} />)}</div>
          <button type="button" onClick={() => moveGallery(1)} aria-label={t("galleryNext")}><ChevronRight size={20} /></button>
        </div>
      </div>
      <article className="featured-event">
        <Image
          className="featured-event-bg"
          src="/images/events/cyberverse-2026.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 720px) 100vw, 90vw"
          aria-hidden="true"
        />
        <div className="featured-event-overlay" aria-hidden="true" />
        <div className="event-signal"><Sparkles size={17} /> {t("upcoming")} · <time dateTime={upcomingEvent.dateISO}>{upcomingEvent.date[language]}</time></div>
        <div className="featured-event-copy"><span>{t("presents")}</span><h3>CyberVerse <em>2026</em></h3><p>{t("eventDescription")}</p><div className="event-meta"><span><CalendarDays size={17} /> {upcomingEvent.date[language]}</span><span><MapPin size={17} /> {t("venue")}</span></div><span className="registration-status">{t("registerInterest")}</span></div>
        <div className="game-list">{upcomingEvent.activities.map((activity, index) => { const Icon = activityIcons[index]; return <span key={activity.en}><small>0{index + 1}</small><Icon size={17} />{activity[language]}</span> })}</div>
      </article>

      <div className="past-heading"><span>{t("previously")}</span><span>{t("archiveUpdated")}</span></div>
      <div className="event-carousel" aria-roledescription="carousel" aria-label={t("previously")}>
        <div className="event-grid" aria-live="polite">
          {visibleEvents.map((event) => {
            const workshopDay = Object.keys(workshopDescriptions).find((day) => event.title.endsWith(day)) as keyof typeof workshopDescriptions | undefined
            const description = workshopDay ? workshopDescriptions[workshopDay] : event.description
            const title = language === "ja" && "titleJa" in event ? event.titleJa : event.title
            const speaker = language === "ja" && "speakerJa" in event ? event.speakerJa : event.speaker
            return <article className="event-card" key={event.title}>
              <div className="event-image"><Image src={event.image} alt={`${title} — ${event.date[language]}`} fill sizes="(max-width: 639px) 100vw, (max-width: 979px) 50vw, 33vw" /></div>
              <div className="event-card-copy"><span>{t(event.typeKey)}</span><h3>{title}</h3>{speaker && <strong>{t("conductedBy")} {speaker}</strong>}{description && <p>{description[language]}</p>}<time>{event.date[language]}</time></div>
            </article>
          })}
        </div>
        <div className="carousel-controls">
          <div className="carousel-dots" aria-hidden="true">{Array.from({ length: pageCount }, (_, index) => <span className={index === page ? "active" : ""} key={index} />)}</div>
          <div><button type="button" onClick={() => goTo(page - 1)} aria-label={t("previousEvents")}><ChevronLeft size={19} /></button><span>{String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}</span><button type="button" onClick={() => goTo(page + 1)} aria-label={t("nextEvents")}><ChevronRight size={19} /></button></div>
        </div>
      </div>
    </section>
  )
}
