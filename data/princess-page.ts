import { getCharactersByCategory, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const princessPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Princess Parties",
    title: "A real-life princess at her birthday party.",
    description:
      "Ariel, Belle, Cinderella, the Ice Queen, Rapunzel, Jasmine, Moana, Sleeping Beauty and more — in authentic ball gowns that are breath-taking in person and stunning in photos.",
    highlights: [
      "Authentic, breath-taking ball gowns",
      "Trained in acting, singing and modelling",
      "The largest princess roster in Manitoba",
    ],
    primaryCta: {
      label: "Book a princess party",
      href: "/book",
    },
    secondaryCta: {
      label: "See packages",
      href: "#packages",
    },
    mainMedia: getMediaAsset("princessLandingMain"),
    insetMedia: getMediaAsset("cinderellaBluePortrait"),
    panelEyebrow: "What makes a Living Fairytale princess",
    panelTitle: "Deeply in character from the first hug to the final photo.",
    panelDescription:
      "Every performer is highly knowledgeable about the character she's portraying. The voice, the grace, the storytelling — it all has to match the children's expectations of their favourite princess.",
    supportingCards: [
      {
        eyebrow: "Entrance",
        title: "A dramatic arrival",
        description:
          "Every princess walks in fully in character. No breaking, no awkward pause — just the magic the birthday child has been picturing all week.",
      },
      {
        eyebrow: "Interaction",
        title: "Storytelling, singing, games",
        description:
          "Every party includes storytelling and activities picked for the age group. Silver and Gold add face painting, gift opening and temporary tattoos.",
      },
      {
        eyebrow: "Keepsakes",
        title: "Photos the family will frame",
        description:
          "Beautiful ball gowns photograph beautifully. We pace the party so there's always time for pictures with every child.",
      },
    ],
  },
  sections: {
    characters: {
      eyebrow: "Meet the princesses",
      title: "Our full roster of princess favourites.",
      description:
        "Classic fairytale princesses, frozen favourites, Moana, Jasmine, Fancy Nancy, Barbie and more. Click any card for her full detail page.",
    },
    experience: {
      eyebrow: "What's included",
      title: "What happens during a princess party.",
      description:
        "Every package includes the core moments children remember most. Silver and Gold unlock more time for activities, face painting and a fuller celebration.",
    },
    packages: {
      eyebrow: "Packages",
      title: "Bronze, Silver, Gold.",
      description:
        "One hour, one and a half hours, or two full hours. Same quality, same trained performers — just how much time you want her to stay.",
    },
  },
  experienceCards: [
    {
      eyebrow: "Core moment",
      title: "Dramatic entrance",
      description:
        "The birthday child sees her favourite princess walk through the door, fully in character. The reaction is priceless every single time.",
      icon: "\u2726",
    },
    {
      eyebrow: "Core moment",
      title: "Storytelling & singing",
      description:
        "An interactive fairytale, songs the children already know, and plenty of time for every child to feel seen and included.",
      icon: "\u2661",
    },
    {
      eyebrow: "Core moment",
      title: "Keepsake photos",
      description:
        "Pictures with the birthday child, pictures with every guest, and a dramatic exit that leaves the magic intact.",
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
    eyebrow: "Let's make it magical",
    title: "Book her favourite princess for the big day.",
    description:
      "Send us the date, the princess she's been asking for, and a few details about your party. A real person will follow up — usually within a day.",
    notes: [
      "Weekend dates book fast during spring and fall",
      "Multiple princesses can arrive together for larger parties",
      "Mention any theme requests, allergies or timing notes up front",
    ],
    primaryCta: {
      label: "Book a princess party",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to home",
      href: "/",
    },
  },
} as const;
