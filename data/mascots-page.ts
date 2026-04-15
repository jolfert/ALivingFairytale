import { getCharactersByCategories, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";

export const mascotsPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Mascots", href: "#top" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Mascots & Rentals",
    title: "Bright, playful party energy that stays easy to book and simple to enjoy.",
    description:
      "Costume characters and rentals add instant smiles—especially for younger guests. This path keeps the layout light, the tone warm, and the next step obvious when you are ready to plan.",
    highlights: ["Big, friendly fun", "Great for mixed ages", "Easy pairing with packages"],
    primaryCta: {
      label: "See mascot and rental ideas",
      href: "#showcase",
    },
    secondaryCta: {
      label: "Compare packages",
      href: "#packages",
    },
    mainMedia: getMediaAsset("mascotPartyMain"),
    insetMedia: getMediaAsset("rentalSparkInset"),
    panelEyebrow: "Mascot path tone",
    panelTitle: "Simpler storytelling, brighter visuals, and a celebration that still feels premium.",
    panelDescription:
      "You get the same polished communication and booking structure as our other paths—just tuned for playful arrivals, shorter attention spans, and add-ons that make the day feel bigger.",
    supportingCards: [
      {
        eyebrow: "For the room",
        title: "Approachable energy",
        description:
          "Warm hosting that keeps the vibe cheerful without turning the volume up for no reason.",
      },
      {
        eyebrow: "For parents",
        title: "Clear, low-friction planning",
        description:
          "Straightforward options and copy that respects your time—no maze of fine print.",
      },
      {
        eyebrow: "For growth",
        title: "Built to add inventory later",
        description:
          "New mascots and rentals can slot into this same grid as your roster expands.",
      },
    ],
  },
  sections: {
    showcase: {
      eyebrow: "Showcase",
      title: "Start with mascot fun, rental impact, or both—then shape the day around your package.",
      description:
        "These entries are structured like the rest of the site so you can grow the catalog without redesigning the page.",
    },
    greatFor: {
      eyebrow: "Great for",
      title: "When a brighter, simpler party beat is the right fit.",
      description:
        "No hype, no invented claims—just clear situations where this path tends to feel best.",
    },
    packages: {
      eyebrow: "Packages and booking",
      title: "Same package names families already see elsewhere—so comparisons stay easy.",
      description:
        "Durations and highlights stay consistent across paths. When you are ready, send details through the inquiry form and we will confirm availability and next steps with you directly.",
    },
    trust: {
      eyebrow: "Reassurance",
      title: "What you can expect from us on mascot and rental days.",
      description:
        "Honest expectations beat fake proof. Here is how we like to run these celebrations.",
    },
  },
  greatForCards: [
    {
      eyebrow: "Ages",
      title: "Younger birthdays and mixed-age siblings",
      description:
        "When you want recognizable fun that does not depend on a long narrative arc.",
      icon: "\u2665",
    },
    {
      eyebrow: "Energy",
      title: "Backyard parties and community spaces",
      description:
        "Rentals add a focal point; mascots add warmth—together or on their own.",
      icon: "\u2600",
    },
    {
      eyebrow: "Planning style",
      title: "Families who want fewer decisions, faster clarity",
      description:
        "Straight paths, simple language, and a booking form that gathers what we need in one pass.",
      icon: "\u2713",
    },
  ],
  trustCards: [
    {
      eyebrow: "Setup",
      title: "We respect your space and your schedule",
      description:
        "Rental timing and arrival windows should feel agreed-upon, not guessed. Details get confirmed during planning—not buried in marketing copy.",
      icon: "\u2302",
    },
    {
      eyebrow: "Hosting",
      title: "Playful does not mean unmanaged",
      description:
        "Mascot moments stay guided so younger guests feel included without parents needing to steer every beat.",
      icon: "\u2726",
    },
    {
      eyebrow: "Communication",
      title: "You will know what happens next",
      description:
        "After you submit an inquiry, expect a direct follow-up to align on date, package fit, and any add-ons.",
      icon: "\u2709",
    },
  ],
  showcaseCharacters: getCharactersByCategories(["Mascot", "Rental"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  bookingNote:
    "Ready to check a date? Use the booking form—include whether you want a mascot visit, a rental, or both so we can respond with the right questions.",
  cta: {
    eyebrow: "Plan the cheerful part",
    title: "Send your mascot, rental, or combo request in one simple booking flow.",
    description:
      "You will land on the inquiry page with the same fields we use across party types, so nothing gets lost between categories.",
    notes: [
      "One form for princess, hero, mascot, and rental combinations",
      "Structured fields that are easy to connect to email or CRM later",
      "Clear next step after submit: we follow up with you directly",
    ],
    primaryCta: {
      label: "Open the inquiry form",
      href: "/book",
    },
    secondaryCta: {
      label: "Browse heroes instead",
      href: "/heroes",
    },
  },
} as const;
