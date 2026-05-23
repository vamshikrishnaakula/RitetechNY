import server from "../src/server.ts";

const app = server.default ?? server;

export default async function handler(request) {
  return app.fetch(request, undefined, undefined);
}
