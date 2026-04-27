import type { Metadata } from "next";
import Link from "next/link";
import { PackageGrid } from "@/components/shared/package-grid";
import { PageSection } from "@/components/shared/page-section";
import { PricingGuide } from "@/components/shared/pricing-guide";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { legacyPricingGuide, packages } from "@/data/catalog";
import { primaryNavigation } from "@/data/site-shell";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Princess, superhero and mascot party pricing. Bronze, Silver and Gold packages starting at $200. Full rate card by duration and character count.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | A Living Fairytale",
    description:
      "Bronze, Silver and Gold party packages. Full rate card by duration and character count. Includes up to 10 children.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header links={primaryNavigation} brandHref="/" />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#fff8fc_0%,#fdf8ff_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] max-h-[60vh] bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,102,187,0.14),transparent_55%),radial-gradient(ellipse_at_82%_12%,rgba(125,100,255,0.1),transparent_50%)]"
        />

        <PageSection id="intro" className="relative" spacing="tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow sparkle-dot">Pricing</span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] text-midnight sm:text-5xl lg:text-6xl">
              Simple pricing. All parties, one rate card.
            </h1>
            <p className="section-copy mx-auto mt-5 max-w-xl text-base sm:text-lg">
              Princess, superhero, and mascot parties all follow the same
              structure. Pick the duration, pick the number of characters.
            </p>
          </div>
        </PageSection>

        <PageSection id="packages" className="relative" spacing="tight">
          <PackageGrid packages={packages} />
        </PageSection>

        <PageSection id="rate-card" className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-plain">Full rate card</span>
            <h2 className="mt-4 text-2xl font-semibold text-midnight sm:text-3xl">
              By duration and character count.
            </h2>
          </div>
          <PricingGuide guide={legacyPricingGuide} />
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(255,234,248,0.6),rgba(252,248,255,0.45))]"
        >
          <div className="glass-panel mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[2rem] p-8 text-center sm:p-10">
            <span className="eyebrow sparkle-dot">Ready?</span>
            <h2 className="max-w-xl text-3xl font-semibold text-midnight sm:text-4xl">
              Book your date.
            </h2>
            <p className="section-copy max-w-lg text-base">
              Weekend dates book fast. Send us the date, the character, and a
              few details - we&apos;ll reply within a day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/book" className="button-primary">
                Book a Party
              </Link>
              <Link href="/reviews" className="button-secondary">
                Read reviews
              </Link>
            </div>
          </div>
        </PageSection>
      </main>
      <Footer links={primaryNavigation} />
    </>
  );
}
