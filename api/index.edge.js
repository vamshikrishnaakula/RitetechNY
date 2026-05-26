import server from "../dist/server/server.js";

const app = server.default ?? server;

export default async function handler(request) {
  const requestUrl = typeof request.url === "string" ? request.url : "/";
  const host =
    request.headers.get("host") ||
    request.headers.get("x-forwarded-host");
  const protocol =
    request.headers.get("x-forwarded-proto") || "https";

  // Build a fully-qualified URL (Edge runtime requires it)
  const normalizedUrl = requestUrl.startsWith("http")
    ? requestUrl
    : new URL(requestUrl, `${protocol}://${host ?? "localhost"}`).toString();

  console.log("[edge] incoming", {
    method: request.method,
    url: normalizedUrl,
    host,
    protocol,
  });

  // GET/HEAD must NOT have a body — passing one causes the fetch to hang
  const hasBody = request.method !== "GET" && request.method !== "HEAD";

  const normalizedRequest = new Request(normalizedUrl, {
    method: request.method,
    headers: request.headers,
    body: hasBody ? request.body : undefined,
    // duplex is required when streaming a body in the Edge runtime
    ...(hasBody ? { duplex: "half" } : {}),
    redirect: "manual",
    signal: request.signal,
  });

  try {
    const response = await app.fetch(normalizedRequest);
    return response;
  } catch (err) {
    console.error("[edge] unhandled error", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};