import Image from "next/image";
import Link from "next/link";
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
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      <div
        aria-hidden
        className={`pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl ${tokens.glowA}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full blur-3xl ${tokens.glowB}`}
      />

      <div className="relative grid items-start gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
        {/* LEFT: Headline + intent */}
        <div className="relative z-10">
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1
            className={`mt-6 max-w-3xl font-semibold leading-[0.96] text-midnight ${
              isPlayful
                ? "text-4xl text-balance sm:text-5xl xl:text-6xl"
                : "text-5xl sm:text-6xl xl:text-7xl"
            }`}
          >
            {content.title}
          </h1>
          <p className="section-copy mt-6 max-w-xl text-lg">
            {content.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold text-midnight backdrop-blur ${tokens.highlight}`}
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={content.primaryCta.href} className="button-primary">
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
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div
              className={`relative overflow-hidden rounded-[1.5rem] border border-white/60 ${tokens.mediaFrame}`}
            >
              <Image
                src={content.mainMedia.src}
                alt={content.mainMedia.alt}
                width={content.mainMedia.width}
                height={content.mainMedia.height}
                className={`h-[22rem] w-full sm:h-[26rem] ${
                  mainImageFit === "contain"
                    ? "bg-white p-4 object-contain"
                    : "object-cover"
                }`}
                style={{ objectPosition: content.mainMedia.objectPosition }}
              />

              {content.insetMedia ? (
                <div className="absolute bottom-4 right-4 w-24 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-magical sm:bottom-5 sm:right-5 sm:w-28">
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

            {/* Panel strip — key sub-pitch */}
            <div className="mt-4 rounded-2xl border border-line bg-white/88 p-5">
              <p className="eyebrow-plain">{content.panelEyebrow}</p>
              <h2 className="mt-2 text-xl font-semibold text-midnight sm:text-2xl">
                {content.panelTitle}
              </h2>
              <p className="section-copy mt-2.5 text-sm leading-relaxed">
                {content.panelDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
