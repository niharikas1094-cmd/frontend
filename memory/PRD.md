# Niharika Architect Portfolio — PRD

## Original problem statement
Enhance an existing architect portfolio website (front-end only, no backend) without changing the design heavily; use placeholder images; populate with real portfolio data extracted from the user's PDF. Smooth animations, modern layout.

## Constraints
- **Frontend only** — user explicitly said "no backend". Data is hardcoded in `frontend/src/components/Portfolio.jsx`.
- Do not re-process the 96MB PDF (fails). Interactive smaller PDF was already parsed.

## Architecture
- React + Tailwind + Shadcn UI + framer-motion
- `src/components/Portfolio.jsx` — page layout + hardcoded project/bio/skills data (6 projects)
- `src/components/ProjectModal.jsx` — project detail modal (hero + gallery)
- `src/components/ProjectImage.jsx` — image with styled fallback placeholder (grid texture, Building2 icon, title, category) on load error
- `src/components/ContactForm.jsx`, `BlogSection.jsx`, `Navigation.jsx`
- `public/images/` — where user drops real photos; `public/images/README.md` maps file names → projects

## Implemented
- 2026-06 (earlier): layout, animations, filtering, modal, contact form toast, authentic PDF data
- 2026-06: `ProjectImage` fallback placeholder wired into cards + modal hero + gallery; created `public/images/` with README guide listing exact expected filenames (`projectN_thumb.jpg`, `projectN_1.jpg`...). Verified via screenshot.

## Backlog
- P1: Move hardcoded data out of Portfolio.jsx into `data/projects.js`
- P2: Lightbox for gallery images; optional real image upload (only if user agrees to backend)
