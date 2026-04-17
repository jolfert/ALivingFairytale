type TrustPillar = {
  title: string;
  description: string;
  icon: string;
};

type TrustPillarsProps = {
  pillars: ReadonlyArray<TrustPillar>;
};

export function TrustPillars({ pillars }: TrustPillarsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <article key={pillar.title} className="soft-panel rounded-[1.85rem] p-6">
          <div className="grid h-14 w-14 place-items-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(255,214,123,0.92),rgba(245,102,187,0.96))] text-2xl text-white">
            <span aria-hidden>{pillar.icon}</span>
          </div>
          <h3 className="mt-5 text-xl font-semibold text-midnight sm:text-2xl">
            {pillar.title}
          </h3>
          <p className="section-copy mt-3 text-sm leading-relaxed">{pillar.description}</p>
        </article>
      ))}
    </div>
  );
}
