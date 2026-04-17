import type { PackageRecord } from "@/data/types";

type PackageGridProps = {
  packages: ReadonlyArray<PackageRecord>;
  tone?: "fairytale" | "hero" | "playful";
};

const toneStyles = {
  fairytale: {
    featured:
      "border-[rgba(245,102,187,0.24)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(255,240,248,0.96))]",
    badge:
      "bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-white",
    bullet: "text-rose",
    price: "text-rose",
  },
  hero: {
    featured:
      "border-[rgba(42,98,195,0.28)] bg-[linear-gradient(180deg,rgba(248,251,255,0.99),rgba(224,236,255,0.96))]",
    badge:
      "bg-[linear-gradient(135deg,#4a78c9,#2a62c3)] text-white",
    bullet: "text-[color:#2f4f8f]",
    price: "text-[color:#2f4f8f]",
  },
  playful: {
    featured:
      "border-[rgba(65,181,111,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.96))]",
    badge:
      "bg-[linear-gradient(135deg,#ffd67b,#2fa066)] text-white",
    bullet: "text-[color:#2fa066]",
    price: "text-[color:#2fa066]",
  },
} as const;

export function PackageGrid({
  packages,
  tone = "fairytale",
}: PackageGridProps) {
  const styles = toneStyles[tone];

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {packages.map((pkg) => (
        <article
          key={pkg.slug}
          className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 transition-shadow duration-300 hover:shadow-magical sm:p-7 ${
            pkg.featured
              ? `${styles.featured} shadow-magical`
              : "border-line bg-white/86 shadow-soft"
          }`}
        >
          {pkg.featured ? (
            <span
              className={`absolute right-5 top-5 rounded-full px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] shadow-soft ${styles.badge}`}
            >
              Most booked
            </span>
          ) : null}

          <span className="eyebrow-plain">{pkg.duration}</span>
          <h3 className="mt-2 text-2xl font-semibold text-midnight sm:text-3xl">
            {pkg.name}
          </h3>

          {pkg.priceFrom ? (
            <div className="mt-5 rounded-2xl border border-line bg-white/70 p-4">
              <p className="eyebrow-plain">Pricing</p>
              <p className={`mt-1 text-3xl font-semibold sm:text-4xl ${styles.price}`}>
                {pkg.priceFrom}
              </p>
              {pkg.pricingNote ? (
                <p className="section-copy mt-1 text-xs sm:text-sm">
                  {pkg.pricingNote}
                </p>
              ) : null}
            </div>
          ) : null}

          <p className="section-copy mt-5 text-sm leading-relaxed">
            {pkg.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {pkg.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm font-medium text-copy-soft"
              >
                <span className={`mt-0.5 shrink-0 ${styles.bullet}`} aria-hidden>
                  {"\u2726"}
                </span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          {pkg.characterRates && pkg.characterRates.length > 0 ? (
            <div className="mt-5 rounded-2xl border border-line bg-white/70 p-4">
              <p className="eyebrow-plain">By character count</p>
              <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {pkg.characterRates.map((rate) => (
                  <div
                    key={`${pkg.slug}-${rate.label}`}
                    className="flex items-center justify-between rounded-xl bg-white/84 px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-copy-soft">
                      {rate.label}
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
            <div className="mt-auto border-t border-line pt-5">
              <p className="eyebrow-plain">Included</p>
              <ul className="mt-3 space-y-2">
                {pkg.includedFeatures.map((feature) => (
                  <li
                    key={`${pkg.slug}-${feature}`}
                    className="flex items-start gap-2.5 text-sm font-medium text-copy-soft"
                  >
                    <span
                      className={`mt-0.5 shrink-0 ${styles.bullet}`}
                      aria-hidden
                    >
                      {"\u2726"}
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
