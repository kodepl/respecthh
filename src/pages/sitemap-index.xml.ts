export async function GET() {
  const origin = "https://www.respecthh.pl";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${origin}/sitemap.xml</loc></sitemap>
</sitemapindex>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
