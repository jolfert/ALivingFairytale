type FinalCtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ReadonlyArray<{
    step: string;
    title: string;
    description: string;
  }>;
  previewEyebrow: string;
  previewTitle: string;
  previewDescription: string;
  notes: ReadonlyArray<string>;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

type FinalCtaProps = {
  content: FinalCtaContent;
};

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <div className="glass-panel grid gap-8 rounded-[2.4rem] p-6 sm:p-8 xl:grid-cols-[1.1fr_.9fr]">
      <div>
        <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold text-midnight sm:text-5xl">
          {content.title}
        </h2>
        <p className="section-copy mt-5 max-w-2xl text-base sm:text-lg">
          {content.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.steps.map((item) => (
            <div key={item.step} className="soft-panel rounded-[1.6rem] p-5">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-copy-soft">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-midnight">
                {item.title}
              </h3>
              <p className="section-copy mt-3 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))] p-6 shadow-magical">
        <span className="eyebrow border-0 px-0 py-0 shadow-none">
          {content.previewEyebrow}
        </span>
        <h3 className="mt-4 text-3xl font-semibold text-midnight">
          {content.previewTitle}
        </h3>
        <p className="section-copy mt-4 text-sm">
          {content.previewDescription}
        </p>

        <ul className="mt-6 space-y-4">
          {content.notes.map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-copy-soft">
              <span className="mt-1 text-rose" aria-hidden>
                {"\u25CF"}
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={content.primaryCta.href} className="button-primary">
            {content.primaryCta.label}
          </a>
          <a href={content.secondaryCta.href} className="button-secondary">
            {content.secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
