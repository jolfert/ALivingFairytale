type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered,
}: SectionHeadingProps) {
  if (centered) {
    return (
      <div className="mb-10 text-center">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-4 text-4xl font-semibold text-midnight sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="section-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold text-midnight sm:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="section-copy max-w-2xl text-base lg:text-right sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
