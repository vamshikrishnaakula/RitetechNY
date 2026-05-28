import server from "../dist/server/server.js";

const app = server.default ?? server;

export default async function handler(req, res) {
  const host = req.headers.host || req.headers["x-forwarded-host"] || "example.com";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const requestUrl = `${protocol}://${host}${req.url || "/"}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else {
      headers.set(key, String(value));
    }
  }

  const body = req.method !== "GET" && req.method !== "HEAD" ? req : undefined;
  const request = new Request(requestUrl, {
    method: req.method,
    headers,
    body,
    redirect: "manual",
  });

  const response = await app.fetch(request);

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  if (response.body) {
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } else {
    res.end();
  }
}
