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
    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className="soft-panel flex h-full flex-col rounded-[1.5rem] p-6 transition-shadow duration-300 hover:shadow-magical sm:p-7"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,214,123,0.95),rgba(245,102,187,0.95))] text-xl text-white shadow-soft">
            <span aria-hidden>{pillar.icon}</span>
          </div>
          <h3 className="mt-5 text-xl font-semibold leading-snug text-midnight sm:text-2xl">
            {pillar.title}
          </h3>
          <p className="section-copy mt-2.5 text-sm leading-relaxed">
            {pillar.description}
          </p>
        </article>
      ))}
    </div>
  );
}
