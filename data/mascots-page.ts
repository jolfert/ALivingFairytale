import { getCharactersByCategories, pickPackages } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const mascotsPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Mascots & Rentals",
    title: "Mascot suits and party rentals — easy add-ons for any celebration.",
    description:
      "Mascot suit rentals ($100) and our bright pink castle bounce house ($50, 9' × 12' × 16'). A low-effort way to make a birthday, school event or community party feel bigger.",
    highlights: [
      "Mascot suits $100",
      "Bounce house $50",
      "No entertainer included — it's a costume rental",
    ],
    primaryCta: {
      label: "Ask about a rental",
      href: "/book",
    },
    secondaryCta: {
      label: "See what's available",
      href: "#showcase",
    },
    mainMedia: getMediaAsset("rentalBouncePhoto"),
    insetMedia: getMediaAsset("olafPortrait"),
    panelEyebrow: "How rentals work",
    panelTitle: "You pick it up, you run the show, you return it.",
    panelDescription:
      "Mascot suits and the bounce house are costume and equipment rentals. There's no entertainer included — you (or a family member) wear the suit, or supervise the bounce house. It's the easy, affordable way to add visual fun to your event.",
    supportingCards: [
      {
        eyebrow: "Rental",
        title: "Mascot suits — $100",
        description:
          "Lego Man, Olaf, Elmo, Cookie Monster, Hello Kitty, Minion, Buzz Lightyear, Mickey, Minnie, Ninja Turtles and more. No entertainer included.",
      },
      {
        eyebrow: "Rental",
        title: "Bouncy house — $50",
        description:
          "Our bright pink castle bounce house, 9' × 12' × 16'. A favourite for outdoor birthdays, backyard parties and community events.",
      },
      {
        eyebrow: "Add-on",
        title: "Pair with a character",
        description:
          "Want Olaf to actually interact with the kids? Book a princess or superhero package and add a mascot on top — we'll make sure it all fits together.",
      },
    ],
  },
  sections: {
    showcase: {
      eyebrow: "Mascots & rentals available",
      title: "A look at the inventory.",
      description:
        "The mascot roster grows with demand. If you don't see what you're looking for, just ask — we'll let you know what's available for your date.",
    },
    greatFor: {
      eyebrow: "Great for",
      title: "When a rental is the right call.",
      description:
        "Mascot suits and the bounce house are perfect for events that want a visual moment without the full character-entertainer booking.",
    },
    packages: {
      eyebrow: "Book a full party instead?",
      title: "Pairing a rental with a character package.",
      description:
        "You can always add a mascot suit or bounce house to a princess or superhero booking. We'll coordinate the timing so everything lands right.",
    },
  },
  greatForCards: [
    {
      eyebrow: "Birthdays",
      title: "Birthday parties",
      description:
        "A bounce house makes the backyard feel like a rental hall. A mascot suit adds a surprise guest without a full booking.",
      icon: "\u2665",
    },
    {
      eyebrow: "Schools & daycares",
      title: "School & daycare events",
      description:
        "Bring Olaf or Mickey to story time, spirit days, graduation events or fundraisers. Staff wear the suit.",
      icon: "\u2600",
    },
    {
      eyebrow: "Community",
      title: "Community celebrations",
      description:
        "Neighbourhood block parties, charity fun days, grand openings — mascot rentals make the event feel instantly more festive.",
      icon: "\u2713",
    },
    {
      eyebrow: "Seasonal",
      title: "Seasonal & family gatherings",
      description:
        "Santa visits, Halloween meet-and-greets, Easter events, family reunions. A rental is a low-effort way to make the day feel bigger.",
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
    "Mascot suit rental: $100. Full list includes Lego Man, Despicable Me Minion, Olaf, Elmo, Cookie Monster, Hello Kitty, Buzz Lightyear, Mickey Mouse, Minnie Mouse, Ninja Turtles and more. Pink Castle Bounce House rental: $50 (9' × 12' × 16'). No entertainer is provided with rentals — availability depends on date and setup needs.",
  cta: {
    eyebrow: "Interested in a rental?",
    title: "Tell us the date, we'll tell you what's available.",
    description:
      "Send us the event date, what you're interested in, and whether you'd also like a character appearance. We'll reply with availability and pickup details.",
    notes: [
      "Rentals are pickup-based — no entertainer included",
      "Bounce house requires flat outdoor space and an outlet",
      "Happy to pair rentals with princess or superhero packages",
    ],
    primaryCta: {
      label: "Ask about a rental",
      href: "/book",
    },
    secondaryCta: {
      label: "Back to home",
      href: "/",
    },
  },
} as const;
