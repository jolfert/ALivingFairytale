import { getMediaAsset } from "@/data/media";

// Flat nav used by the footer. The header uses a dropdown-grouped
// version (Parties > Princess / Heroes / Mascots) internally.
export const primaryNavigation = [
  { label: "Princess", href: "/princess" },
  { label: "Heroes", href: "/heroes" },
  { label: "Mascots & Rentals", href: "/mascots" },
  { label: "Pricing", href: "/pricing" },
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
    "A locally owned family business bringing theme-park quality princesses, superheroes, mascots and rentals to Manitoba families since 2011.",
  footerDisclaimer:
    "Not affiliated with the Walt Disney Company. All characters are inspired by fairytale classics, new and old.",
} as const;
