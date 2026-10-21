"use client";

import { quoteAge } from "./stale";

export function Demo() {
  const fresh = quoteAge(100, 130, 30);
  const old = quoteAge(100, 131, 30);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Thirty seconds, then it is old</h1>
      <p className="lede">A quote from second 100 is fresh at 130 and stale at 131. Nothing is polled.</p>
      <p>
        Age {fresh.ageSec}, fresh {String(fresh.fresh)}. Age {old.ageSec}, fresh {String(old.fresh)}.
      </p>
    </main>
  );
}
