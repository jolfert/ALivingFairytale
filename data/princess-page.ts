import { pickPackages, getCharactersByCategory } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const princessPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Characters", href: "#characters" },
    { label: "Packages", href: "#packages" },
    { label: "Book", href: "#book-cta" },
  ],
  hero: {
    eyebrow: "Princess Parties",
    title:
      "Dreamy princess experiences that feel graceful, polished, and joyfully unforgettable.",
    description:
      "Our princess parties are designed to feel magical for children and impressively easy for parents: beautiful arrivals, story-led interaction, and memorable moments that look as lovely in photos as they feel in person.",
    highlights: [
      "Warm, in-character princess arrivals",
      "Interactive moments tailored for birthday pacing",
      "Elegant visuals that still feel playful and child-centered",
    ],
    primaryCta: {
      label: "Choose your princess",
      href: "#characters",
    },
    secondaryCta: {
      label: "See package options",
      href: "#packages",
    },
    mainMedia: getMediaAsset("princessRoseMain"),
    insetMedia: getMediaAsset("princessSnowPortrait"),
    panelEyebrow: "Princess path tone",
    panelTitle: "Soft sparkle, polished pacing, and moments worth the photos.",
    panelDescription:
      "The princess path keeps the elevated brand feel while leaning sweeter, dreamier, and more storybook from the very first arrival.",
    supportingCards: [
      {
        eyebrow: "Arrival feel",
        title: "Elegant entrances",
        description:
          "The energy starts strong without ever feeling chaotic or rushed.",
      },
      {
        eyebrow: "Parent confidence",
        title: "Beautifully guided flow",
        description:
          "Activities are shaped to feel smooth for families, not overwhelming.",
      },
      {
        eyebrow: "Keepsake moments",
        title: "Picture-worthy magic",
        description:
          "The whole page is structured around experiences that look and feel memorable.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Featured princesses",
      title: "Choose the princess who feels closest to her favorite kind of magic.",
      description:
        "Each character has her own mood, visual story, and party energy while still fitting inside the same premium experience.",
    },
    experience: {
      eyebrow: "What families can expect",
      title: "Princess parties should feel enchanting, not disorganized.",
      description:
        "We're shaping this path around the details parents care about most: smooth pacing, lovely photos, and a child experience that feels genuinely special.",
    },
    packages: {
      eyebrow: "Princess package overview",
      title: "Choose the pacing that fits the celebration you're planning.",
      description:
        "Package details stay easy to compare now and are ready to evolve into fuller booking options later.",
    },
  },
  experienceCards: [
    {
      eyebrow: "For the birthday child",
      title: "A celebration that feels starring-role special",
      description:
        "The structure creates real character connection, not just a quick appearance and photo line.",
      icon: "\u2726",
    },
    {
      eyebrow: "For the room",
      title: "A polished atmosphere from the first moment",
      description:
        "Color, pacing, and presentation are all tuned to feel elevated instead of thrown together.",
      icon: "\u2661",
    },
    {
      eyebrow: "For the grown-ups",
      title: "A parent-friendly experience that stays easy to follow",
      description:
        "Clear package options, thoughtful timing, and a booking flow that can grow into real online booking.",
      icon: "\u263C",
    },
  ],
  characters: getCharactersByCategory("Princess"),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  cta: {
    eyebrow: "Ready for a royal booking",
    title:
      "Let's create the princess party they keep talking about after the candles are blown out.",
    description:
      "This page is designed to hand naturally into the future booking flow. For now, it gives parents enough clarity to feel confident saying yes.",
    notes: [
      "Best fit for birthdays that want beautiful character-led moments",
      "Easy starting point for future add-ons, travel rules, and calendar tools",
      "Content and imagery are already structured for cleaner admin updates later",
    ],
    primaryCta: {
      label: "Start a princess request",
      href: "/#book-preview",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
