# AI handoff — high-frequency position monitor (quote age)

## Non-negotiables

1. **Fresh** at 30 seconds, **stale** at 31. Exact boundary is inclusive for fresh.
2. **Nothing is polled.** Pure age rule only.
3. Not an arbitrage decision. Not a live Alcor monitor.
4. Different from drand post-bet gate (`publishedTs` must be **strictly after** `betTs`).
5. Usecases stay unsent.

## Prompt seeds

- "Age 30 — fresh or stale?"
- "Age 31 — fresh or stale?"
- "Refuse claiming a live pool was polled."

## Do not

- Poll Alcor or Hyperion from unit tests.
- Treat fresh as authorization to trade.
- Confuse inclusive age with strict post-bet time gates.
