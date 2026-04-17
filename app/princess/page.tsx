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
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#fff5fb_0%,#fdf8ff_38%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] max-h-[78vh] bg-[radial-gradient(ellipse_at_28%_0%,rgba(245,102,187,0.18),transparent_55%),radial-gradient(ellipse_at_78%_12%,rgba(186,130,220,0.14),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(220,120,180,0.05),transparent_45%)]"
        />
        <CategoryHero content={princessPageContent.hero} theme="princess" />

        <PageSection id="characters" className="relative">
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

        <PageSection className="relative rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,241,248,0.6),rgba(248,239,255,0.4))]">
          <SectionHeading
            eyebrow={princessPageContent.sections.experience.eyebrow}
            title={princessPageContent.sections.experience.title}
            description={princessPageContent.sections.experience.description}
          />
          <FeatureCardGrid items={princessPageContent.experienceCards} />
        </PageSection>

        <PageSection id="packages" className="relative">
          <SectionHeading
            eyebrow={princessPageContent.sections.packages.eyebrow}
            title={princessPageContent.sections.packages.title}
            description={princessPageContent.sections.packages.description}
          />
          <PackageGrid packages={princessPageContent.packages} />
          <PricingGuide guide={legacyPricingGuide} />
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2.5rem] bg-[linear-gradient(165deg,rgba(255,234,248,0.65),rgba(252,248,255,0.5))]"
        >
          <CtaBanner content={princessPageContent.cta} />
        </PageSection>
      </main>
      <Footer links={princessPageContent.navigation} />
    </>
  );
}
