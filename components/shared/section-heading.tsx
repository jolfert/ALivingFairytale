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
      <div className="mb-5 text-center sm:mb-8">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-midnight sm:mt-4 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="section-copy mx-auto mt-3 max-w-2xl text-base sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-8 sm:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-midnight sm:mt-4 sm:text-3xl lg:text-4xl">
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
