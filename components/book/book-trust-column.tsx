import { bookPageContent } from "@/data/book-page";

export function BookTrustColumn() {
  const { trustColumn } = bookPageContent;

  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <div>
        <span className="eyebrow sparkle-dot">{trustColumn.eyebrow}</span>
        <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] text-midnight sm:text-5xl lg:text-6xl">
          {trustColumn.title}
        </h1>
        <p className="section-copy mt-5 max-w-xl text-base sm:text-lg">
          {trustColumn.lead}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {trustColumn.blocks.map((block) => (
          <article
            key={block.title}
            className="soft-panel rounded-[1.5rem] p-6 sm:p-7"
          >
            <h2 className="text-lg font-semibold text-midnight sm:text-xl">
              {block.title}
            </h2>
            <div className="mt-3 space-y-2.5">
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
      </div>

      <p className="section-copy max-w-xl border-t border-line pt-6 text-sm leading-relaxed">
        {trustColumn.footnote}
      </p>
    </div>
  );
}
