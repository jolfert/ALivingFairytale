import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryHero } from "@/components/shared/category-hero";
import { CharacterCard } from "@/components/shared/character-card";
import { FeatureCardGrid } from "@/components/shared/feature-card-grid";
import { PackageGrid } from "@/components/shared/package-grid";
import { PageSection } from "@/components/shared/page-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { heroesPageContent } from "@/data/heroes-page";

export const metadata: Metadata = {
  title: "Superhero Parties",
  description:
    "Premium superhero birthday experiences with Batman, Spider-Man, bold arrivals, and a parent-friendly pace families can book with confidence.",
  alternates: { canonical: "/heroes" },
  openGraph: {
    title: "Superhero Parties | A Living Fairytale",
    description:
      "High-energy superhero parties with confident arrivals and a premium pace parents trust.",
    url: "/heroes",
  },
};

export default function HeroesPage() {
  return (
    <>
      <Header
        links={heroesPageContent.navigation}
        brandHref="/"
        cta={{ label: "Book a superhero party", href: "/book" }}
      />
      <main id="top" className="relative overflow-x-clip pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] max-h-[70vh] bg-[radial-gradient(ellipse_at_70%_0%,rgba(77,104,204,0.14),transparent_55%),radial-gradient(ellipse_at_20%_10%,rgba(125,100,255,0.12),transparent_50%)]"
        />
        <CategoryHero content={heroesPageContent.hero} theme="hero" />

        <PageSection id="characters" className="relative">
          <SectionHeading
            eyebrow={heroesPageContent.sections.characters.eyebrow}
            title={heroesPageContent.sections.characters.title}
            description={heroesPageContent.sections.characters.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {heroesPageContent.characters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="showcase"
                theme="hero"
              />
            ))}
          </div>
        </PageSection>

        <PageSection className="relative">
          <SectionHeading
            eyebrow={heroesPageContent.sections.experience.eyebrow}
            title={heroesPageContent.sections.experience.title}
            description={heroesPageContent.sections.experience.description}
          />
          <FeatureCardGrid
            items={heroesPageContent.experienceCards}
            tone="hero"
          />
        </PageSection>

        <PageSection id="packages" className="relative">
          <SectionHeading
            eyebrow={heroesPageContent.sections.packages.eyebrow}
            title={heroesPageContent.sections.packages.title}
            description={heroesPageContent.sections.packages.description}
          />
          <PackageGrid packages={heroesPageContent.packages} tone="hero" />
        </PageSection>

        <PageSection id="book-cta" className="relative">
          <CtaBanner content={heroesPageContent.cta} tone="hero" />
        </PageSection>
      </main>
      <Footer links={heroesPageContent.navigation} />
    </>
  );
}
