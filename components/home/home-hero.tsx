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
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-24 lg:pt-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
        <div className="relative z-10">
          <span className="eyebrow sparkle-dot">{content.eyebrow}</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] text-midnight sm:text-6xl xl:text-7xl">
            {content.title}
          </h1>
          <p className="section-copy mt-6 max-w-2xl text-lg">{content.description}</p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="glass-panel rounded-full px-4 py-3 text-sm font-semibold text-midnight"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </Link>
            <Link href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="soft-panel rounded-[1.65rem] p-5">
                <p className="text-3xl font-semibold text-midnight">{stat.value}</p>
                <p className="section-copy mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-shell relative">
          <div className="absolute -left-6 top-16 h-36 w-36 rounded-full bg-rose/20 blur-3xl" />
          <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-violet/18 blur-3xl" />

          <div className="glass-panel relative rounded-[2.25rem] p-5 sm:p-6">
            <div className="glass-panel w-fit rounded-[1.5rem] px-4 py-3">
              <Image
                src={content.brandMedia.src}
                alt={content.brandMedia.alt}
                width={content.brandMedia.width}
                height={content.brandMedia.height}
                className="h-auto w-[11rem] sm:w-[12.5rem]"
              />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
              <div className="overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(160deg,rgba(255,247,252,0.98),rgba(245,237,255,0.95))] p-6">
                <div className="rounded-[1.75rem] border border-white/60 bg-[radial-gradient(circle_at_18%_18%,rgba(245,102,187,0.24),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(125,100,255,0.28),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,250,0.94))] p-4 sm:p-5">
                  <span className="eyebrow border-0 px-0 py-0 shadow-none">
                    {content.showcase.eyebrow}
                  </span>
                  <div className="relative mt-6">
                    <div className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/82">
                      <Image
                        src={content.showcase.mainMedia.src}
                        alt={content.showcase.mainMedia.alt}
                        width={content.showcase.mainMedia.width}
                        height={content.showcase.mainMedia.height}
                        className={`h-[18rem] w-full sm:h-[21rem] ${
                          mainImageFit === "contain"
                            ? "bg-white p-4 object-contain"
                            : "object-cover"
                        }`}
                        style={{
                          objectPosition:
                            content.showcase.mainMedia.objectPosition,
                        }}
                      />
                    </div>
                    {content.showcase.insetMedia ? (
                      <div className="absolute right-3 top-3 w-24 overflow-hidden rounded-[1.3rem] border border-white/90 bg-white shadow-magical sm:right-4 sm:top-4 sm:w-28">
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
                  </div>

                  <div className="mt-4 rounded-[1.35rem] border border-white/80 bg-white/92 p-4 shadow-magical">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-copy-soft">
                      {content.showcase.storyCardEyebrow}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-tight text-midnight">
                      {content.showcase.storyCardTitle}
                    </p>
                    <p className="section-copy mt-2 text-sm leading-relaxed">
                      {content.showcase.storyCardText}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="soft-panel rounded-[1.5rem] p-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose">
                      {content.showcase.princessLabel}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-midnight">
                      {content.showcase.princessDescription}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[rgba(66,86,184,0.12)] bg-[linear-gradient(180deg,rgba(247,250,255,0.98),rgba(232,241,255,0.98))] p-4 shadow-magical">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:#4665c9]">
                      {content.showcase.heroLabel}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-midnight">
                      {content.showcase.heroDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="soft-panel rounded-[1.8rem] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-copy-soft">
                    {content.showcase.planningEyebrow}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-midnight">
                    {content.showcase.planningTitle}
                  </p>
                  <p className="section-copy mt-3 text-sm">
                    {content.showcase.planningDescription}
                  </p>
                </div>

                <div className="glass-panel rounded-[1.8rem] p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-lg font-black text-white">
                      {"\u2726"}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-copy-soft">
                        {content.showcase.reassuranceEyebrow}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-midnight">
                        {content.showcase.reassuranceTitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {content.showcase.supportCards.map((card) => (
                    <div key={card.title} className="glass-panel rounded-[1.6rem] p-4">
                      <p className="text-sm font-bold text-midnight">
                        {card.title}
                      </p>
                      <p className="section-copy mt-2 text-sm">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
