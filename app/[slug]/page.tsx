import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/shared/cta-banner";
import { CategoryHero } from "@/components/shared/category-hero";
import { CharacterCard } from "@/components/shared/character-card";
import { FeatureCardGrid } from "@/components/shared/feature-card-grid";
import { PackageTabs } from "@/components/shared/package-tabs";
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

const themeBackgrounds = {
  princess: {
    page: "bg-[linear-gradient(180deg,#fff8fc_0%,#fdf8ff_40%,#ffffff_100%)]",
    glow:
      "bg-[radial-gradient(ellipse_at_26%_0%,rgba(245,102,187,0.14),transparent_55%),radial-gradient(ellipse_at_82%_12%,rgba(186,130,220,0.1),transparent_50%)]",
    experienceBand:
      "bg-[linear-gradient(180deg,rgba(255,241,248,0.55),rgba(248,239,255,0.35))]",
    ctaBand:
      "bg-[linear-gradient(165deg,rgba(255,234,248,0.6),rgba(252,248,255,0.45))]",
  },
  hero: {
    page: "bg-[linear-gradient(180deg,#f3f7ff_0%,#f8fbff_40%,#ffffff_100%)]",
    glow:
      "bg-[radial-gradient(ellipse_at_72%_0%,rgba(42,98,195,0.18),transparent_58%),radial-gradient(ellipse_at_14%_14%,rgba(56,130,200,0.12),transparent_50%)]",
    experienceBand:
      "bg-[linear-gradient(180deg,rgba(228,238,255,0.5),rgba(244,248,255,0.32))]",
    ctaBand:
      "bg-[linear-gradient(165deg,rgba(222,234,255,0.6),rgba(248,251,255,0.45))]",
  },
  playful: {
    page: "bg-[linear-gradient(180deg,#f7fff9_0%,#fbfff7_40%,#ffffff_100%)]",
    glow:
      "bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,214,123,0.2),transparent_55%),radial-gradient(ellipse_at_80%_8%,rgba(65,181,111,0.12),transparent_50%)]",
    experienceBand:
      "bg-[linear-gradient(180deg,rgba(240,255,245,0.55),rgba(255,253,235,0.35))]",
    ctaBand:
      "bg-[linear-gradient(165deg,rgba(232,255,242,0.6),rgba(255,253,235,0.45))]",
  },
} as const;

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
  const bg = themeBackgrounds[content.theme];
  const tone = content.theme === "princess" ? "fairytale" : content.theme;
  const relatedCardTheme =
    content.theme === "playful" ? "playful" : content.theme;

  return (
    <>
      <Header
        brandHref="/"
        cta={{ label: `Book ${content.hero.eyebrow}`, href: "/book" }}
      />
      <main id="top" className={`relative overflow-x-clip ${bg.page}`}>
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-[40rem] max-h-[80vh] ${bg.glow}`}
        />
        <CategoryHero content={content.hero} theme={content.theme} />

        <PageSection
          id="highlights"
          className={`relative rounded-[2rem] ${bg.experienceBand}`}
          spacing="tight"
        >
          <SectionHeading
            eyebrow={content.sections.highlights.eyebrow}
            title={content.sections.highlights.title}
            centered
          />
          <FeatureCardGrid items={content.highlightCards} tone={tone} />
        </PageSection>

        <PageSection id="packages" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={content.sections.packages.eyebrow}
            title={content.sections.packages.title}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <PackageTabs packages={packages} tone={tone} />
          </div>
        </PageSection>

        <PageSection id="related" className="relative" spacing="tight">
          <SectionHeading
            eyebrow={content.sections.related.eyebrow}
            title={content.sections.related.title}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedCharacters.map((character) => (
              <CharacterCard
                key={character.slug}
                character={character}
                variant="compact"
                theme={relatedCardTheme}
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="book-cta"
          className={`relative rounded-[2rem] ${bg.ctaBand}`}
        >
          <CtaBanner content={content.cta} tone={tone} />
        </PageSection>
      </main>
      <Footer links={content.navigation} />
    </>
  );
}
