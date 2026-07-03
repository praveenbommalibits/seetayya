# Old Site → New Site: Content Parity Plan

Date: 3 July 2026 · Branch: `feature/old-site-content-parity`
Compared: `https://seetayyafoundation.org` (WordPress/Elementor) vs `https://praveenbommalibits.github.io/seetayya/en/` (Astro)

## Verdict

The new Astro site already covers most of the old site (see `MIGRATION_AUDIT.md`): founders' story, vision/mission service list, programs, certificates with real numbers, contact + map, legal pages, testimonials, bilingual routes, and legacy redirects. The design language (hero slider, bento programs, trust showcase) is kept as-is per direction. This pass closes the remaining **content** gaps.

## Gaps found and closed in this branch

| # | Old-site content | Status before | Action taken |
|---|---|---|---|
| 1 | **Highlights** — 8 Telugu-captioned news moments on the old homepage (wheelchair donation, free eye operations, legal awareness judge visit, 5th-anniversary building inauguration, Collector's 8 gas cylinders, SI's 2-month grocery donation, ex-CBI JD V. V. Lakshmi Narayana visit, elderly widow given shelter) | Missing entirely | New `highlights` content collection (CMS-editable) + horizontally scrolling Highlights section on the homepage. Original Telugu captions preserved, English translations added. Photos reuse the already-migrated `/uploads/legacy/` files. |
| 2 | **Videos page** — 15 YouTube videos | Missing (media page had albums only) | `videos` list in `src/data/site.ts` + Videos tab on the Events page with click-to-load `youtube-nocookie` embeds (no third-party JS until the visitor plays). Media links point visitors to Events for videos. |
| 3 | **Volunteer Google Form** (`forms.gle/9pr3qaDqRy4zXTpR9`, with resume/Aadhaar upload) | Only a mailto form | "Apply via Google Form" button added on the Volunteer page next to the existing form. |
| 4 | **5th Anniversary + new building inauguration** | Not in events | Added as a proper event with the ceremony photo. |

## Old-site content intentionally NOT carried over

- **Self-hosted WordPress videos (3 .mp4 files)** — hosted on the WordPress server that will be decommissioned. If they matter, download them and re-upload to the foundation's YouTube channel, then add the IDs to `videos` in `src/data/site.ts`.
- **GiveWP donation iframe** — replaced by the new static donate flow (already decided in the earlier migration).
- **Elementor page furniture** (duplicate contact blocks on every page, sidebar donate posters) — the new footer covers this once, consistently.
- **Public QR poster** (`IMG-20240511-WA0105.jpg`) — the file is migrated to `/uploads/legacy/`, but the donate page keeps QR/UPI gated behind `donationSettings` until verified values are configured. Enable it via CMS when ready.

## Follow-ups before Vercel go-live (not code)

1. Confirm the 5th-anniversary event date and set it in the event file (left dateless like the legal-awareness event).
2. Give the 15 migrated videos real titles via `src/data/site.ts` if desired (currently untitled thumbnails).
3. Upload verified UPI/QR values in Decap → donation settings to un-gate manual payments.
4. Check Vercel `vercel.json` redirects mirror the GitHub Pages legacy redirects when switching the domain.

## How to test locally

```bash
git checkout feature/old-site-content-parity
npm run dev
# open http://127.0.0.1:4321/en  (and /te)
```

Pages to check: homepage (new Highlights strip after Latest activities), `/en/events` (Videos tab + anniversary event), `/en/media` (video pointer), `/en/volunteer` (Google Form button).
