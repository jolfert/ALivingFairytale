type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <span className="eyebrow sparkle-dot">{eyebrow}</span>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold text-midnight sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="section-copy max-w-2xl text-base sm:text-lg">{description}</p>
    </div>
  );
}
