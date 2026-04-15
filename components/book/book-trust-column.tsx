import { bookPageContent } from "@/data/book-page";

export function BookTrustColumn() {
  const { trustColumn } = bookPageContent;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <span className="eyebrow sparkle-dot">{trustColumn.eyebrow}</span>
        <h1 className="mt-5 max-w-xl text-4xl font-semibold text-midnight sm:text-5xl">
          {trustColumn.title}
        </h1>
        <p className="section-copy mt-5 max-w-xl text-base sm:text-lg">
          {trustColumn.lead}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {trustColumn.blocks.map((block) => (
          <article
            key={block.title}
            className="rounded-[1.75rem] border border-line bg-white/80 p-6 shadow-magical"
          >
            <h2 className="text-xl font-semibold text-midnight">{block.title}</h2>
            <div className="mt-4 space-y-3">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="section-copy text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="section-copy max-w-xl border-t border-line pt-8 text-sm">
        {trustColumn.footnote}
      </p>
    </div>
  );
}
