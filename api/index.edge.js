import server from "../dist/server/server.js";

const app = server.default ?? server;

function normalizeRequest(request) {
  const requestUrl = typeof request.url === "string" ? request.url : "/";
  const host = request.headers.get("host") || request.headers.get("x-forwarded-host");
  const protocol = request.headers.get("x-forwarded-proto") || "https";

  const normalizedUrl = requestUrl.startsWith("http")
    ? requestUrl
    : new URL(requestUrl, `${protocol}://${host ?? "example.com"}`).toString();

  if (!host && !requestUrl.startsWith("http")) {
    console.warn("Vercel edge handler missing host header; using fallback URL.", {
      requestUrl,
      normalizedUrl,
      headers: Object.fromEntries(request.headers.entries()),
    });
  }

  return new Request(normalizedUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: request.redirect,
    signal: request.signal,
  });
}

export default async function handler(request) {
  console.log("Vercel edge request", {
    method: request.method,
    url: request.url,
    host: request.headers.get("host"),
    forwardedHost: request.headers.get("x-forwarded-host"),
    protocol: request.headers.get("x-forwarded-proto"),
  });
  return await app.fetch(normalizeRequest(request));
}
