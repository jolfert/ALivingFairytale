import type { InfoCard } from "@/data/types";

type FeatureCardGridProps = {
  items: ReadonlyArray<InfoCard>;
  tone?: "fairytale" | "hero" | "playful";
};

const iconToneClasses = {
  fairytale:
    "bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(245,102,187,0.95))]",
  hero: "bg-[linear-gradient(135deg,rgba(74,120,201,0.95),rgba(42,98,195,0.95))]",
  playful:
    "bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(65,181,111,0.9))]",
} as const;

export function FeatureCardGrid({
  items,
  tone = "fairytale",
}: FeatureCardGridProps) {
  const iconClass = iconToneClasses[tone];

  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="soft-panel flex h-full flex-col rounded-[1.5rem] p-6 transition-shadow duration-300 hover:shadow-magical sm:p-7"
        >
          {item.icon ? (
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl text-white shadow-soft ${iconClass}`}
            >
              <span aria-hidden>{item.icon}</span>
            </div>
          ) : null}
          {item.eyebrow ? (
            <p className="mt-5 eyebrow-plain">{item.eyebrow}</p>
          ) : null}
          <h3 className="mt-2.5 text-xl font-semibold leading-snug text-midnight sm:text-2xl">
            {item.title}
          </h3>
          <p className="section-copy mt-2.5 text-sm leading-relaxed">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
