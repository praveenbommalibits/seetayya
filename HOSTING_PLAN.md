# Hosting Plan: Vercel + Old Bluehost Site in Parallel

Goal: new Astro site on Vercel, old WordPress site (Bluehost) stays live for some days, then clean cutover of `seetayyafoundation.org`.

## Phase 0 — Security (do this first)

- The Bluehost and Gmail passwords have been shared over WhatsApp/chat. **Change both passwords now** and enable 2-step verification on the Gmail account. That Gmail is the donation-receipt contact, so it is a high-value target.
- Never store hosting passwords in this repo.

## Phase 1 — Deploy the new site to Vercel (no DNS changes yet)

Old site is untouched; nothing public changes.

1. Merge `feature/old-site-content-parity` → `master` after your localhost testing.
2. In the Vercel project (`seetayya-foundation-static`, already linked in `.vercel/project.json`), set Production environment variables:
   - `ASTRO_BASE` = `/`
   - `ASTRO_SITE` = `https://seetayyafoundation.org`
3. Deploy (git push if the Vercel project is connected to the repo, otherwise `npx vercel --prod`).
4. Test everything at the `*.vercel.app` URL: `/en`, `/te`, events tabs + videos, media albums, donate, admin (`/admin` needs the Decap backend reachable — verify), legacy redirect paths like `/about-us/`.

## Phase 2 — Parallel run (both sites live, some days)

- Old site: stays exactly where it is — `seetayyafoundation.org` → Bluehost.
- New site: give it a public preview subdomain.
  1. Bluehost → Domains → DNS for `seetayyafoundation.org`: add **CNAME** record `new` → `cname.vercel-dns.com`. Touch nothing else (especially MX records).
  2. Vercel → project → Domains: add `new.seetayyafoundation.org`.
  3. Result: old site at `seetayyafoundation.org`, new site at `new.seetayyafoundation.org`. Share the new URL for review.
- SEO guard during this phase: keep search engines off the duplicate. Add to `vercel.json`:
  ```json
  "headers": [{ "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex" }] }]
  ```
  **Remove this at cutover.**

## Phase 3 — Cutover (when you're satisfied)

1. Remove the `X-Robots-Tag: noindex` header from `vercel.json`, redeploy.
2. Vercel → Domains: add `seetayyafoundation.org` and `www.seetayyafoundation.org`.
3. Bluehost DNS:
   - `@` (apex) **A record** → `76.76.21.21` (Vercel)
   - `www` **CNAME** → `cname.vercel-dns.com`
   - **Do not change MX/TXT records.**
4. DNS propagates in minutes–hours. Old site becomes unreachable on the domain but keeps running on Bluehost hosting (reachable via Bluehost's temporary URL if needed).
5. Rollback at any time = point the A record back to the old Bluehost IP (note it down before changing!).

## Phase 4 — Wind-down (after a safe period, e.g., 2–4 weeks)

1. Backups from Bluehost before cancelling anything:
   - WordPress: Tools → Export (content XML)
   - `wp-content/uploads` folder via file manager (includes the 3 self-hosted .mp4 videos — re-upload those to YouTube and add IDs to `videos` in `src/data/site.ts`)
   - Database dump via phpMyAdmin
2. Cancel only the **hosting** plan. **Keep the domain registration** (and auto-renewal!) — losing `seetayyafoundation.org` would be the worst outcome. Optionally transfer the domain to Vercel/Cloudflare later.
3. Update `README.md` deploy notes to Vercel-only.

## Notes

- GitHub Pages (`praveenbommalibits.github.io/seetayya`) can stay as a secondary preview or be retired after cutover — it uses `ASTRO_BASE=/seetayya`, so it never conflicts.
- Decap CMS `/admin` on the production domain: confirm the auth backend (GitHub/Netlify) has `https://seetayyafoundation.org` in its allowed origins before cutover.
- 80G/receipts communication continues via Gmail — unaffected as long as MX/DNS mail records are untouched.
