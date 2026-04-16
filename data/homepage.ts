import { packages, pickCharacters } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const homepageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Magical party entertainment for unforgettable celebrations",
    title: "Make their special day feel like pure magic.",
    description:
      "From princess arrivals and superhero entrances to playful mascots and party-ready rentals, A Living Fairytale creates celebrations that feel exciting for children and beautifully easy for parents to book.",
    highlights: [
      "Performers who arrive ready, in character, and on time",
      "Warm, human follow-up from inquiry to celebration day",
      "Princess, superhero, mascot, and rental options under one trusted brand",
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
      insetMedia: getMediaAsset("iceQueenPortrait"),
      storyCardEyebrow: "Party magic in real life",
      storyCardTitle:
        "Action shots for the big moment. Costume portraits for the finishing touch.",
      storyCardText:
        "The experience is built to feel magical in the room and look beautiful when the photos start rolling.",
      princessLabel: "Princess",
      princessDescription:
        "Graceful arrivals, storybook smiles, and sweet interactive magic.",
      heroLabel: "Superhero",
      heroDescription:
        "Batman, Spiderman, and superhero-style party energy with bold entrances and big reactions.",
      planningEyebrow: "Easy from the first click",
      planningTitle: "Choose your path, choose your package, tell us your date.",
      planningDescription:
        "We keep the first step simple so you can move from 'What should we do?' to 'Yes, let's book it' without a maze of follow-up questions.",
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
      title: "Start with the party path that fits your child best.",
      description:
        "Whether your child dreams of a royal celebration, a superhero surprise, or cheerful mascot fun with rentals, we'll help you shape a party that feels polished, memorable, and easy to plan.",
    },
    featured: {
      eyebrow: "Start with the favorites",
      title: "A quick look at the party types families ask about most.",
      description:
        "Just enough to compare the feeling of each path before you head deeper into princesses, heroes, mascots, or rentals.",
    },
    packages: {
      eyebrow: "Packages made simple",
      title: "Simple packages. Beautiful memories.",
      description:
        "Whether you want a sweet character visit or a fuller interactive experience, we'll help you choose the package that fits your celebration best.",
    },
    trust: {
      eyebrow: "Why parents feel comfortable booking",
      title: "Warm communication, beautiful presentation, and a process that stays easy to follow.",
      description:
        "Thoughtful performers, photo-aware pacing, and one clear booking path help families move forward without second-guessing the next step.",
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
      image: getMediaAsset("cinderellaBluePortrait"),
    },
    {
      eyebrow: "Superhero Parties",
      title: "Superhero Parties",
      description:
        "Batman, Spiderman, and superhero-style visits with big entrances, bold photos, and birthday energy kids instantly respond to.",
      href: "/heroes",
      ctaLabel: "Choose a superhero party",
      tags: ["Batman", "Spiderman", "Action energy"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("batmanPortrait"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Mascots & Rentals",
      description:
        "Olaf mascot fun, pink bounce-house rentals, and cheerful add-ons that make birthdays, school events, and family celebrations feel fuller.",
      href: "/mascots",
      ctaLabel: "See mascots & rentals",
      tags: ["Olaf", "Pink bounce house", "Easy add-ons"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,255,247,0.98))]",
      image: getMediaAsset("olafPortrait"),
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
  ],
  featuredCharacters: pickCharacters([
    "ice-queen",
    "batman",
    "olaf",
    "pink-castle-bounce-house",
  ]),
  packages,
  finalCta: {
    eyebrow: "Ready to book?",
    title: "Let's create the party they keep talking about after the day is over.",
    description:
      "Tell us a little about your celebration, and we'll help you choose the right party type, package, character, mascot, or rental for a day that feels truly special.",
    steps: [
      {
        step: "1",
        title: "Choose your party style",
        description:
          "Princess, superhero, mascot, rental, or a mix that fits your day.",
      },
      {
        step: "2",
        title: "Share the date and details",
        description: "Tell us the basics, plus anything special you want us to know.",
      },
      {
        step: "3",
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
      label: "Compare party paths",
      href: "#paths",
    },
  },
} as const;
