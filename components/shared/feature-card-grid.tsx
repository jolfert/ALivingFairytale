import type { InfoCard } from "@/data/types";

type FeatureCardGridProps = {
  items: ReadonlyArray<InfoCard>;
  tone?: "fairytale" | "hero" | "playful";
};

const iconToneClasses = {
  fairytale:
    "bg-[linear-gradient(135deg,rgba(255,214,123,0.92),rgba(245,102,187,0.96))]",
  hero: "bg-[linear-gradient(135deg,rgba(42,98,195,0.96),rgba(56,130,200,0.9))]",
  playful:
    "bg-[linear-gradient(135deg,rgba(255,214,123,0.96),rgba(65,181,111,0.88))]",
} as const;

export function FeatureCardGrid({
  items,
  tone = "fairytale",
}: FeatureCardGridProps) {
  const iconClass = iconToneClasses[tone];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="soft-panel rounded-[1.85rem] p-6">
          {item.icon ? (
            <div
              className={`grid h-14 w-14 place-items-center rounded-[1.2rem] text-2xl text-white ${iconClass}`}
            >
              <span aria-hidden>{item.icon}</span>
            </div>
          ) : null}
          {item.eyebrow ? (
            <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-copy-soft">
              {item.eyebrow}
            </p>
          ) : null}
          <h3 className="mt-3 text-2xl font-semibold text-midnight">
            {item.title}
          </h3>
          <p className="section-copy mt-3 text-sm">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
