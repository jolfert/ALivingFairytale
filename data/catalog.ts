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
      "A beautiful fit for birthdays that want a royal welcome, gentle storybook pacing, and polished photo moments from start to finish.",
    tags: ["Royal welcome", "Coronation charm", "Photo favorite"],
    mainMediaId: "princessRoseMain",
    insetMediaId: "princessRosePortrait",
    featured: true,
  },
  {
    name: "Snowfall Princess",
    slug: "snowfall-princess",
    category: "Princess",
    shortDescription:
      "A sparkling option for children who love magical songs, glowing smiles, and a cool-toned winter fairytale feel.",
    longDescription:
      "Ideal for children who want glittering wonder, expressive moments, and a celebration that feels bright, joyful, and instantly recognizable.",
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
      "Wonderful for celebrations that want soft humor, glowing visuals, and a character who feels curious, kind, and memorable.",
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
      "Fast-paced, confident, and ideal for kids who want a party that feels active from start to finish.",
    longDescription:
      "Built for birthdays that want a bold arrival, playful hero training, and energy that stays organized instead of chaotic. The pacing keeps big reactions while still feeling premium for parents in the room.",
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
      "A courageous, team-focused hero vibe that works beautifully for mission-style celebrations.",
    longDescription:
      "Wonderful for parties that want teamwork challenges, confident leadership energy, and photo moments that still feel heroic rather than rough. Parents get a clear story arc from arrival to celebration peak.",
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
      "A kinetic pick for active guest lists: quick games, call-and-response energy, and memorable moments that feel exciting without losing the polished brand tone families expect from A Living Fairytale.",
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
      "A warm pick for mixed ages: approachable interaction, easy crowd energy, and photo moments that feel happy instead of hectic. Great when you want recognizable fun without a complex storyline.",
    tags: ["Big hugs", "Simple fun", "Photo magnet"],
    mainMediaId: "partyMascotIcon",
    featured: true,
  },
  {
    name: "Pink Castle Bounce House",
    slug: "pink-castle-bounce-house",
    category: "Rental",
    shortDescription:
      "A ready-to-grow rental category with playful visual energy and clear room for future inventory expansion.",
    longDescription:
      "Adds instant visual impact and keeps younger guests happily busy. Pairs naturally with character visits when you want a fuller party footprint and a clear focal point in the yard or venue.",
    tags: ["Party extra", "Visual impact", "Expansion ready"],
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
      "A quick burst of character magic for birthdays that need a big moment without a longer schedule.",
    highlights: [
      "Best for cake moments, photos, and a memorable entrance",
      "Great when families want character sparkle without a full activity block",
      "Easy add-on starting point for future upsells",
    ],
  },
  {
    slug: "storybook-celebration",
    name: "Storybook Celebration",
    duration: "60 minutes",
    description:
      "The sweet spot for most families: enough time for interactive moments, photos, and a celebration that feels complete.",
    highlights: [
      "Built for games, storytelling, hero missions, or princess activities",
      "Balances memorable moments with a clean, parent-friendly timeline",
      "Strong default recommendation for the final booking flow",
    ],
    featured: true,
  },
  {
    slug: "signature-fairytale",
    name: "Signature Fairytale",
    duration: "90 minutes",
    description:
      "A fuller premium experience for families who want a stronger entrance, more activities, and extra breathing room.",
    highlights: [
      "Ideal for larger parties or layered experiences",
      "Natural fit for character plus rental combinations later on",
      "Leaves room for premium add-ons in the expanded site",
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
