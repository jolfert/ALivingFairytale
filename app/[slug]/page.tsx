import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryHero } from "@/components/shared/category-hero";
import { CharacterCard } from "@/components/shared/character-card";
import { FeatureCardGrid } from "@/components/shared/feature-card-grid";
import { PackageGrid } from "@/components/shared/package-grid";
import { PageSection } from "@/components/shared/page-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  characterDetailSlugs,
  getCharacterPageContent,
  getCharacterPagePackages,
  getCharacterPageRelated,
} from "@/data/character-pages";

type CharacterPageProps = PageProps<"/[slug]">;

export async function generateStaticParams() {
  return characterDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CharacterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getCharacterPageContent(slug);

  if (!content) {
    return {};
  }

  return {
    title: content.hero.eyebrow,
    description: content.hero.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${content.hero.eyebrow} | A Living Fairytale`,
      description: content.hero.description,
      url: `/${slug}`,
      images: [
        {
          url: content.hero.mainMedia.src,
          alt: content.hero.mainMedia.alt,
        },
      ],
    },
  };
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  const content = getCharacterPageContent(slug);

  if (!content) {
    notFound();
  }

  const relatedCharacters = getCharacterPageRelated(slug);
  const packages = getCharacterPagePackages(slug);

  return (
    <>
      <Header
        links={content.navigation}
        brandHref="/"
        cta={{ label: `Book ${content.hero.eyebrow}`, href: "/book" }}
      />
      <main id="top" className="relative overflow-x-clip pb-20">
        <CategoryHero content={content.hero} theme={content.theme} />

        <PageSection id="highlights">
          <SectionHeading
            eyebrow={content.sections.highlights.eyebrow}
            title={content.sections.highlights.title}
            description={content.sections.highlights.description}
          />
          <FeatureCardGrid
            items={content.highlightCards}
            tone={content.theme === "princess" ? "fairytale" : content.theme}
          />
        </PageSection>

        <PageSection id="related">
          <SectionHeading
            eyebrow={content.sections.related.eyebrow}
            title={content.sections.related.title}
            description={content.sections.related.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {relatedCharacters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="compact"
                theme={content.theme === "playful" ? "playful" : content.theme}
              />
            ))}
          </div>
        </PageSection>

        <PageSection id="packages">
          <SectionHeading
            eyebrow={content.sections.packages.eyebrow}
            title={content.sections.packages.title}
            description={content.sections.packages.description}
          />
          <PackageGrid
            packages={packages}
            tone={content.theme === "princess" ? "fairytale" : content.theme}
          />
        </PageSection>

        <PageSection id="book-cta">
          <CtaBanner
            content={content.cta}
            tone={content.theme === "princess" ? "fairytale" : content.theme}
          />
        </PageSection>
      </main>
      <Footer links={content.navigation} />
    </>
  );
}
