import Image from "next/image";
import Link from "next/link";
import type { CategoryHeroContent } from "@/data/types";

type CategoryHeroProps = {
  content: CategoryHeroContent;
  theme?: "princess" | "hero" | "playful";
};

const themeClasses = {
  princess: {
    glowA: "bg-rose/18",
    glowB: "bg-violet/16",
    shell:
      "bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(248,239,255,0.96))]",
  },
  hero: {
    glowA: "bg-[rgba(77,104,204,0.18)]",
    glowB: "bg-violet/14",
    shell:
      "bg-[linear-gradient(180deg,rgba(248,251,255,0.98),rgba(238,244,255,0.96))]",
  },
  playful: {
    glowA: "bg-[rgba(65,181,111,0.16)]",
    glowB: "bg-sunrise/20",
    shell:
      "bg-[linear-gradient(180deg,rgba(251,255,252,0.98),rgba(242,255,246,0.96))]",
  },
} as const;

export function CategoryHero({
  content,
  theme = "princess",
}: CategoryHeroProps) {
  const classes = themeClasses[theme];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-18">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1
            className={`mt-6 max-w-4xl font-semibold leading-[0.94] text-midnight ${
              theme === "playful"
                ? "max-w-3xl text-4xl text-balance sm:text-5xl xl:text-6xl"
                : `text-5xl sm:text-6xl xl:text-7xl${
                    theme === "hero" ? " text-balance sm:tracking-tight" : ""
                  }`
            }`}
          >
            {content.title}
          </h1>
          <p className="section-copy mt-6 max-w-2xl text-lg">
            {content.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className={`glass-panel px-4 py-3 text-sm text-midnight ${
                  theme === "hero"
                    ? "rounded-full border border-[rgba(59,92,200,0.2)] bg-white/92 font-extrabold tracking-tight shadow-[0_12px_28px_rgba(59,92,200,0.1)]"
                    : theme === "playful"
                      ? "rounded-2xl border border-[rgba(255,214,123,0.55)] bg-white/94 font-semibold shadow-[0_10px_26px_rgba(65,181,111,0.08)]"
                      : "rounded-full font-semibold"
                }`}
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </Link>
            {content.secondaryCta ? (
              <Link href={content.secondaryCta.href} className="button-secondary">
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="brand-shell relative">
          <div className={`absolute -left-4 top-14 h-36 w-36 rounded-full blur-3xl ${classes.glowA}`} />
          <div className={`absolute right-0 top-6 h-28 w-28 rounded-full blur-3xl ${classes.glowB}`} />

          <div className={`glass-panel rounded-[2.25rem] p-5 sm:p-6 ${classes.shell}`}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-4 sm:p-5">
              <Image
                src={content.mainMedia.src}
                alt={content.mainMedia.alt}
                width={content.mainMedia.width}
                height={content.mainMedia.height}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />

              {content.insetMedia ? (
                <div className="absolute bottom-4 right-4 w-28 overflow-hidden rounded-[1.5rem] border border-white/90 bg-white shadow-magical sm:w-32">
                  <Image
                    src={content.insetMedia.src}
                    alt={content.insetMedia.alt}
                    width={content.insetMedia.width}
                    height={content.insetMedia.height}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
            </div>

            <div className="mt-5 rounded-[1.8rem] border border-line bg-white/82 p-5 shadow-magical">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copy-soft">
                {content.panelEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-midnight">
                {content.panelTitle}
              </h2>
              <p className="section-copy mt-3 text-sm">
                {content.panelDescription}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {content.supportingCards.map((card) => (
                <article
                  key={card.title}
                  className="soft-panel rounded-[1.5rem] p-4"
                >
                  {card.eyebrow ? (
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-copy-soft">
                      {card.eyebrow}
                    </p>
                  ) : null}
                  <h3 className="mt-2 text-xl font-semibold text-midnight">
                    {card.title}
                  </h3>
                  <p className="section-copy mt-2 text-sm">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
