export type LinkConfig = {
  label: string;
  href: string;
};

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  status: "approved" | "placeholder";
  adminLabel: string;
  replaceHint: string;
  aiTags: ReadonlyArray<string>;
  mappingNote?: string;
};

export type CharacterCategory =
  | "Princess"
  | "Hero"
  | "Mascot"
  | "Rental";

export type CharacterRecord = {
  name: string;
  slug: string;
  category: CharacterCategory;
  shortDescription: string;
  longDescription?: string;
  tags: ReadonlyArray<string>;
  mainMediaId: string;
  insetMediaId?: string;
  detailHref?: string;
  featured?: boolean;
};

export type ResolvedCharacter = Omit<
  CharacterRecord,
  "mainMediaId" | "insetMediaId"
> & {
  mainMedia: MediaAsset;
  insetMedia?: MediaAsset;
};

export type PackageRecord = {
  slug: string;
  name: string;
  duration: string;
  description: string;
  highlights: ReadonlyArray<string>;
  featured?: boolean;
};

export type InfoCard = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: string;
};

export type CategoryHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: ReadonlyArray<string>;
  primaryCta: LinkConfig;
  secondaryCta?: LinkConfig;
  mainMedia: MediaAsset;
  insetMedia?: MediaAsset;
  panelEyebrow: string;
  panelTitle: string;
  panelDescription: string;
  supportingCards: ReadonlyArray<InfoCard>;
};

export type CtaBannerContent = {
  eyebrow: string;
  title: string;
  description: string;
  notes: ReadonlyArray<string>;
  primaryCta: LinkConfig;
  secondaryCta?: LinkConfig;
};

export type CharacterPageContent = {
  slug: string;
  theme: "princess" | "hero" | "playful";
  navigation: ReadonlyArray<LinkConfig>;
  hero: CategoryHeroContent;
  sections: {
    highlights: {
      eyebrow: string;
      title: string;
      description: string;
    };
    related: {
      eyebrow: string;
      title: string;
      description: string;
    };
    packages: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  highlightCards: ReadonlyArray<InfoCard>;
  relatedCharacters: ReadonlyArray<string>;
  packageSlugs: ReadonlyArray<string>;
  cta: CtaBannerContent;
};
