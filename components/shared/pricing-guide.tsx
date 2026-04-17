import type { PricingGuide } from "@/data/types";

type PricingGuideProps = {
  guide: PricingGuide;
  tone?: "fairytale" | "hero" | "playful";
};

const toneClasses = {
  fairytale:
    "bg-[linear-gradient(180deg,rgba(255,252,253,0.96),rgba(255,244,249,0.96))]",
  hero: "bg-[linear-gradient(180deg,rgba(248,251,255,0.98),rgba(233,241,255,0.96))]",
  playful:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,255,248,0.98))]",
} as const;

export function PricingGuide({
  guide,
  tone = "fairytale",
}: PricingGuideProps) {
  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
      <article
        className={`rounded-[2rem] border border-line p-6 shadow-magical ${toneClasses[tone]}`}
      >
        <span className="eyebrow border-0 px-0 py-0 shadow-none">
          {guide.title}
        </span>
        <p className="section-copy mt-4 max-w-3xl text-sm sm:text-base">
          {guide.description}
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-[1.5rem] border border-line bg-white/84 text-left">
            <thead>
              <tr className="bg-white/90 text-xs uppercase tracking-[0.16em] text-copy-soft">
                <th className="border-b border-line px-4 py-3 font-bold">Duration</th>
                <th className="border-b border-line px-4 py-3 font-bold">1 Character</th>
                <th className="border-b border-line px-4 py-3 font-bold">2 Characters</th>
                <th className="border-b border-line px-4 py-3 font-bold">3 Characters</th>
                <th className="border-b border-line px-4 py-3 font-bold">4 Characters</th>
                <th className="border-b border-line px-4 py-3 font-bold">5 Characters</th>
              </tr>
            </thead>
            <tbody>
              {guide.rows.map((row) => (
                <tr key={row.duration} className="align-top">
                  <th className="border-b border-line px-4 py-4 text-base font-semibold text-midnight">
                    {row.duration}
                  </th>
                  {row.rates.map((rate) => (
                    <td
                      key={`${row.duration}-${rate.label}`}
                      className="border-b border-line px-4 py-4 text-sm font-medium text-midnight"
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
        className={`rounded-[2rem] border border-line p-6 shadow-magical ${toneClasses[tone]}`}
      >
        <span className="eyebrow border-0 px-0 py-0 shadow-none">
          What&apos;s included
        </span>
        <ul className="mt-5 space-y-3">
          {guide.includedFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm font-medium text-copy-soft sm:text-base"
            >
              <span className="mt-1 text-sunrise" aria-hidden>
                {"\u2726"}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
