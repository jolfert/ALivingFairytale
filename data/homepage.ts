import { packages, pickCharacters } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const homepageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Mascots", href: "/mascots" },
    { label: "Featured", href: "#featured-experiences" },
    { label: "Packages", href: "#packages" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Magical party entertainment for unforgettable celebrations",
    title: "Make their special day feel like pure magic.",
    description:
      "From enchanting princess visits to action-packed hero appearances and playful mascot fun, A Living Fairytale creates party moments children remember long after the candles are blown out.",
    highlights: [
      "Performers who arrive ready, in character, and on time",
      "Warm, human follow-up from inquiry to celebration day",
      "Princess, hero, mascot, and rental options under one trusted brand",
    ],
    primaryCta: {
      label: "Book the magic",
      href: "/book",
    },
    secondaryCta: {
      label: "Explore party types",
      href: "#paths",
    },
    stats: [
      {
        value: "3 paths",
        label: "Princess, superhero, and mascot or rental celebrations under one polished brand.",
      },
      {
        value: "Fast follow-up",
        label: "Parents get a clear reply from a real person, not a maze of automated confusion.",
      },
      {
        value: "Picture-ready",
        label: "Every experience is shaped to feel memorable in the room and beautiful in photos.",
      },
    ],
    brandMedia: getMediaAsset("siteLogo"),
    showcase: {
      eyebrow: "A peek at the feeling",
      mainMedia: getMediaAsset("cinderellaMain"),
      insetMedia: getMediaAsset("elsaPortrait"),
      storyCardEyebrow: "Party magic in real life",
      storyCardTitle:
        "Action shots for the big moment. Costume portraits for the finishing touch.",
      storyCardText:
        "The experience is built to feel magical in the room and look beautiful when the photos start rolling.",
      princessLabel: "Princess",
      princessDescription:
        "Graceful arrivals, storybook smiles, and sweet interactive magic.",
      heroLabel: "Hero",
      heroDescription:
        "Big entrances, mission moments, and confident celebration energy.",
      planningEyebrow: "Easy from the first click",
      planningTitle: "Choose your path, choose your package, tell us your date.",
      planningDescription:
        "We keep the first step simple so you can feel excited about the party instead of overwhelmed by the planning.",
      reassuranceEyebrow: "What families feel",
      reassuranceTitle:
        "Whimsical for children. Clear, warm, and polished for grown-ups.",
      supportCards: [
        {
          title: "Moments worth photographing",
          description:
            "From the entrance to the hugs, the experience is designed to look as lovely as it feels.",
        },
        {
          title: "Guidance without pressure",
          description:
            "If you are choosing between packages, themes, or characters, we help you find the right fit with confidence.",
        },
      ],
    },
  },
  sections: {
    whyUs: {
      eyebrow: "Why families choose us",
      title: "A party experience that feels magical for kids and easy for parents.",
      description:
        "We know this is more than just a booking. It's your child's big day. That's why we focus on creating celebrations that feel warm, polished, memorable, and simple to plan.",
    },
    paths: {
      eyebrow: "Choose your party experience",
      title: "Pick the kind of magic they'll never forget.",
      description:
        "Whether your child dreams of a royal celebration, an epic hero entrance, or playful mascot fun, we'll help you create a party that feels exciting, polished, and easy from start to finish.",
    },
    featured: {
      eyebrow: "Featured experiences",
      title: "Choose the party style that fits your celebration best.",
      description:
        "Every party path carries its own energy, while still feeling polished, special, and easy to book.",
    },
    packages: {
      eyebrow: "Packages made simple",
      title: "Simple packages. Beautiful memories.",
      description:
        "Whether you want a sweet character visit or a fuller interactive experience, we'll help you choose the package that fits your celebration best.",
    },
    trust: {
      eyebrow: "Why parents feel comfortable saying yes",
      title: "Trust starts with clear expectations, warm tone, and zero guesswork.",
      description:
        "Thoughtful performers, photo-aware pacing, and a booking flow that gathers what we need in one calm pass so you always know what happens next.",
    },
  },
  partyPaths: [
    {
      eyebrow: "Princess Parties",
      title: "Princess Parties",
      description:
        "Graceful entrances, storybook moments, songs, smiles, and beautiful photo opportunities for children who want to feel like royalty.",
      href: "/princess",
      ctaLabel: "Choose a princess party",
      tags: ["Elegant arrivals", "Dreamy activities", "Soft sparkle"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
      image: getMediaAsset("partyPrincessIcon"),
    },
    {
      eyebrow: "Hero Parties",
      title: "Hero Parties",
      description:
        "Big energy, memorable entrances, fun interaction, and birthday excitement for kids who want their celebration to feel bold and unforgettable.",
      href: "/heroes",
      ctaLabel: "Choose a hero party",
      tags: ["Strong entrances", "Mission moments", "Big kid excitement"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("partyHeroIcon"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Mascots & Rentals",
      description:
        "Playful mascot visits and party add-ons that bring extra color, fun, and excitement to birthdays, school events, and family celebrations.",
      href: "/mascots",
      ctaLabel: "See mascots & rentals",
      tags: ["Crowd-pleasing", "Easy add-ons", "Flexible fun"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,255,247,0.98))]",
      image: getMediaAsset("partyMascotIcon"),
    },
  ],
  trustPillars: [
    {
      title: "Beautiful first impressions",
      description:
        "From the moment your character arrives, the experience is designed to feel exciting, polished, and photo-worthy.",
      icon: "\u2661",
    },
    {
      title: "Warm, child-friendly interaction",
      description:
        "We shape each experience around the birthday child and their guests so the celebration feels personal, engaging, and joyful.",
      icon: "\u2726",
    },
    {
      title: "Simple booking, clear next steps",
      description:
        "Clear package options, an easy inquiry process, and friendly follow-up make planning feel much less stressful.",
      icon: "\u263C",
    },
    {
      title: "More than birthday parties",
      description:
        "Perfect for birthdays, school events, holiday events, community gatherings, and celebrations that need a little extra magic.",
      icon: "\u2301",
    },
  ],
  featuredCharacters: pickCharacters([
    "ariel",
    "belle",
    "cinderella",
    "elsa",
  ]),
  packages,
  testimonials: [
    {
      note: "Easy communication",
      title: "You know what happens next",
      description:
        "From the first inquiry to the follow-up, the process is designed to feel calm, clear, and personal.",
    },
    {
      note: "Beautiful memories",
      title: "The party feels magical in the room and lovely in photos",
      description:
        "The pacing, presentation, and character moments are shaped to create smiles that look just as good as they feel.",
    },
    {
      note: "Premium without stiffness",
      title: "Warm service with a polished finish",
      description:
        "Families get the excitement children want and the reassurance parents appreciate, all inside one elevated brand experience.",
    },
  ],
  finalCta: {
    eyebrow: "Ready to book?",
    title: "Let's create the party they keep talking about after the day is over.",
    description:
      "Tell us a little about your celebration, and we'll help you choose the right party type, package, and character for a day that feels truly special.",
    steps: [
      {
        step: "1",
        title: "Choose your party style",
        description: "Princess, hero, mascot, rental, or a mix that fits your day.",
      },
      {
        step: "2",
        title: "Pick the package that feels right",
        description: "Choose the pacing that works best for your child and guest list.",
      },
      {
        step: "3",
        title: "Share the date and details",
        description: "Tell us the basics, plus anything special you want us to know.",
      },
      {
        step: "4",
        title: "Watch for our reply",
        description: "We follow up with a warm, focused response and the next clear step.",
      },
    ],
    previewEyebrow: "Booking made simple",
    previewTitle: "Clear expectations, thoughtful questions, and a calm next step.",
    previewDescription:
      "The booking page pairs helpful reassurance with a structured inquiry form so families can send what matters without feeling buried in fields.",
    notes: [
      "A real person reviews every inquiry",
      "One form covers princess, hero, mascot, and rental requests",
      "Special requests, timing notes, and location details can all be included up front",
    ],
    primaryCta: {
      label: "Start your booking",
      href: "/book",
    },
    secondaryCta: {
      label: "View party options",
      href: "#packages",
    },
  },
} as const;
