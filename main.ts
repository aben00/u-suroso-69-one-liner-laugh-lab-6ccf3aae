// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// Entry: the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line (1-200 chars) to /output/entry.txt, deterministically.
// No randomness, no network, no clock: every run writes the same bytes.
// The gate counts characters, so the file holds the line with no trailing
// newline — the text is the entry, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my defense, it was lying on the floor, dressed as dust, and frankly asking for it.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
