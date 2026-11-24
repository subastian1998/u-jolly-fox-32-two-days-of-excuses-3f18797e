import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "I met the deadline \u2014 in a parallel timeline. This timeline is still compiling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
