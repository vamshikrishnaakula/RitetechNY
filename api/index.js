import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverPath = join(__dirname, "../src/server.ts");
const serverModule = await import(serverPath);
const server = serverModule.default ?? serverModule;

export default async function handler(request) {
  return server.fetch(request, undefined, undefined);
}
