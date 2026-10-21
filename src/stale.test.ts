import { describe, expect, it } from "vitest";
import { quoteAge } from "./stale";

describe("quote age", () => {
  it("is fresh at the limit and stale one second later", () => {
    expect(quoteAge(100, 130, 30)).toEqual({ ageSec: 30, fresh: true });
    expect(quoteAge(100, 131, 30)).toEqual({ ageSec: 31, fresh: false });
    expect(() => quoteAge(100, 90, 30)).toThrow(/before/);
  });
});
