import type { PricingGuide } from "@/data/types";

type PricingGuideProps = {
  guide: PricingGuide;
  tone?: "fairytale" | "hero" | "playful";
};

const toneClasses = {
  fairytale:
    "bg-[linear-gradient(180deg,rgba(255,252,253,0.96),rgba(255,244,249,0.94))]",
  hero: "bg-[linear-gradient(180deg,rgba(248,251,255,0.98),rgba(233,241,255,0.94))]",
  playful:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.96))]",
} as const;

export function PricingGuide({
  guide,
  tone = "fairytale",
}: PricingGuideProps) {
  const toneClass = toneClasses[tone];

  return (
    <div className="mt-10 grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
      <article
        className={`rounded-[1.75rem] border border-line p-6 shadow-soft sm:p-7 ${toneClass}`}
      >
        <span className="eyebrow-plain">{guide.title}</span>
        <p className="section-copy mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
          {guide.description}
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-[1.25rem] border border-line bg-white/84 text-left">
            <thead>
              <tr className="bg-white/94 text-[0.68rem] uppercase tracking-[0.16em] text-copy-soft">
                <th className="border-b border-line px-4 py-3 font-bold">
                  Duration
                </th>
                <th className="border-b border-line px-4 py-3 font-bold">
                  1 Character
                </th>
                <th className="border-b border-line px-4 py-3 font-bold">
                  2 Characters
                </th>
                <th className="border-b border-line px-4 py-3 font-bold">
                  3 Characters
                </th>
                <th className="border-b border-line px-4 py-3 font-bold">
                  4 Characters
                </th>
                <th className="border-b border-line px-4 py-3 font-bold">
                  5 Characters
                </th>
              </tr>
            </thead>
            <tbody>
              {guide.rows.map((row, rowIndex) => (
                <tr
                  key={row.duration}
                  className={`align-top ${
                    rowIndex % 2 === 1 ? "bg-white/50" : ""
                  }`}
                >
                  <th className="border-b border-line px-4 py-3.5 text-base font-semibold text-midnight">
                    {row.duration}
                  </th>
                  {row.rates.map((rate) => (
                    <td
                      key={`${row.duration}-${rate.label}`}
                      className="border-b border-line px-4 py-3.5 text-sm font-medium text-midnight"
                    >
                      {rate.price}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {guide.footnote ? (
          <p className="section-copy mt-4 text-sm">{guide.footnote}</p>
        ) : null}
      </article>

      <article
        className={`rounded-[1.75rem] border border-line p-6 shadow-soft sm:p-7 ${toneClass}`}
      >
        <span className="eyebrow-plain">What&apos;s included</span>
        <ul className="mt-4 space-y-3">
          {guide.includedFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm font-medium text-copy-soft sm:text-base"
            >
              <span className="mt-1 shrink-0 text-sunrise" aria-hidden>
                {"\u2726"}
              </span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
