import { getMediaAsset } from "@/data/media";

export const siteShellContent = {
  brandName: "A Living Fairytale",
  brandLogo: getMediaAsset("siteLogo"),
  headerDefaultCta: {
    label: "Book your party",
    href: "/book",
  },
  footerDescription:
    "Princess wonder, superhero energy, mascot smiles, and party-ready extras—booked with the same warm, polished care from the first hello to the final wave goodbye.",
} as const;
