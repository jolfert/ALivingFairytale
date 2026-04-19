import { getCharactersByCategory, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const princessPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Princess Parties",
    title: "A real-life princess at her birthday.",
    description:
      "Ariel, Belle, Cinderella, Ice Queen, Rapunzel, Jasmine and more — in authentic ball gowns.",
    highlights: [
      "Authentic ball gowns",
      "Trained performers",
      "The largest roster in Manitoba",
    ],
    primaryCta: { label: "Book a princess party", href: "/book" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    mainMedia: getMediaAsset("princessLandingMain"),
    insetMedia: getMediaAsset("cinderellaBluePortrait"),
    panelEyebrow: "What she brings",
    panelTitle: "Fully in character. Start to finish.",
    panelDescription:
      "Dramatic entrance, interactive storytelling, songs, games, keepsake photos, dramatic exit.",
    supportingCards: [
      {
        eyebrow: "Arrival",
        title: "Dramatic entrance",
        description: "Fully in character from the first knock.",
      },
      {
        eyebrow: "Activities",
        title: "Stories, songs, games",
        description: "Silver adds face painting, gift opening, tattoos.",
      },
      {
        eyebrow: "Keepsakes",
        title: "Frame-worthy photos",
        description: "Pictures with the birthday child and every guest.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Meet the princesses",
      title: "The full roster.",
      description: "",
    },
    experience: {
      eyebrow: "What's included",
      title: "What happens at a princess party.",
      description: "",
    },
    packages: {
      eyebrow: "Packages",
      title: "Bronze, Silver, Gold.",
      description: "One hour, one and a half, or two.",
    },
  },
  experienceCards: [
    {
      eyebrow: "Core",
      title: "Dramatic entrance",
      description: "Her favourite princess walks through the door, fully in character.",
      icon: "\u2726",
    },
    {
      eyebrow: "Core",
      title: "Storytelling & singing",
      description: "An interactive fairytale, songs the kids already know, activities scaled to age.",
      icon: "\u2661",
    },
    {
      eyebrow: "Core",
      title: "Keepsake photos",
      description: "Pictures with every guest. A dramatic exit that keeps the magic intact.",
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
    eyebrow: "Ready?",
    title: "Book her favourite princess.",
    description:
      "Send us the date and which princess she's been asking for. We'll reply within a day.",
    notes: [
      "Weekend dates book fast in spring and fall",
      "Multiple princesses can arrive together",
      "Mention theme requests or allergies up front",
    ],
    primaryCta: { label: "Book a princess party", href: "/book" },
    secondaryCta: { label: "Back to home", href: "/" },
  },
} as const;
