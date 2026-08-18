# IT Club of LNBTI website

A modern, responsive public website for the IT Club of LNBTI. It presents the club’s learning focus, planned resource catalogue, student research showcase, events, values, official social channels, and credential-verification service.

## What is included

- Single-page anchor navigation with English/Japanese labels
- Responsive, accessible dark interface with reduced-motion support
- Searchable resource preview catalogue
- Upcoming event feature and past-event archive
- Club story, values, and a dedicated credential-verification section
- Downloadable student research papers
- Direct links to official club social channels
- Prominent link to the separate credential verification portal
- Security headers, SEO metadata, sitemap generation, type checking, and linting

The course/module entries in the learning catalogue are intentionally labelled **Preparing** and contain metadata only (no files yet). The student research papers in the showcase are bundled in `public/resources` and linked for viewing. Before enabling downloads for the learning catalogue, connect a reviewed file source.

## Local development

Requirements: Node.js 20+ and npm 10+.

```bash
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Content maintenance

- Planned resource metadata: `data/notes.ts`
- Event and social content: `data/site-content.ts`
- Club story and values: `components/about-section.tsx`
- English/Japanese site copy: `components/language-context.tsx`

To publish the CyberVerse 2026 registration action, set `registrationUrl` in `data/site-content.ts` and render it as a link in the event section. Until an official URL is available, the site clearly displays that registration details are coming soon.

Before publishing a resource, add the real file to a durable storage service, validate its ownership and content, then replace the `Preparing` state with an authenticated or public download URL as appropriate.
