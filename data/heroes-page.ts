import { pickCharacters, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const heroesPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Superhero Parties",
    title:
      "Superhero parties with bold entrances, real character photos, and the kind of birthday moments kids talk about for weeks.",
    description:
      "For children who want their celebration to feel bold, exciting, and larger than life, our superhero parties bring Batman, Spider-Man, and comic-book energy into a booking flow parents can actually feel good about.",
    highlights: [
      "Batman and Spider-Man photos from real past celebrations",
      "Big entrance energy kids instantly react to",
      "Confident, photo-friendly moments parents love too",
    ],
    primaryCta: {
      label: "Choose your superhero",
      href: "#characters",
    },
    secondaryCta: {
      label: "See package options",
      href: "#packages",
    },
    mainMedia: getMediaAsset("batmanMain"),
    insetMedia: getMediaAsset("spidermanPortrait"),
    panelEyebrow: "Hero path tone",
    panelTitle:
      "Bold pacing, real superhero visuals, and birthday energy that lands right away.",
    panelDescription:
      "This experience keeps the same polished planning and warm communication as the rest of the site, while shifting the mood toward action, confidence, and the superhero characters children recognize first.",
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
      eyebrow: "Featured superheroes",
      title:
        "Choose the superhero energy that feels closest to what they are already imagining.",
      description:
        "These featured cards use real photos from the legacy site so families can see the tone, costume look, and birthday energy before they ever submit the form.",
    },
    experience: {
      eyebrow: "What families can expect",
      title: "Superhero parties should feel exciting without feeling chaotic.",
      description:
        "We keep this path bold and energetic while still making sure the structure feels clear, comfortable, and parent-friendly.",
    },
    packages: {
      eyebrow: "Superhero package overview",
      title: "Choose the party pace that fits the kind of excitement you want.",
      description:
        "From a shorter superhero visit to a fuller action-packed celebration, each package keeps the experience easy to understand and easy to book.",
    },
  },
  experienceCards: [
    {
      eyebrow: "For the birthday child",
      title: "A birthday entrance kids actually react to",
      description:
        "The arrival moment is built to create that instant 'wow' feeling children remember, with the kind of superhero recognition that hits fast.",
      icon: "\u2605",
    },
    {
      eyebrow: "For the guest list",
      title: "A celebration that feels lively and organized",
      description:
        "The pacing keeps the energy up without making the whole party feel rushed or messy, even when the room is full of excited little superheroes.",
      icon: "\u2694",
    },
    {
      eyebrow: "For the grown-ups",
      title: "Memorable moments parents will want to capture",
      description:
        "Strong character visuals and interactive moments help create photos and reactions worth keeping, not just a quick walk-through appearance.",
      icon: "\u2726",
    },
  ],
  characters: pickCharacters(["batman", "spider-man", "hero-team-up"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  cta: {
    eyebrow: "Ready for an epic booking?",
    title:
      "Let's build the kind of superhero party they'll remember long after the gifts are opened.",
    description:
      "Tell us the date, your party details, and whether they are hoping for Batman, Spider-Man, or a broader superhero feel, and we'll help you take it from there.",
    notes: [
      "Great for birthdays that want motion-forward fun with a premium host feel",
      "Easy to tailor with add-ons, travel notes, and celebration details",
      "Built to keep the excitement high and the planning clear",
    ],
    primaryCta: {
      label: "Start a superhero request",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
