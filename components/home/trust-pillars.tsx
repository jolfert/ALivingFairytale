type TrustPillar = {
  title: string;
  description: string;
  icon: string;
};

type TrustPillarsProps = {
  pillars: ReadonlyArray<TrustPillar>;
};

export function TrustPillars({ pillars }: TrustPillarsProps) {
  // Pick grid columns based on count - 3 to 3-col, 5 to 5-col at xl.
  const isFive = pillars.length === 5;
  const gridCols = isFive
    ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-3 sm:gap-4 ${gridCols}`}>
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="soft-panel flex h-full items-start gap-3 rounded-[1.25rem] p-4 sm:flex-col sm:p-5"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(245,102,187,0.95))] text-lg text-white shadow-soft">
            <span aria-hidden>{pillar.icon}</span>
          </div>
          <div>
            <h3 className="text-base font-semibold text-midnight sm:mt-4 sm:text-xl">
              {pillar.title}
            </h3>
            <p className="section-copy mt-0.5 text-sm leading-relaxed sm:mt-1.5">
              {pillar.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
