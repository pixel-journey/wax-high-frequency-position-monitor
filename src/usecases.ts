import { HISTORY_ORIGIN, historyActions } from "./api";
import { quoteAge } from "./stale";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const fresh = quoteAge(100, 130, 30);

export const USE_CASES: UseCase[] = [
  {
    title: "The market list has no quote time in this function",
    detail: `A quote at 100 is fresh at 130 when the limit is 30. It is stale at 131. GET /api/markets is not polled.`,
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "No position action is built from an age",
    detail: "maxAgeSec is an argument. Nothing is opened or closed.",
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (!fresh.fresh || quoteAge(100, 131, 30).fresh) throw new Error("age");
}
