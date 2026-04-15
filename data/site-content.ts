export type CharacterCategory =
  | "Princess"
  | "Hero"
  | "Mascot"
  | "Rental";

export type Character = {
  name: string;
  slug: string;
  category: CharacterCategory;
  shortDescription: string;
  tags: ReadonlyArray<string>;
  mainImage: string;
  insetImage?: string;
  featured?: boolean;
};

export type Package = {
  name: string;
  duration: string;
  description: string;
  highlights: ReadonlyArray<string>;
  featured?: boolean;
};

export const navigationLinks = [
  { label: "Home", href: "#top" },
  { label: "Choose Your Magic", href: "#paths" },
  { label: "Featured", href: "#featured-experiences" },
  { label: "Packages", href: "#packages" },
  { label: "Book", href: "#book-preview" },
] as const;

export const homeHero = {
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
};

export const partyPaths = [
  {
    eyebrow: "Princess Parties",
    title: "Storybook elegance with sparkle in every detail.",
    description:
      "For the family who wants royal arrivals, graceful pacing, beautiful photos, and a celebration that feels polished from the very first wave.",
    href: "#featured-experiences",
    ctaLabel: "See princess-inspired highlights",
    tags: ["Elegant arrivals", "Dreamy activities", "Soft sparkle"],
    accentClassName:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
    image: "/brand/party-princess.svg",
  },
  {
    eyebrow: "Hero Parties",
    title: "Bold energy without losing the premium feel.",
    description:
      "Built for exciting entrances, memorable missions, and action-forward pacing that still feels thoughtful, warm, and easy for parents to trust.",
    href: "#featured-experiences",
    ctaLabel: "See hero-inspired highlights",
    tags: ["Strong entrances", "Mission moments", "Big kid excitement"],
    accentClassName:
      "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
    image: "/brand/party-hero.svg",
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
    image: "/brand/party-mascot.svg",
  },
] as const;

export const trustPillars = [
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
] as const;

export const princesses: Character[] = [
  {
    name: "Radiant Rose Princess",
    slug: "radiant-rose-princess",
    category: "Princess",
    shortDescription:
      "Warm, graceful, and perfect for a celebration that leans classic, elegant, and picture-ready.",
    tags: ["Royal welcome", "Coronation charm", "Photo favorite"],
    mainImage: "/brand/party-princess.svg",
    insetImage: "/brand/party-princess.svg",
    featured: true,
  },
  {
    name: "Snowfall Princess",
    slug: "snowfall-princess",
    category: "Princess",
    shortDescription:
      "A sparkling option for children who love a magical, wintry, sing-along style celebration.",
    tags: ["Sparkle moments", "Big reactions", "Dreamy tone"],
    mainImage: "/brand/party-princess.svg",
    insetImage: "/brand/party-princess.svg",
    featured: true,
  },
];

export const heroes: Character[] = [
  {
    name: "Skyline Hero",
    slug: "skyline-hero",
    category: "Hero",
    shortDescription:
      "Fast-paced, confident, and ideal for kids who want a party that feels active from start to finish.",
    tags: ["Hero training", "Action energy", "Arrival wow-factor"],
    mainImage: "/brand/party-hero.svg",
    insetImage: "/brand/party-hero.svg",
    featured: true,
  },
  {
    name: "Shield Captain",
    slug: "shield-captain",
    category: "Hero",
    shortDescription:
      "A courageous, team-focused hero vibe that works beautifully for mission-style celebrations.",
    tags: ["Team moments", "Leadership feel", "Strong pacing"],
    mainImage: "/brand/party-hero.svg",
    insetImage: "/brand/party-hero.svg",
    featured: true,
  },
];

export const mascots: Character[] = [
  {
    name: "Storybook Mouse",
    slug: "storybook-mouse",
    category: "Mascot",
    shortDescription:
      "Playful, instantly recognizable, and a joyful pick for younger guests and big group smiles.",
    tags: ["Big hugs", "Simple fun", "Photo magnet"],
    mainImage: "/brand/party-mascot.svg",
    insetImage: "/brand/party-mascot.svg",
    featured: true,
  },
];

export const rentals: Character[] = [
  {
    name: "Pink Castle Bounce House",
    slug: "pink-castle-bounce-house",
    category: "Rental",
    shortDescription:
      "A ready-to-grow rental category with playful visual energy and clear room for future inventory expansion.",
    tags: ["Party extra", "Visual impact", "Expansion ready"],
    mainImage: "/brand/party-rental.svg",
    insetImage: "/brand/party-rental.svg",
    featured: true,
  },
];

export const featuredHomepageCharacters: Character[] = [
  princesses[0],
  princesses[1],
  heroes[0],
  mascots[0],
];

export const packages: Package[] = [
  {
    name: "Mini Visit",
    duration: "30 minutes",
    description:
      "A quick burst of character magic for birthdays that need a big moment without a longer schedule.",
    highlights: [
      "Best for cake moments, photos, and a memorable entrance",
      "Great when families want character sparkle without a full activity block",
      "Easy add-on starting point for future upsells",
    ],
  },
  {
    name: "Storybook Celebration",
    duration: "60 minutes",
    description:
      "The sweet spot for most families: enough time for interactive moments, photos, and a celebration that feels complete.",
    highlights: [
      "Built for games, storytelling, hero missions, or princess activities",
      "Balances memorable moments with a clean, parent-friendly timeline",
      "Strong default recommendation for the final booking flow",
    ],
    featured: true,
  },
  {
    name: "Signature Fairytale",
    duration: "90 minutes",
    description:
      "A fuller premium experience for families who want a stronger entrance, more activities, and extra breathing room.",
    highlights: [
      "Ideal for larger parties or layered experiences",
      "Natural fit for character plus rental combinations later on",
      "Leaves room for premium add-ons in the expanded site",
    ],
  },
] as const;

export const testimonials = [
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
] as const;
