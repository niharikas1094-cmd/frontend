# Extracted images from `portfolio_niharika (PRINT).pdf`

70 embedded photos / renders / drawings were pulled out of the PDF and web-optimised
(max 1800 px, progressive JPEG, ~17 MB total).

- Folder: `public/images/extracted/`
- File naming: `p<pdf-page>-<image-no>.jpg`  → e.g. `p05-01.jpg` = page 5, first image.
- Contact sheet (all 70 with labels): `public/images/extracted/_contact-sheet.jpg`
  View in browser at `/images/extracted/_contact-sheet.jpg`

Skipped: 42 blank facade fragments on page 18, one blank texture, and 6 duplicate
cover-page crops.

## Best-guess grouping (to be confirmed)

| Project in site | Pages | Files |
|---|---|---|
| 1. Farmer's Cooperative (Krishi Bhavan) | 4–6 | p04-01, p05-01…p05-07, p06-01…p06-10 |
| 2. Experiential Wine Tourism Hub | 7–10, 24–26 | p07-01, p08-01, p09-01, p10-01, p24-01, p25-01, p26-01… |
| 3. Stacked Office Space Extension | 11–14 | p11-01, p11-02, p12-01, p13-0x, p14-0x |
| 4. Industrial Administrative Campus | 15–17, 19 | p15-01, p16-0x, p17-0x, p19-01 |
| 6. Cultural Traditions in India (Chanderi) | 20–23 | p20-0x, p21-0x, p22-0x, p23-0x |
| Profile portrait | 2 | p02-04, p02-13 |

Once confirmed, the paths get written into `src/data/portfolio.js`.
