# Niharika Architect Portfolio — PRD

## Original problem statement
Enhance an existing architect portfolio website (front-end only, no backend) without changing the design heavily; use placeholder images; populate with real portfolio data extracted from the user's PDF. Smooth animations, modern layout.

## Constraints
- **Frontend only** — user explicitly said "no backend". Data is hardcoded in `frontend/src/components/Portfolio.jsx`.
- Do not re-process the 96MB PDF (fails). Interactive smaller PDF was already parsed.

## Architecture
- React + Tailwind + Shadcn UI + framer-motion
- **`src/data/portfolio.js` — SINGLE SOURCE OF CONTENT**: profile/contact, categories, projects (text + image paths), skills, software, education, awards, blogPosts. Edit here to change site content.
- `src/components/Portfolio.jsx` — page layout only (imports from data file)
- `src/components/BlogSection.jsx` — blog layout (imports blogPosts)
- `src/components/ProjectModal.jsx` — project detail modal (hero + gallery)
- `src/components/ProjectImage.jsx` — image with styled fallback placeholder (`compact` prop for small thumbs)
- `public/images/` — where user drops real photos; `public/images/README.md` maps file names → projects

## Implemented
- 2026-06 (earlier): layout, animations, filtering, modal, contact form toast, authentic PDF data
- 2026-06: `ProjectImage` fallback placeholder wired into cards + modal hero + gallery + blog; created `public/images/` with README guide.
- 2026-06: Refactored ALL hardcoded content (projects, skills, software, education, awards, contact, blog) out of components into `src/data/portfolio.js`. Portfolio.jsx 603→470 lines. Verified via screenshot (all counts match).

## Backlog
- P2: Lightbox for gallery images; share links per project; optional real image upload (only if user agrees to backend)
