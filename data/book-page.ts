export const bookPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Book", href: "/book" },
  ],
  eyebrow: "Booking",
  title: "Tell us about your celebration—we will take it from here.",
  description:
    "This route is ready to become your full inquiry or checkout flow. For now, it is a calm landing point so calls to action across the site can point to one consistent next step.",
  primaryCta: {
    label: "Use the homepage request section",
    href: "/#book-preview",
  },
  secondaryCta: { label: "Back to home", href: "/" },
} as const;
