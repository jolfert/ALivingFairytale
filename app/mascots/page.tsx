import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryHero } from "@/components/shared/category-hero";
import { CharacterCard } from "@/components/shared/character-card";
import { FeatureCardGrid } from "@/components/shared/feature-card-grid";
import { PackageGrid } from "@/components/shared/package-grid";
import { PageSection } from "@/components/shared/page-section";
import { PricingGuide } from "@/components/shared/pricing-guide";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { legacyPricingGuide } from "@/data/catalog";
import { mascotsPageContent } from "@/data/mascots-page";

export const metadata: Metadata = {
  title: "Mascots & Rentals",
  description:
    "Playful mascot visits and party rentals under one premium brand, with simple planning, warm communication, and a clear path to book.",
  alternates: { canonical: "/mascots" },
  openGraph: {
    title: "Mascots & Rentals | A Living Fairytale",
    description:
      "Bright mascot and rental party options with the same premium, parent-friendly booking flow.",
    url: "/mascots",
  },
};

export default function MascotsPage() {
  return (
    <>
      <Header
        links={mascotsPageContent.navigation}
        brandHref="/"
        cta={{ label: "Book", href: "/book" }}
      />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#f7fff9_0%,#fbfff7_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] max-h-[70vh] bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,214,123,0.2),transparent_55%),radial-gradient(ellipse_at_80%_8%,rgba(65,181,111,0.12),transparent_50%)]"
        />
        <CategoryHero content={mascotsPageContent.hero} theme="playful" />

        <PageSection id="showcase" className="relative">
          <SectionHeading
            eyebrow={mascotsPageContent.sections.showcase.eyebrow}
            title={mascotsPageContent.sections.showcase.title}
            description={mascotsPageContent.sections.showcase.description}
          />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {mascotsPageContent.showcaseCharacters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="showcase"
                theme="playful"
              />
            ))}
          </div>
        </PageSection>

        <PageSection className="relative rounded-[2rem] bg-[linear-gradient(180deg,rgba(240,255,245,0.55),rgba(255,253,235,0.35))]">
          <SectionHeading
            eyebrow={mascotsPageContent.sections.greatFor.eyebrow}
            title={mascotsPageContent.sections.greatFor.title}
            description={mascotsPageContent.sections.greatFor.description}
          />
          <FeatureCardGrid
            items={mascotsPageContent.greatForCards}
            tone="playful"
          />
        </PageSection>

        <PageSection id="packages" className="relative">
          <SectionHeading
            eyebrow={mascotsPageContent.sections.packages.eyebrow}
            title={mascotsPageContent.sections.packages.title}
            description={mascotsPageContent.sections.packages.description}
          />
          <PackageGrid packages={mascotsPageContent.packages} tone="playful" />
          <PricingGuide guide={legacyPricingGuide} tone="playful" />
          <p className="section-copy mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed sm:text-base">
            {mascotsPageContent.bookingNote}
          </p>
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(232,255,242,0.6),rgba(255,253,235,0.45))]"
        >
          <CtaBanner content={mascotsPageContent.cta} tone="playful" />
        </PageSection>
      </main>
      <Footer links={mascotsPageContent.navigation} />
    </>
  );
}
