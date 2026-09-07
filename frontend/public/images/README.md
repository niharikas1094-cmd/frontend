# How to add your project photos

Drop your JPG files into this folder (`frontend/public/images/`) using the exact
file names below. No code changes needed — the site picks them up automatically.
Until a file exists, a styled placeholder with the project title is shown instead.

| Project | Card thumbnail | Modal hero (1st) | Gallery images |
|---|---|---|---|
| 1. Farmer's Cooperative (Krishi Bhavan) | `project1_thumb.jpg` | `project1_1.jpg` | `project1_2.jpg`, `project1_3.jpg` |
| 2. Experiential Wine Tourism Hub | `project2_thumb.jpg` | `project2_1.jpg` | `project2_2.jpg`, `project2_3.jpg` |
| 3. Stacked Office Space Extension | `project3_thumb.jpg` | `project3_1.jpg` | `project3_2.jpg` |
| 4. Industrial Administrative Campus | `project4_thumb.jpg` | `project4_1.jpg` | `project4_2.jpg` |
| 5. Greenprint for the Future | `project5_thumb.jpg` | `project5_1.jpg` | `project5_2.jpg` |
| 6. Architectural and Cultural Traditions in India | `project6_thumb.jpg` | `project6_1.jpg` | `project6_2.jpg` |

## Tips
- Recommended sizes: thumbnails ~1200x800px, hero/gallery ~1600x1000px (landscape). Keep each under ~500 KB.
- Blog images: `blog1.jpg` … `blog4.jpg`.
- **All text and image paths live in one file: `frontend/src/data/portfolio.js`.**
  Edit project titles, descriptions, skills, awards, contact details, or add more gallery images there, e.g.
  `images: ["/images/project1_1.jpg", "/images/project1_2.jpg", "/images/project1_4.png"]`.
- Paths always start with `/images/` because this folder is served from the site root.
- After adding files locally, refresh the browser (hard refresh if the old placeholder is cached).
