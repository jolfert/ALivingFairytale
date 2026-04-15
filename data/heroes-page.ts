import { pickCharacters, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const heroesPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Heroes", href: "#top" },
    { label: "Featured", href: "#characters" },
    { label: "Packages", href: "#packages" },
    { label: "Mascots", href: "/mascots" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Hero Parties",
    title:
      "Hero parties with big energy, strong entrances, and unforgettable birthday moments.",
    description:
      "For children who want their celebration to feel bold, exciting, and larger than life, our hero parties bring action, confidence, and memorable party-day wow.",
    highlights: [
      "Big entrance energy kids instantly react to",
      "Fast-moving interaction that keeps the party lively",
      "Confident, photo-friendly moments parents love too",
    ],
    primaryCta: {
      label: "Choose your hero",
      href: "#characters",
    },
    secondaryCta: {
      label: "See package options",
      href: "#packages",
    },
    mainMedia: getMediaAsset("heroSkylineMain"),
    insetMedia: getMediaAsset("heroCaptainPortrait"),
    panelEyebrow: "Hero path tone",
    panelTitle:
      "Bold pacing, strong visuals, and birthday energy that lands right away.",
    panelDescription:
      "This experience keeps the same polished planning and warm communication as the rest of the site, while shifting the mood toward action, confidence, and fun.",
    supportingCards: [
      {
        eyebrow: "Arrival Feel",
        title: "Epic entrance",
        description:
          "The first minute is designed to feel exciting, intentional, and instantly memorable.",
      },
      {
        eyebrow: "Parent Comfort",
        title: "Clear, easy pacing",
        description:
          "Big movement stays structured so the room feels fun, not frantic, for every age in attendance.",
      },
      {
        eyebrow: "Keepsake Moments",
        title: "Big reaction photos",
        description:
          "Victory beats, team cheers, and celebration peaks that feel earned and exciting.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Featured heroes",
      title: "Choose the hero that feels closest to their kind of excitement.",
      description:
        "Each hero brings a slightly different energy, from steady and strong to fast-moving and high-impact, while keeping the same polished celebration structure.",
    },
    experience: {
      eyebrow: "What families can expect",
      title: "Hero parties should feel exciting without feeling chaotic.",
      description:
        "We keep this path bold and energetic while still making sure the structure feels clear, comfortable, and parent-friendly.",
    },
    packages: {
      eyebrow: "Hero package overview",
      title: "Choose the party pace that fits the kind of excitement you want.",
      description:
        "From a shorter hero visit to a fuller action-packed celebration, each package keeps the experience easy to understand and easy to book.",
    },
    trust: {
      eyebrow: "Built for real families",
      title:
        "Parents should feel the excitement and still feel completely taken care of.",
      description:
        "We lean on clear communication, confident performers, and thoughtful pacing so the hero experience feels just as trustworthy as it does exciting.",
    },
  },
  experienceCards: [
    {
      eyebrow: "For the birthday child",
      title: "A birthday entrance kids actually react to",
      description:
        "The arrival moment is built to create that instant 'wow' feeling children remember.",
      icon: "\u2605",
    },
    {
      eyebrow: "For the guest list",
      title: "A celebration that feels lively and organized",
      description:
        "The pacing keeps the energy up without making the whole party feel rushed or messy.",
      icon: "\u2694",
    },
    {
      eyebrow: "For the grown-ups",
      title: "Memorable moments parents will want to capture",
      description:
        "Strong character visuals and interactive moments help create photos and reactions worth keeping.",
      icon: "\u2726",
    },
  ],
  trustCards: [
    {
      eyebrow: "Safety-minded fun",
      title: "Action that stays age-aware and thoughtfully guided",
      description:
        "The energy runs high, but the choices still respect mixed ages, home spaces, and the realities of a birthday crowd.",
      icon: "\u2713",
    },
    {
      eyebrow: "Communication you can count on",
      title: "Straightforward answers before the big day",
      description:
        "Expectations, timing, and next steps are explained clearly so booking feels calm, not confusing.",
      icon: "\u2709",
    },
    {
      eyebrow: "Photo-friendly presentation",
      title: "Looks bold on camera without feeling messy",
      description:
        "Costuming, posing, and movement choices are tuned so the party photographs beautifully while still feeling high-energy.",
      icon: "\u231A",
    },
  ],
  characters: pickCharacters([
    "skyline-hero",
    "shield-captain",
    "photon-streak",
  ]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  cta: {
    eyebrow: "Ready for an epic booking?",
    title: "Let's build the kind of hero party they'll remember long after the gifts are opened.",
    description:
      "Tell us the date, your party details, and the kind of hero experience you're hoping for, and we'll help you take it from there.",
    notes: [
      "Great for birthdays that want motion-forward fun with a premium host feel",
      "Easy to tailor with add-ons, travel notes, and celebration details",
      "Built to keep the excitement high and the planning clear",
    ],
    primaryCta: {
      label: "Start a hero request",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
