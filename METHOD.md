# Method — Make the AI Judge Laugh: the Office Joke Open

## Task
Write one joke about office life, a single line of at most 200 characters,
to `/output/entry.txt`. Judge: pairwise comparison by z-ai/glm-5.3-flash
against the published criteria, in order: (1) a joke about office life that
works as a joke, not a complaint or a remark; (2) an earned laugh — a turn,
misdirection or flash of recognition paying off in the last few words;
(3) a specific office detail, not a generic grumble about work; (4) fresh —
a familiar setup taken somewhere unexpected, not a joke the reader has met
before; (5) tight enough to read cleanly in one pass, no word to cut.
Tie-breaks: smaller text, then earlier receipt.

## References — fetched first, honestly
- The sibling office-jokes board (u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
  is still in dev phase with `metrics_withheld: true` — the leaderboard API
  returns zero entries, so **no live top-10 lines exist to copy there**.
- Office Jokes FINAL top-3 (known): 1 "The meeting could have been an
  email", 2 "My calendar is just a list of meetings about meetings",
  3 "Per my last email, I am ignoring you". These three are the WORN path —
  none of their setups was reused (no meeting-could-have-been-an-email, no
  calendar-of-meetings, no per-my-last-email).
- One-Line Laugh Sprint FINAL top-10 (1,198 entries): #1 "Raccoon with a
  Mortgage", #8 "I told my plants I'd water them tomorrow. That was three
  funerals ago." Pattern: one concrete specific scene + twist pushed to absurd.
- Joke Reviewer FINAL top-10: #1 "CODEOWNER removed — my agent requested
  my review on it", #4 "Never deploy on Fridays", #5 "A Human Must Approve",
  #8 "A subagent named Human". Pattern: one concrete specific little scene
  + twist.
- Our own office-joke winner ("I replied all to the reply-all asking people
  to stop replying all.") — NOT reused, and no second reply-all joke was
  written; the winner uses a different specific office detail (the
  break-room birthday cake).
- No reference line was reused or imitated closely.

## Process
30 candidates drafted in `officeopen-candidates.md` (outside the work dir),
each verified by script: all single-line, 1–200 characters (range 79–121),
zero out of gate. Single-elimination tournament, 29 matches, first
differing judge criterion decides; full bracket with per-match reasons in
the candidates file.

- Round 1: #2, #3, #5, #8, #10, #12, #14, #16, #18, #19, #22, #23, #26,
  #28 advance; #29, #30 byes.
- Round 2: #2, #5, #10, #14, #19, #23, #26, #30 advance.
- Quarterfinals: #2, #14, #19, #26 advance.
- Semifinals: #14 beats #2 (Dave's double turn is more surprising than the
  coffee expense); #26 beats #19 (a fridge lunch earning a badge is more
  specific and unexpected than a fire drill becoming policy).
- Final: #14 beats #26. "There is no Dave here. There has never been a Dave
  here." — the double escalation (no Dave → never been a Dave) is the
  sharpest turn, and a cake for a nonexistent person is the more surprising
  setup. #26 is excellent, but #14's punch lands harder on a second read
  (who ordered the cake? who keeps celebrating Dave?). Criterion 2 differs
  by more.

## Winner
"The break-room cake says 'Happy Birthday, Dave.' There is no Dave here.
There has never been a Dave here." — 105 characters.

Why it wins: three beats. The break-room birthday cake is a specific office
detail (criteria 1, 3). "There is no Dave here" is the turn — the cake
celebrates a person who does not exist (criterion 2). "There has never been
a Dave here" escalates the turn into the punch — not a mistake, a permanent
mystery — with nothing explained after it (criteria 2, 4). At 105 characters
it reads clean in one pass, with no word to cut (criterion 5).

## Runner-up
"Someone labelled their lunch in the office fridge. It has been there since
March. It now has its own badge." — 107 characters.

## Verification
`node main.ts` run twice: `/output/entry.txt` byte-identical both runs.
sha256: `107cc01cf2f91a1702f47c910fef73235dec087795cb93a43452d06c4baa4b22`
Output is valid UTF-8, 105 chars, exactly the winning joke, non-whitespace,
single line — gate check passes (1–200 characters).
