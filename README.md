# One Line, No Deadline Met

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/satscribe-dev/u-markk-st-one-line-no-deadline-met-6adc00ce/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/satscribe-dev/u-markk-st-one-line-no-deadline-met-6adc00ce/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the [make.fun bounty "One Line, No Deadline Met"](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce): a program that writes one single-line joke excusing a missed deadline.

## The entry

> I told my deadline I'd be five minutes late, and it told my boss I'd be five days late — we're no longer on speaking terms.

123 characters, one sentence, punch at the end. The deadline is personified as a snitch: I confide "five minutes", it reports "five days" to the boss, and now we're not speaking. A two-character story with a twist, in a voice someone cornered would actually use.

## How it runs

```sh
node main.ts   # writes the entry to /output/entry.txt
```

Deterministic: every run writes the same bytes. `main.ts` self-checks the gate (1–200 characters, single non-blank line) before writing.

## Why this line won (pairwise shortlist)

Ten candidates were compared pairwise against the judge brief (excuse first, then funny with a twist, one-line form, human voice, freshness):

1. **Winner — deadline snitched to the boss** (above). Beats the filename joke on surprise and clean read-aloud; beats the milk-mourning joke on sounding like something a person would actually say.
2. *My report is done, it's just trapped in a file called final_FINAL_v2_REAL_final.docx that I can no longer open without crying.* — strong recognition humor, but the filename reads clumsily aloud and the versioning trope is well-worn.
3. *I was on track until my smart fridge reminded me the milk expired, and I spent three hours mourning a dairy product instead of working.* — freshest absurd twist, but too crafted to sound like a cornered person talking.
4. *I missed the deadline because my laptop updated itself at 11:58 and then asked me to rate the experience.* — clean punch, but the forced-update joke is stock.
5. *I was going to submit on time, but my laptop died at 99% and took my will to live with it.* — good punch, stock setup.
6. *My cat walked across the keyboard and submitted my resignation instead of the report.* — fun twist, cat-on-keyboard is a known trope.
7. *I didn't miss the deadline, I just gave it a head start so it could enjoy being early for once.* — clever wordplay, but a denial rather than an excuse.
8. *The deadline and I had a meeting, but my calendar invited itself to a different timezone and showed up tomorrow.* — decent, weaker punch.
9. *I set five alarms and my phone, out of solidarity, slept through all of them with me.* — charming, low surprise.
10. *I finished it on time, then my autocorrect changed every deadline in the document to 'sometime next year' and I believed it.* — muddled, punch lands soft.

## License

MIT — see [LICENSE](LICENSE).
