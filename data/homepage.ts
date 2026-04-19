import { packages, pickCharacters } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const homepageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Manitoba's premier children's entertainers",
    title: "Let us make magic happen.",
    description:
      "Theme-park quality princesses, superheroes, mascots and rentals for Manitoba families since 2011.",
    highlights: [
      "Since 2011",
      "2,000+ events",
      "100% money-back guarantee",
    ],
    primaryCta: {
      label: "Book a Party",
      href: "/book",
    },
    secondaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
    stats: [
      {
        value: "Since 2011",
        label: "Locally owned, Winnipeg-based.",
      },
      {
        value: "2,000+ events",
        label: "Birthdays, schools, corporate and charity.",
      },
      {
        value: "0 cancellations",
        label: "When we say we'll be there — we are.",
      },
    ],
    brandMedia: getMediaAsset("siteLogo"),
    showcase: {
      eyebrow: "Real parties",
      mainMedia: getMediaAsset("cinderellaMain"),
      storyCardEyebrow: "Authentic ball gowns",
      storyCardTitle: "Trained performers. Real character magic.",
      storyCardText: "Fully in character from first hug to final photo.",
      princessLabel: "Princess",
      princessDescription: "A full roster in authentic ball gowns.",
      heroLabel: "Superhero",
      heroDescription: "Batman, Spiderman, Wonder Woman and more.",
      planningEyebrow: "",
      planningTitle: "",
      planningDescription: "",
      reassuranceEyebrow: "",
      reassuranceTitle: "",
      supportCards: [],
    },
  },
  sections: {
    whyUs: {
      eyebrow: "Why parents book with us",
      title: "Five reasons, every time.",
      description: "",
    },
    paths: {
      eyebrow: "Pick your party",
      title: "Princess, superhero, or mascot & rental.",
      description: "",
    },
    featured: {
      eyebrow: "Favourites",
      title: "A few characters families ask about most.",
      description: "",
    },
    packages: {
      eyebrow: "Packages",
      title: "Bronze, Silver, Gold.",
      description: "Starting at $200. Includes up to 10 children.",
    },
    testimonials: {
      eyebrow: "From real families",
      title: "What parents say.",
      description: "",
    },
    trust: {
      eyebrow: "Why parents book",
      title: "Experience. Quality. Reliability.",
      description: "",
    },
  },
  partyPaths: [
    {
      eyebrow: "Princess Parties",
      title: "Authentic ball gowns. Full princess roster.",
      description:
        "Ariel, Belle, Cinderella, Ice Queen, Rapunzel, Jasmine, Moana and more.",
      href: "/princess",
      ctaLabel: "See all princesses",
      tags: ["Authentic gowns", "Trained", "Photo-ready"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
      image: getMediaAsset("cinderellaBluePortrait"),
    },
    {
      eyebrow: "Superhero Parties",
      title: "Big entrances for the birthday hero.",
      description:
        "Batman, Spiderman, Wonder Woman and Star Wars favourites.",
      href: "/heroes",
      ctaLabel: "See all superheroes",
      tags: ["Batman", "Spiderman", "Wonder Woman"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("batmanPortrait"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Mascot suits and the pink bounce house.",
      description:
        "10+ mascot suits ($100). Bounce house ($50). Pickup rentals — no entertainer.",
      href: "/mascots",
      ctaLabel: "See mascots & rentals",
      tags: ["Mascots $100", "Bounce $50", "Pickup"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,255,247,0.98))]",
      image: getMediaAsset("olafPortrait"),
    },
  ],
  trustPillars: [
    {
      title: "Experience",
      description: "2,000+ events since 2011.",
      icon: "\u2726",
    },
    {
      title: "Quality",
      description: "Authentic costumes, trained performers.",
      icon: "\u2661",
    },
    {
      title: "Reliability",
      description: "Never cancelled. 100% money-back guarantee.",
      icon: "\u263C",
    },
    {
      title: "Safety",
      description: "Background-checked, fully insured performers.",
      icon: "\u2605",
    },
    {
      title: "Service",
      description: "A real person reads every inquiry.",
      icon: "\u2665",
    },
  ],
  featuredCharacters: pickCharacters([
    "ice-queen",
    "batman",
    "olaf",
    "pink-castle-bounce-house",
  ]),
  packages,
  finalCta: {
    eyebrow: "Ready?",
    title: "Book their big day.",
    description:
      "Send us the date, the character, and a few details. A real person replies within a day.",
    steps: [
      {
        step: "1",
        title: "Pick the party",
        description: "Princess, hero, mascot or rental.",
      },
      {
        step: "2",
        title: "Send the details",
        description: "Date, time, address, age.",
      },
      {
        step: "3",
        title: "Hear back",
        description: "Real person, real reply.",
      },
    ],
    previewEyebrow: "What families say",
    previewTitle: "\"So much fun. Absolutely unforgettable.\"",
    previewDescription:
      "Repeat bookings are the foundation of the business. Read the reviews or drop us a line.",
    notes: [
      "A real person reads every inquiry",
      "One form — all party paths",
      "Weekend dates book fast",
    ],
    primaryCta: {
      label: "Start your booking",
      href: "/book",
    },
    secondaryCta: {
      label: "Read reviews",
      href: "/reviews",
    },
  },
} as const;
