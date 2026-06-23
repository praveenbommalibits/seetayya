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
  ]
});
