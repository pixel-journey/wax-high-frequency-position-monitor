# Education — how old a quote is

> **Rung:** `npm test` passes. Both timestamps are arguments. Nothing is polled and no position is read.  
> **The test is the rule.** A beacon that must be published strictly after a bet is a different time rule: [px-rng-fallback-drand-bls-verifier](https://github.com/pixel-journey/px-rng-fallback-drand-bls-verifier).

## Predict, then run

| Call | Locked result |
| --- | --- |
| `quoteAge(100, 130, 30)` | `{ ageSec: 30, fresh: true }` |
| `quoteAge(100, 131, 30)` | `{ ageSec: 31, fresh: false }` |
| `quoteAge(100, 90, 30)` | throws. `nowSec` is before `quotedAt`. |

`maxAgeSec` must be an integer from 1 to 86400. Fresh includes the exact boundary (`<=`). A monitor that refetches is not this function.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this age check.
