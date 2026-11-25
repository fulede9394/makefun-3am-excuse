// The excuse for being late, blamed on a 3 a.m. encounter with a smart speaker.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Sorry I'm late — at 3 a.m. my smart speaker started whispering my name in my mother's voice, and I spent the night negotiating with the Wi-Fi.";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR!, { recursive: true });
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR!, "entry.txt"), LINE, "utf8");
