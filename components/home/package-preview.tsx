type PackagePreviewItem = {
  name: string;
  duration: string;
  description: string;
  highlights: ReadonlyArray<string>;
  featured?: boolean;
};

type PackagePreviewProps = {
  packages: ReadonlyArray<PackagePreviewItem>;
};

export function PackagePreview({ packages }: PackagePreviewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg) => (
        <article
          key={pkg.name}
          className={`relative rounded-[2rem] border p-6 shadow-magical ${
            pkg.featured
              ? "border-[rgba(245,102,187,0.18)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(255,240,248,0.98))]"
              : "border-line bg-white/86"
          }`}
        >
          {pkg.featured ? (
            <span className="absolute right-5 top-5 rounded-full bg-[linear-gradient(135deg,#ffd67b,#fff0b6)] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[color:#7e5500]">
              Most booked
            </span>
          ) : null}

          <span className="eyebrow border-0 px-0 py-0 shadow-none">
            {pkg.duration}
          </span>
          <h3 className="mt-3 text-3xl font-semibold text-midnight">{pkg.name}</h3>
          <p className="section-copy mt-4 text-sm">{pkg.description}</p>

          <ul className="mt-6 space-y-3">
            {pkg.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm font-medium text-copy-soft"
              >
                <span className="mt-1 text-sunrise" aria-hidden>
                  {"\u2726"}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
