import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryHero } from "@/components/shared/category-hero";
import { CharacterCard } from "@/components/shared/character-card";
import { FeatureCardGrid } from "@/components/shared/feature-card-grid";
import { Accordion, AccordionItem } from "@/components/shared/accordion";
import { PackageTabs } from "@/components/shared/package-tabs";
import { PageSection } from "@/components/shared/page-section";
import { PricingGuide } from "@/components/shared/pricing-guide";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { legacyPricingGuide } from "@/data/catalog";
import { heroesPageContent } from "@/data/heroes-page";

export const metadata: Metadata = {
  title: "Superhero Parties",
  description:
    "Batman, Spiderman, Wonder Woman, Star Wars and more. Big entrances, hero missions, and photos worth show-and-tell.",
  alternates: { canonical: "/heroes" },
  openGraph: {
    title: "Superhero Parties | A Living Fairytale",
    description: "Superhero birthday parties with dramatic arrivals and hero missions.",
    url: "/heroes",
  },
};

export default function HeroesPage() {
  return (
    <>
      <Header
        brandHref="/"
        cta={{ label: "Book a superhero party", href: "/book" }}
      />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#f3f7ff_0%,#f8fbff_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] max-h-[80vh] bg-[radial-gradient(ellipse_at_72%_0%,rgba(42,98,195,0.18),transparent_58%),radial-gradient(ellipse_at_14%_14%,rgba(56,130,200,0.12),transparent_50%)]"
        />
        <CategoryHero content={heroesPageContent.hero} theme="hero" />

        <PageSection id="characters" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={heroesPageContent.sections.characters.eyebrow}
            title={heroesPageContent.sections.characters.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {heroesPageContent.characters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="compact"
                theme="hero"
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          className="relative rounded-[2rem] bg-[linear-gradient(180deg,rgba(228,238,255,0.5),rgba(244,248,255,0.32))]"
          spacing="tight"
        >
          <SectionHeading
            eyebrow={heroesPageContent.sections.experience.eyebrow}
            title={heroesPageContent.sections.experience.title}
            centered
          />
          <FeatureCardGrid
            items={heroesPageContent.experienceCards}
            tone="hero"
          />
        </PageSection>

        <PageSection id="packages" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={heroesPageContent.sections.packages.eyebrow}
            title={heroesPageContent.sections.packages.title}
            description={heroesPageContent.sections.packages.description}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <PackageTabs
              packages={heroesPageContent.packages}
              tone="hero"
              bookLabel="Book this package"
            />
          </div>
          <div className="mx-auto mt-6 max-w-3xl">
            <Accordion>
              <AccordionItem title="See the full rate card">
                <PricingGuide guide={legacyPricingGuide} tone="hero" />
              </AccordionItem>
            </Accordion>
          </div>
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(222,234,255,0.6),rgba(248,251,255,0.45))]"
        >
          <CtaBanner content={heroesPageContent.cta} tone="hero" />
        </PageSection>
      </main>
      <Footer links={heroesPageContent.navigation} />
    </>
  );
}
