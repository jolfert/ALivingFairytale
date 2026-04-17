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
    <div className="glass-panel grid gap-8 rounded-[2rem] p-6 sm:p-10 xl:grid-cols-[1.15fr_.85fr]">
      <div>
        <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>
        <p className="section-copy mt-5 max-w-xl text-base sm:text-lg">
          {content.description}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {content.steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-line bg-white/78 p-5"
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-sm font-black text-white shadow-soft">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-midnight sm:text-lg">
                {item.title}
              </h3>
              <p className="section-copy mt-1.5 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[rgba(245,102,187,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,243,249,0.96))] p-6 sm:p-7">
        <span className="eyebrow-plain">{content.previewEyebrow}</span>
        <h3 className="mt-3 text-2xl font-semibold leading-snug text-midnight sm:text-[1.7rem]">
          {content.previewTitle}
        </h3>
        <p className="section-copy mt-2.5 text-sm leading-relaxed">
          {content.previewDescription}
        </p>

        <ul className="mt-6 space-y-3 border-t border-line pt-6">
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

        <div className="mt-7 flex flex-wrap gap-3">
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
