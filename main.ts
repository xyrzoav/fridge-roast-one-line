// Fridge Roast: One Line, Biggest Laugh — make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My smart fridge emailed me that the milk expired. It cc'd the milk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
