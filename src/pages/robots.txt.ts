import { withBase } from "../lib/url";

export function GET({ site }: { site?: URL }) {
  const siteUrl = site ?? new URL("https://praveenbommalibits.github.io");
  const sitemapUrl = new URL(withBase("/sitemap-index.xml"), siteUrl).href;

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}
