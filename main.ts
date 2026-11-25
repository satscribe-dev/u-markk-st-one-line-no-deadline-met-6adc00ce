// One Line, No Deadline Met — entry program (v1).
// Writes a single one-line joke excusing a missed deadline to /output/entry.txt.
// Deterministic: the same fixed string on every run, no input, no network, no env.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen entry (winner of the pairwise shortlist in the README notes):
// a personified deadline that snitched to the boss — a two-character story,
// a twist (five minutes became five days), punch at the end.
const ENTRY =
  "I told my deadline I'd be five minutes late, and it told my boss I'd be five days late — we're no longer on speaking terms.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1–200 characters, single line, not blank.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate is 1-200`);
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
