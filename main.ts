// makefun-invent-word — Invent a Word We Need
// Coins one new English word and defines it in a single clear line.
// v2: "typeghost" replaces v1 "typelapse" — v1 was hard to parse
// (typo? time-lapse?) and its definition ("the sinking pause") was
// vague; v2 is a transparent compound (type + ghost, echoing
// "ghosting") with a concrete definition that lands in one reading.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "typeghost \u2014 the silence left when someone's typing dots vanish and no message ever arrives.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
