import { getMediaAsset } from "@/data/media";

export const primaryNavigation = [
  { label: "Princess", href: "/princess" },
  { label: "Heroes", href: "/heroes" },
  { label: "Mascots & Rentals", href: "/mascots" },
  { label: "Book", href: "/book" },
] as const;

export const siteShellContent = {
  brandName: "A Living Fairytale",
  brandLogo: getMediaAsset("siteLogo"),
  primaryNavigation,
  headerDefaultCta: {
    label: "Book Now",
    href: "/book",
  },
  footerDescription:
    "Princess wonder, superhero excitement, mascot smiles, and booking guidance that feels warm, polished, and easy to follow.",
} as const;
