# Seetayya Foundation Website

Static Astro website for Seetayya Foundation, designed for GitHub Pages today and a future `seetayyafoundation.org` custom domain.

## Stack

- Astro 5 static output
- Tailwind CSS with custom design tokens
- Astro content collections for events, albums, certificates, testimonials, daily sponsors, and donation settings
- Data-driven homepage hero slides, certificate cards, and impact stories
- Decap CMS at `/admin` for git-based content editing
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Routes and Languages

Public pages are generated in both locales:

- English: `/en/...`
- Telugu: `/te/...`

The root page redirects visitors to the saved language preference or English. The header language switcher swaps to the equivalent page and stores the preference in `localStorage`.

Focused get-involved routes:

- `/en/csr-partnerships` and `/te/csr-partnerships`
- `/en/volunteer` and `/te/volunteer`

## GitHub Pages Base Path

For the current GitHub Pages URL, the workflow builds with:

```bash
ASTRO_BASE=/seetayya
ASTRO_SITE=https://praveenbommalibits.github.io
```

For the future custom domain, change the workflow build environment to:

```bash
ASTRO_BASE=/
ASTRO_SITE=https://seetayyafoundation.org
```

## Content Editing

Open `/admin` after the site is published and sign in through GitHub. Editors can update:

- Events: `src/content/events`
- Media albums: `src/content/albums`
- Daily sponsor entries: `src/content/dailySponsors`
- Homepage hero slides: `src/content/heroSlides`
- Impact stories: `src/content/stories`
- Certificates: `src/content/certificates`
- Testimonials: `src/content/testimonials`
- Donation settings: `src/content/donationSettings/main.json`

Most content fields have English and Telugu fields. Add true Telugu translations rather than transliterated English.

## Admin Access Setup

Do not hardcode admin usernames or passwords in this static site. Static JavaScript, HTML, and CMS config files are visible to visitors and repository collaborators.

For one shared admin login, create one dedicated GitHub account for the foundation, secure it with two-factor authentication, and grant that account write access to this repository. The admin can then open `/admin`, sign in with GitHub, edit content, upload photos, and commit changes. GitHub Actions rebuilds the public site after each CMS commit.

If the site is later hosted on Bluehost and `/admin` also needs an extra password prompt, protect the `/admin` directory through Bluehost/cPanel Directory Privacy or Apache Basic Auth. Keep the password hash outside the public web root.

## Add an Event

1. Go to `/admin`.
2. Open `Events`.
3. Create a new entry with title, date, category, location, summaries, cover image, photos, and body.
4. Set `Published` to true.
5. Commit through the CMS. GitHub Actions will rebuild the site.

## Add a Story

Open `/admin`, choose `Impact Stories`, and add:

- `slug`
- bilingual `title`, `category`, `summary`
- `image`
- bilingual `body` arrays

Then add the story image to `public/uploads`.

## Update the Homepage Carousel

Open `/admin`, choose `Homepage Hero Slides`, and add or edit:

- Bilingual title and caption
- Image
- Bilingual alt text
- Sort order
- Published status

Use real foundation photos only. The first published slide is loaded eagerly for the homepage hero; later slides are lazy-loaded.

## Add or Feature a Certificate

Open `/admin`, choose `Certificates`, and add the title, issuer, document file, preview image, public number, and status note. Set `Published` to show it on the Transparency page. Set `Featured on Homepage` and adjust `Display Order` when the certificate should appear in the homepage trust showcase.

## Add Photos

Upload images through `/admin` or place them in `public/uploads`. Use authentic foundation photos only. Add useful alt text in the content entry where the photo is used.

## Donation Configuration

The Donate page is static and cannot create server-side payment orders. Use Razorpay Payment Pages, Razorpay Payment Buttons, or the existing verified GiveWP/Razorpay form.

Edit `src/content/donationSettings/main.json`:

- `razorpayPaymentLink`: paste the live Razorpay Payment Page URL when ready.
- `upiId`, `upiName`, `qrImage`: add only after the foundation confirms the public UPI details are safe to display.
- `bankName`, `accountName`, `accountNumber`, `ifsc`: add only after verification.
- `receiptNote`: update receipt timing and contact instructions.

Foreign / NRI donations are gated by default. Do not enable a foreign-donation path until FCRA registration and the required designated SBI New Delhi account are confirmed.

## Compliance Notes

- Registration number shown: `440-2019`.
- PAN from Income Tax certificate scans: `AAYTS9135N`.
- Form 10AC scans for 12A and 80G are displayed on Transparency.
- 12A registration number shown from Form 10AC: `AAYTS9135NE20219`.
- 80G registration number shown from Form 10AC: `AAYTS9135NF20217`.
- Certificate scans are also shown on the homepage trust showcase with modal previews.
- CSR registration number shown from MCA CSR approval letter: `CSR00059810`.
- NGO Darpan ID is not visible in the available certificate scans.
- Note: the CSR approval letter appears to show PAN `AAYTS9153N`, while the 12AA, 12A, and 80G Income Tax scans consistently show `AAYTS9135N`; the site uses the Income Tax PAN value.
- Privacy copy is DPDP-aware and describes consent, data minimization, hosted payment handling, and contact rights.

## Migration Audit

See `MIGRATION_AUDIT.md` for the old-site/social crawl table, legacy URL mapping, and founder-confirmation gaps.

## Deploy

Push to `main`. `.github/workflows/deploy-pages.yml` runs:

```bash
npm ci
npm run build
```

Then uploads `dist` to GitHub Pages.
