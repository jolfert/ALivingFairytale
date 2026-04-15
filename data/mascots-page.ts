import { getCharactersByCategories, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const mascotsPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Mascots", href: "#top" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Mascots & Rentals",
    title:
      "Playful mascot visits and party extras that keep the day cheerful and easy.",
    description:
      "Big hugs, bright visuals, and bounce-house wow-factor pair perfectly with our premium hosting standards—so even the simplest celebration still feels cared for, coordinated, and camera-ready.",
    highlights: [
      "Big, friendly fun",
      "Great for mixed ages",
      "Easy to pair with packages",
    ],
    primaryCta: {
      label: "Browse mascots & rentals",
      href: "#showcase",
    },
    secondaryCta: {
      label: "Review package timing",
      href: "#packages",
    },
    mainMedia: getMediaAsset("mascotPartyMain"),
    insetMedia: getMediaAsset("rentalSparkInset"),
    panelEyebrow: "Mascot path tone",
    panelTitle:
      "Brighter visuals, simpler storytelling, and a celebration that still feels premium.",
    panelDescription:
      "You get the same warm communication and polished planning as every other path, just tuned for playful arrivals, easy smiles, and cheerful add-ons.",
    supportingCards: [
      {
        eyebrow: "For the room",
        title: "Approachable energy",
        description:
          "The celebration stays joyful and crowd-friendly without turning the volume up for no reason.",
      },
      {
        eyebrow: "For parents",
        title: "Clear, low-friction planning",
        description:
          "Straightforward choices and easy language keep the decision-making light.",
      },
      {
        eyebrow: "For the party",
        title: "Simple ways to make the day feel bigger",
        description:
          "A mascot visit, a rental, or a cheerful combination can add instant visual fun without complicating the plan.",
      },
    ],
  },
  sections: {
    showcase: {
      eyebrow: "Showcase",
      title:
        "Start with mascot fun, rental impact, or both, then shape the day around your package.",
      description:
        "These options are ideal when you want recognizable smiles, easy excitement, and a celebration that feels lively from the first look.",
    },
    greatFor: {
      eyebrow: "Great for",
      title: "When a brighter, simpler party beat is the right fit.",
      description:
        "This path tends to shine for younger guests, mixed ages, and families who want quick clarity with a lot of cheerful payoff.",
    },
    packages: {
      eyebrow: "Packages and booking",
      title:
        "The same package names families see elsewhere, so comparing stays easy.",
      description:
        "Durations and highlights stay familiar across the site. When you are ready, send us the party details and we will help confirm the best fit.",
    },
    trust: {
      eyebrow: "Reassurance",
      title: "What you can expect from us on mascot and rental days.",
      description:
        "Playful does not mean disorganized. We like these celebrations to feel easy, cheerful, and clearly guided.",
    },
  },
  greatForCards: [
    {
      eyebrow: "Ages",
      title: "Younger birthdays and mixed-age siblings",
      description:
        "A lovely fit when you want recognizable fun that does not depend on a long story arc.",
      icon: "\u2665",
    },
    {
      eyebrow: "Energy",
      title: "Backyard parties and community spaces",
      description:
        "Rentals create a focal point and mascots add warmth, together or on their own.",
      icon: "\u2600",
    },
    {
      eyebrow: "Planning style",
      title: "Families who want fewer decisions and faster clarity",
      description:
        "Simple paths, easy language, and a booking form that gathers what we need in one go.",
      icon: "\u2713",
    },
  ],
  trustCards: [
    {
      eyebrow: "Setup",
      title: "We respect your space and your schedule",
      description:
        "Arrival windows and rental timing are discussed clearly so the day feels coordinated, not guessed.",
      icon: "\u2302",
    },
    {
      eyebrow: "Hosting",
      title: "Playful does not mean unmanaged",
      description:
        "Mascot moments stay guided so younger guests feel included without parents needing to steer every beat.",
      icon: "\u2726",
    },
    {
      eyebrow: "Communication",
      title: "You will know what happens next",
      description:
        "After you submit an inquiry, expect a direct follow-up to align on date, package fit, and any helpful details.",
      icon: "\u2709",
    },
  ],
  showcaseCharacters: getCharactersByCategories(["Mascot", "Rental"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  bookingNote:
    "Ready to check a date? Pop into the booking form and note whether you want a mascot visit, a rental, or both—we will tailor the reply with setup timing and the clearest next step.",
  cta: {
    eyebrow: "Plan the cheerful part",
    title:
      "Bundle mascots, rentals, and character visits without juggling multiple vendors.",
    description:
      "The same premium inquiry flow covers every party type, so your special requests, arrival windows, and add-ons stay in one thread with our team.",
    notes: [
      "One form for princess, hero, mascot, and rental combinations",
      "Easy space to mention timing, setup questions, and special requests",
      "A real person follows up with the next clear step",
    ],
    primaryCta: {
      label: "Check availability",
      href: "/book",
    },
    secondaryCta: {
      label: "Browse heroes instead",
      href: "/heroes",
    },
  },
} as const;
