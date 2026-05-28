import server from "../dist/server/server.js";

export const config = {
  runtime: "edge",
};

const app = server.default ?? server;

export default async function handler(request) {
  const requestUrl = typeof request.url === "string" ? request.url : "/";
  const host =
    request.headers.get("host") ||
    request.headers.get("x-forwarded-host") ||
    "example.com";
  const protocol = request.headers.get("x-forwarded-proto") || "https";

  const normalizedUrl = requestUrl.startsWith("http")
    ? requestUrl
    : new URL(requestUrl, `${protocol}://${host}`).toString();

  const hasBody = request.method !== "GET" && request.method !== "HEAD";

  const normalizedRequest = new Request(normalizedUrl, {
    method: request.method,
    headers: request.headers,
    body: hasBody ? request.body : undefined,
    ...(hasBody ? { duplex: "half" } : {}),
    redirect: "manual",
    signal: request.signal,
  });

  return await app.fetch(normalizedRequest);
}
