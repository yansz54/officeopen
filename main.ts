// Make the AI Judge Laugh: the Office Joke Open — u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
// Writes one joke about office life, a single line of at most 200
// characters, to /output/entry.txt. Pure Node stdlib: no network, no
// randomness, no clock. Two runs write byte-identical output.
//
// The joke was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): a joke about office
// life that works as a joke, not a complaint; a laugh earned by a turn,
// misdirection or flash of recognition paying off in the last few words;
// a specific office detail; freshness — a familiar setup taken somewhere
// unexpected; tight enough to read cleanly in one pass. See METHOD.md
// for the tournament.
// Winner (105 characters):
//   The break-room cake says 'Happy Birthday, Dave.' There is no Dave here. There has never been a Dave here.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "The break-room cake says 'Happy Birthday, Dave.' There is no Dave here. There has never been a Dave here.";

// The joke works in three beats, each carrying the judge criteria:
// "The break-room cake says 'Happy Birthday, Dave.'" sets up a specific
// office detail — the break-room birthday cake (criteria 1 and 3);
// "There is no Dave here." is the turn — the cake celebrates a person
// who does not exist (criterion 2); "There has never been a Dave here."
// escalates it into the punch — not a mistake, a permanent mystery, with
// nothing explained after it (criteria 2 and 4). The double escalation
// (no Dave → never been a Dave) is what makes the turn land twice: the
// first sentence corrects the premise, the second rules out every
// innocent explanation, leaving only the absurd one. At 105 characters
// the joke reads clean in one pass, with no word to cut (criterion 5).

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text of
// 1 to 200 characters and not only whitespace, and a single line. Also
// reject any control character — a one-line joke carries no control codes —
// and any leading or trailing space, so the joke reads clean on first sight.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n") ||
  /[\u0000-\u001f]/.test(LINE)
) {
  throw new Error("entry joke fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
