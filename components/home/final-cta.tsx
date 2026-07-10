import Link from "next/link";

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
    <div className="glass-panel grid gap-6 rounded-[2rem] p-5 sm:p-8 xl:grid-cols-[1.15fr_.85fr]">
      <div>
        <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-midnight sm:mt-4 sm:text-3xl lg:text-4xl">
          {content.title}
        </h2>
        <p className="section-copy mt-3 max-w-xl text-base sm:text-lg">
          {content.description}
        </p>

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
          {content.steps.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white/78 p-4 sm:block sm:p-5"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-sm font-black text-white shadow-soft">
                {item.step}
              </div>
              <div>
                <h3 className="text-base font-semibold leading-snug text-midnight sm:mt-4 sm:text-lg">
                  {item.title}
                </h3>
                <p className="section-copy mt-1 text-sm leading-relaxed sm:mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[rgba(245,102,187,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))] p-5 sm:p-6">
        <span className="eyebrow-plain">{content.previewEyebrow}</span>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-midnight sm:text-[1.7rem]">
          {content.previewTitle}
        </h3>
        <p className="section-copy mt-2 text-sm leading-relaxed">
          {content.previewDescription}
        </p>

        <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
          {content.notes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-2.5 text-sm text-copy-soft"
            >
              <span className="mt-0.5 shrink-0 text-rose" aria-hidden>
                {"\u2726"}
              </span>
              <span className="leading-relaxed">{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={content.primaryCta.href} className="button-primary">
            {content.primaryCta.label}
          </Link>
          <Link href={content.secondaryCta.href} className="button-secondary">
            {content.secondaryCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
