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
import { princessPageContent } from "@/data/princess-page";

export const metadata: Metadata = {
  title: "Princess Parties",
  description:
    "Elegant princess party experiences with polished arrivals, story-led interaction, and magical birthday moments families can book with confidence.",
  alternates: { canonical: "/princess" },
  openGraph: {
    title: "Princess Parties | A Living Fairytale",
    description:
      "Elegant princess party experiences with polished arrivals and story-led magic.",
    url: "/princess",
  },
};

export default function PrincessPage() {
  return (
    <>
      <Header
        links={princessPageContent.navigation}
        brandHref="/"
        cta={{ label: "Book a princess party", href: "/book" }}
      />
      <main id="top" className="relative overflow-x-clip pb-20">
        <CategoryHero content={princessPageContent.hero} theme="princess" />

        <PageSection id="characters">
          <SectionHeading
            eyebrow={princessPageContent.sections.characters.eyebrow}
            title={princessPageContent.sections.characters.title}
            description={princessPageContent.sections.characters.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {princessPageContent.characters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="showcase"
                theme="princess"
              />
            ))}
          </div>
        </PageSection>

        <PageSection>
          <SectionHeading
            eyebrow={princessPageContent.sections.experience.eyebrow}
            title={princessPageContent.sections.experience.title}
            description={princessPageContent.sections.experience.description}
          />
          <FeatureCardGrid items={princessPageContent.experienceCards} />
        </PageSection>

        <PageSection id="packages">
          <SectionHeading
            eyebrow={princessPageContent.sections.packages.eyebrow}
            title={princessPageContent.sections.packages.title}
            description={princessPageContent.sections.packages.description}
          />
          <PackageGrid packages={princessPageContent.packages} />
          <PricingGuide guide={legacyPricingGuide} />
        </PageSection>

        <PageSection id="book-cta">
          <CtaBanner content={princessPageContent.cta} />
        </PageSection>
      </main>
      <Footer links={princessPageContent.navigation} />
    </>
  );
}
