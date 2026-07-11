"use client";

import {
  estimateBooking,
  formatUsd,
  type BookingEstimate,
} from "@/lib/booking/pricing";
import type { PackageRecord, ResolvedCharacter } from "@/data/types";

type PriceSummaryProps = {
  pkg: PackageRecord | undefined;
  selectedCharacters: ReadonlyArray<ResolvedCharacter>;
};

export function PriceSummary({ pkg, selectedCharacters }: PriceSummaryProps) {
  const estimate = estimateBooking(pkg, selectedCharacters);

  return (
    <div className="rounded-[1.25rem] border border-[rgba(245,102,187,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,244,250,0.96))] p-4 shadow-soft sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow-plain">Estimated total</span>
        <span aria-hidden className="text-sunrise">
          {"✦"}
        </span>
      </div>

      {estimate ? (
        <ResolvedEstimate estimate={estimate} />
      ) : (
        <p className="section-copy mt-2 text-sm leading-relaxed">
          Pick a package and one or more characters to see a live estimate.
        </p>
      )}
    </div>
  );
}

function ResolvedEstimate({ estimate }: { estimate: BookingEstimate }) {
  return (
    <div className="mt-2">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-midnight sm:text-4xl">
          {estimate.hasQuoteOnly ? `${formatUsd(estimate.total)}+` : formatUsd(estimate.total)}
        </span>
        <span className="text-sm font-semibold text-copy-soft">
          {estimate.duration}
        </span>
      </div>

      <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
        {estimate.lines.map((line) => (
          <li
            key={`${line.label}-${line.detail ?? ""}`}
            className="flex items-baseline justify-between gap-3 text-sm"
          >
            <span className="min-w-0 text-midnight">
              <span className="font-semibold">{line.label}</span>
              {line.detail ? (
                <span className="text-copy-soft"> · {line.detail}</span>
              ) : null}
            </span>
            <span className="shrink-0 font-bold text-midnight">
              {line.amount === null ? "Quoted" : formatUsd(line.amount)}
            </span>
          </li>
        ))}
      </ul>

      <p className="section-copy mt-3 border-t border-line pt-3 text-xs leading-relaxed">
        {estimate.overTable
          ? "That's more characters than our standard rate card — we'll send a custom quote. "
          : ""}
        Estimate only. Up to 10 children included ($5 each after). Travel
        outside Winnipeg and any rentals are confirmed in your reply.
      </p>
    </div>
  );
}
