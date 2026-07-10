import { bookPageContent } from "@/data/book-page";

/**
 * Split into intro + details so the booking page can put the form directly
 * after the headline on mobile, with the trust blocks following the form.
 */
export function BookTrustIntro() {
  const { trustColumn } = bookPageContent;

  return (
    <div>
      <span className="eyebrow sparkle-dot">{trustColumn.eyebrow}</span>
      <h1 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.02] text-midnight sm:mt-5 sm:text-5xl lg:text-6xl">
        {trustColumn.title}
      </h1>
      <p className="section-copy mt-3 max-w-xl text-base sm:mt-5 sm:text-lg">
        {trustColumn.lead}
      </p>
    </div>
  );
}

export function BookTrustDetails() {
  const { trustColumn } = bookPageContent;

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {trustColumn.blocks.map((block) => (
        <article
          key={block.title}
          className="soft-panel rounded-[1.5rem] p-5 sm:p-6"
        >
          <h2 className="text-lg font-semibold text-midnight sm:text-xl">
            {block.title}
          </h2>
          <div className="mt-2.5 space-y-2.5">
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="section-copy text-sm leading-relaxed sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      ))}

      <p className="section-copy max-w-xl border-t border-line pt-5 text-sm leading-relaxed">
        {trustColumn.footnote}
      </p>
    </div>
  );
}
