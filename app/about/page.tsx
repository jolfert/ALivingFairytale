import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageSection } from "@/components/shared/page-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { aboutPageContent } from "@/data/about-page";
import { primaryNavigation } from "@/data/site-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "A Living Fairytale is a locally owned family business delivering theme-park quality character entertainment across Manitoba since 2011. Meet founder Charlyn Azure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | A Living Fairytale",
    description:
      "Meet the team behind Manitoba's premier children's character entertainment — family owned, locally operated, and trusted since 2011.",
    url: "/about",
  },
};

export default function AboutPage() {
  const { hero, intro, founder, pillars, cta } = aboutPageContent;
  const photoFit = hero.photo.objectFit ?? "cover";

  return (
    <>
      <Header links={primaryNavigation} brandHref="/" />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#fff8fc_0%,#fdf8ff_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] max-h-[80vh] bg-[radial-gradient(ellipse_at_26%_0%,rgba(245,102,187,0.14),transparent_55%),radial-gradient(ellipse_at_82%_12%,rgba(186,130,220,0.1),transparent_50%)]"
        />

        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
            <div className="relative z-10">
              <span className="eyebrow sparkle-dot">{hero.eyebrow}</span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] text-midnight sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="section-copy mt-6 max-w-xl text-lg">
                {hero.lead}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/book" className="button-primary">
                  Book a Party
                </Link>
                <Link href="/reviews" className="button-secondary">
                  Read reviews
                </Link>
              </div>
            </div>

            <div className="brand-shell relative">
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,247,252,0.96),rgba(245,237,255,0.92))]">
                  <Image
                    src={hero.photo.src}
                    alt={hero.photo.alt}
                    width={hero.photo.width}
                    height={hero.photo.height}
                    className={`h-[22rem] w-full sm:h-[28rem] ${
                      photoFit === "contain"
                        ? "bg-white p-4 object-contain"
                        : "object-cover"
                    }`}
                    style={{ objectPosition: hero.photo.objectPosition }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro paragraph */}
        <PageSection className="relative" spacing="tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow sparkle-dot">{intro.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
              {intro.title}
            </h2>
            <div className="mt-6 space-y-4">
              {intro.paragraphs.map((p) => (
                <p
                  key={p}
                  className="section-copy text-base leading-relaxed sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </PageSection>

        {/* Founder */}
        <PageSection
          id="founder"
          className="relative rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,241,248,0.55),rgba(248,239,255,0.35))]"
        >
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow sparkle-dot">{founder.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-copy-soft">
              {founder.title}
            </p>
            <div className="mt-8 space-y-5">
              {founder.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="section-copy text-base leading-relaxed sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </PageSection>

        {/* Pillars */}
        <PageSection id="pillars" className="relative">
          <SectionHeading
            eyebrow={pillars.eyebrow}
            title={pillars.title}
            description={pillars.description}
            centered
          />
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pillars.items.map((item, index) => (
              <article
                key={item.title}
                className="soft-panel flex h-full flex-col rounded-[1.5rem] p-6"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffd67b,#f566bb)] text-sm font-black text-white shadow-soft">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-midnight sm:text-xl">
                  {item.title}
                </h3>
                <p className="section-copy mt-2.5 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </PageSection>

        {/* CTA */}
        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(255,234,248,0.6),rgba(252,248,255,0.45))]"
        >
          <div className="glass-panel mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] p-8 text-center sm:p-12">
            <span className="eyebrow sparkle-dot">{cta.eyebrow}</span>
            <h2 className="max-w-2xl text-3xl font-semibold text-midnight sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="section-copy max-w-xl text-base sm:text-lg">
              {cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={cta.primaryCta.href} className="button-primary">
                {cta.primaryCta.label}
              </Link>
              <Link href={cta.secondaryCta.href} className="button-secondary">
                {cta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer links={primaryNavigation} />
    </>
  );
}
