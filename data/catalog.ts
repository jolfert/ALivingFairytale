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
      "Warm, graceful, and perfect for a celebration that leans classic, elegant, and picture-ready.",
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
      "A sparkling choice for children who love winter wonder, bright smiles, and magical singalong energy.",
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
      "Golden, playful, and full of warm-hearted storybook energy for children who love adventurous princess magic.",
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
      "Fast-paced, confident, and ideal for kids who want a party that feels active from the very first entrance.",
    longDescription:
      "Built for birthdays that want a bold arrival, playful hero training, and celebration energy that stays exciting without tipping into chaos.",
    tags: ["Hero training", "Action energy", "Arrival wow-factor"],
    mainMediaId: "heroSkylineMain",
    insetMediaId: "heroSkylinePortrait",
    featured: true,
  },
  {
    name: "Shield Captain",
    slug: "shield-captain",
    category: "Hero",
    shortDescription:
      "A courageous, team-first hero vibe that works beautifully for mission-style celebrations.",
    longDescription:
      "Wonderful for parties that want teamwork challenges, leadership energy, and heroic photo moments that still feel polished for the grown-ups in the room.",
    tags: ["Team moments", "Leadership feel", "Strong pacing"],
    mainMediaId: "heroCaptainMain",
    insetMediaId: "heroCaptainPortrait",
    featured: true,
  },
  {
    name: "Photon Streak",
    slug: "photon-streak",
    category: "Hero",
    shortDescription:
      "Lightning-fast fun for kids who want motion, sound effects, and a celebration that feels like a victory lap.",
    longDescription:
      "A kinetic pick for active guest lists: quick games, playful call-and-response energy, and memorable moments that feel exciting without losing the premium brand tone.",
    tags: ["Motion-forward", "Big laughs", "Victory moments"],
    mainMediaId: "heroVoltMain",
    insetMediaId: "heroVoltPortrait",
    featured: true,
  },
  {
    name: "Storybook Mouse",
    slug: "storybook-mouse",
    category: "Mascot",
    shortDescription:
      "Playful, instantly recognizable, and a joyful pick for younger guests and big group smiles.",
    longDescription:
      "A warm choice for mixed ages: approachable interaction, easy crowd energy, and photo moments that feel happy instead of hectic.",
    tags: ["Big hugs", "Simple fun", "Photo magnet"],
    mainMediaId: "partyMascotIcon",
    featured: true,
  },
  {
    name: "Pink Castle Bounce House",
    slug: "pink-castle-bounce-house",
    category: "Rental",
    shortDescription:
      "Bright, cheerful, and an easy way to make the party feel bigger the moment guests arrive.",
    longDescription:
      "Adds instant visual impact and keeps younger guests happily busy. It pairs naturally with character visits when you want the celebration to feel fuller from the first look.",
    tags: ["Party extra", "Visual impact", "Easy add-on"],
    mainMediaId: "rentalBounceMain",
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
