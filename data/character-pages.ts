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
    sectionTitle: "What happens when she arrives.",
    compareTitle: "Other princesses families book.",
    packageTitle: "Bronze, Silver or Gold.",
    panelEyebrow: "Why families book her",
    support: [
      {
        eyebrow: "Entrance",
        title: "Dramatic arrival, fully in character",
        description:
          "She walks in as the princess. No breaking character, no awkward pause — just the magic the birthday child has been picturing all week.",
      },
      {
        eyebrow: "Interaction",
        title: "Storytelling, songs and games",
        description:
          "An interactive fairytale, songs the children already know, and activities scaled to the age group in the room.",
      },
      {
        eyebrow: "Photos",
        title: "Keepsake pictures with every child",
        description:
          "We pace the party so every guest gets their moment, and the birthday child gets plenty of framed-on-the-wall pictures.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the birthday child",
        title: "She feels like the star of the day",
        description:
          "Her favourite princess walks through the door and recognizes her first. The reaction is priceless every single time.",
      },
      {
        eyebrow: "For the room",
        title: "Authentic ball gowns, trained performers",
        description:
          "The gowns are authentic and breath-taking in person. The performers are trained in acting, singing and modelling — and fully in character from start to finish.",
      },
      {
        eyebrow: "For the grown-ups",
        title: "Zero stress for the parents",
        description:
          "The princess runs the party. You get to enjoy the day, take photos, and watch your child's face light up.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Hero: {
    sectionTitle: "What happens when he walks through the door.",
    compareTitle: "Other heroes families book.",
    packageTitle: "Hero, Super or Power.",
    panelEyebrow: "Why families book this hero",
    support: [
      {
        eyebrow: "Entrance",
        title: "Big entrance, fully in character",
        description:
          "A full-volume hero arrival that turns the room into a moment. The birthday child gets recognized first.",
      },
      {
        eyebrow: "Interaction",
        title: "Hero missions and action games",
        description:
          "Age-appropriate missions, team games, and plenty of pose-for-the-camera moments.",
      },
      {
        eyebrow: "Gold extras",
        title: "Masks for the whole crew",
        description:
          "The Gold Power Package includes superhero masks for every guest — instant group photos, instant takeaway keepsakes.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the birthday child",
        title: "The hero recognizes them first",
        description:
          "A big entrance straight to the birthday hero. The entire room reacts — and the birthday child is at the centre of it.",
      },
      {
        eyebrow: "For the squad",
        title: "Energy that stays organized",
        description:
          "Big action, structured pacing. The party feels exciting without spinning out — even with a room full of hyped-up kids.",
      },
      {
        eyebrow: "For the grown-ups",
        title: "Photos worth framing",
        description:
          "Action shots, team shots, and the one-on-one birthday photo with the hero. Show-and-tell is handled.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Mascot: {
    sectionTitle: "How a mascot visit works.",
    compareTitle: "Other mascots and playful options.",
    packageTitle: "Or add a mascot on top of a princess or hero booking.",
    panelEyebrow: "Why families book this",
    support: [
      {
        eyebrow: "Arrival",
        title: "Instant recognition",
        description:
          "A mascot walks in and children light up. It's the fastest way to make the room feel like a party.",
      },
      {
        eyebrow: "Works for",
        title: "Any age, any size of group",
        description:
          "Mascots work beautifully at birthdays, daycare parties, school events, mall shows, and community gatherings.",
      },
      {
        eyebrow: "Pair it",
        title: "Layer with a character package",
        description:
          "Want Olaf to actually interact? Book a princess or superhero package and add a mascot — we'll coordinate it all.",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the kids",
        title: "Smiles happen the second the door opens",
        description:
          "Recognizable mascots get an immediate reaction, especially from younger guests and mixed-age rooms.",
      },
      {
        eyebrow: "For the event",
        title: "Easy to slot into the schedule",
        description:
          "A mascot visit doesn't need a 90-minute activity block. 15–30 minutes is enough to make it the highlight of the day.",
      },
      {
        eyebrow: "For the grown-ups",
        title: "A warm, professional character presence",
        description:
          "Trained performers who know how to engage every age in the room without overwhelming the shy ones.",
      },
    ] as ReadonlyArray<InfoCard>,
  },
  Rental: {
    sectionTitle: "How this rental works.",
    compareTitle: "Other rentals and party add-ons.",
    packageTitle: "Pair it with a character package.",
    panelEyebrow: "Why families rent this",
    support: [
      {
        eyebrow: "Pickup rental",
        title: "You run the show",
        description:
          "Rentals are pickup-based. You collect the item, set it up, and return it after the party. No entertainer included.",
      },
      {
        eyebrow: "Pair it",
        title: "Stack with a character package",
        description:
          "A rental on its own is fun. A rental plus a princess or superhero visit is a proper party. We'll coordinate the timing.",
      },
      {
        eyebrow: "Setup",
        title: "Flat outdoor space, power outlet",
        description:
          "The bounce house needs flat ground and an outlet. Mascot suits need one adult volunteer (staff, parent or older sibling).",
      },
    ] as ReadonlyArray<InfoCard>,
    highlights: [
      {
        eyebrow: "For the event",
        title: "Instant visual payoff",
        description:
          "A bounce house or mascot suit makes a backyard, classroom or community hall feel like a proper event.",
      },
      {
        eyebrow: "For the kids",
        title: "Room to burn off energy",
        description:
          "Especially helpful at longer parties — the rental gives kids somewhere to go between the scheduled moments.",
      },
      {
        eyebrow: "For the budget",
        title: "Big impact, low cost",
        description:
          "Mascot suit rentals are $100. The bounce house is $50. The visual upgrade per dollar is hard to beat.",
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

function buildHeroTitle(character: ResolvedCharacter) {
  if (character.category === "Hero") {
    return `Book ${character.name} for the big day.`;
  }
  if (character.category === "Mascot") {
    return `${character.name}, on your schedule.`;
  }
  if (character.category === "Rental") {
    return `${character.name} — a party-ready rental.`;
  }
  return `A visit from ${character.name}.`;
}

function buildHeroDescription(character: ResolvedCharacter) {
  return character.longDescription ?? character.shortDescription;
}

function buildHeroHighlights(character: ResolvedCharacter) {
  return [
    character.tags[0] ?? "Photo-ready",
    character.tags[1] ?? "Trained performer",
    character.tags[2] ?? "Locally owned",
  ];
}

function buildPanelTitle(character: ResolvedCharacter) {
  if (character.category === "Princess") {
    return `${character.name} in an authentic ball gown, fully in character, for the full length of the party.`;
  }
  if (character.category === "Hero") {
    return `${character.name} arrives big, commits to the role, and makes the birthday hero the centre of the day.`;
  }
  if (character.category === "Mascot") {
    return `${character.name} is a mascot visit — the fastest way to make a room of children light up.`;
  }
  return `${character.name} is a pickup rental — the easy way to make your event look and feel bigger.`;
}

function buildPanelDescription(character: ResolvedCharacter) {
  if (character.category === "Princess" || character.category === "Hero") {
    return "Every party includes a dramatic entrance, interactive storytelling, singing and keepsake photos. Silver adds face painting, gift opening and temporary tattoos. Gold gives you two full hours to use it all.";
  }
  if (character.category === "Mascot") {
    return "Mascots are perfect when you want instant recognition without booking a full character package. Pair with a princess or superhero visit if you'd like the mascot to actually interact with the kids.";
  }
  return "Rentals are pickup-based — $100 for a mascot suit, $50 for the pink castle bounce house. You supervise; we supply. Easy to bundle with a character package.";
}

function buildCtaTitle(character: ResolvedCharacter) {
  if (character.category === "Rental") {
    return `Want to reserve ${character.name}?`;
  }
  return `Book ${character.name} for the big day.`;
}

function buildCtaNotes(character: ResolvedCharacter) {
  if (character.category === "Rental") {
    return [
      "Rentals are pickup-based — no entertainer included",
      "Pair with a princess or superhero visit for the full experience",
      "Availability depends on the date and setup needs",
    ];
  }
  if (character.category === "Mascot") {
    return [
      "Mascot visits work for birthdays, schools, mall shows and community events",
      "Pair with a character package if you'd like a performer, not a costume rental",
      "Weekend dates book early during busy seasons",
    ];
  }
  return [
    "Weekend dates fill fast in the spring and fall",
    "Multiple characters can arrive together — just let us know",
    "Mention any theme, allergies or scheduling notes up front",
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
            ? `Reserve ${character.name}`
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
      panelTitle: buildPanelTitle(character),
      panelDescription: buildPanelDescription(character),
      supportingCards: copy.support,
    },
    sections: {
      highlights: {
        eyebrow: "What's included",
        title: copy.sectionTitle,
        description:
          "The details that tend to matter most when families are choosing a character for their day.",
      },
      related: {
        eyebrow: "Also popular",
        title: copy.compareTitle,
        description:
          "A few other favourites you might want to have a look at before you send your request.",
      },
      packages: {
        eyebrow: "Packages",
        title: copy.packageTitle,
        description:
          "All party paths follow the same duration-by-character pricing. Longer parties include more activities, photos and time with the character.",
      },
    },
    highlightCards: copy.highlights,
    relatedCharacters,
    packageSlugs: sharedPackageSlugs,
    cta: {
      eyebrow: "Ready to book?",
      title: buildCtaTitle(character),
      description:
        "Send us the date, a start time, the venue, and any special notes. A real person will reply — usually within a day.",
      notes: buildCtaNotes(character),
      primaryCta: {
        label:
          character.category === "Rental"
            ? `Reserve ${character.name}`
            : `Book ${character.name}`,
        href: "/book",
      },
      secondaryCta: {
        label: "Back to home",
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
