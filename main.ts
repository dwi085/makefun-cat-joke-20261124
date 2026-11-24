// The One-Line Cat Joke That Lands — make.fun entry
// Writes exactly one line — the funniest possible cat joke — to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: the same line every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat walked across my keyboard during my job interview and typed 'asdfghjkl' — my boss said it was the clearest answer anyone had given all day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Gate: one line, under 200 characters, never only whitespace.
// Fail loudly instead of writing an invalid entry.
if (JOKE.length >= 200 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error(`Invalid joke: ${JOKE.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
