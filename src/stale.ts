/**
 * How old a quote is. The timestamps are arguments. Nothing is polled.
 */

export function quoteAge(quotedAt: number, nowSec: number, maxAgeSec: number): { ageSec: number; fresh: boolean } {
  if (!Number.isInteger(quotedAt) || quotedAt < 0) throw new Error("quotedAt must be a non-negative integer");
  if (!Number.isInteger(nowSec) || nowSec < 0) throw new Error("nowSec must be a non-negative integer");
  if (!Number.isInteger(maxAgeSec) || maxAgeSec < 1 || maxAgeSec > 86_400) throw new Error("maxAgeSec must be an integer from 1 to 86400");
  if (nowSec < quotedAt) throw new Error("nowSec is before quotedAt");
  const ageSec = nowSec - quotedAt;
  return { ageSec, fresh: ageSec <= maxAgeSec };
}
