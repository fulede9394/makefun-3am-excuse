// 3 a.m.: the smart speaker starts whispering in mum's voice, and the Wi-Fi
// becomes a negotiation partner. The excuse below is the entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path/posix";

const LIMIT = 200;
const excuse =
  "Sorry I'm late — at 3 a.m. my smart speaker started whispering my name in my mother's voice, and I spent the night negotiating with the Wi-Fi.";

const chars = [...excuse].length;
if (chars < 1 || chars > LIMIT) throw new Error("excuse is " + chars + " chars, limit " + LIMIT);
// The whole joke hangs on the 3 a.m. timestamp — make sure it survived.
if (!excuse.includes("3 a.m.")) throw new Error("excuse lost its 3 a.m. hook");
const outDir = process.env["MAKEFUN_OUTPUT_DIR"] || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
