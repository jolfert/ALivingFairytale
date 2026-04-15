import { FeaturedExperiences } from "@/components/home/featured-experiences";
import { FinalCta } from "@/components/home/final-cta";
import { HomeHero } from "@/components/home/home-hero";
import { PackagePreview } from "@/components/home/package-preview";
import { PartyPathCard } from "@/components/home/party-path-card";
import { Testimonials } from "@/components/home/testimonials";
import { TrustPillars } from "@/components/home/trust-pillars";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  featuredHomepageCharacters,
  homeHero,
  navigationLinks,
  packages,
  partyPaths,
  testimonials,
  trustPillars,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <Header links={navigationLinks} />
      <main id="top" className="relative overflow-x-clip pb-20">
        <HomeHero content={homeHero} />

        <section
          id="why-us"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Why parents keep choosing us"
            title="The magic feels big for children and easy for grown-ups."
            description="Every part of the experience is designed to reduce stress: warm communication, polished performers, and party options that make it simple to pick the right fit."
          />
          <TrustPillars pillars={trustPillars} />
        </section>

        <section
          id="paths"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Choose your kind of magic"
            title="One premium brand, three beautifully different party paths."
            description="Princess celebrations stay dreamy and elegant, hero events feel bold and high-energy, and mascots plus rentals keep the fun bright and effortless."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {partyPaths.map((path) => (
              <PartyPathCard key={path.title} path={path} />
            ))}
          </div>
        </section>

        <section
          id="featured-experiences"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Featured party types"
            title="Every booking starts with a character kids cannot stop talking about."
            description="The homepage is built around standout experiences first, so future princess, hero, mascot, and rental pages can all plug into the same polished content model."
          />
          <FeaturedExperiences characters={featuredHomepageCharacters} />
        </section>

        <section
          id="packages"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Simple package overview"
            title="Easy to understand now, easy to expand into full pricing later."
            description="For the first launch, the focus is on clarity instead of fake precision. Families can quickly compare the shape of each experience, then confirm details during inquiry."
          />
          <PackagePreview packages={packages} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust built right into the layout"
            title="This section is ready for approved reviews without forcing fake testimonials today."
            description="Until final review copy is gathered, the homepage still earns confidence through clear promises, warm service language, and a booking flow that feels cared for."
          />
          <Testimonials items={testimonials} />
        </section>

        <section
          id="book-preview"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <FinalCta />
        </section>
      </main>
      <Footer links={navigationLinks} />
    </>
  );
}
