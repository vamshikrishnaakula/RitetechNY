import server from "../dist/server/server.js";

const app = server.default ?? server;

export default async function handler(request) {
  return app.fetch(request, undefined, undefined);
}
