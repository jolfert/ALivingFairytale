import { getMediaAsset } from "@/data/media";

export const siteShellContent = {
  brandName: "A Living Fairytale",
  brandLogo: getMediaAsset("siteLogo"),
  headerDefaultCta: {
    label: "Book the magic",
    href: "/book",
  },
  footerDescription:
    "Princess wonder, superhero excitement, mascot smiles, and celebration planning that feels warm, polished, and easy from the very first click.",
} as const;
