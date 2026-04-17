import { pickCharacters, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const heroesPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Superhero Parties",
    title: "Batman walks through the door. The room loses its mind.",
    description:
      "Batman, Spiderman, Wonder Woman, Star Wars favourites and more — dramatic arrivals, hero missions, and the kind of birthday photos kids bring to show-and-tell.",
    highlights: [
      "Big entrance, fully in character",
      "Hero missions and action games",
      "Gold package includes superhero masks",
    ],
    primaryCta: {
      label: "Book a superhero party",
      href: "/book",
    },
    secondaryCta: {
      label: "See packages",
      href: "#packages",
    },
    mainMedia: getMediaAsset("spidermanMain"),
    panelEyebrow: "What a Living Fairytale superhero brings",
    panelTitle: "Dramatic arrivals, action-packed missions, and a celebration kids won't stop talking about.",
    panelDescription:
      "Same trained performers, same commitment to staying in character — just a different energy. Big, bold, and tuned to the age group in the room.",
    supportingCards: [
      {
        eyebrow: "Entrance",
        title: "A hero arrives",
        description:
          "A full-volume entrance that turns the room into a moment. The birthday hero gets recognized first — every single time.",
      },
      {
        eyebrow: "Interaction",
        title: "Hero missions",
        description:
          "Age-appropriate missions, storytelling, games and photos. Silver and Gold add face painting and temporary tattoos.",
      },
      {
        eyebrow: "Keepsakes",
        title: "Show-and-tell photos",
        description:
          "The kind of birthday pictures kids will still be talking about at school on Monday morning.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Meet the heroes",
      title: "Our superhero and action-character roster.",
      description:
        "Batman, Spiderman, Wonder Woman, Maui, Star Wars favourites, Monster High — click any card for the full character page.",
    },
    experience: {
      eyebrow: "What's included",
      title: "What happens during a superhero party.",
      description:
        "The same core moments as every Living Fairytale party — just turned up. The Gold Power Package adds superhero masks for every guest.",
    },
    packages: {
      eyebrow: "Packages",
      title: "Hero, Super, Power.",
      description:
        "Bronze / Silver / Gold at superhero pricing: $200 for a one-hour visit, $250 for the Super Package, $300 for the deluxe two-hour Power Package with masks.",
    },
  },
  experienceCards: [
    {
      eyebrow: "Core moment",
      title: "Dramatic entrance",
      description:
        "A hero walks through the door and the whole room shifts. The birthday child is the first one recognized.",
      icon: "\u2605",
    },
    {
      eyebrow: "Core moment",
      title: "Hero missions & games",
      description:
        "Action-forward activities scaled to the age group. Storytelling, team missions, and plenty of pose-for-the-camera moments.",
      icon: "\u2694",
    },
    {
      eyebrow: "Core moment",
      title: "Gold adds masks for the squad",
      description:
        "Every child gets a superhero mask in the Gold Power Package — instant group photos and takeaway keepsakes.",
      icon: "\u2726",
    },
  ],
  characters: pickCharacters([
    "batman",
    "spiderman",
    "wonder-woman",
    "star-wars",
    "maui",
    "monster-high",
  ]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  cta: {
    eyebrow: "Let's assemble the team",
    title: "Book his favourite hero for the big day.",
    description:
      "Send us the date, the hero, and a few details about your party. A real person will reply — usually within a day.",
    notes: [
      "Multiple heroes can team up for bigger parties",
      "Weekend dates book fast — send early during busy seasons",
      "Mention the venue, age group and any party theme notes up front",
    ],
    primaryCta: {
      label: "Book a superhero party",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to home",
      href: "/",
    },
  },
} as const;
