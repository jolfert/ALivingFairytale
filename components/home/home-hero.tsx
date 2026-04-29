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
    <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 sm:pt-7 lg:px-8 lg:pb-20 lg:pt-10">
      {/* Ambient glows - softer, further from the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-rose/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-60 w-60 rounded-full bg-violet/10 blur-3xl"
      />

      <div className="relative grid items-start gap-6 lg:grid-cols-[0.96fr_1fr] lg:gap-12">
        {/* LEFT: Headline + intent */}
        <div className="relative z-10 order-2 lg:order-1 lg:pt-10">
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] text-midnight sm:mt-5 sm:text-6xl xl:text-7xl">
            {content.title}
          </h1>
          <p className="section-copy mt-4 max-w-xl text-base sm:mt-5 sm:text-lg">
            {content.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-line bg-white/78 px-3 py-2 text-xs font-semibold text-midnight backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </Link>
            <Link href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-white/82 p-3 backdrop-blur sm:p-5"
              >
                <p className="text-base font-semibold leading-tight text-midnight sm:text-3xl">
                  {stat.value}
                </p>
                <p className="section-copy mt-1 text-xs leading-snug sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Single focused showcase - one shell, clean stacking */}
        <div className="brand-shell relative order-1 lg:order-2">
          <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-3 sm:rounded-[2rem] sm:p-5">
            {/* Brand logo chip - floating, subtle */}
            <div className="mb-3 hidden items-center gap-3 rounded-full border border-line bg-white/94 px-4 py-2 sm:mb-4 sm:inline-flex">
              <Image
                src={content.brandMedia.src}
                alt={content.brandMedia.alt}
                width={content.brandMedia.width}
                height={content.brandMedia.height}
                className="h-auto w-[8.5rem] sm:w-[9.5rem]"
              />
            </div>

            {/* Main photo stage */}
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,247,252,0.98),rgba(245,237,255,0.95))] sm:rounded-[1.5rem]">
              <Image
                src={content.showcase.mainMedia.src}
                alt={content.showcase.mainMedia.alt}
                width={content.showcase.mainMedia.width}
                height={content.showcase.mainMedia.height}
                className={`h-[16.5rem] w-full sm:h-[26rem] lg:h-[31rem] ${
                  mainImageFit === "contain"
                    ? "bg-white p-4 object-contain"
                    : "object-cover"
                }`}
                style={{ objectPosition: content.showcase.mainMedia.objectPosition }}
              />

              {content.showcase.insetMedia ? (
                <div className="absolute bottom-3 right-3 w-16 overflow-hidden rounded-2xl border border-white/90 bg-white shadow-magical sm:bottom-5 sm:right-5 sm:w-28">
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
              <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
                <div className="rounded-2xl border border-white/80 bg-white/94 p-3 shadow-magical backdrop-blur sm:p-4">
                  <p className="eyebrow-plain">
                    {content.showcase.storyCardEyebrow}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-midnight sm:mt-1.5 sm:text-base">
                    {content.showcase.storyCardTitle}
                  </p>
                  <p className="section-copy mt-1 hidden text-xs leading-relaxed sm:mt-1.5 sm:block sm:text-sm">
                    {content.showcase.storyCardText}
                  </p>
                </div>
              </div>
            </div>

            {/* Two category chips below the photo */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
              <div className="rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(255,247,252,0.98),rgba(255,235,246,0.92))] p-3 sm:p-4">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-rose">
                  {content.showcase.princessLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-midnight sm:mt-2 sm:text-base">
                  {content.showcase.princessDescription}
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(66,86,184,0.14)] bg-[linear-gradient(180deg,rgba(247,250,255,0.98),rgba(228,238,255,0.94))] p-3 sm:p-4">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-[color:#4665c9]">
                  {content.showcase.heroLabel}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-midnight sm:mt-2 sm:text-base">
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
