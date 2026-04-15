import Image from "next/image";

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
};

type HomeHeroProps = {
  content: HeroContent;
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
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
            <a href={content.primaryCta.href} className="button-primary">
              {content.primaryCta.label}
            </a>
            <a href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </a>
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
                src="/A%20living%20fairytale%20logo.png"
                alt="A Living Fairytale"
                width={220}
                height={84}
                className="h-auto w-[11rem] sm:w-[12.5rem]"
              />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
              <div className="overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(160deg,rgba(255,247,252,0.98),rgba(245,237,255,0.95))] p-6">
                <div className="rounded-[1.75rem] border border-white/60 bg-[radial-gradient(circle_at_18%_18%,rgba(245,102,187,0.24),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(125,100,255,0.28),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,244,250,0.94))] p-6">
                  <span className="eyebrow border-0 px-0 py-0 shadow-none">
                    Featured atmosphere
                  </span>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div className="h-48 flex-1 rounded-[1.7rem] bg-[linear-gradient(180deg,#ffcce8_0%,#ffdff1_34%,#fff6fb_100%)] p-5">
                      <div className="mx-auto h-full w-32 rounded-t-[3rem] rounded-b-[1.6rem] bg-[linear-gradient(180deg,#fff8fc_0%,#f6d9eb_24%,#d89bc0_100%)] shadow-[0_24px_34px_rgba(217,126,174,0.22)]" />
                    </div>
                    <div className="h-36 w-28 rounded-[1.6rem] bg-[linear-gradient(180deg,#eef4ff_0%,#d7e6ff_55%,#bdd0ff_100%)] p-4 shadow-[0_20px_34px_rgba(113,131,201,0.18)]">
                      <div className="h-full rounded-[1rem] bg-[linear-gradient(180deg,#fff_0%,#edf3ff_100%)]" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="soft-panel rounded-[1.5rem] p-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose">
                      Princess
                    </p>
                    <p className="mt-2 text-lg font-semibold text-midnight">
                      Elegant arrivals, sparkling photos, story-led wonder.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[rgba(66,86,184,0.12)] bg-[linear-gradient(180deg,rgba(247,250,255,0.98),rgba(232,241,255,0.98))] p-4 shadow-magical">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:#4665c9]">
                      Hero
                    </p>
                    <p className="mt-2 text-lg font-semibold text-midnight">
                      High-energy missions with a polished, parent-friendly tone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="soft-panel rounded-[1.8rem] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-copy-soft">
                    Booking should feel this calm
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-midnight">
                    Pick your party path, compare packages, send the date.
                  </p>
                  <p className="section-copy mt-3 text-sm">
                    The next round can turn this into the full booking page, but
                    the homepage already guides families toward the right next step.
                  </p>
                </div>

                <div className="glass-panel rounded-[1.8rem] p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-lg font-black text-white">
                      {"\u2726"}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-copy-soft">
                        Good fit for the homepage
                      </p>
                      <p className="mt-1 text-lg font-semibold text-midnight">
                        Enchanting for children, reassuring for parents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="glass-panel rounded-[1.6rem] p-4">
                    <p className="text-sm font-bold text-midnight">
                      Princesses, heroes, mascots
                    </p>
                    <p className="section-copy mt-2 text-sm">
                      Clear categories without breaking the premium brand.
                    </p>
                  </div>
                  <div className="glass-panel rounded-[1.6rem] p-4">
                    <p className="text-sm font-bold text-midnight">
                      Booking flow ready to grow
                    </p>
                    <p className="section-copy mt-2 text-sm">
                      The structure is set up for a future form, CRM, or email handoff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
