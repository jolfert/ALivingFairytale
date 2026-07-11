import type { PackageRecord, ResolvedCharacter } from "@/data/types";

/**
 * Live price estimator for the booking form.
 *
 * The business prices two ways, and this helper mirrors that exactly:
 *  - Entertainer characters (Princess / Hero) are priced by the selected
 *    package's published `characterRates` table — duration × how many
 *    characters attend (1–5). This is the authoritative rate card.
 *  - Mascots and rentals are flat pickup add-ons with their own prices
 *    (mascot suit $100, bounce house $50). Anything without a confirmed
 *    flat price is surfaced as "quoted in your reply" rather than guessed.
 *
 * Everything here is an estimate: extra children ($5 over 10) and travel
 * outside Winnipeg are confirmed in the human reply, never invented here.
 */

const ENTERTAINER_CATEGORIES = new Set(["Princess", "Hero"]);

// Confirmed flat add-on prices, keyed by character slug. A slug that is a
// Mascot/Rental but absent here is treated as quote-only (amount: null).
const ADD_ON_PRICES: Record<string, number> = {
  "pink-castle-bounce-house": 50,
  // Every mascot suit is $100 — resolved by category below rather than slug.
};

const MASCOT_FLAT_PRICE = 100;

export const MAX_TABLE_CHARACTERS = 5;

function parsePrice(value: string): number {
  const digits = value.replace(/[^0-9]/g, "");
  return digits ? Number.parseInt(digits, 10) : 0;
}

export type EstimateLine = {
  label: string;
  detail?: string;
  /** Dollar amount, or null when the item is quoted separately in the reply. */
  amount: number | null;
};

export type BookingEstimate = {
  packageName: string;
  duration: string;
  entertainerCount: number;
  addOnCount: number;
  lines: EstimateLine[];
  /** Sum of all known (non-null) line amounts. */
  total: number;
  /** True when at least one selected item is quoted separately. */
  hasQuoteOnly: boolean;
  /** True when more than 5 entertainers are selected (beyond the rate table). */
  overTable: boolean;
};

export function estimateBooking(
  pkg: PackageRecord | undefined,
  selected: ReadonlyArray<ResolvedCharacter>,
): BookingEstimate | null {
  if (!pkg || selected.length === 0) return null;

  const entertainers = selected.filter((c) =>
    ENTERTAINER_CATEGORIES.has(c.category),
  );
  const addOns = selected.filter(
    (c) => !ENTERTAINER_CATEGORIES.has(c.category),
  );

  const lines: EstimateLine[] = [];
  let total = 0;
  let hasQuoteOnly = false;
  let overTable = false;

  if (entertainers.length > 0) {
    const rates = pkg.characterRates ?? [];
    const count = entertainers.length;
    const label = `${count} character${count > 1 ? "s" : ""}`;
    const detail = `${pkg.name} · ${pkg.duration}`;

    if (count <= rates.length) {
      const amount = parsePrice(rates[count - 1].price);
      total += amount;
      lines.push({ label, detail, amount });
    } else {
      // More characters than the published table covers — custom quote.
      overTable = true;
      hasQuoteOnly = true;
      lines.push({ label, detail, amount: null });
    }
  }

  for (const addOn of addOns) {
    const flat =
      addOn.category === "Mascot"
        ? MASCOT_FLAT_PRICE
        : (ADD_ON_PRICES[addOn.slug] ?? null);

    if (flat === null) {
      hasQuoteOnly = true;
      lines.push({ label: addOn.name, detail: "Rental", amount: null });
    } else {
      total += flat;
      lines.push({
        label: addOn.name,
        detail: addOn.category === "Mascot" ? "Mascot suit" : "Rental",
        amount: flat,
      });
    }
  }

  return {
    packageName: pkg.name,
    duration: pkg.duration,
    entertainerCount: entertainers.length,
    addOnCount: addOns.length,
    lines,
    total,
    hasQuoteOnly,
    overTable,
  };
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
