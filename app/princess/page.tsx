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
import { princessPageContent } from "@/data/princess-page";

export const metadata: Metadata = {
  title: "Princess Parties",
  description:
    "Authentic ball gowns, trained performers, and the largest princess roster in Manitoba. Ariel, Belle, Cinderella, Ice Queen, Rapunzel, Jasmine and more.",
  alternates: { canonical: "/princess" },
  openGraph: {
    title: "Princess Parties | A Living Fairytale",
    description: "Authentic ball gowns and trained performers for princess birthdays in Manitoba.",
    url: "/princess",
  },
};

export default function PrincessPage() {
  return (
    <>
      <Header
        brandHref="/"
        cta={{ label: "Book a princess party", href: "/book" }}
      />
      <main
        id="top"
        className="relative overflow-x-clip bg-[linear-gradient(180deg,#fff8fc_0%,#fdf8ff_40%,#ffffff_100%)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] max-h-[80vh] bg-[radial-gradient(ellipse_at_26%_0%,rgba(245,102,187,0.14),transparent_55%),radial-gradient(ellipse_at_82%_12%,rgba(186,130,220,0.1),transparent_50%)]"
        />
        <CategoryHero content={princessPageContent.hero} theme="princess" />

        <PageSection id="characters" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={princessPageContent.sections.characters.eyebrow}
            title={princessPageContent.sections.characters.title}
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {princessPageContent.characters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="compact"
                theme="princess"
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          className="relative rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,241,248,0.55),rgba(248,239,255,0.35))]"
          spacing="tight"
        >
          <SectionHeading
            eyebrow={princessPageContent.sections.experience.eyebrow}
            title={princessPageContent.sections.experience.title}
            centered
          />
          <FeatureCardGrid items={princessPageContent.experienceCards} />
        </PageSection>

        <PageSection id="packages" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={princessPageContent.sections.packages.eyebrow}
            title={princessPageContent.sections.packages.title}
            description={princessPageContent.sections.packages.description}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <PackageTabs
              packages={princessPageContent.packages}
              tone="fairytale"
              bookLabel="Book this package"
            />
          </div>
          <div className="mx-auto mt-6 max-w-3xl">
            <Accordion>
              <AccordionItem title="See the full rate card">
                <PricingGuide guide={legacyPricingGuide} />
              </AccordionItem>
            </Accordion>
          </div>
        </PageSection>

        <PageSection
          id="book-cta"
          className="relative rounded-[2rem] bg-[linear-gradient(165deg,rgba(255,234,248,0.6),rgba(252,248,255,0.45))]"
        >
          <CtaBanner content={princessPageContent.cta} />
        </PageSection>
      </main>
      <Footer links={princessPageContent.navigation} />
    </>
  );
}
