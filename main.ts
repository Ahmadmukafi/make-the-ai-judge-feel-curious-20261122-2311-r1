// Entry for make-the-ai-judge-feel-curious-20261122-2311.
// Writes one short text to /output/entry.txt: a quiet, concrete scene with
// a small impossible detail inside it, ending on an image that keeps working.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The tide went out this morning and left a piano on the sand. " +
  "Nobody in the village owns a piano, and one key is still warm.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
