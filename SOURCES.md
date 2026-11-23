# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Network context |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | Live quotes are a **different** product |
| [slippage fixture](https://github.com/pixel-journey/wax-automated-slippage-tolerance-optimizer) | Book walk, not age |
| [drand time gate](https://github.com/pixel-journey/px-rng-fallback-drand-bls-verifier) | **Strictly after** betTs — different rule |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later acts on freshness |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- **Fresh** at 30 seconds, **stale** at 31 (exact boundary inclusive for fresh).
- **Nothing is polled.**
- Not an arbitrage decision. Not a live Alcor monitor.

## Portability

Age comparison ports. Threshold seconds and data sources are product-local.

## Suggested topics

`antelope` `education` `pixel-journey` `defi` `wax`
