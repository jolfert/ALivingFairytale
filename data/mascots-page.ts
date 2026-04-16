import { getCharactersByCategories, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const mascotsPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Mascots & Rentals",
    title:
      "Playful mascot visits and bright rental extras that make celebrations feel bigger, easier, and more fun.",
    description:
      "From Olaf mascot fun to pink bounce-house and tent rentals, this path is perfect for families, schools, and community events that want something cheerful, easy, and memorable.",
    highlights: [
      "Real rental photos from the original site",
      "Great for mixed ages",
      "Easy to pair with character visits",
    ],
    primaryCta: {
      label: "Ask about mascots & rentals",
      href: "#showcase",
    },
    secondaryCta: {
      label: "Book your party",
      href: "/book",
    },
    mainMedia: getMediaAsset("rentalBouncePhoto"),
    insetMedia: getMediaAsset("olafPortrait"),
    panelEyebrow: "Mascot path tone",
    panelTitle:
      "Brighter visuals, simpler storytelling, and party add-ons that still feel polished.",
    panelDescription:
      "You get the same warm communication and polished planning as every other path, just tuned for playful arrivals, cheerful rentals, and easy add-ons that help the party look fuller right away.",
    supportingCards: [
      {
        eyebrow: "For the room",
        title: "Approachable energy",
        description:
          "The celebration stays joyful and crowd-friendly without turning the volume up for no reason.",
      },
      {
        eyebrow: "For parents",
        title: "Clear, low-friction planning",
        description:
          "Straightforward choices and easy language keep the decision-making light.",
      },
      {
        eyebrow: "For the party",
        title: "Simple ways to make the day feel bigger",
        description:
          "A mascot visit, a rental, or a cheerful combination can add instant visual fun without complicating the plan.",
      },
    ],
  },
  sections: {
    showcase: {
      eyebrow: "Mascots and extras",
      title:
        "Fun options for celebrations that want a little more movement, color, and instant visual payoff.",
      description:
        "This page is designed for playful add-ons, simple smiles, and event extras that make the day feel fuller without making it harder to plan.",
    },
    greatFor: {
      eyebrow: "Great for",
      title: "A strong fit for all kinds of family-friendly events.",
      description:
        "This path tends to shine for younger guests, mixed ages, and families who want quick clarity with a lot of cheerful payoff.",
    },
    packages: {
      eyebrow: "Booking note",
      title: "Simple to ask about. Easy to build into your event.",
      description:
        "Mascot and rental availability can vary depending on the date, event type, and setup needs. Send us your event details and we'll help you understand what fits best.",
    },
  },
  greatForCards: [
    {
      eyebrow: "Birthdays",
      title: "Birthday parties",
      description:
        "Add a cheerful surprise that keeps children smiling and gives the celebration a fun extra moment without overcomplicating the schedule.",
      icon: "\u2665",
    },
    {
      eyebrow: "Schools",
      title: "School and daycare events",
      description:
        "Perfect for group settings that want a playful visual moment children instantly recognize.",
      icon: "\u2600",
    },
    {
      eyebrow: "Communities",
      title: "Community celebrations",
      description:
        "A simple way to bring more color, character, and energy to public or neighborhood events.",
      icon: "\u2713",
    },
    {
      eyebrow: "Gatherings",
      title: "Seasonal and family gatherings",
      description:
        "A fun option for celebrations that want an easy crowd-pleaser without overcomplicating the day.",
      icon: "\u2726",
    },
  ],
  showcaseCharacters: getCharactersByCategories(["Mascot", "Rental"]),
  packages: pickPackages([
    "mini-visit",
    "storybook-celebration",
    "signature-fairytale",
  ]),
  bookingNote:
    "Mascot and rental availability can vary depending on the date, setup needs, and how you want to pair them with character appearances. Tell us the basics and we'll help you narrow it down quickly.",
  cta: {
    eyebrow: "Need help choosing?",
    title: "Tell us about your event and we'll help you find the best fit.",
    description:
      "If you're not sure whether you need a mascot, a bounce house, a tent, or a mix of options, send us the details and we'll point you in the right direction.",
    notes: [
      "One form for princess, superhero, mascot, and rental combinations",
      "Easy space to mention timing, setup questions, and special requests",
      "A real person follows up with the next clear step",
    ],
    primaryCta: {
      label: "Inquire now",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to homepage",
      href: "/",
    },
  },
} as const;
