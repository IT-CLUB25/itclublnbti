"use client"

import { useMemo, useState } from "react"
import { BookOpen, Clock3, FileText, Search } from "lucide-react"
import { coursesData } from "@/data/notes"
import { useLanguage } from "@/components/language-context"

const resources = coursesData.flatMap((course) =>
  course.semesters.flatMap((semester) =>
    semester.modules.flatMap((module) =>
      module.notes.map((note) => ({
        ...note,
        course: course.name,
        semester: semester.name,
        module: module.name,
      })),
    ),
  ),
)

export default function ResourceExplorer() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [course, setCourse] = useState("all")
  const filtered = useMemo(() => {
    const needle = query.toLowerCase().trim()
    return resources.filter((resource) => {
      const matchesCourse = course === "all" || resource.course === course
      const matchesQuery = !needle || [resource.name, resource.description, resource.module, resource.course]
        .some((value) => value.toLowerCase().includes(needle))
      return matchesCourse && matchesQuery
    })
  }, [query, course])

  return (
    <section id="resource-library" className="content-section resource-library">
      <div className="resource-toolbar">
        <div>
          <span>{t("previewCatalogue")}</span>
          <h2>{t("learningCollection")}</h2>
          <p>{t("catalogueIntro")}</p>
        </div>
        <div className="resource-controls">
          <label><span className="sr-only">{t("searchTopics")}</span><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("searchTopics")} /></label>
          <label className="sr-only" htmlFor="course-filter">{t("filterProgramme")}</label>
          <select id="course-filter" value={course} onChange={(event) => setCourse(event.target.value)}>
            <option value="all">{t("allProgrammes")}</option>
            {coursesData.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
        </div>
      </div>
      <div className="resource-summary">
        <span><BookOpen size={16} /> {coursesData.length} {t("programmes")}</span>
        <span><FileText size={16} /> {filtered.length} {t("plannedResources")}</span>
        <span><Clock3 size={16} /> {t("publicationProgress")}</span>
      </div>
      <div className="resource-list" role="list" aria-label={t("scrollResources")}>
        {filtered.map((resource) => (
          <article key={resource.id} role="listitem" tabIndex={0}>
            <div className="resource-file-icon"><FileText size={20} /></div>
            <div>
              <span>{resource.course} · {resource.module}</span>
              <h3>{resource.name.replace(/\.pdf$/i, "")}</h3>
              <p>{resource.description}</p>
            </div>
            <div className="resource-status"><Clock3 size={14} /> {t("preparing")}</div>
          </article>
        ))}
        {filtered.length === 0 && <p className="empty-result">{t("noResults")}</p>}
      </div>
    </section>
  )
}
