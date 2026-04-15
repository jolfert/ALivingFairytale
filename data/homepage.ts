import { getMediaAsset } from "@/data/media";
import { packages, pickCharacters } from "@/data/catalog";

export const homepageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Featured", href: "#featured-experiences" },
    { label: "Packages", href: "#packages" },
    { label: "Book", href: "/book" },
  ],
  hero: {
    eyebrow: "Princess wonder, hero cheers, and unforgettable birthday magic",
    title: "Where dream parties feel effortless to book and impossible to forget.",
    description:
      "A Living Fairytale brings polished princess visits, high-energy hero moments, mascot fun, and party-ready add-ons into one premium, parent-friendly experience.",
    highlights: [
      "Real performers who stay in character",
      "Warm communication from inquiry to arrival",
      "Princess, hero, mascot, and rental options",
    ],
    primaryCta: {
      label: "Explore the magic",
      href: "#paths",
    },
    secondaryCta: {
      label: "Start a booking request",
      href: "#book-preview",
    },
    stats: [
      {
        value: "3 paths",
        label: "Princess, hero, and mascot-led celebrations under one polished brand.",
      },
      {
        value: "1 flow",
        label: "Families should never feel lost between categories, packages, and next steps.",
      },
      {
        value: "Zero guesswork",
        label: "The homepage is written to answer questions before parents need to ask them.",
      },
    ],
    brandMedia: getMediaAsset("siteLogo"),
    showcase: {
      eyebrow: "Featured atmosphere",
      princessLabel: "Princess",
      princessDescription: "Elegant arrivals, sparkling photos, story-led wonder.",
      heroLabel: "Hero",
      heroDescription:
        "High-energy missions with a polished, parent-friendly tone.",
      planningEyebrow: "Booking should feel this calm",
      planningTitle: "Pick your party path, compare packages, send the date.",
      planningDescription:
        "The next round can turn this into the full booking page, but the homepage already guides families toward the right next step.",
      reassuranceEyebrow: "Good fit for the homepage",
      reassuranceTitle: "Enchanting for children, reassuring for parents.",
      supportCards: [
        {
          title: "Princesses, heroes, mascots",
          description:
            "Clear categories without breaking the premium brand.",
        },
        {
          title: "Booking flow ready to grow",
          description:
            "The structure is set up for a future form, CRM, or email handoff.",
        },
      ],
    },
  },
  sections: {
    whyUs: {
      eyebrow: "Why parents keep choosing us",
      title: "The magic feels big for children and easy for grown-ups.",
      description:
        "Every part of the experience is designed to reduce stress: warm communication, polished performers, and party options that make it simple to pick the right fit.",
    },
    paths: {
      eyebrow: "Choose your kind of magic",
      title: "One premium brand, three beautifully different party paths.",
      description:
        "Princess celebrations stay dreamy and elegant, hero events feel bold and high-energy, and mascots plus rentals keep the fun bright and effortless.",
    },
    featured: {
      eyebrow: "Featured party types",
      title: "Every booking starts with a character kids cannot stop talking about.",
      description:
        "The homepage is built around standout experiences first, so future princess, hero, mascot, and rental pages can all plug into the same polished content model.",
    },
    packages: {
      eyebrow: "Simple package overview",
      title: "Easy to understand now, easy to expand into full pricing later.",
      description:
        "For the first launch, the focus is on clarity instead of fake precision. Families can quickly compare the shape of each experience, then confirm details during inquiry.",
    },
    trust: {
      eyebrow: "Trust built right into the layout",
      title: "This section is ready for approved reviews without forcing fake testimonials today.",
      description:
        "Until final review copy is gathered, the homepage still earns confidence through clear promises, warm service language, and a booking flow that feels cared for.",
    },
  },
  partyPaths: [
    {
      eyebrow: "Princess Parties",
      title: "Storybook elegance with sparkle in every detail.",
      description:
        "For the family who wants royal arrivals, graceful pacing, beautiful photos, and a celebration that feels polished from the very first wave.",
      href: "/princess",
      ctaLabel: "See princess-inspired highlights",
      tags: ["Elegant arrivals", "Dreamy activities", "Soft sparkle"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
      image: getMediaAsset("partyPrincessIcon"),
    },
    {
      eyebrow: "Hero Parties",
      title: "Bold energy without losing the premium feel.",
      description:
        "Built for exciting entrances, memorable missions, and action-forward pacing that still feels thoughtful, warm, and easy for parents to trust.",
      href: "/heroes",
      ctaLabel: "Explore superhero parties",
      tags: ["Strong entrances", "Mission moments", "Big kid excitement"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("partyHeroIcon"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Bright, playful fun that still looks beautifully on-brand.",
      description:
        "Perfect for families who want lovable character moments, easy add-ons, or celebration extras that make the whole event feel bigger.",
      href: "#featured-experiences",
      ctaLabel: "See mascot and rental highlights",
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
        "The copy, calls to action, and next steps are written to make decisions feel lighter instead of louder.",
      icon: "\u2661",
    },
    {
      title: "Performers with presence",
      description:
        "Every experience is framed around a memorable entrance, polished pacing, and moments that feel worthy of the photos.",
      icon: "\u2726",
    },
    {
      title: "Clear package language",
      description:
        "Families can compare experience sizes quickly now, while the codebase stays ready for more detailed pricing later.",
      icon: "\u263C",
    },
    {
      title: "Brand consistency",
      description:
        "Princesses, heroes, mascots, and rentals all live inside the same elevated visual system instead of feeling stitched together.",
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
      note: "Review-ready section",
      title: "Structured for real testimonials later",
      description:
        "The layout already supports approved review copy, star ratings, or platform imports without needing a redesign once the final testimonials are collected.",
    },
    {
      note: "Trust message",
      title: "Confidence comes from clarity, not clutter",
      description:
        "Instead of stuffing the homepage with filler, the page earns trust through calm structure, strong hierarchy, and copy that answers the questions parents actually have.",
    },
    {
      note: "Launch-friendly",
      title: "No fake social proof needed",
      description:
        "This first version stays honest: the space is ready for future reviews while protecting the premium feel of the launch site right now.",
    },
  ],
  finalCta: {
    eyebrow: "Ready to book beautifully",
    title: "The next step should feel warm, clear, and exciting.",
    description:
      "This homepage is already positioned to hand families into a dedicated booking experience next. For now, the CTA gives them clarity and keeps the premium brand feeling consistent all the way down the page.",
    steps: [
      {
        step: "1",
        title: "Choose your party style",
        description: "Princess, hero, mascot, or a package with rentals.",
      },
      {
        step: "2",
        title: "Pick your ideal package",
        description: "Start simple now and expand the experience later.",
      },
      {
        step: "3",
        title: "Send your date and notes",
        description: "We can confirm details, availability, and travel next.",
      },
      {
        step: "4",
        title: "Get a polished reply",
        description: "Warm, clear communication should feel part of the service.",
      },
    ],
    previewEyebrow: "Booking page preview",
    previewTitle: "Split layout, soft reassurance, zero chaos.",
    previewDescription:
      "When we build `/book`, the left side can hold response time, service notes, and trust details while the right side becomes a beautiful, production-ready inquiry form.",
    notes: [
      "Booking page design already planned as a split trust-plus-form layout",
      "Character, package, and category data are typed for future route expansion",
      "CTA copy is written to feel premium without sounding stiff or generic",
    ],
    primaryCta: {
      label: "Start with the homepage",
      href: "#top",
    },
    secondaryCta: {
      label: "Compare packages",
      href: "#packages",
    },
  },
} as const;
