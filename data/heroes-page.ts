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
    eyebrow: "Superhero Parties",
    title:
      "Bold superhero parties with big entrances, mission moments, and a pace parents can actually enjoy.",
    description:
      "Our hero celebrations are built to feel thrilling for kids and impressively organized for grown-ups: confident character presence, action-forward games, and a party flow that stays exciting without becoming chaotic.",
    highlights: [
      "Mission-style pacing that keeps energy moving on purpose",
      "Hero arrivals built for big reactions and strong photos",
      "Clear celebration beats from entrance to final cheer",
    ],
    primaryCta: {
      label: "Pick your hero lineup",
      href: "#characters",
    },
    secondaryCta: {
      label: "Compare packages",
      href: "#packages",
    },
    mainMedia: getMediaAsset("heroSkylineMain"),
    insetMedia: getMediaAsset("heroCaptainPortrait"),
    panelEyebrow: "Hero path tone",
    panelTitle:
      "Big energy, bold motion, and birthday momentum that still feels polished.",
    panelDescription:
      "The hero path keeps the same premium brand foundation while shifting the mood toward action, teamwork, and unforgettable save-the-day moments.",
    supportingCards: [
      {
        eyebrow: "Arrival energy",
        title: "A heroic entrance that sets the pace",
        description:
          "The first minute is designed to feel exciting, intentional, and instantly memorable.",
      },
      {
        eyebrow: "Party rhythm",
        title: "Action-forward games with real guardrails",
        description:
          "Big movement stays structured so the room feels fun, not frantic, for every age in attendance.",
      },
      {
        eyebrow: "Keepsake feel",
        title: "Moments kids replay in their heads",
        description:
          "Victory beats, team cheers, and celebration peaks that feel earned and exciting.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Featured heroes",
      title:
        "Choose the hero energy that matches your child's favorite kind of save-the-day magic.",
      description:
        "Each hero brings a different celebration style while staying inside the same premium experience standards and booking flow.",
    },
    experience: {
      eyebrow: "Experience highlights",
      title:
        "Superhero parties should feel thrilling, not loud just for the sake of loud.",
      description:
        "The energy is shaped with pacing, clarity, and warmth so parents can relax, take photos, and enjoy the celebration right along with the kids.",
    },
    packages: {
      eyebrow: "Hero package overview",
      title:
        "The same trusted package lineup, tuned for action, teamwork, and birthday bragging rights.",
      description:
        "Families still compare duration and highlights the same way they do elsewhere on the site, with copy that reflects how hero visits move in the room.",
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
      title: "Starring-role energy with a real hero arc",
      description:
        "Moments are sequenced so the birthday child feels chosen, cheered on, and celebrated at the center of the mission.",
      icon: "\u2605",
    },
    {
      eyebrow: "For the guest list",
      title: "Team missions that include everyone",
      description:
        "Games are built to pull shy kids in without pressure and keep active kids engaged without turning the room into a free-for-all.",
      icon: "\u2694",
    },
    {
      eyebrow: "For the grown-ups",
      title: "Premium hosting that stays easy to follow",
      description:
        "Clear timing, confident facilitation, and a tone that feels heroic for kids and reassuring for adults in the background.",
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
    eyebrow: "Ready to book the hero party",
    title:
      "Send the date and let's plan a superhero celebration that feels epic, polished, and easy to say yes to.",
    description:
      "When you are ready, the next step is a simple request with the details we need to respond quickly and point you toward the right fit.",
    notes: [
      "Great for birthdays that want motion-forward fun with a premium host feel",
      "Easy to tailor with add-ons, travel notes, and celebration details",
      "Built to keep the excitement high and the planning clear",
    ],
    primaryCta: {
      label: "Continue to booking",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
