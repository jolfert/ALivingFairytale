import { getCharactersByCategory, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const princessPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Characters", href: "#characters" },
    { label: "Packages", href: "#packages" },
    { label: "Mascots", href: "/mascots" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Princess Parties",
    title:
      "Princess parties that feel dreamy, polished, and genuinely magical.",
    description:
      "From the first royal wave to the last hug, every beat is paced for wide-eyed wonder in the room and calm confidence behind the camera—so parents can soak it in while the birthday child shines.",
    highlights: [
      "Warm, in-character princess arrivals",
      "Interactive moments shaped for birthday pacing",
      "Elegant visuals that still feel playful and child-centered",
    ],
    primaryCta: {
      label: "Meet the princesses",
      href: "#characters",
    },
    secondaryCta: {
      label: "Compare royal packages",
      href: "#packages",
    },
    mainMedia: getMediaAsset("princessRoseMain"),
    insetMedia: getMediaAsset("princessSnowPortrait"),
    panelEyebrow: "Princess path tone",
    panelTitle: "Soft sparkle, graceful pacing, and moments worth framing.",
    panelDescription:
      "The princess experience leans sweeter and dreamier while keeping the same premium standard families expect from the rest of the brand.",
    supportingCards: [
      {
        eyebrow: "Arrival feel",
        title: "Elegant entrances",
        description:
          "The magic starts strong without ever feeling rushed or overwhelming.",
      },
      {
        eyebrow: "Parent confidence",
        title: "Beautifully guided flow",
        description:
          "Activities are paced to feel easy for families and special for the birthday child.",
      },
      {
        eyebrow: "Keepsake moments",
        title: "Picture-worthy magic",
        description:
          "The celebration is shaped around smiles, wonder, and the kind of moments parents love to capture.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Featured princesses",
      title:
        "Choose the princess who feels closest to her favorite kind of magic.",
      description:
        "Each character carries her own mood, color story, and celebration energy while still fitting inside the same polished party experience.",
    },
    experience: {
      eyebrow: "What families can expect",
      title: "Princess parties should feel enchanting, not disorganized.",
      description:
        "We shape this path around the details parents care about most: smooth pacing, lovely photos, and a birthday child who truly feels seen.",
    },
    packages: {
      eyebrow: "Princess package overview",
      title: "Choose the pacing that fits the celebration you're planning.",
      description:
        "Whether you want a sweet royal visit or a fuller fairytale experience, each package keeps the choice clear and the next step easy.",
    },
  },
  experienceCards: [
    {
      eyebrow: "For the birthday child",
      title: "She feels like the star of the story",
      description:
        "The structure creates real character connection, not just a quick appearance and photo line.",
      icon: "\u2726",
    },
    {
      eyebrow: "For the room",
      title: "A celebration that looks every bit as lovely as it feels",
      description:
        "From the entrance to the keepsake photos, the atmosphere stays sweet, polished, and full of wonder.",
      icon: "\u2661",
    },
    {
      eyebrow: "For the grown-ups",
      title: "A parent-friendly flow that stays easy to follow",
      description:
        "Clear package choices, thoughtful timing, and warm communication make it easy to relax and enjoy the day.",
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
    eyebrow: "Ready for a royal booking",
    title:
      "Let us craft the princess party they replay in their imagination long after the candles are blown out.",
    description:
      "Tell us your date, guest-of-honor details, and the princess energy you are dreaming of. We will reply with availability, pacing guidance, and the gentle next steps to make it official.",
    notes: [
      "A lovely fit for birthdays that want beautiful character-led moments",
      "Easy to pair with add-ons, travel notes, and special requests",
      "Designed to feel magical for children and calm for parents",
    ],
    primaryCta: {
      label: "Reserve your royal visit",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
