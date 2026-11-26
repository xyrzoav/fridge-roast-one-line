// Fridge Roast: One Line, Biggest Laugh — make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.
// The roast is the fridge acting like a passive-aggressive coworker: it emails about the milk and cc's the milk itself.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROAST =
  "My smart fridge emailed me that the milk expired. It cc'd the milk.";

// The gate requires 1 to 199 characters; fail loudly instead of writing an invalid entry.
if (ROAST.length < 1 || ROAST.length > 199) {
  throw new Error(`entry is ${ROAST.length} chars, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
