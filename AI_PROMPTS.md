# AI handoff — quote age

## Non-negotiables

1. **Fresh** at age 30 with maxAge 30; **stale** at 31. Boundary inclusive for fresh.
2. `maxAgeSec` integer in **1..86400**.
3. `nowSec < quotedAt` throws.
4. **Nothing is polled.** Pure age rule only.
5. Not an arbitrage decision. Not a live Alcor monitor.
6. Different from drand post-bet gate (`publishedTs` must be **strictly after** `betTs`).

## Prompt seeds

- "Age 30 — fresh or stale?"
- "Refuse maxAge 0 and 86401."
- "Refuse claiming a live pool was polled."

## Do not

- Poll Alcor or Hyperion from unit tests.
- Treat fresh as authorization to trade.
- Confuse inclusive age with strict post-bet time gates.
