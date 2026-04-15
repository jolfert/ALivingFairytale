import { getMediaAsset, type MediaId } from "@/data/media";
import type {
  CharacterCategory,
  CharacterRecord,
  PackageRecord,
  ResolvedCharacter,
} from "@/data/types";

const characterCatalog: ReadonlyArray<CharacterRecord> = [
  {
    name: "Radiant Rose Princess",
    slug: "radiant-rose-princess",
    category: "Princess",
    shortDescription:
      "A beautiful fit for birthdays that want a royal welcome, soft storybook pacing, and polished photo moments.",
    longDescription:
      "A beautiful fit for birthdays that want a royal welcome, sweet storybook pacing, and polished photo moments from start to finish.",
    tags: ["Royal welcome", "Classic fairytale", "Photo favorite"],
    mainMediaId: "princessRoseMain",
    insetMediaId: "princessRosePortrait",
    featured: true,
  },
  {
    name: "Snowfall Princess",
    slug: "snowfall-princess",
    category: "Princess",
    shortDescription:
      "A sparkling, classic choice for children who love graceful magic, big reactions, and a celebration that feels full of wonder.",
    longDescription:
      "Ideal for children who light up around glittering magic, expressive moments, and a celebration that feels joyful, graceful, and instantly recognizable.",
    tags: ["Sparkle moments", "Big reactions", "Dreamy tone"],
    mainMediaId: "princessSnowMain",
    insetMediaId: "princessSnowPortrait",
    featured: true,
  },
  {
    name: "Lantern Garden Princess",
    slug: "lantern-garden-princess",
    category: "Princess",
    shortDescription:
      "Bright, curious, and full of warmth, she brings glowing energy and playful charm to every celebration.",
    longDescription:
      "Wonderful for birthdays that want glowing visuals, gentle humor, and a princess who feels curious, kind, and beautifully memorable.",
    tags: ["Golden glow", "Playful heart", "Storybook favorite"],
    mainMediaId: "princessTowerMain",
    insetMediaId: "princessTowerPortrait",
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
