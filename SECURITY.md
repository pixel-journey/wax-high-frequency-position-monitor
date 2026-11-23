# Security

## Scope

Pure quote-age comparison. Nothing is polled.

## Non-claims

- Fresh ≠ permission to trade.
- Stale ≠ a ban or liquidation signal by itself.
- No private keys in demos or prompts.

## Host checklist

1. If acting on freshness, re-fetch the live quote outside this package (prefer Alcor **v3** for market data).
2. Prefer WharfKit SessionKit; require explicit confirm.
