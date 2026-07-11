import Image from "next/image";
import Link from "next/link";
import { SparkleField } from "@/components/magic/sparkle-field";
import type { CategoryHeroContent } from "@/data/types";

type CategoryHeroProps = {
  content: CategoryHeroContent;
  theme?: "princess" | "hero" | "playful";
};

const themeTokens = {
  princess: {
    glowA: "bg-rose/14",
    glowB: "bg-violet/12",
    highlight:
      "border-[rgba(245,102,187,0.18)] bg-white/88",
    mediaFrame:
      "bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(248,239,255,0.95))]",
    accent: "text-rose",
  },
  hero: {
    glowA: "bg-[rgba(42,98,195,0.18)]",
    glowB: "bg-[rgba(25,80,150,0.12)]",
    highlight:
      "border-[rgba(42,98,195,0.22)] bg-white/94",
    mediaFrame:
      "bg-[linear-gradient(180deg,rgba(240,246,255,0.99),rgba(220,234,252,0.92))]",
    accent: "text-[color:#2f4f8f]",
  },
  playful: {
    glowA: "bg-[rgba(65,181,111,0.14)]",
    glowB: "bg-sunrise/16",
    highlight:
      "border-[rgba(255,214,123,0.45)] bg-white/94",
    mediaFrame:
      "bg-[linear-gradient(180deg,rgba(251,255,252,0.98),rgba(242,255,246,0.94))]",
    accent: "text-[color:#2fa066]",
  },
} as const;

export function CategoryHero({
  content,
  theme = "princess",
}: CategoryHeroProps) {
  const tokens = themeTokens[theme];
  const mainImageFit = content.mainMedia.objectFit ?? "cover";
  const insetImageFit = content.insetMedia?.objectFit ?? "cover";
  const isPlayful = theme === "playful";

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-10">
      <SparkleField />

      <div className="relative grid items-start gap-5 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
        {/* LEFT: Headline + intent — first on every breakpoint so the pitch is above the fold */}
        <div className="relative z-10">
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1
            className={`mt-3 max-w-3xl font-semibold leading-[0.98] text-midnight sm:mt-5 ${
              isPlayful
                ? "text-3xl text-balance sm:text-4xl xl:text-5xl"
                : "text-3xl sm:text-5xl xl:text-6xl"
            }`}
          >
            {content.title}
          </h1>
          <p className="section-copy mt-3 max-w-xl text-base sm:mt-4 sm:text-lg">
            {content.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className={`rounded-full border px-3 py-2 text-xs font-semibold text-midnight backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm ${tokens.highlight}`}
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            <Link
              href={content.primaryCta.href}
              className="button-primary"
              data-confetti
            >
              {content.primaryCta.label}
            </Link>
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className="button-secondary"
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        {/* RIGHT: Single focused showcase */}
        <div className="brand-shell relative">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-line bg-white/88 p-3 shadow-soft sm:rounded-[2rem] sm:p-5 sm:shadow-magical">
            <div
              className={`relative overflow-hidden rounded-[1.05rem] border border-white/60 sm:rounded-[1.5rem] ${tokens.mediaFrame}`}
            >
              <Image
                src={content.mainMedia.src}
                alt={content.mainMedia.alt}
                width={content.mainMedia.width}
                height={content.mainMedia.height}
                preload
                className={`h-[13.5rem] w-full sm:h-[24rem] ${
                  mainImageFit === "contain"
                    ? "bg-white p-4 object-contain"
                    : "object-cover"
                }`}
                style={{ objectPosition: content.mainMedia.objectPosition }}
              />

              {content.greeting ? (
                <div className="pointer-events-none absolute left-3 top-3 z-10 max-w-[78%] rounded-2xl rounded-bl-md border border-white/85 bg-white/94 px-3.5 py-2 shadow-magical backdrop-blur sm:left-4 sm:top-4 sm:max-w-[70%] sm:px-4 sm:py-2.5">
                  <p className="font-display text-sm italic leading-snug text-midnight sm:text-base">
                    &ldquo;{content.greeting}&rdquo;
                  </p>
                </div>
              ) : null}

              {content.insetMedia ? (
                <div className="absolute bottom-3 right-3 w-16 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-magical sm:bottom-5 sm:right-5 sm:w-28">
                  <Image
                    src={content.insetMedia.src}
                    alt={content.insetMedia.alt}
                    width={content.insetMedia.width}
                    height={content.insetMedia.height}
                    className={`h-full w-full ${
                      insetImageFit === "contain"
                        ? "bg-white p-2 object-contain"
                        : "object-cover"
                    }`}
                    style={{ objectPosition: content.insetMedia.objectPosition }}
                  />
                </div>
              ) : null}
            </div>

            {/* Panel strip - key sub-pitch */}
            <div className="mt-3 rounded-2xl border border-line bg-white/88 p-4 sm:mt-4 sm:p-5">
              <p className="eyebrow-plain">{content.panelEyebrow}</p>
              <h2 className="mt-2 text-lg font-semibold text-midnight sm:text-2xl">
                {content.panelTitle}
              </h2>
              <p className="section-copy mt-2.5 hidden text-sm leading-relaxed sm:block">
                {content.panelDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
