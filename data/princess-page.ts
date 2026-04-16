import { getCharactersByCategory, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const princessPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Princess Parties",
    title:
      "Choose from a full cast of princess favorites, now with the real photos families already know.",
    description:
      "From Ariel and Belle to Cinderella, Ice Queen, Rapunzel, and more, our princess parties are designed to feel magical for children and reassuringly polished for parents from the first wave to the final photo.",
    highlights: [
      "Real action photos paired with costume portraits",
      "Each princess now has her own detail page",
      "Warm arrivals, guided pacing, and beautiful party memories",
    ],
    primaryCta: {
      label: "Choose your princess",
      href: "#characters",
    },
    secondaryCta: {
      label: "See package options",
      href: "#packages",
    },
    mainMedia: getMediaAsset("princessLandingMain"),
    insetMedia: getMediaAsset("cinderellaBluePortrait"),
    panelEyebrow: "Princess path tone",
    panelTitle: "Soft sparkle, graceful pacing, and a princess roster deep enough to fit her real favorite.",
    panelDescription:
      "This path keeps the same premium brand feel while giving families a fuller lineup of recognizable princesses, real photos, and an easy way to click into each character for more detail.",
    supportingCards: [
      {
        eyebrow: "Arrival feel",
        title: "Elegant entrances",
        description:
          "The magic starts strong without ever feeling rushed or overwhelming.",
      },
      {
        eyebrow: "Parent Comfort",
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
        "Choose the princess who feels closest to her favorite kind of magic, then click through for her full page.",
      description:
        "Every card pairs an action photo with a costume portrait so families can see the party feeling and the exact look at a glance.",
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
    eyebrow: "Ready for a royal booking?",
    title: "Let's create the princess party they keep talking about after the candles are blown out.",
    description:
      "If this feels like the right fit, the next step is simple. Send us the date, the party details, and the princess you have in mind, and we'll guide the rest.",
    notes: [
      "A lovely fit for birthdays that want beautiful character-led moments",
      "Easy to pair with add-ons, travel notes, and special requests",
      "Designed to feel magical for children and calm for parents",
    ],
    primaryCta: {
      label: "Start a princess request",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
