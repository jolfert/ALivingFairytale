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
      <div className="mb-12 text-center sm:mb-14">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-5 text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="section-copy mx-auto mt-5 max-w-2xl text-base sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-5 text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="section-copy max-w-xl text-base sm:text-lg lg:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}
