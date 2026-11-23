import { describe, expect, it } from "vitest";
import { quoteAge } from "./stale";

describe("quote age", () => {
  it("is fresh at the limit and stale one second later", () => {
    expect(quoteAge(100, 130, 30)).toEqual({ ageSec: 30, fresh: true });
    expect(quoteAge(100, 131, 30)).toEqual({ ageSec: 31, fresh: false });
    expect(() => quoteAge(100, 90, 30)).toThrow(/before/);
  });

  it("refuses maxAge outside 1..86400 and non-integers", () => {
    expect(() => quoteAge(100, 100, 0)).toThrow(/maxAgeSec/);
    expect(() => quoteAge(100, 100, 86_401)).toThrow(/maxAgeSec/);
    expect(() => quoteAge(100.5, 101, 30)).toThrow(/quotedAt/);
  });

  it("zero age is fresh for any valid maxAge", () => {
    expect(quoteAge(100, 100, 1)).toEqual({ ageSec: 0, fresh: true });
  });
});
