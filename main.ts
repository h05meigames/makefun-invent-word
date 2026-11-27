// makefun-invent-word — Invent a Word We Need
// Coins one new English word and defines it in a single clear line.
// v3: "sockorphan" replaces v2 "typeghost" — round 2 needs a genuinely
// new word, so this switches domains entirely (messaging -> laundry)
// instead of iterating on the same theme. A transparent compound
// (sock + orphan) with a concrete definition that lands in one reading.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "sockorphan \u2014 the lone sock left behind after laundry, its partner lost for good.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
