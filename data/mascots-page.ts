import { getCharactersByCategories, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const mascotsPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Mascots & Rentals",
    title: "Easy add-ons for any celebration.",
    description:
      "Mascot suits ($100). Pink castle bounce house ($50, 9' × 12' × 16'). Pickup rentals — no entertainer included.",
    highlights: [
      "Mascot suits $100",
      "Bounce house $50",
      "Pickup — you run the show",
    ],
    primaryCta: { label: "Ask about a rental", href: "/book" },
    secondaryCta: { label: "See what's available", href: "#showcase" },
    mainMedia: getMediaAsset("rentalBouncePhoto"),
    insetMedia: getMediaAsset("olafPortrait"),
    panelEyebrow: "How it works",
    panelTitle: "You pick it up. You run the show. You return it.",
    panelDescription:
      "Rentals are pickup-based — you (or a volunteer) wear the mascot suit, or supervise the bounce house. Want a performer? Pair a rental with a princess or superhero package.",
    supportingCards: [
      {
        eyebrow: "$100",
        title: "Mascot suits",
        description: "Lego Man, Olaf, Elmo, Mickey, Minnie, Minion, Hello Kitty, Buzz Lightyear, Ninja Turtles and more.",
      },
      {
        eyebrow: "$50",
        title: "Bounce house",
        description: "Pink castle, 9' × 12' × 16'. Flat outdoor space + power outlet.",
      },
      {
        eyebrow: "Stack it",
        title: "Pair with a character",
        description: "Add a mascot rental on top of a princess or superhero booking.",
      },
    ],
  },
  sections: {
    showcase: {
      eyebrow: "Inventory",
      title: "Mascots & rentals available.",
      description: "",
    },
    greatFor: {
      eyebrow: "Great for",
      title: "When a rental is the right call.",
      description: "",
    },
    packages: {
      eyebrow: "Want a performer instead?",
      title: "Pair a rental with a character package.",
      description: "Our Bronze, Silver and Gold packages come with a trained entertainer.",
    },
  },
  greatForCards: [
    {
      eyebrow: "Birthdays",
      title: "Birthday parties",
      description: "Bounce house for the backyard, mascot suit for a surprise moment.",
      icon: "\u2665",
    },
    {
      eyebrow: "Schools",
      title: "School & daycare events",
      description: "Story time, spirit days, graduations. Staff wears the suit.",
      icon: "\u2600",
    },
    {
      eyebrow: "Community",
      title: "Community events",
      description: "Block parties, charity fun days, grand openings.",
      icon: "\u2713",
    },
    {
      eyebrow: "Seasonal",
      title: "Seasonal gatherings",
      description: "Halloween, Easter, Santa visits, family reunions.",
      icon: "\u2726",
    },
  ],
  showcaseCharacters: getCharactersByCategories(["Mascot", "Rental"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  bookingNote:
    "Mascot suit rental: $100. Available suits include Lego Man, Despicable Me Minion, Olaf, Elmo, Cookie Monster, Hello Kitty, Buzz Lightyear, Mickey Mouse, Minnie Mouse, Ninja Turtles and more. Pink Castle Bounce House: $50 (9' × 12' × 16'). No entertainer provided with rentals — availability depends on date.",
  cta: {
    eyebrow: "Want one?",
    title: "Tell us the date.",
    description:
      "Send us the date, what you'd like, and whether you'd also want a character. We'll reply with availability.",
    notes: [
      "Rentals are pickup — no entertainer",
      "Bounce house needs flat outdoor space + outlet",
      "Can pair with a character package",
    ],
    primaryCta: { label: "Ask about a rental", href: "/book" },
    secondaryCta: { label: "Back to home", href: "/" },
  },
} as const;
