import { pickCharacters, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const heroesPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Heroes", href: "#top" },
    { label: "Featured", href: "#characters" },
    { label: "Packages", href: "#packages" },
    { label: "Book", href: "#book-cta" },
  ],
  hero: {
    eyebrow: "Superhero Parties",
    title:
      "High-impact hero parties with confident arrivals, mission-ready energy, and a premium pace parents trust.",
    description:
      "Superhero celebrations should feel electric for kids and impressively organized for grown-ups: bold character presence, action-forward games, and a tone that stays heroic without tipping into chaos.",
    highlights: [
      "Mission-style flow that keeps energy moving on purpose",
      "Hero arrivals built for big reactions and clean photos",
      "Parent-friendly structure with clear beats from start to finish",
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
    panelTitle: "Bold motion, bright confidence, and celebration energy that still feels polished.",
    panelDescription:
      "The hero path keeps the same premium brand shell while shifting the story toward action, teamwork, and unforgettable birthday momentum.",
    supportingCards: [
      {
        eyebrow: "Arrival energy",
        title: "A heroic entrance that sets the pace",
        description:
          "The first minute is designed to feel exciting, intentional, and instantly photo-ready.",
      },
      {
        eyebrow: "Party rhythm",
        title: "Action-forward games with guardrails",
        description:
          "Big movement stays structured so the room feels fun, not frantic, for every age in attendance.",
      },
      {
        eyebrow: "Keepsake feel",
        title: "Moments kids replay in their heads",
        description:
          "Victory beats, team cheers, and celebratory peaks that feel earned and memorable.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Featured heroes",
      title: "Choose the hero energy that matches your child’s favorite kind of save-the-day magic.",
      description:
        "Each hero leans into a different celebration style while staying inside the same premium experience standards and booking structure.",
    },
    experience: {
      eyebrow: "Experience highlights",
      title: "Superhero parties should feel thrilling, not loud for the sake of loud.",
      description:
        "High energy is shaped with pacing, clarity, and warmth so parents can relax, take photos, and enjoy the celebration alongside the kids.",
    },
    packages: {
      eyebrow: "Hero package overview",
      title: "Same trusted packages—tuned for action-led birthdays and mission-style play.",
      description:
        "Families still compare duration and highlights the same way as other paths, with copy that reflects how hero visits tend to move in the room.",
    },
    trust: {
      eyebrow: "Built for real families",
      title: "Parents should feel the excitement—and still feel completely taken care of.",
      description:
        "These are the trust signals we lean on for hero bookings: communication that stays clear, performers who read the room, and a brand tone that never sacrifices polish.",
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
      title: "Action that stays age-aware and supervised",
      description:
        "Energy is high, but choices stay thoughtful for mixed ages, home spaces, and the realities of a birthday crowd.",
      icon: "\u2713",
    },
    {
      eyebrow: "Communication you can count on",
      title: "Straightforward answers before the big day",
      description:
        "Expectations, timing, and next steps are written to reduce back-and-forth so booking feels calm, not confusing.",
      icon: "\u2709",
    },
    {
      eyebrow: "Photo-friendly presentation",
      title: "Looks bold on camera without feeling messy",
      description:
        "Costuming and movement choices are tuned so memories look as good as they felt in the moment.",
      icon: "\u231A",
    },
  ],
  characters: pickCharacters(["skyline-hero", "shield-captain", "photon-streak"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  cta: {
    eyebrow: "Ready to book the hero party",
    title:
      "Send the date and let’s build a superhero celebration that feels epic, organized, and completely on-brand.",
    description:
      "This page hands naturally into booking. When you are ready, the next step is a simple request with the details we need to respond quickly.",
    notes: [
      "Best fit for birthdays that want motion-forward fun with a premium host feel",
      "Works beautifully alongside future add-ons like decor, extras, and travel rules",
      "Structured content makes updates easy as your roster and packages evolve",
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
