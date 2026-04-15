import type { MediaAsset } from "@/data/types";

/**
 * Brand + character visuals.
 * The approved castle wordmark is the only raster in-repo today (`siteLogo`).
 * Princess, hero, mascot, and rental **scene** assets are illustrated SVG decks until
 * approved performer/inventory photography is exported—then swap each `src` (and
 * `width` / `height`) to the matching WebP or JPEG under `public/photos/` without
 * changing component code.
 */
const mediaRegistry = {
  siteLogo: {
    id: "siteLogo",
    src: "/A%20living%20fairytale%20logo.png",
    alt: "A Living Fairytale castle logo with sparkling ribbon wordmark",
    width: 1536,
    height: 1024,
    status: "approved",
    adminLabel: "Primary brand logo",
    replaceHint:
      "Swap only if a newer approved transparent logo export is delivered.",
    aiTags: ["brand", "logo", "castle", "sparkle"],
    mappingNote: "Approved primary site brand mark.",
  },
  partyPrincessIcon: {
    id: "partyPrincessIcon",
    src: "/brand/party-princess.svg",
    alt: "Princess party icon",
    width: 96,
    height: 96,
    status: "placeholder",
    adminLabel: "Princess category icon",
    replaceHint:
      "Can be replaced with an approved princess badge or category mark.",
    aiTags: ["princess", "icon", "category"],
    mappingNote: "Generic category icon, not a character-specific approved image.",
  },
  partyHeroIcon: {
    id: "partyHeroIcon",
    src: "/brand/party-hero.svg",
    alt: "Hero party icon",
    width: 96,
    height: 96,
    status: "placeholder",
    adminLabel: "Hero category icon",
    replaceHint: "Can be replaced with an approved hero badge or shield mark.",
    aiTags: ["hero", "icon", "category"],
    mappingNote: "Generic category icon, not a character-specific approved image.",
  },
  partyMascotIcon: {
    id: "partyMascotIcon",
    src: "/brand/party-mascot.svg",
    alt: "Mascot party icon",
    width: 96,
    height: 96,
    status: "placeholder",
    adminLabel: "Mascot category icon",
    replaceHint:
      "Can be replaced with an approved mascot badge or simplified character mark.",
    aiTags: ["mascot", "icon", "category"],
    mappingNote: "Generic category icon, not a performer photo.",
  },
  partyRentalIcon: {
    id: "partyRentalIcon",
    src: "/brand/party-rental.svg",
    alt: "Rental party icon",
    width: 96,
    height: 96,
    status: "placeholder",
    adminLabel: "Rental category icon",
    replaceHint:
      "Can be replaced with approved bounce house or rental inventory iconography.",
    aiTags: ["rental", "icon", "category"],
    mappingNote: "Generic rental icon, not inventory photography.",
  },
  princessRoseMain: {
    id: "princessRoseMain",
    src: "/brand/princess-rose-main.svg",
    alt: "Rose-inspired princess standing in a glowing ballroom scene",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Rose princess main scene",
    replaceHint:
      "Best replaced with an approved action photo showing arrival or guest interaction.",
    aiTags: ["princess", "rose", "ballroom", "action"],
    mappingNote:
      "Intended for the rose/classic princess listing until approved photography is provided.",
  },
  princessRosePortrait: {
    id: "princessRosePortrait",
    src: "/brand/princess-rose-portrait.svg",
    alt: "Rose-inspired princess portrait",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Rose princess portrait",
    replaceHint:
      "Best replaced with a clean approved vertical portrait or close-up smile shot.",
    aiTags: ["princess", "rose", "portrait"],
    mappingNote:
      "Inset portrait for the rose/classic princess listing until final media arrives.",
  },
  princessSnowMain: {
    id: "princessSnowMain",
    src: "/brand/princess-snow-main.svg",
    alt: "Snow-inspired princess in a sparkling winter scene",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Snow princess main scene",
    replaceHint:
      "Best replaced with a bright approved action photo and visible movement.",
    aiTags: ["princess", "snow", "sparkle", "action"],
    mappingNote:
      "Intended for the snow/ice princess listing until approved photography is provided.",
  },
  princessSnowPortrait: {
    id: "princessSnowPortrait",
    src: "/brand/princess-snow-portrait.svg",
    alt: "Snow-inspired princess portrait",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Snow princess portrait",
    replaceHint: "Best replaced with an approved polished vertical portrait.",
    aiTags: ["princess", "snow", "portrait"],
    mappingNote:
      "Inset portrait for the snow/ice princess listing until final media arrives.",
  },
  princessTowerMain: {
    id: "princessTowerMain",
    src: "/brand/princess-tower-main.svg",
    alt: "Lantern-inspired princess in a glowing garden scene",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Tower princess main scene",
    replaceHint:
      "Best replaced with an approved wide image showing color, movement, and environment.",
    aiTags: ["princess", "lantern", "garden", "action"],
    mappingNote:
      "Intended for the tower/lantern princess listing until approved photography is provided.",
  },
  princessTowerPortrait: {
    id: "princessTowerPortrait",
    src: "/brand/princess-tower-portrait.svg",
    alt: "Lantern-inspired princess portrait",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Tower princess portrait",
    replaceHint:
      "Best replaced with an approved soft vertical portrait that reads clearly at small sizes.",
    aiTags: ["princess", "lantern", "portrait"],
    mappingNote:
      "Inset portrait for the tower/lantern princess listing until final media arrives.",
  },
  heroSkylineMain: {
    id: "heroSkylineMain",
    src: "/brand/hero-skyline-main.svg",
    alt: "Stylized hero silhouette with city skyline and upward light beam",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Hero skyline main scene",
    replaceHint:
      "Swap for an approved wide action photo: arrival, training moment, or bold hero pose.",
    aiTags: ["hero", "skyline", "action", "party"],
    mappingNote:
      "Mapped to Skyline Hero until approved hero photography is available.",
  },
  heroSkylinePortrait: {
    id: "heroSkylinePortrait",
    src: "/brand/hero-skyline-portrait.svg",
    alt: "Hero portrait with cape and confident stance",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Hero skyline portrait",
    replaceHint:
      "Replace with an approved tight vertical portrait that reads well in the inset frame.",
    aiTags: ["hero", "portrait", "cape"],
    mappingNote:
      "Inset portrait for Skyline Hero until final media arrives.",
  },
  heroCaptainMain: {
    id: "heroCaptainMain",
    src: "/brand/hero-captain-main.svg",
    alt: "Hero with large shield motif and stadium-light energy",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Shield captain main scene",
    replaceHint:
      "Swap for approved photography that emphasizes teamwork, courage, and celebration energy.",
    aiTags: ["hero", "shield", "team", "party"],
    mappingNote:
      "Mapped to Shield Captain until approved hero photography is available.",
  },
  heroCaptainPortrait: {
    id: "heroCaptainPortrait",
    src: "/brand/hero-captain-portrait.svg",
    alt: "Shield emblem portrait framing heroic celebration",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Shield captain portrait",
    replaceHint:
      "Replace with an approved clean portrait or close-up prop moment.",
    aiTags: ["hero", "shield", "portrait"],
    mappingNote:
      "Inset portrait for Shield Captain until final media arrives.",
  },
  heroVoltMain: {
    id: "heroVoltMain",
    src: "/brand/hero-volt-main.svg",
    alt: "High-speed hero silhouette with motion streaks and electric accents",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Photon hero main scene",
    replaceHint:
      "Swap for approved kinetic photography: running, jumping, or motion blur.",
    aiTags: ["hero", "speed", "energy", "party"],
    mappingNote:
      "Mapped to Photon Streak until approved hero photography is available.",
  },
  heroVoltPortrait: {
    id: "heroVoltPortrait",
    src: "/brand/hero-volt-portrait.svg",
    alt: "Hero portrait with motion-forward stance",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Photon hero portrait",
    replaceHint:
      "Replace with an approved vertical portrait that still feels fast and fun.",
    aiTags: ["hero", "speed", "portrait"],
    mappingNote:
      "Inset portrait for Photon Streak until final media arrives.",
  },
  mascotPartyMain: {
    id: "mascotPartyMain",
    src: "/brand/mascot-party-main.svg",
    alt: "Bright playful party scene with warm shapes and confetti-like accents",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Mascot category main scene",
    replaceHint:
      "Replace with an approved mascot performer photo or lively group moment.",
    aiTags: ["mascot", "party", "playful", "color"],
    mappingNote:
      "General mascot hero visual until approved mascot photography is available.",
  },
  rentalSparkInset: {
    id: "rentalSparkInset",
    src: "/brand/rental-spark-inset.svg",
    alt: "Soft illustration suggesting bounce house and outdoor party extras",
    width: 320,
    height: 400,
    status: "placeholder",
    adminLabel: "Rental inset visual",
    replaceHint: "Swap for an approved rental product shot or setup photo.",
    aiTags: ["rental", "bounce", "inset"],
    mappingNote:
      "General rental inset until approved inventory photography is available.",
  },
  rentalBounceMain: {
    id: "rentalBounceMain",
    src: "/brand/rental-bounce-main.svg",
    alt: "Playful bounce house illustration in brand colors",
    width: 720,
    height: 860,
    status: "placeholder",
    adminLabel: "Bounce house main visual",
    replaceHint: "Replace with approved real rental inventory photography.",
    aiTags: ["rental", "bounce", "party"],
    mappingNote:
      "Mapped to Pink Castle Bounce House until approved inventory photography is available.",
  },
} satisfies Record<string, MediaAsset>;

export type MediaId = keyof typeof mediaRegistry;

export const mediaAssets = mediaRegistry;

export function getMediaAsset(id: MediaId): MediaAsset {
  return mediaRegistry[id];
}
