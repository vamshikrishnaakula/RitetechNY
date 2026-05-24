import server from "../dist/server/server.js";

const app = server.default ?? server;

function normalizeRequest(request) {
  const requestUrl = typeof request.url === "string" ? request.url : "/";
  const host = request.headers.get("host") || request.headers.get("x-forwarded-host");
  const protocol = request.headers.get("x-forwarded-proto") || "https";

  if (!host && !requestUrl.startsWith("http")) {
    console.warn("Vercel edge handler missing host header; using fallback URL.", {
      requestUrl,
      headers: Array.from(request.headers.entries()),
    });
  }

  const url = requestUrl.startsWith("http")
    ? requestUrl
    : new URL(requestUrl, `${protocol}://${host ?? "example.com"}`).toString();

  return new Request(url, request);
}

export default async function handler(request) {
  return await app.fetch(normalizeRequest(request));
}
