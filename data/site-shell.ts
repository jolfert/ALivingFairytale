import { getMediaAsset } from "@/data/media";

export const primaryNavigation = [
  { label: "Princess", href: "/princess" },
  { label: "Heroes", href: "/heroes" },
  { label: "Mascots & Rentals", href: "/mascots" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
] as const;

export const siteShellContent = {
  brandName: "A Living Fairytale",
  tagline: "Manitoba's Premier Children's Entertainers",
  brandLogo: getMediaAsset("siteLogo"),
  primaryNavigation,
  headerDefaultCta: {
    label: "Book a Party",
    href: "/book",
  },
  footerDescription:
    "A Living Fairytale is a locally owned family business, delivering theme-park quality princesses, superheroes, mascots and party rentals to Manitoba families since 2011.",
  footerDisclaimer:
    "A Living Fairytale is not affiliated with the Walt Disney Company. All of our characters are inspired by fairytale classics, new and old.",
} as const;
