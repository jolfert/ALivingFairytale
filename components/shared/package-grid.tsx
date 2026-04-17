import type { PackageRecord } from "@/data/types";

type PackageGridProps = {
  packages: ReadonlyArray<PackageRecord>;
  tone?: "fairytale" | "hero" | "playful";
};

const featuredToneClasses = {
  fairytale: {
    card: "border-[rgba(245,102,187,0.18)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(255,240,248,0.98))]",
    badge:
      "bg-[linear-gradient(135deg,#ffd67b,#fff0b6)] text-[color:#7e5500]",
    bullet: "text-sunrise",
  },
  hero: {
    card: "border-[rgba(42,98,195,0.26)] bg-[linear-gradient(180deg,rgba(248,251,255,0.99),rgba(224,236,255,0.96))]",
    badge:
      "bg-[linear-gradient(135deg,#ffd67b,#cfe0ff)] text-[color:#1a2744]",
    bullet: "text-[color:#2f4f8f]",
  },
  playful: {
    card: "border-[rgba(65,181,111,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.98))]",
    badge:
      "bg-[linear-gradient(135deg,#ffd67b,#e6faef)] text-[color:#1e4d32]",
    bullet: "text-[color:#2fa066]",
  },
} as const;

export function PackageGrid({
  packages,
  tone = "fairytale",
}: PackageGridProps) {
  const featured = featuredToneClasses[tone];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <article
          key={pkg.slug}
          className={`relative rounded-[2rem] border p-6 shadow-magical ${
            pkg.featured
              ? featured.card
              : "border-line bg-white/86"
          }`}
        >
          {pkg.featured ? (
            <span
              className={`absolute right-5 top-5 rounded-full px-3 py-2 text-xs font-black uppercase tracking-[0.18em] ${featured.badge}`}
            >
              Most booked
            </span>
          ) : null}

          <span className="eyebrow border-0 px-0 py-0 shadow-none">
            {pkg.duration}
          </span>
          <h3 className="mt-3 text-3xl font-semibold text-midnight">{pkg.name}</h3>
          {pkg.priceFrom ? (
            <div className="mt-4 rounded-[1.4rem] border border-line bg-white/72 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copy-soft">
                Pricing
              </p>
              <p className="mt-2 text-4xl font-semibold text-midnight">
                {pkg.priceFrom}
              </p>
              {pkg.pricingNote ? (
                <p className="section-copy mt-1 text-sm">{pkg.pricingNote}</p>
              ) : null}
            </div>
          ) : null}
          <p className="section-copy mt-4 text-sm">{pkg.description}</p>

          <ul className="mt-6 space-y-3">
            {pkg.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm font-medium text-copy-soft"
              >
                <span className={`mt-1 ${featured.bullet}`} aria-hidden>
                  {"\u2726"}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {pkg.characterRates && pkg.characterRates.length > 0 ? (
            <div className="mt-6 rounded-[1.5rem] border border-line bg-white/72 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copy-soft">
                By character count
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {pkg.characterRates.map((rate) => (
                  <div
                    key={`${pkg.slug}-${rate.label}`}
                    className="flex items-center justify-between rounded-2xl bg-white/84 px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-copy-soft">{rate.label}</span>
                    <span className="font-semibold text-midnight">{rate.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {pkg.includedFeatures && pkg.includedFeatures.length > 0 ? (
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copy-soft">
                Included
              </p>
              <ul className="mt-3 space-y-2">
                {pkg.includedFeatures.map((feature) => (
                  <li
                    key={`${pkg.slug}-${feature}`}
                    className="flex items-start gap-3 text-sm font-medium text-copy-soft"
                  >
                    <span className={`mt-1 ${featured.bullet}`} aria-hidden>
                      {"\u2726"}
                    </span>
                    <span>{feature}</span>
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
