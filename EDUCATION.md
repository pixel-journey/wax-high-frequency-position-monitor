# Education — how old a quote is

> **Rung:** `npm test` passes. Both timestamps are arguments. Nothing is polled and no position is read.  
> **The test is the rule.** A beacon that must be published strictly after a bet is a different time rule: [px-rng-fallback-drand-bls-verifier](https://github.com/pixel-journey/px-rng-fallback-drand-bls-verifier).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute age and the fresh flag at the exact boundary |
| Intermediate | Enforce `maxAgeSec` in 1..86400 and refuse inverted clocks |
| Masterclass | Separate this pure age check from a live position monitor |

---

## Beginner — one scene

| Call | Locked result |
| --- | --- |
| `quoteAge(100, 130, 30)` | `{ ageSec: 30, fresh: true }` |
| `quoteAge(100, 131, 30)` | `{ ageSec: 31, fresh: false }` |
| `quoteAge(100, 100, 1)` | `{ ageSec: 0, fresh: true }` |
| `quoteAge(100, 90, 30)` | throws — `nowSec` before `quotedAt` |

Fresh includes the exact boundary (`ageSec <= maxAgeSec`).

```bash
npm test
```

---

## Intermediate — bounds

| Rule | Detail |
| --- | --- |
| Timestamps | non-negative integers |
| `maxAgeSec` | integer from **1** to **86400** (one day) |
| Clock order | `nowSec >= quotedAt` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Future quote relative to now | throws |
| maxAge 0 or 86401 | throws |
| Fractional second | throws |
| Claim this polls Alcor | no — pure arguments |

### Exercises

1. Age 30 vs max 30 — fresh? (**Yes**.)  
2. Age 31 vs max 30 — fresh? (**No**.)  
3. Does this refetch a quote? (**No**.)

---

## Masterclass

A production monitor would poll, debounce, and map pool ids. This lab only answers: given two times and a max age, is the quote still “fresh” under that policy?

HTTP builders in `src/api.ts` stay unsent. The Atomic Packs example row is not this age check.

---

## What this course will not teach

- Live WebSocket or REST polling
- Position risk or PnL
- That “high-frequency” here means HFT market making
