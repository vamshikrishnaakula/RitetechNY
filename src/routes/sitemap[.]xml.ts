import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://ritetechconstruction.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.8" },
          { path: "/projects", priority: "0.8" },
          { path: "/contact", priority: "0.7" },
        ];
        const today = new Date().toISOString().split("T")[0];
        const urls = entries
          .map(
            (e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
