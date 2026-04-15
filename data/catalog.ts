import { getMediaAsset, type MediaId } from "@/data/media";
import type {
  CharacterCategory,
  CharacterRecord,
  PackageRecord,
  ResolvedCharacter,
} from "@/data/types";

const characterCatalog: ReadonlyArray<CharacterRecord> = [
  {
    name: "Ariel",
    slug: "ariel",
    category: "Princess",
    shortDescription:
      "Sea-swept charm, bright smiles, and playful wonder for children who love mermaid magic.",
    longDescription:
      "A lively, picture-perfect choice for birthdays that want bright color, sweet interaction, and a princess who makes children feel instantly at ease.",
    tags: ["Mermaid magic", "Bright smiles", "Photo favorite"],
    mainMediaId: "arielMain",
    insetMediaId: "arielPortrait",
    detailHref: "/ariel",
    featured: true,
  },
  {
    name: "Belle",
    slug: "belle",
    category: "Princess",
    shortDescription:
      "Warm, elegant, and full of storybook sweetness for birthdays that want a classic princess feel.",
    longDescription:
      "A beautiful fit for birthdays that want a grand entrance, lovely photos, and a princess who feels kind, poised, and genuinely special in the room.",
    tags: ["Classic fairytale", "Royal welcome", "Golden gown"],
    mainMediaId: "belleMain",
    insetMediaId: "bellePortrait",
    detailHref: "/belle",
    featured: true,
  },
  {
    name: "Cinderella",
    slug: "cinderella",
    category: "Princess",
    shortDescription:
      "Graceful, polished, and full of storybook sparkle for children who dream in blue.",
    longDescription:
      "Perfect for elegant birthdays that want magical reactions, sweet activity moments, and the kind of princess photos families frame afterward.",
    tags: ["Blue gown", "Storybook elegance", "Dreamy photos"],
    mainMediaId: "cinderellaMain",
    insetMediaId: "cinderellaPortrait",
    detailHref: "/cinderella",
    featured: true,
  },
  {
    name: "Elsa",
    slug: "elsa",
    category: "Princess",
    shortDescription:
      "An icy favorite with shimmering style, warm interaction, and instant wow-factor the moment she arrives.",
    longDescription:
      "A magical choice for children who love snow-day sparkle, singalong energy, and beautiful frozen-inspired party memories.",
    tags: ["Frozen favorite", "Sparkle magic", "Big reactions"],
    mainMediaId: "elsaMain",
    insetMediaId: "elsaPortrait",
    detailHref: "/elsa",
    featured: true,
  },
  {
    name: "Jasmine",
    slug: "jasmine",
    category: "Princess",
    shortDescription:
      "Warm, vibrant, and full of heart for children who love bold color and adventurous princess magic.",
    longDescription:
      "Wonderful for birthdays that want bright smiles, warm hugs, and a princess who feels lively, elegant, and unforgettable.",
    tags: ["Bright color", "Adventure feel", "Warm hugs"],
    mainMediaId: "jasmineMain",
    insetMediaId: "jasminePortrait",
    detailHref: "/jasmine",
    featured: true,
  },
  {
    name: "Rapunzel",
    slug: "rapunzel",
    category: "Princess",
    shortDescription:
      "Golden, playful, and full of sunshine for children who love laughter, braids, and storybook adventure.",
    longDescription:
      "A lovely fit for birthdays that want lighthearted princess energy, playful moments, and a character children connect with right away.",
    tags: ["Long braid", "Playful heart", "Golden glow"],
    mainMediaId: "rapunzelMain",
    insetMediaId: "rapunzelPortrait",
    detailHref: "/rapunzel",
    featured: true,
  },
  {
    name: "Sleeping Beauty",
    slug: "sleeping-beauty",
    category: "Princess",
    shortDescription:
      "Soft pink elegance, gentle warmth, and a timeless fairytale feeling from first hello to final photo.",
    longDescription:
      "Ideal for celebrations that want a graceful princess presence, sweet conversation, and a classic rosy fairytale mood.",
    tags: ["Pink elegance", "Timeless fairytale", "Gentle warmth"],
    mainMediaId: "sleepingBeautyMain",
    insetMediaId: "sleepingBeautyPortrait",
    detailHref: "/sleeping-beauty",
    featured: true,
  },
  {
    name: "Snow White",
    slug: "snow-white",
    category: "Princess",
    shortDescription:
      "A bright, recognizable classic with cheerful energy and storybook charm.",
    longDescription:
      "Great for birthdays that want a timeless princess favorite, bold color, and warm interaction that keeps younger guests smiling.",
    tags: ["Classic favorite", "Bright palette", "Cheerful magic"],
    mainMediaId: "snowWhiteMain",
    insetMediaId: "snowWhitePortrait",
    detailHref: "/snow-white",
    featured: true,
  },
  {
    name: "Sofia",
    slug: "sofia",
    category: "Princess",
    shortDescription:
      "Sweet, approachable, and especially lovely for younger guests who want a princess that feels instantly friendly.",
    longDescription:
      "A wonderful choice for little ones who light up around purple sparkle, kind smiles, and gentle princess party fun.",
    tags: ["Younger favorite", "Purple sparkle", "Sweet arrival"],
    mainMediaId: "sofiaMain",
    insetMediaId: "sofiaPortrait",
    detailHref: "/sofia",
    featured: true,
  },
  {
    name: "Tinker Bell",
    slug: "tinker-bell",
    category: "Princess",
    shortDescription:
      "Playful fairy energy with bright color, pixie charm, and a little extra sparkle.",
    longDescription:
      "Perfect for celebrations that want a lighter fairy feel, a whimsical look, and cheerful character moments children remember.",
    tags: ["Pixie sparkle", "Fairy fun", "Bright green"],
    mainMediaId: "tinkerbellMain",
    insetMediaId: "tinkerbellPortrait",
    detailHref: "/tinker-bell",
    featured: true,
  },
  {
    name: "Skyline Hero",
    slug: "skyline-hero",
    category: "Hero",
    shortDescription:
      "A bold, high-energy hero choice for birthdays that want a confident entrance and unforgettable reactions.",
    longDescription:
      "A confident, high-energy character choice for birthdays that want a bold entrance, strong presence, and instantly exciting party photos.",
    tags: ["Epic arrival", "Action energy", "Birthday favorite"],
    mainMediaId: "heroSkylineMain",
    insetMediaId: "heroSkylinePortrait",
    featured: true,
  },
  {
    name: "Shield Captain",
    slug: "shield-captain",
    category: "Hero",
    shortDescription:
      "Strong, polished, and family-friendly, this hero brings brave energy and memorable party moments.",
    longDescription:
      "A polished hero pick for children who love brave characters, strong visuals, and a celebration that feels both exciting and family-friendly.",
    tags: ["Strong presence", "Heroic vibe", "Great reactions"],
    mainMediaId: "heroCaptainMain",
    insetMediaId: "heroCaptainPortrait",
    featured: true,
  },
  {
    name: "Photon Streak",
    slug: "photon-streak",
    category: "Hero",
    shortDescription:
      "Fast-moving, lively, and full of excitement, perfect for children who want their celebration to feel instantly epic.",
    longDescription:
      "Fast, fun, and full of momentum, this hero is perfect for kids who want a celebration that feels energetic from the moment the party starts.",
    tags: ["Fast-paced fun", "Big smiles", "High-energy pick"],
    mainMediaId: "heroVoltMain",
    insetMediaId: "heroVoltPortrait",
    featured: true,
  },
  {
    name: "Storybook Mouse",
    slug: "storybook-mouse",
    category: "Mascot",
    shortDescription:
      "A playful, recognizable favorite that brings cheerful smiles and a fun visual surprise to the party.",
    longDescription:
      "Ideal for younger guest lists and mixed ages: warm interaction, easy crowd energy, and photo moments that feel joyful instead of hectic.",
    tags: ["Warm welcomes", "Little-kid magic", "Photo favorite"],
    mainMediaId: "mascotPartyMain",
    insetMediaId: "partyMascotIcon",
    featured: true,
  },
  {
    name: "Pink Castle Bounce House",
    slug: "pink-castle-bounce-house",
    category: "Rental",
    shortDescription:
      "A bright, exciting add-on that gives children extra room to move, play, and keep the energy going.",
    longDescription:
      "Keeps younger guests happily busy and gives parents a clear visual anchor for photos. Pairs naturally with character visits when you want the day to feel fuller without a longer schedule.",
    tags: ["Wow at arrival", "Kid-powered fun", "Easy add-on"],
    mainMediaId: "rentalBounceMain",
    insetMediaId: "rentalSparkInset",
    featured: true,
  },
];

const packageCatalog: ReadonlyArray<PackageRecord> = [
  {
    slug: "mini-visit",
    name: "Mini Visit",
    duration: "30 minutes",
    description:
      "A quick burst of character magic for families who want a memorable entrance, cake moment, and beautiful photos without a longer activity block.",
    highlights: [
      "Wonderful for smaller celebrations or shorter schedules",
      "Perfect for cake, singing, hugs, and keepsake photos",
      "Easy to pair with add-ons or rentals",
    ],
  },
  {
    slug: "storybook-celebration",
    name: "Storybook Celebration",
    duration: "60 minutes",
    description:
      "Our most popular pace: enough time for a warm arrival, interactive moments, photos, and a celebration that feels complete.",
    highlights: [
      "A balanced choice for most birthday parties",
      "Great for games, storytelling, or hero missions",
      "Keeps the energy memorable without feeling rushed",
    ],
    featured: true,
  },
  {
    slug: "signature-fairytale",
    name: "Signature Fairytale",
    duration: "90 minutes",
    description:
      "A fuller premium experience with more time to settle in, create moments, and let the celebration breathe.",
    highlights: [
      "Lovely for larger guest lists or layered experiences",
      "More room for activities, keepsake photos, and a grand arrival",
      "A beautiful fit when you want the party to feel extra special",
    ],
  },
];

function resolveCharacter(character: CharacterRecord): ResolvedCharacter {
  return {
    ...character,
    mainMedia: getMediaAsset(character.mainMediaId as MediaId),
    insetMedia: character.insetMediaId
      ? getMediaAsset(character.insetMediaId as MediaId)
      : undefined,
  };
}

export const characters = characterCatalog.map(resolveCharacter);
export const packages = packageCatalog;

export function getCharactersByCategory(
  category: CharacterCategory,
): ReadonlyArray<ResolvedCharacter> {
  return characters.filter((character) => character.category === category);
}

export function getCharactersByCategories(
  categories: ReadonlyArray<CharacterCategory>,
): ReadonlyArray<ResolvedCharacter> {
  const list: ResolvedCharacter[] = [];
  for (const category of categories) {
    for (const character of characters) {
      if (character.category === category) {
        list.push(character);
      }
    }
  }
  return list;
}

export function pickCharacters(
  slugs: ReadonlyArray<string>,
): ReadonlyArray<ResolvedCharacter> {
  return slugs
    .map((slug) => characters.find((character) => character.slug === slug))
    .filter((character): character is ResolvedCharacter => Boolean(character));
}

export function pickPackages(
  slugs: ReadonlyArray<string>,
): ReadonlyArray<PackageRecord> {
  return slugs
    .map((slug) => packageCatalog.find((pkg) => pkg.slug === slug))
    .filter((pkg): pkg is PackageRecord => Boolean(pkg));
}

export function getCharacterBySlug(slug: string): ResolvedCharacter | undefined {
  return characters.find((character) => character.slug === slug);
}

export function getCharactersWithDetailPages(): ReadonlyArray<ResolvedCharacter> {
  return characters.filter((character) => Boolean(character.detailHref));
}
