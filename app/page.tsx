import type { Metadata } from "next";
import { FinalCta } from "@/components/home/final-cta";
import { HomeHero } from "@/components/home/home-hero";
import { PartyPathCard } from "@/components/home/party-path-card";
import { TrustPillars } from "@/components/home/trust-pillars";
import { CharacterCard } from "@/components/shared/character-card";
import { PackageGrid } from "@/components/shared/package-grid";
import { PageSection } from "@/components/shared/page-section";
import { PricingGuide } from "@/components/shared/pricing-guide";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { legacyPricingGuide } from "@/data/catalog";
import { homepageContent } from "@/data/homepage";

export const metadata: Metadata = {
  title: {
    absolute: "A Living Fairytale | Magical Children's Party Experiences",
  },
  description:
    "Princess parties, superhero adventures, mascots, and party-ready rentals under one premium brand, with warm communication and a clear path to book.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A Living Fairytale | Magical Children's Party Experiences",
    description:
      "Princess parties, superhero adventures, mascots, and memorable birthday magic for families who want polish and ease.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Header links={homepageContent.navigation} />
      <main id="top" className="relative overflow-x-clip">

        <HomeHero content={homepageContent.hero} />

        {/* Party paths — tight top so it flows naturally from the hero */}
        <PageSection id="paths" spacing="tight">
          <SectionHeading
            eyebrow={homepageContent.sections.paths.eyebrow}
            title={homepageContent.sections.paths.title}
            description={homepageContent.sections.paths.description}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {homepageContent.partyPaths.map((path) => (
              <PartyPathCard key={path.title} path={path} />
            ))}
          </div>
        </PageSection>

        {/* Why families choose us — mist background band, centered heading */}
        <div className="bg-[linear-gradient(180deg,transparent_0%,rgba(246,241,255,0.55)_6%,rgba(246,241,255,0.55)_94%,transparent_100%)]">
          <PageSection id="why-us">
            <SectionHeading
              eyebrow={homepageContent.sections.whyUs.eyebrow}
              title={homepageContent.sections.whyUs.title}
              description={homepageContent.sections.whyUs.description}
              centered
            />
            <TrustPillars pillars={homepageContent.trustPillars} />
          </PageSection>
        </div>

        {/* Featured characters */}
        <PageSection id="featured-experiences">
          <SectionHeading
            eyebrow={homepageContent.sections.featured.eyebrow}
            title={homepageContent.sections.featured.title}
            description={homepageContent.sections.featured.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homepageContent.featuredCharacters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="compact"
                theme={
                  character.category === "Princess"
                    ? "princess"
                    : character.category === "Hero"
                      ? "hero"
                      : "playful"
                }
              />
            ))}
          </div>
        </PageSection>

        {/* Packages — blush background band */}
        <div className="bg-[linear-gradient(180deg,transparent_0%,rgba(255,241,248,0.45)_6%,rgba(255,241,248,0.45)_94%,transparent_100%)]">
          <PageSection id="packages">
            <SectionHeading
              eyebrow={homepageContent.sections.packages.eyebrow}
              title={homepageContent.sections.packages.title}
              description={homepageContent.sections.packages.description}
            />
            <PackageGrid packages={homepageContent.packages} />
            <PricingGuide guide={legacyPricingGuide} />
          </PageSection>
        </div>

        {/* Final CTA */}
        <PageSection id="book-preview" spacing="tight">
          <FinalCta content={homepageContent.finalCta} />
        </PageSection>

      </main>
      <Footer links={homepageContent.navigation} />
    </>
  );
}
