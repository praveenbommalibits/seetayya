import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const base = process.env.ASTRO_BASE ?? "/";
const site = process.env.ASTRO_SITE ?? "https://praveenbommalibits.github.io";

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  redirects: {
    "/about-us": "/about",
    "/vision-mission": "/vision-mission",
    "/children-rehablitation-center": "/rehabilitation-center",
    "/gallery": "/media",
    "/articles-2": "/articles",
    "/on-going-projects": "/programs",
    "/become-a-volunteer": "/volunteer",
    "/contact-us": "/contact",
    "/terms-condition": "/terms-condition",
    "/privacy-policy-2": "/privacy-policy",
    "/refund-cancellation": "/refund-cancellation",
    "/donor-dashboard": "/donate",
    "/donation-confirmation": "/donate",
    "/donation-failed": "/donate"
  }
});
