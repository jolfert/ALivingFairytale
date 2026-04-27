import Image from "next/image";
import Link from "next/link";
import type { MediaAsset } from "@/data/types";

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: ReadonlyArray<string>;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: ReadonlyArray<{
    label: string;
    value: string;
  }>;
  brandMedia: MediaAsset;
  showcase: {
    eyebrow: string;
    mainMedia: MediaAsset;
    insetMedia?: MediaAsset;
    storyCardEyebrow: string;
    storyCardTitle: string;
    storyCardText: string;
    princessLabel: string;
    princessDescription: string;
    heroLabel: string;
    heroDescription: string;
    planningEyebrow: string;
    planningTitle: string;
    planningDescription: string;
    reassuranceEyebrow: string;
    reassuranceTitle: string;
    supportCards: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
};

type HomeHeroProps = {
  content: HeroContent;
};

export function HomeHero({ content }: HomeHeroProps) {
  const mainImageFit = content.showcase.mainMedia.objectFit ?? "cover";
  const insetImageFit = content.showcase.insetMedia?.objectFit ?? "cover";

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-14">
      {/* Ambient glows - softer, further from the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-rose/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-violet/10 blur-3xl"
      />

      <div className="relative grid items-start gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
        {/* LEFT: Headline + intent */}
        <div className="relative z-10">
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.96] text-midnight sm:text-6xl xl:text-7xl">
            {content.title}
          </h1>
          <p className="section-copy mt-6 max-w-xl text-lg">
            {content.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-line bg-white/78 px-4 py-2.5 text-sm font-semibold text-midnight backdrop-blur"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </Link>
            <Link href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-white/82 p-5 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-midnight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="section-copy mt-1.5 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Single focused showcase - one shell, clean stacking */}
        <div className="brand-shell relative">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            {/* Brand logo chip - floating, subtle */}
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-line bg-white/94 px-4 py-2">
              <Image
                src={content.brandMedia.src}
                alt={content.brandMedia.alt}
                width={content.brandMedia.width}
                height={content.brandMedia.height}
                className="h-auto w-[8.5rem] sm:w-[9.5rem]"
              />
            </div>

            {/* Main photo stage */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,247,252,0.98),rgba(245,237,255,0.95))]">
              <Image
                src={content.showcase.mainMedia.src}
                alt={content.showcase.mainMedia.alt}
                width={content.showcase.mainMedia.width}
                height={content.showcase.mainMedia.height}
                className={`h-[22rem] w-full sm:h-[26rem] ${
                  mainImageFit === "contain"
                    ? "bg-white p-4 object-contain"
                    : "object-cover"
                }`}
                style={{ objectPosition: content.showcase.mainMedia.objectPosition }}
              />

              {content.showcase.insetMedia ? (
                <div className="absolute bottom-4 right-4 w-24 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-magical sm:bottom-5 sm:right-5 sm:w-28">
                  <Image
                    src={content.showcase.insetMedia.src}
                    alt={content.showcase.insetMedia.alt}
                    width={content.showcase.insetMedia.width}
                    height={content.showcase.insetMedia.height}
                    className={`h-full w-full ${
                      insetImageFit === "contain"
                        ? "bg-white p-2 object-contain"
                        : "object-cover"
                    }`}
                    style={{
                      objectPosition:
                        content.showcase.insetMedia.objectPosition,
                    }}
                  />
                </div>
              ) : null}

              {/* Floating story card overlapping the photo bottom */}
              <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <div className="rounded-2xl border border-white/80 bg-white/94 p-4 shadow-magical backdrop-blur">
                  <p className="eyebrow-plain">
                    {content.showcase.storyCardEyebrow}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug text-midnight sm:text-base">
                    {content.showcase.storyCardTitle}
                  </p>
                  <p className="section-copy mt-1.5 text-xs leading-relaxed sm:text-sm">
                    {content.showcase.storyCardText}
                  </p>
                </div>
              </div>
            </div>

            {/* Two category chips below the photo */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(255,247,252,0.98),rgba(255,235,246,0.92))] p-4">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-rose">
                  {content.showcase.princessLabel}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-midnight">
                  {content.showcase.princessDescription}
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(66,86,184,0.14)] bg-[linear-gradient(180deg,rgba(247,250,255,0.98),rgba(228,238,255,0.94))] p-4">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-[color:#4665c9]">
                  {content.showcase.heroLabel}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-midnight">
                  {content.showcase.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
