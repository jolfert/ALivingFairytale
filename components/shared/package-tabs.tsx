"use client";

import { useState } from "react";
import Link from "next/link";
import type { PackageRecord } from "@/data/types";

type PackageTabsProps = {
  packages: ReadonlyArray<PackageRecord>;
  tone?: "fairytale" | "hero" | "playful";
  bookHref?: string;
  bookLabel?: string;
};

const toneStyles = {
  fairytale: {
    activeTab:
      "bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-white shadow-soft",
    bullet: "text-rose",
    price: "text-rose",
  },
  hero: {
    activeTab:
      "bg-[linear-gradient(135deg,#4a78c9,#2a62c3)] text-white shadow-soft",
    bullet: "text-[color:#2f4f8f]",
    price: "text-[color:#2f4f8f]",
  },
  playful: {
    activeTab:
      "bg-[linear-gradient(135deg,#ffd67b,#2fa066)] text-white shadow-soft",
    bullet: "text-[color:#2fa066]",
    price: "text-[color:#2fa066]",
  },
} as const;

export function PackageTabs({
  packages,
  tone = "fairytale",
  bookHref = "/book",
  bookLabel = "Book this package",
}: PackageTabsProps) {
  const styles = toneStyles[tone];
  const featuredIndex = Math.max(
    0,
    packages.findIndex((pkg) => pkg.featured),
  );
  const [active, setActive] = useState(featuredIndex);

  if (packages.length === 0) return null;
  const pkg = packages[active];

  return (
    <div className="soft-panel rounded-[1.75rem] p-4 sm:p-6">
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Package tiers"
        className="flex gap-1.5 rounded-full border border-line bg-white/70 p-1.5"
      >
        {packages.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`pkg-panel-${item.slug}`}
              id={`pkg-tab-${item.slug}`}
              onClick={() => setActive(index)}
              className={`flex-1 rounded-full px-3 py-2 text-sm font-bold transition ${
                isActive
                  ? styles.activeTab
                  : "text-copy-soft hover:text-midnight"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        key={pkg.slug}
        role="tabpanel"
        id={`pkg-panel-${pkg.slug}`}
        aria-labelledby={`pkg-tab-${pkg.slug}`}
        className="mt-5 sm:mt-6"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-xs font-black uppercase tracking-[0.16em] text-copy-soft">
            {pkg.duration}
          </span>
          {pkg.priceFrom ? (
            <span
              className={`text-3xl font-semibold sm:text-4xl ${styles.price}`}
            >
              {pkg.priceFrom}
            </span>
          ) : null}
          {pkg.pricingNote ? (
            <span className="text-xs text-copy-soft sm:text-sm">
              {pkg.pricingNote}
            </span>
          ) : null}
        </div>

        <p className="section-copy mt-3 text-sm leading-relaxed sm:text-base">
          {pkg.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {pkg.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2.5 text-sm font-medium text-copy-soft sm:text-base"
            >
              <span className={`mt-0.5 shrink-0 ${styles.bullet}`} aria-hidden>
                {"\u2726"}
              </span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {pkg.characterRates && pkg.characterRates.length > 0 ? (
          <div className="mt-5 rounded-xl border border-line bg-white/60 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-copy-soft">
              By character count
            </p>
            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {pkg.characterRates.map((rate) => (
                <div
                  key={`${pkg.slug}-${rate.label}`}
                  className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2 text-sm"
                >
                  <span className="font-medium text-copy-soft">
                    {rate.label.replace(" characters", "").replace(" character", "")}
                  </span>
                  <span className="font-semibold text-midnight">
                    {rate.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {pkg.includedFeatures && pkg.includedFeatures.length > 0 ? (
          <ul className="mt-5 space-y-1.5 border-t border-line pt-5 text-xs text-copy-soft sm:text-sm">
            {pkg.includedFeatures.map((feature) => (
              <li key={`${pkg.slug}-${feature}`}>{"\u2022"} {feature}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={bookHref} className="button-primary">
            {bookLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
