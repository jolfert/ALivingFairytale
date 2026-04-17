import { packages, pickCharacters } from "@/data/catalog";
import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const homepageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "Manitoba's premier children's entertainers",
    title: "Let us make magic happen.",
    description:
      "A Living Fairytale has been Manitoba's home for theme-park quality princesses, superheroes, mascots and party rentals since 2011. When your child meets their favourite character, it's truly unforgettable.",
    highlights: [
      "In business since 2011",
      "2,000+ events and counting",
      "100% money-back guarantee",
    ],
    primaryCta: {
      label: "Book a Party",
      href: "/book",
    },
    secondaryCta: {
      label: "Meet the characters",
      href: "#paths",
    },
    stats: [
      {
        value: "Since 2011",
        label: "Locally owned family business, born in Winnipeg and trusted across Manitoba.",
      },
      {
        value: "2,000+ events",
        label: "Birthdays, daycare parties, mall shows, holidays, charity and corporate events.",
      },
      {
        value: "0 cancellations",
        label: "We have never cancelled an event on a family. When we say we'll be there, we are.",
      },
    ],
    brandMedia: getMediaAsset("siteLogo"),
    showcase: {
      eyebrow: "Real parties, real photos",
      mainMedia: getMediaAsset("cinderellaMain"),
      storyCardEyebrow: "Performance photography",
      storyCardTitle: "Authentic ball gowns. Trained performers. Real character magic.",
      storyCardText:
        "Our entertainers are trained in acting, singing and modelling, and they stay fully in character from the first hug to the final photo.",
      princessLabel: "Princess",
      princessDescription:
        "A full roster of recognizable princesses in authentic, breath-taking ball gowns.",
      heroLabel: "Superhero",
      heroDescription:
        "Batman, Spiderman, Wonder Woman and more — bold arrivals for the birthday hero.",
      planningEyebrow: "Unused (kept for type compatibility)",
      planningTitle: "",
      planningDescription: "",
      reassuranceEyebrow: "",
      reassuranceTitle: "",
      supportCards: [],
    },
  },
  sections: {
    whyUs: {
      eyebrow: "What you can expect",
      title: "Theme-park quality, every single booking.",
      description:
        "Reputation is everything for a family-owned business. We spare no expense on costumes, wigs and makeup, and every performer is trained, background-checked and insured.",
    },
    paths: {
      eyebrow: "Choose your party",
      title: "Princess, superhero, or mascot & rental.",
      description:
        "Birthday parties, daycare parties, mall shows, holiday parties, charity events, corporate events — the possibilities are endless. Start by choosing the path that fits your celebration.",
    },
    featured: {
      eyebrow: "Meet the characters",
      title: "A few of the favourites families ask about most.",
      description:
        "From Ariel and Belle to Batman and Olaf, our roster covers the characters children actually recognize. Click through to see the full cast on each party page.",
    },
    packages: {
      eyebrow: "Pricing",
      title: "Princess party pricing.",
      description:
        "Bronze, Silver and Gold packages for every party path. Includes up to 10 children; additional children $5 per child. Travel outside Winnipeg is $0.68/km from the nearest perimeter exit.",
    },
    testimonials: {
      eyebrow: "From real families",
      title: "The kind of party they'll still be talking about next year.",
      description:
        "A few kind words from parents, event organizers and the children whose birthdays we've been lucky enough to be part of.",
    },
    trust: {
      eyebrow: "Why parents book with us",
      title: "Experience. Quality. Reliability.",
      description:
        "Background-checked entertainers, fully insured services, and industry-standard handling of your payment information. The details matter — to us, and to you.",
    },
  },
  partyPaths: [
    {
      eyebrow: "Princess Parties",
      title: "Authentic ball gowns and a full princess roster.",
      description:
        "Ariel, Belle, Cinderella, the Ice Queen, Rapunzel, Sleeping Beauty, Jasmine, Moana and more — graceful arrivals, interactive storytelling, and beautiful keepsake photos.",
      href: "/princess",
      ctaLabel: "See all princesses",
      tags: ["Authentic gowns", "Trained performers", "Photo-ready"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,241,248,0.98))]",
      image: getMediaAsset("cinderellaBluePortrait"),
    },
    {
      eyebrow: "Superhero Parties",
      title: "Big entrances for the birthday hero.",
      description:
        "Batman, Spiderman, Wonder Woman and Star Wars favourites with dramatic arrivals, hero missions, and photos kids will want to show off at school.",
      href: "/heroes",
      ctaLabel: "See all superheroes",
      tags: ["Batman", "Spiderman", "Wonder Woman"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(251,253,255,0.98),rgba(234,242,255,0.98))]",
      image: getMediaAsset("batmanPortrait"),
    },
    {
      eyebrow: "Mascots & Rentals",
      title: "Olaf, Minion, Mickey and a bright pink bounce house.",
      description:
        "Mascot suit rentals ($100) for Lego Man, Olaf, Elmo, Hello Kitty, Minion, Buzz Lightyear, Mickey, Minnie, Ninja Turtles and more — plus our pink castle bounce house ($50).",
      href: "/mascots",
      ctaLabel: "See mascots & rentals",
      tags: ["Mascot suits", "Bounce house", "No entertainer"],
      accentClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,255,247,0.98))]",
      image: getMediaAsset("olafPortrait"),
    },
  ],
  trustPillars: [
    {
      title: "Experience",
      description:
        "In business since 2011, our entertainers have attended 2,000+ events — birthdays, daycares, mall shows, holidays, corporate and charity events.",
      icon: "\u2726",
    },
    {
      title: "Quality",
      description:
        "Price reflects quality. We spare no expense on authentic costumes, wigs, makeup and accessories, and we hire the most trained entertainers in the industry.",
      icon: "\u2661",
    },
    {
      title: "Reliability",
      description:
        "We have never cancelled an event. If Prince Charming is unreachable and we somehow can't deliver, we offer a 100% money-back guarantee.",
      icon: "\u263C",
    },
    {
      title: "Safety",
      description:
        "Every entertainer is background-checked. We carry full insurance — rare in this industry — and use industry-standard practices to keep your payment information safe.",
      icon: "\u2605",
    },
    {
      title: "Customer Service",
      description:
        "We answer every request, every question, every concern. Every event is customized to your child's favourite character, theme and party flow.",
      icon: "\u2665",
    },
  ],
  featuredCharacters: pickCharacters([
    "ice-queen",
    "batman",
    "olaf",
    "pink-castle-bounce-house",
  ]),
  packages,
  finalCta: {
    eyebrow: "Ready to book?",
    title: "Let's make their big day unforgettable.",
    description:
      "Send us your party date, the character you have in mind, and a few details about your celebration. A real person will reply — usually within a day.",
    steps: [
      {
        step: "1",
        title: "Choose your party",
        description: "Princess, superhero, mascot, rental — or a combination.",
      },
      {
        step: "2",
        title: "Share the details",
        description: "Date, start time, address, age, and anything special you'd like us to know.",
      },
      {
        step: "3",
        title: "Hear back from us",
        description: "A real person reviews every inquiry and replies with the next step.",
      },
    ],
    previewEyebrow: "What families say",
    previewTitle: "\"So much fun. Absolutely unforgettable.\"",
    previewDescription:
      "Repeat bookings are the foundation of our business. Read what parents have to say on our Reviews page — or on Facebook, where we've been collecting reviews for years.",
    notes: [
      "A real person reviews every inquiry",
      "One form covers princesses, heroes, mascots and rentals",
      "Weekend dates book fast during busy seasons — send early",
    ],
    primaryCta: {
      label: "Start your booking",
      href: "/book",
    },
    secondaryCta: {
      label: "Read reviews",
      href: "/reviews",
    },
  },
} as const;
