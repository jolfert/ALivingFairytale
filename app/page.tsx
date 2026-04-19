import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/home/final-cta";
import { HomeHero } from "@/components/home/home-hero";
import { PartyPathCard } from "@/components/home/party-path-card";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { TrustPillars } from "@/components/home/trust-pillars";
import { Accordion, AccordionItem } from "@/components/shared/accordion";
import { CharacterCard } from "@/components/shared/character-card";
import { PackageTabs } from "@/components/shared/package-tabs";
import { PageSection } from "@/components/shared/page-section";
import { PricingGuide } from "@/components/shared/pricing-guide";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { legacyPricingGuide } from "@/data/catalog";
import { homepageContent } from "@/data/homepage";
import { getFeaturedTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: {
    absolute: "A Living Fairytale | Manitoba's Premier Children's Entertainers",
  },
  description:
    "Manitoba's premier children's character entertainment since 2011. Princess parties, superhero parties, mascot suits and party rentals.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A Living Fairytale | Manitoba's Premier Children's Entertainers",
    description:
      "Theme-park quality princess parties, superhero parties, mascots and rentals across Manitoba since 2011.",
    url: "/",
  },
};

export default function HomePage() {
  const featuredTestimonials = getFeaturedTestimonials();

  return (
    <>
      <Header />
      <main id="top" className="relative overflow-x-clip">
        <HomeHero content={homepageContent.hero} />

        {/* Party paths */}
        <PageSection id="paths" spacing="tight">
          <SectionHeading
            eyebrow={homepageContent.sections.paths.eyebrow}
            title={homepageContent.sections.paths.title}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {homepageContent.partyPaths.map((path) => (
              <PartyPathCard key={path.title} path={path} />
            ))}
          </div>
        </PageSection>

        {/* Trust pillars — compact 5-tile strip on desktop, stacked on mobile */}
        <div className="bg-[linear-gradient(180deg,transparent_0%,rgba(246,241,255,0.5)_8%,rgba(246,241,255,0.5)_92%,transparent_100%)]">
          <PageSection id="why-us" spacing="tight">
            <SectionHeading
              eyebrow={homepageContent.sections.whyUs.eyebrow}
              title={homepageContent.sections.whyUs.title}
              centered
            />
            <TrustPillars pillars={homepageContent.trustPillars} />
          </PageSection>
        </div>

        {/* Featured characters */}
        <PageSection id="featured-experiences" spacing="tight">
          <SectionHeading
            eyebrow={homepageContent.sections.featured.eyebrow}
            title={homepageContent.sections.featured.title}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Testimonials */}
        <div className="bg-[linear-gradient(180deg,transparent_0%,rgba(255,241,248,0.42)_8%,rgba(255,241,248,0.42)_92%,transparent_100%)]">
          <PageSection id="testimonials" spacing="tight">
            <SectionHeading
              eyebrow={homepageContent.sections.testimonials.eyebrow}
              title={homepageContent.sections.testimonials.title}
              centered
            />
            <TestimonialsPreview testimonials={featuredTestimonials} />
          </PageSection>
        </div>

        {/* Packages — compact tabs, full rate card behind an accordion */}
        <PageSection id="packages" spacing="tight">
          <SectionHeading
            eyebrow={homepageContent.sections.packages.eyebrow}
            title={homepageContent.sections.packages.title}
            description={homepageContent.sections.packages.description}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <PackageTabs packages={homepageContent.packages} />
          </div>
          <div className="mx-auto mt-6 max-w-3xl">
            <Accordion>
              <AccordionItem title="See the full rate card">
                <PricingGuide guide={legacyPricingGuide} />
              </AccordionItem>
            </Accordion>
          </div>
          <p className="mt-6 text-center">
            <Link href="/pricing" className="inline-link text-sm font-semibold">
              Open full pricing page
            </Link>
          </p>
        </PageSection>

        {/* Final CTA */}
        <PageSection id="book-preview" spacing="tight">
          <FinalCta content={homepageContent.finalCta} />
        </PageSection>
      </main>
      <Footer links={homepageContent.navigation} />
    </>
  );
}
