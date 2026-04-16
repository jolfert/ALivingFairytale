import {
  getCharacterBySlug,
  getCharactersWithDetailPages,
  pickCharacters,
  pickPackages,
} from "@/data/catalog";
import { primaryNavigation } from "@/data/site-shell";
import type {
  CharacterCategory,
  CharacterPageContent,
  InfoCard,
  ResolvedCharacter,
} from "@/data/types";

const sharedPackageSlugs = [
  "mini-visit",
  "storybook-celebration",
  "signature-fairytale",
] as const;

const pageThemes: Record<CharacterCategory, CharacterPageContent["theme"]> = {
  Princess: "princess",
  Hero: "hero",
  Mascot: "playful",
  Rental: "playful",
};

const categoryCopy = {
  Princess: {
    sectionTitle:
      "She should feel magical in the room and beautiful in the photos.",
    compareTitle:
      "Still comparing favorites? Here are a few more beautiful character options.",
    packageTitle: "Choose the pace that fits the celebration you are planning.",
    panelEyebrow: "Why families choose her",
    support: [
      {
        eyebrow: "Party feel",
        title: "Dreamy, warm, and photo-friendly",
        description:
          "The focus stays on child connection, sweet pacing, and the kind of keepsake moments families hope for.",
      },
      {
        eyebrow: "Booking ease",
        title: "Simple to compare and easy to request",
        description:
          "Every character page keeps the same structure so parents can move from maybe to yes without getting lost.",
      },
      {
        eyebrow: "Best fit",
        title: "Built for real favorite-character birthdays",
        description:
          "The page is shaped to help families picture the actual celebration, not just the costume on its own.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the birthday child",
        title: "She feels like the star of the story",
        description:
          "The experience is paced to create real wonder, not just a quick photo stop.",
      },
      {
        eyebrow: "For the room",
        title: "The celebration looks every bit as lovely as it feels",
        description:
          "From arrival photos to close-up moments, the visual side stays polished and premium.",
      },
      {
        eyebrow: "For parents",
        title: "The path stays easy to follow",
        description:
          "Clear packages, warm communication, and a familiar page structure keep decision-making simple.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Hero: {
    sectionTitle:
      "The party should feel bold, exciting, and still easy for parents to follow.",
    compareTitle:
      "Need to compare heroes? These are the other action-forward favorites families look at next.",
    packageTitle:
      "Choose the amount of time and energy that fits the kind of entrance you want.",
    panelEyebrow: "Why families book this hero",
    support: [
      {
        eyebrow: "Party feel",
        title: "Big reactions without chaotic pacing",
        description:
          "The energy is high, but the structure stays thoughtful so the room still feels manageable.",
      },
      {
        eyebrow: "Photo moments",
        title: "Action-ready from the first minute",
        description:
          "Strong entrances and recognizable costumes help the big reaction moments happen quickly.",
      },
      {
        eyebrow: "Best fit",
        title: "Built for kids who want real hero energy",
        description:
          "These pages keep the premium brand feel while shifting into bolder, more action-forward storytelling.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the birthday child",
        title: "The entrance lands right away",
        description:
          "The first few minutes are built to create that unmistakable superhero-party wow moment.",
      },
      {
        eyebrow: "For the guest list",
        title: "The room feels energized, not messy",
        description:
          "The pace stays lively and interactive without making the whole celebration feel scattered.",
      },
      {
        eyebrow: "For parents",
        title: "The booking still feels clear and premium",
        description:
          "Families get the same thoughtful process and polished presentation as every other path on the site.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Mascot: {
    sectionTitle:
      "Mascot visits should feel cheerful, low-friction, and easy to build into the day.",
    compareTitle:
      "If you are still deciding, here are the other playful options families look at next.",
    packageTitle:
      "Choose the length that fits the event and how you want to use the character moment.",
    panelEyebrow: "Why this option works",
    support: [
      {
        eyebrow: "Party feel",
        title: "Bright, simple, and crowd-friendly",
        description:
          "This path works well when families want instant smiles without a lot of extra explaining.",
      },
      {
        eyebrow: "Planning ease",
        title: "Easy to pair with the rest of the event",
        description:
          "Mascot visits slide naturally into birthdays, school events, and mixed-age celebrations.",
      },
      {
        eyebrow: "Best fit",
        title: "A good choice when speed and clarity matter",
        description:
          "The focus stays on recognizable fun and easy planning instead of a long activity-heavy structure.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the kids",
        title: "The smiles happen fast",
        description:
          "Recognizable mascot characters help children react right away, especially in mixed-age rooms.",
      },
      {
        eyebrow: "For the schedule",
        title: "Simple to add without overcomplicating the day",
        description:
          "This keeps the event moving while still adding a memorable visual moment.",
      },
      {
        eyebrow: "For parents",
        title: "Clear expectations and an easy next step",
        description:
          "The page keeps the details straightforward so you can ask the right questions quickly.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Rental: {
    sectionTitle:
      "Rental add-ons should make the day feel bigger without making the planning harder.",
    compareTitle:
      "Here are the other cheerful event extras families often compare with this one.",
    packageTitle:
      "Choose the setup that works best for your event and how full you want the celebration to feel.",
    panelEyebrow: "Why families add this",
    support: [
      {
        eyebrow: "Visual payoff",
        title: "It makes the setup feel complete right away",
        description:
          "A strong rental piece helps the event look festive before the first guest even walks in.",
      },
      {
        eyebrow: "Planning ease",
        title: "Simple to ask about alongside character visits",
        description:
          "Families can keep everything in one booking conversation instead of piecing it together from different vendors.",
      },
      {
        eyebrow: "Best fit",
        title: "A great add-on when you want the party to feel fuller",
        description:
          "Rentals help give children extra movement and give the event a clear visual anchor.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the event",
        title: "It adds instant visual excitement",
        description:
          "The setup reads as fun and intentional before the party even gets moving.",
      },
      {
        eyebrow: "For the kids",
        title: "There is more room for movement and play",
        description:
          "That helps keep the celebration feeling active between the main party moments.",
      },
      {
        eyebrow: "For parents",
        title: "It stays easy to bundle into the same request",
        description:
          "The next step is still one simple inquiry instead of another planning headache.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
} as const;

const relatedOverrides: Partial<Record<string, ReadonlyArray<string>>> = {
  ariel: ["ariel-pink", "jasmine", "rapunzel"],
  "ariel-pink": ["ariel", "barbie", "rapunzel"],
  belle: ["cinderella", "aurora", "princess-sophia"],
  cinderella: ["cinderella-new", "ice-queen", "snow-white"],
  "cinderella-new": ["cinderella", "aurora", "princess-sophia"],
  "ice-queen": ["ice-princess", "cinderella", "princess-sophia"],
  "ice-princess": ["ice-queen", "princess-sophia", "aurora"],
  jasmine: ["ariel", "rapunzel", "snow-white"],
  rapunzel: ["ariel-pink", "jasmine", "barbie"],
  aurora: ["sleeping-beauty-blue", "belle", "cinderella"],
  "sleeping-beauty-blue": ["aurora", "cinderella-new", "ice-queen"],
  "princess-sophia": ["aurora", "ice-princess", "barbie"],
  fairy: ["ariel", "princess-sophia", "rapunzel"],
  moana: ["jasmine", "fairy", "rapunzel"],
  "fancy-nancy": ["barbie", "ever-after-high-apple", "fairy"],
  barbie: ["fancy-nancy", "ariel-pink", "ever-after-high-apple"],
  "ever-after-high-apple": ["barbie", "fancy-nancy", "snow-white"],
  prince: ["belle", "cinderella", "aurora"],
  malificient: ["aurora", "snow-white", "ever-after-high-apple"],
  batman: ["spiderman", "monster-high"],
  spiderman: ["batman", "monster-high"],
  "monster-high": ["spiderman", "batman"],
  maui: ["moana", "star-wars", "wonder-woman"],
  "star-wars": ["batman", "spiderman", "wonder-woman"],
  "wonder-woman": ["batman", "spiderman", "star-wars"],
  olaf: ["ice-queen", "ice-princess", "pink-castle-bounce-house"],
  santa: ["olaf", "pink-party-tent", "pink-castle-bounce-house"],
  "pink-castle-bounce-house": ["pink-party-tent", "olaf"],
  "pink-party-tent": ["pink-castle-bounce-house", "olaf"],
};

function getCategoryLabel(character: ResolvedCharacter) {
  if (character.category === "Rental") {
    return "party add-on";
  }
  if (character.category === "Mascot") {
    return "mascot visit";
  }
  if (character.category === "Hero") {
    return "hero party";
  }
  return "princess party";
}

function buildHeroTitle(character: ResolvedCharacter) {
  if (character.category === "Hero") {
    return `${character.name} parties with a bold entrance, strong photo moments, and the kind of birthday energy kids react to instantly.`;
  }
  if (character.category === "Mascot") {
    return `${character.name} visits that feel playful, recognizable, and easy to fold into the celebration.`;
  }
  if (character.category === "Rental") {
    return `${character.name} setups that make the celebration feel fuller, brighter, and more exciting right away.`;
  }
  return `${character.name} parties full of storybook charm, beautiful photos, and real favorite-character magic.`;
}

function buildHeroDescription(character: ResolvedCharacter) {
  return character.longDescription ?? character.shortDescription;
}

function buildHeroHighlights(character: ResolvedCharacter) {
  return [
    character.tags[0] ?? "Photo-ready favorite",
    character.tags[1] ?? "Warm party moments",
    character.tags[2] ?? "Easy to book",
  ];
}

function getRelatedCharacters(character: ResolvedCharacter) {
  const override = relatedOverrides[character.slug];
  if (override) {
    return override;
  }

  return getCharactersWithDetailPages()
    .filter(
      (item) =>
        item.slug !== character.slug && item.category === character.category,
    )
    .slice(0, 3)
    .map((item) => item.slug);
}

export const characterDetailSlugs = getCharactersWithDetailPages().map(
  (character) => character.slug,
);

export function getCharacterPageContent(
  slug: string,
): CharacterPageContent | undefined {
  const character = getCharacterBySlug(slug);
  if (!character?.detailHref) {
    return undefined;
  }

  const categoryTheme = pageThemes[character.category];
  const copy = categoryCopy[character.category];
  const relatedCharacters = getRelatedCharacters(character);
  const categoryLabel = getCategoryLabel(character);

  return {
    slug,
    theme: categoryTheme,
    navigation: primaryNavigation,
    hero: {
      eyebrow: character.name,
      title: buildHeroTitle(character),
      description: buildHeroDescription(character),
      highlights: buildHeroHighlights(character),
      primaryCta: {
        label:
          character.category === "Rental"
            ? `Ask about ${character.name}`
            : `Book ${character.name}`,
        href: "/book",
      },
      secondaryCta: {
        label:
          character.category === "Hero"
            ? "See all heroes"
            : character.category === "Mascot" || character.category === "Rental"
              ? "See mascots & rentals"
              : "See all princesses",
        href:
          character.category === "Hero"
            ? "/heroes#characters"
            : character.category === "Mascot" || character.category === "Rental"
              ? "/mascots#showcase"
              : "/princess#characters",
      },
      mainMedia: character.mainMedia,
      insetMedia: character.insetMedia,
      panelEyebrow: copy.panelEyebrow,
      panelTitle: `${character.name} is a ${categoryLabel} that helps families picture the real celebration, not just the costume.`,
      panelDescription:
        "This page uses the same premium booking system as the rest of the site, so you can compare favorites, look at the real imagery, and move forward without losing momentum.",
      supportingCards: copy.support,
    },
    sections: {
      highlights: {
        eyebrow: "What families can expect",
        title: copy.sectionTitle,
        description:
          "These are the details families usually care about most when they are deciding which character best fits the day.",
      },
      related: {
        eyebrow: "Compare favorites",
        title: copy.compareTitle,
        description:
          "Every character page stays inside the same booking flow, so it is easy to compare a few favorites before you submit your request.",
      },
      packages: {
        eyebrow: "Package options",
        title: copy.packageTitle,
        description:
          "The package structure stays consistent across the site so families can compare time, pace, and party feel quickly.",
      },
    },
    highlightCards: copy.highlights,
    relatedCharacters,
    packageSlugs: sharedPackageSlugs,
    cta: {
      eyebrow: "Ready to book this one?",
      title: `Tell us about your ${character.name} ${categoryLabel} and we will help you plan the right fit.`,
      description:
        "Share the date, the party details, and any special notes. We will follow up with availability and the clearest next step.",
      notes: [
        `A strong fit for families already leaning toward ${character.name}`,
        "Easy to pair with travel notes, add-ons, and special requests",
        "One calm booking form covers the full character lineup",
      ],
      primaryCta: {
        label:
          character.category === "Rental"
            ? `Ask about ${character.name}`
            : `Start a ${character.name} request`,
        href: "/book",
      },
      secondaryCta: {
        label: "Back to booking paths",
        href: "/",
      },
    },
  };
}

export function getCharacterPageRelated(slug: string) {
  const content = getCharacterPageContent(slug);
  if (!content) {
    return [];
  }
  return pickCharacters(content.relatedCharacters);
}

export function getCharacterPagePackages(slug: string) {
  const content = getCharacterPageContent(slug);
  if (!content) {
    return [];
  }
  return pickPackages(content.packageSlugs);
}
