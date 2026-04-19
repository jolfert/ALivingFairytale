import { pickCharacters, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const heroesPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Superhero Parties",
    title: "Batman walks in. The room loses its mind.",
    description:
      "Batman, Spiderman, Wonder Woman, Star Wars and more. Dramatic arrivals, hero missions, photos worth show-and-tell.",
    highlights: [
      "Big entrance",
      "Hero missions",
      "Gold adds masks for everyone",
    ],
    primaryCta: { label: "Book a superhero party", href: "/book" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    mainMedia: getMediaAsset("spidermanMain"),
    panelEyebrow: "What he brings",
    panelTitle: "Big, bold, and fully in character.",
    panelDescription:
      "Dramatic entrance, action missions, interactive games, keepsake photos. Gold Power Package adds superhero masks for every guest.",
    supportingCards: [
      {
        eyebrow: "Arrival",
        title: "Full-volume entrance",
        description: "Walks straight to the birthday hero. Room erupts.",
      },
      {
        eyebrow: "Activities",
        title: "Hero missions",
        description: "Team games, action stories, pose-for-the-camera moments.",
      },
      {
        eyebrow: "Gold extra",
        title: "Masks for everyone",
        description: "Gold Power Package comes with masks for the whole crew.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Meet the heroes",
      title: "The superhero roster.",
      description: "",
    },
    experience: {
      eyebrow: "What's included",
      title: "What happens at a superhero party.",
      description: "",
    },
    packages: {
      eyebrow: "Packages",
      title: "Hero, Super, Power.",
      description: "One hour, one and a half, or two.",
    },
  },
  experienceCards: [
    {
      eyebrow: "Core",
      title: "Dramatic entrance",
      description: "A hero walks through the door and the room shifts. Birthday child recognized first.",
      icon: "\u2605",
    },
    {
      eyebrow: "Core",
      title: "Missions & games",
      description: "Action-forward activities scaled to the age group.",
      icon: "\u2694",
    },
    {
      eyebrow: "Gold extra",
      title: "Masks for the squad",
      description: "Every child gets a superhero mask. Instant group photos.",
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
    eyebrow: "Ready?",
    title: "Book his favourite hero.",
    description:
      "Send us the date and the character. We'll reply within a day.",
    notes: [
      "Multiple heroes can team up for bigger parties",
      "Weekend dates book fast",
      "Mention the venue, age group and any notes up front",
    ],
    primaryCta: { label: "Book a superhero party", href: "/book" },
    secondaryCta: { label: "Back to home", href: "/" },
  },
} as const;
