export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://seetayyafoundation.org/sitemap-index.xml
`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}
