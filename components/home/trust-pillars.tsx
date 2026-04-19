type TrustPillar = {
  title: string;
  description: string;
  icon: string;
};

type TrustPillarsProps = {
  pillars: ReadonlyArray<TrustPillar>;
};

export function TrustPillars({ pillars }: TrustPillarsProps) {
  // Pick grid columns based on count — 3 → 3-col, 5 → 5-col at xl.
  const isFive = pillars.length === 5;
  const gridCols = isFive
    ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="soft-panel flex h-full flex-col rounded-[1.25rem] p-5"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(245,102,187,0.95))] text-lg text-white shadow-soft">
            <span aria-hidden>{pillar.icon}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-midnight sm:text-xl">
            {pillar.title}
          </h3>
          <p className="section-copy mt-1.5 text-sm leading-relaxed">
            {pillar.description}
          </p>
        </article>
      ))}
    </div>
  );
}
