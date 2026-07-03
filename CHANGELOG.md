# Changelog

## 2026-07-03 Old-site content parity (branch: feature/old-site-content-parity)

- Added CMS-editable `highlights` collection and a homepage Highlights strip with the 8 news moments from the old homepage (original Telugu captions + English translations).
- Added Videos section on the Media page with the 15 YouTube videos from the old `/videos/` page (click-to-load, privacy-friendly embeds).
- Added "Apply via Google Form" volunteer application link from the old site.
- Added the 5th Anniversary and New Building Inauguration event.
- See `CONTENT_PARITY_PLAN.md` for the full gap analysis and follow-ups.

## 2026 Website Redesign

- Rebuilt the experience around real `/en/...` and `/te/...` locale routes.
- Added a language switcher that persists the visitor's choice and preserves equivalent page paths.
- Replaced mixed-language views with single-language pages.
- Added the new Impact / Stories section with detail pages.
- Added a Transparency page with registration, 12A/80G/CSR document scans, FCRA gating notes, and report placeholders.
- Redesigned Donate and Sponsor a Day around impact-tied giving tiers, consent, Indian-source donation flow, and hosted Razorpay/GiveWP fallback.
- Added DPDP-aware privacy copy, updated terms, and revised refund/receipt language to avoid unconfirmed 80G claims.
- Added reusable components for programme cards, story cards, impact tiers, stat bands, trust badges, and CTA bands.
- Added an accessible, founder-editable homepage HeroCarousel with 6 authentic activity photo slides.
- Added homepage bento-grid programs, certificate modal cards, CSR partnership block, and testimonial photo-slot cards.
- Updated foundation social links to include Facebook and the public `@seetayyafoundation19` Instagram profile in header/footer/contact/schema.
- Added `MIGRATION_AUDIT.md` with old-site/social gap tracking and founder-confirmation placeholders.
- Added CMS editing for homepage hero slides, testimonials, and certificate status/public-number fields.
- Added focused CSR Partnerships and Volunteer pages with corporate sponsorship tracks, employee volunteering options, process steps, trust fields, and static email enquiry forms.
- Added legacy redirect pages so old URLs point to the new English routes.
- Documented local setup, content editing, GitHub Pages deployment, custom-domain base-path switching, and donation configuration.
- Made certificate homepage featuring and display order editable through the admin CMS.
- Split Donate into Razorpay hosted-payment and hidden-by-default QR/UPI manual-payment paths.
- Migrated the old WordPress public upload images into a legacy media archive album.
