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
    eyebrow: "Princesses, heroes, mascots, and birthday magic worth remembering",
    title:
      "Character parties that sparkle for kids—and feel effortless for the grown-ups planning them.",
    description:
      "A Living Fairytale brings polished performers, thoughtful pacing, and cheerful add-ons together in one place, so you can book a celebration that photographs beautifully and still feels calm to coordinate.",
    highlights: [
      "Performers who arrive ready, in character, and on time",
      "Warm, human follow-up from inquiry to celebration day",
      "Princess, hero, mascot, and rental options under one trusted brand",
    ],
    primaryCta: {
      label: "Find your party style",
      href: "#paths",
    },
    secondaryCta: {
      label: "Request your date",
      href: "/book",
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
      eyebrow: "Why parents choose us",
      title:
        "The celebration already feels special before the front door opens.",
      description:
        "From your first message to the final goodbye wave, we choreograph the details so you can relax, take photos, and stay present for the memories you will want to replay.",
    },
    paths: {
      eyebrow: "Choose your kind of magic",
      title: "One premium brand with three clear ways to celebrate.",
      description:
        "Princess celebrations stay dreamy and elegant, hero events feel bold and high-energy, and mascots plus rentals keep the fun bright, easy, and crowd-pleasing.",
    },
    featured: {
      eyebrow: "Featured favorites",
      title: "Start with the character they are already talking about.",
      description:
        "Every path begins with a memorable face, a recognizable feeling, and the kind of entrance kids keep replaying after the candles are blown out.",
    },
    packages: {
      eyebrow: "Package overview",
      title: "Choose the pacing that fits your day.",
      description:
        "Whether you want a quick magical visit or a fuller story-led celebration, the package lineup keeps the choice clear and the next step easy.",
    },
    trust: {
      eyebrow: "Why parents feel comfortable saying yes",
      title: "Trust starts with clear expectations, warm tone, and zero guesswork.",
      description:
        "Thoughtful performers, photo-aware pacing, and a booking flow that gathers what we need in one calm pass—so you always know what happens next.",
    },
  },
  partyPaths: [
    {
      eyebrow: "Princess Parties",
      title: "Storybook elegance with sparkle in every detail.",
      description:
        "For families who want royal arrivals, graceful pacing, lovely photos, and a celebration that feels polished from the very first wave.",
      href: "/princess",
      ctaLabel: "See princess party favorites",
      tags: ["Elegant arrivals", "Dreamy activities", "Soft sparkle"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
      image: getMediaAsset("partyPrincessIcon"),
    },
    {
      eyebrow: "Hero Parties",
      title: "Bold energy without losing the premium feel.",
      description:
        "Built for exciting entrances, memorable missions, and action-forward fun that still feels thoughtful, warm, and easy for parents to trust.",
      href: "/heroes",
      ctaLabel: "Explore superhero parties",
      tags: ["Strong entrances", "Mission moments", "Big kid excitement"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("partyHeroIcon"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Bright, playful fun that still feels beautifully put together.",
      description:
        "Perfect for families who want lovable mascot moments, easy party extras, or cheerful add-ons that make the whole celebration feel bigger.",
      href: "/mascots",
      ctaLabel: "See mascots and rentals",
      tags: ["Crowd-pleasing", "Easy add-ons", "Flexible fun"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,255,247,0.98))]",
      image: getMediaAsset("partyMascotIcon"),
    },
  ],
  trustPillars: [
    {
      title: "Parent-first planning",
      description:
        "The site is written to answer the questions parents actually have, so booking feels lighter instead of louder.",
      icon: "\u2661",
    },
    {
      title: "Performers with presence",
      description:
        "Every package is built around memorable arrivals, polished pacing, and moments that feel worthy of the photos.",
      icon: "\u2726",
    },
    {
      title: "Clear package choices",
      description:
        "Families can compare experience sizes quickly and feel confident about what happens next.",
      icon: "\u263C",
    },
    {
      title: "One consistent brand",
      description:
        "Princesses, heroes, mascots, and rentals all feel like part of the same premium celebration company.",
      icon: "\u2301",
    },
  ],
  featuredCharacters: pickCharacters([
    "radiant-rose-princess",
    "snowfall-princess",
    "skyline-hero",
    "storybook-mouse",
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
    eyebrow: "Ready when you are",
    title:
      "Share a few details and we will help you lock in the right character, package, and flow.",
    description:
      "The booking page is written to feel reassuring, not overwhelming: a short form, plain-language guidance, and a real person on the other side to confirm availability and answer what-if questions.",
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
      label: "Open the booking page",
      href: "/book",
    },
    secondaryCta: {
      label: "Compare packages first",
      href: "#packages",
    },
  },
} as const;
