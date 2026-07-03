# Seetayya Foundation Migration Audit

Audit date: 2026-06-22

Primary sources checked:

- Old website: `https://seetayyafoundation.org/`
- Old sitemap index: `https://seetayyafoundation.org/sitemap_index.xml`
- Old page sitemap: `https://seetayyafoundation.org/page-sitemap.xml`
- Old donation form sitemap: `https://seetayyafoundation.org/give_forms-sitemap.xml`
- Facebook: `https://www.facebook.com/seetayyafoundationsompeta/`
- Instagram: `https://www.instagram.com/seetayyafoundation19/`
- Current draft: `https://praveenbommalibits.github.io/seetayya/`

## Summary

The redesigned Astro build preserves the public foundation story, contact details, programs, events, certificates already available in the repository, donation flow constraints, bilingual routes, and legacy redirects. Items that could not be verified from public crawlable sources are intentionally shown as founder-confirmation placeholders rather than invented.

## Gap Table

| Item | On old site / social? | On new draft before this pass? | Action |
| --- | --- | --- | --- |
| Home page `/` | Yes | Yes | Rebuilt as `/en` and `/te` with full-bleed image carousel and legacy root language redirect. |
| About page `/about-us/` | Yes | Partially | Founder origin story preserved on About and homepage mission section; bilingual content retained. |
| Full founders' mission text | Yes | Partially | Preserved in `src/content/pages/about.md` and rendered through the About page; wording lightly cleaned for clarity. |
| Vision / Mission `/vision-mission/` | Yes | Yes | Mapped into About and Programs content; legacy redirect points to `/en/about`. |
| Ongoing projects `/on-going-projects/` | Yes | Yes | Migrated into Programs; legacy redirect points to `/en/programs`. |
| Children rehabilitation center `/children-rehablitation-center/` | Yes | Yes | Migrated into Programs as the rehabilitation project; legacy redirect points to `/en/programs#rehabilitation`. |
| Become a volunteer `/become-a-volunteer/` | Yes | Covered by Contact | Legacy redirect points to `/en/contact`; volunteer intent is handled through contact form and CTA copy. |
| Videos `/videos/` | Yes | Covered by Media | Legacy redirect points to `/en/media`; public video embeds can be added when final video URLs are selected. |
| Gallery `/gallery/` | Yes | Yes | Migrated into Media / Gallery using authentic local images and albums. |
| Articles `/articles-2/` and `/hello-world/` | Yes | Yes | Founder story and Independence Day content are migrated; `/articles-2/` routes to the Independence Day event and default `hello-world` routes to `/en`. |
| Donate `/donate/` | Yes | Yes | Rebuilt as static-friendly donation page with hosted Razorpay/GiveWP fallback. |
| GiveWP donation forms `/donations/`, `/donations/help-seetayya-foundation/`, `/donations/donation/` | Yes | Redirect missing | Added legacy redirects to `/en/donate`; old Razorpay/GiveWP fallback remains documented. |
| Donation confirmation / failed / dashboard pages | Yes | Redirects | Redirects point to `/en/donate`; static site does not recreate private donor dashboard. |
| Contact `/contact-us/` | Yes | Yes | Address, phones, email, map, contact form, and social links retained. |
| Legal pages: terms, privacy, refund | Yes | Yes | Migrated as bilingual legal routes with DPDP-aware privacy and receipt/refund language. |
| Our Certificates `/our-certificates/` | Yes | Missing redirect | Added redirect to `/en/transparency`; certificates now shown on homepage and Transparency. |
| Foundation registration certificate | Yes / local file | Yes | Displayed as CertificateCard and Transparency document. |
| Registration number `440-2019` | Yes | Yes | Displayed in stats, footer, TrustBadge, Transparency, and structured data. |
| 12AA certificate | Yes / local file | Yes | Displayed in Transparency; included in certificate order. |
| Form 10AC - Section 12A | Yes / local file | Yes | Displayed on homepage trust showcase and Transparency with registration number `AAYTS9135NE20219`. |
| Form 10AC - Section 80G | Yes / local file | Yes | Displayed on homepage trust showcase, Donate, and Transparency with registration number `AAYTS9135NF20217`; approval date shown as `08-02-2022` and validity as AY 2022-23 to AY 2026-27. |
| CSR certificate | Yes / local file | Yes | Displayed with scan modal and CSR partner block; CSR registration number filled as `CSR00059810`. |
| NGO Darpan ID | Supplied Darpan document | Yes | Displayed as `AP/2024/0425381` with Darpan registration date `26-07-2024`; certificate PDF and preview are shown on Transparency. |
| PAN for receipts | Yes / certificate scans | Yes | Income Tax scans show `AAYTS9135N`; site uses that value. CSR letter appears to show `AAYTS9153N`, so this mismatch is noted for records. |
| Audited financials / annual report PDFs | Not located in public crawl | Placeholder | Kept placeholder slot on Transparency for future uploads. |
| FCRA status | Not located in public crawl | Gated | Donate flow continues to block foreign/NRI donations until FCRA registration and required account are confirmed. |
| Public UPI ID / bank details | Not located in public crawl | Placeholder config | Donation settings keep UPI/bank fields empty until founder verifies safe public values. |
| Old Razorpay/GiveWP setup | Yes | Replaced | New build uses admin-configured hosted Razorpay link and a hidden-by-default QR/UPI manual payment panel; old `/give/donation/` routes back to `/en/donate`. |
| Authentic activity photos | Yes / local files | Yes | Local images are used in carousel, events, programs, gallery, and story cards. Old WordPress public upload images were also copied into a legacy media archive album. More founder photos can be uploaded through CMS. |
| Homepage image slider | No on current draft | Missing | Added editable `heroSlides` content collection and accessible HeroCarousel component. |
| Bento programs section | No on current draft | Missing | Added mixed-size program grid on homepage. |
| Certificates trust showcase | Certificates existed but not homepage showcase | Missing | Added homepage certificate cards with lightbox modals and trust badges. |
| CSR corporate-giving block | CSR scan existed | Missing | Added `CsrPartnerBlock` on homepage and Transparency. |
| Testimonials: Aarya Gulla, Tule Chakravarthi, Tule Charmila | Yes / current content | Yes | Rendered with `TestimonialCard`; photo slots are ready for founder uploads. |
| Facebook social link | Public page found | Yes | Kept `facebook.com/seetayyafoundationsompeta` in contact, header, footer, and schema `sameAs`. |
| Instagram social link `@seetayyafoundation19` | Public profile found | Incorrect link in data | Updated to `instagram.com/seetayyafoundation19` in header, footer, contact, and schema `sameAs`. |
| Facebook latest posts | Public metadata visible; post detail limited by platform rendering | No | Not embedded to avoid brittle third-party scripts; founder can add activity photos as Media entries. |
| Instagram latest posts | Public profile metadata visible; post detail limited by platform login/JS rendering | No | Not embedded to avoid brittle third-party scripts; profile link and CMS photo workflow are provided. |

## Public Crawl Limits

Facebook and Instagram public profile metadata was visible, but individual post detail was not reliably crawlable from static HTML without platform-side JavaScript/login behavior. No social post was treated as missing silently; the recommended migration path is to upload founder-approved activity photos and captions into `src/content/events`, `src/content/albums`, or `src/content/heroSlides`.

## Items Still Not Found In Available Scans

- Audited financials / annual report PDFs.
- Public UPI ID, bank details, and QR image.
- Any Facebook/Instagram photos or videos that should be embedded or migrated as formal gallery content.

## Certificate Values Extracted From Scans And Supplied Documents

- Foundation registration: `440-2019`, date `01-10-2019`.
- NGO Darpan ID: `AP/2024/0425381`, Darpan registration date `26-07-2024`.
- PAN used on site: `AAYTS9135N`, visible on 12AA, 12A, and 80G Income Tax scans.
- 12AA registration reference: `CIT(EXEMPTION) HYD/2020-21/12AA/10518`, date `31-03-2021`.
- 12A Form 10AC unique registration number: `AAYTS9135NE20219`, date `24-09-2021`.
- 80G Form 10AC unique registration number: `AAYTS9135NF20217`, approval date `08-02-2022`, valid from AY 2022-23 to AY 2026-27.
- CSR registration number: `CSR00059810`, approval letter dated `21-09-2023`.
- Scan mismatch to verify with records: the CSR approval letter appears to show PAN `AAYTS9153N`, while the Income Tax scans consistently show `AAYTS9135N`.
