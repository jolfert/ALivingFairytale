import { getMediaAsset, type MediaId } from "@/data/media";
import type {
  CharacterCategory,
  CharacterRecord,
  PackageRecord,
  PricingGuide,
  ResolvedCharacter,
} from "@/data/types";

const characterCatalog: ReadonlyArray<CharacterRecord> = [
  {
    name: "Ariel - Green",
    slug: "ariel",
    category: "Princess",
    shortDescription:
      "A bright mermaid favorite with warm smiles, sea-swept charm, and playful little-girl magic.",
    longDescription:
      "A lively princess choice for birthdays that want real child connection, colorful storybook photos, and a character who feels sweet and approachable right away.",
    tags: ["Mermaid magic", "Bright smiles", "Classic favorite"],
    mainMediaId: "arielMain",
    insetMediaId: "arielPortrait",
    detailHref: "/ariel",
    featured: true,
  },
  {
    name: "Ariel - Pink",
    slug: "ariel-pink",
    category: "Princess",
    shortDescription:
      "A softer Little Mermaid look with pink sparkle, sweet waves, and warm party charm.",
    longDescription:
      "Perfect for families who love Ariel but want the pink gown version children often remember from their favorite dress-up moments and keepsake photos.",
    tags: ["Pink gown", "Mermaid favorite", "Soft sparkle"],
    mainMediaId: "arielPinkMain",
    insetMediaId: "arielPinkPortrait",
    detailHref: "/ariel-pink",
  },
  {
    name: "Belle",
    slug: "belle",
    category: "Princess",
    shortDescription:
      "Warm, elegant, and full of storybook sweetness for celebrations that want a classic princess feeling.",
    longDescription:
      "A timeless fit for birthdays that want a grand entrance, lovely golden-gown photos, and a princess presence that feels graceful without ever feeling stiff.",
    tags: ["Classic fairytale", "Golden gown", "Royal welcome"],
    mainMediaId: "belleMain",
    insetMediaId: "bellePortrait",
    detailHref: "/belle",
    featured: true,
  },
  {
    name: "Cinderella",
    slug: "cinderella",
    category: "Princess",
    shortDescription:
      "Graceful, polished, and full of blue-gown magic for children who dream in storybook sparkle.",
    longDescription:
      "Ideal for elegant birthdays that want a polished arrival, sweet activity moments, and the kind of keepsake photos families frame afterward.",
    tags: ["Blue gown", "Dreamy photos", "Storybook elegance"],
    mainMediaId: "cinderellaMain",
    insetMediaId: "cinderellaPortrait",
    detailHref: "/cinderella",
    featured: true,
  },
  {
    name: "Cinderella - New",
    slug: "cinderella-new",
    category: "Princess",
    shortDescription:
      "A fresh Cinderella look with the same polished fairytale feel and a bright, modern princess silhouette.",
    longDescription:
      "Wonderful for families who love Cinderella and want an alternate costume look that still feels graceful, recognizable, and beautifully photo-ready.",
    tags: ["Alternate gown", "Blue fairytale", "Photo ready"],
    mainMediaId: "cinderellaNewMain",
    insetMediaId: "cinderellaNewPortrait",
    detailHref: "/cinderella-new",
  },
  {
    name: "Ice Queen",
    slug: "ice-queen",
    category: "Princess",
    shortDescription:
      "A shimmering winter favorite with icy style, warm interaction, and instant wow the moment she arrives.",
    longDescription:
      "A beautiful choice for frozen-themed birthdays that want big reactions, sparkling visuals, and a princess who feels exciting for children and polished for parents.",
    tags: ["Frozen favorite", "Winter sparkle", "Big reactions"],
    mainMediaId: "iceQueenMain",
    insetMediaId: "iceQueenPortrait",
    detailHref: "/ice-queen",
    featured: true,
  },
  {
    name: "Ice Princess",
    slug: "ice-princess",
    category: "Princess",
    shortDescription:
      "A gentle frozen favorite with bright energy, sweet smiles, and a softer storybook mood.",
    longDescription:
      "Lovely for children who light up around the warmer, more playful side of frozen-themed magic and want a princess who feels easy to connect with right away.",
    tags: ["Frozen favorite", "Warm smiles", "Playful magic"],
    mainMediaId: "icePrincessMain",
    insetMediaId: "icePrincessPortrait",
    detailHref: "/ice-princess",
  },
  {
    name: "Jasmine",
    slug: "jasmine",
    category: "Princess",
    shortDescription:
      "Warm, vibrant, and full of heart for children who love adventurous princess magic.",
    longDescription:
      "A beautiful fit for birthdays that want bright color, warm hugs, and a princess who feels bold, kind, and unmistakably memorable in the room.",
    tags: ["Bright color", "Adventure feel", "Warm hugs"],
    mainMediaId: "jasmineMain",
    insetMediaId: "jasminePortrait",
    detailHref: "/jasmine",
    featured: true,
  },
  {
    name: "Rapunzel",
    slug: "rapunzel",
    category: "Princess",
    shortDescription:
      "Golden, playful, and full of sunshine for children who love laughter, braids, and storybook adventure.",
    longDescription:
      "A lovely choice for birthdays that want bright personality, playful interaction, and a princess presence children warm up to instantly.",
    tags: ["Long braid", "Golden glow", "Playful heart"],
    mainMediaId: "rapunzelMain",
    insetMediaId: "rapunzelPortrait",
    detailHref: "/rapunzel",
    featured: true,
  },
  {
    name: "Sleeping Beauty - Pink",
    slug: "aurora",
    category: "Princess",
    shortDescription:
      "Soft pink elegance, gentle warmth, and timeless fairytale beauty from first hello to final photo.",
    longDescription:
      "Ideal for celebrations that want a rosy storybook palette, graceful interaction, and a princess presence that feels calm, lovely, and unmistakably royal.",
    tags: ["Pink fairytale", "Gentle warmth", "Timeless magic"],
    mainMediaId: "sleepingBeautyPinkMain",
    insetMediaId: "sleepingBeautyPinkPortrait",
    detailHref: "/aurora",
    featured: true,
  },
  {
    name: "Sleeping Beauty - Blue",
    slug: "sleeping-beauty-blue",
    category: "Princess",
    shortDescription:
      "A dreamy blue-gown variation with classic fairytale poise and a calm, polished party feel.",
    longDescription:
      "Beautiful for families who love Sleeping Beauty and want the blue version of the gown while keeping the same sweet, photo-friendly fairytale rhythm.",
    tags: ["Blue gown", "Classic romance", "Lovely photos"],
    mainMediaId: "sleepingBeautyBlueMain",
    insetMediaId: "sleepingBeautyBluePortrait",
    detailHref: "/sleeping-beauty-blue",
  },
  {
    name: "Snow White",
    slug: "snow-white",
    category: "Princess",
    shortDescription:
      "A bright, cheerful classic with bold storybook color and timeless little-girl charm.",
    longDescription:
      "A wonderful choice for younger princess fans who love the original classics and a celebration that feels colorful, joyful, and easy to recognize at first glance.",
    tags: ["Classic favorite", "Bright palette", "Cheerful magic"],
    mainMediaId: "snowWhiteMain",
    insetMediaId: "snowWhitePortrait",
    detailHref: "/snow-white",
  },
  {
    name: "Princess Sofia",
    slug: "princess-sophia",
    category: "Princess",
    shortDescription:
      "Sweet purple sparkle and a younger-princess feel that little guests connect with right away.",
    longDescription:
      "Especially lovely for younger birthdays, shy guests, and families who want a princess option that feels extra approachable from the very first moment.",
    tags: ["Purple sparkle", "Younger favorite", "Sweet arrival"],
    mainMediaId: "sofiaMain",
    insetMediaId: "sofiaPortrait",
    detailHref: "/princess-sophia",
    featured: true,
  },
  {
    name: "Tinkerbelle Fairy",
    slug: "fairy",
    category: "Princess",
    shortDescription:
      "Pixie sparkle, bright green whimsy, and playful fairy magic that lightens the whole room.",
    longDescription:
      "Perfect for celebrations that want a magical character with a slightly more playful, whimsical feel than a traditional royal princess.",
    tags: ["Pixie sparkle", "Fairy fun", "Bright green"],
    mainMediaId: "tinkerbellMainAlt",
    insetMediaId: "tinkerbellPortraitAlt",
    detailHref: "/fairy",
  },
  {
    name: "Moana",
    slug: "moana",
    category: "Princess",
    shortDescription:
      "Island adventure energy with bold color and a brave, approachable heart.",
    longDescription:
      "A playful choice for birthdays that want tropical color, courageous princess spirit, and a celebration that feels sunny, active, and full of movement.",
    tags: ["Tropical spirit", "Wayfinder", "Kid connection"],
    mainMediaId: "moanaMain",
    insetMediaId: "moanaPortrait",
    detailHref: "/moana",
  },
  {
    name: "Fancy Nancy",
    slug: "fancy-nancy",
    category: "Princess",
    shortDescription:
      "A larger-than-life storybook favorite with feathers, tutus, and plenty of extra fancy fun.",
    longDescription:
      "A playful pick for celebrations that want something colorful, imaginative, and a little delightfully over-the-top in the best possible way.",
    tags: ["Storybook favorite", "Extra fancy", "Playful style"],
    mainMediaId: "fancyNancyMain",
    insetMediaId: "fancyNancyPortrait",
    detailHref: "/fancy-nancy",
  },
  {
    name: "Barbie",
    slug: "barbie",
    category: "Princess",
    shortDescription:
      "Pink, polished, and instantly iconic for birthdays that want classic glam-doll sparkle.",
    longDescription:
      "A wonderful fit for children who love dress-up, pink party style, and a celebration that feels bright, elegant, and unmistakably fun.",
    tags: ["Pink favorite", "Dress-up glam", "Iconic look"],
    mainMediaId: "barbieMain",
    insetMediaId: "barbiePortrait",
    detailHref: "/barbie",
  },
  {
    name: "Ever After High - Apple White",
    slug: "ever-after-high-apple",
    category: "Princess",
    shortDescription:
      "A bold storybook look with a bright white-and-red palette and a fashion-forward fairytale edge.",
    longDescription:
      "Ideal for celebrations that want something a little different from the classic princess lineup while still feeling rooted in a magical storybook world.",
    tags: ["Storybook fashion", "White and red", "Royal flair"],
    mainMediaId: "appleWhiteMain",
    insetMediaId: "appleWhitePortrait",
    detailHref: "/ever-after-high-apple",
  },
  {
    name: "Prince",
    slug: "prince",
    category: "Princess",
    shortDescription:
      "A royal companion character with a warm smile, polished costume, and classic happily-ever-after energy.",
    longDescription:
      "A charming addition for fairytale-loving celebrations, whether as a standalone character or a thoughtful complement to the princess lineup.",
    tags: ["Royal companion", "Storybook charm", "Happily ever after"],
    mainMediaId: "princeMain",
    insetMediaId: "princePortrait",
    detailHref: "/prince",
  },
  {
    name: "Malificient",
    slug: "malificient",
    category: "Princess",
    shortDescription:
      "Dark-glam villain energy with commanding presence and theatrical fairytale flair.",
    longDescription:
      "A striking fit for families who want a bolder fantasy look than the traditional princess path while still keeping the celebration polished and imaginative.",
    tags: ["Villain glam", "High drama", "Theatrical"],
    mainMediaId: "malificientMain",
    insetMediaId: "malificientPortrait",
    detailHref: "/malificient",
  },
  {
    name: "Batman",
    slug: "batman",
    category: "Hero",
    shortDescription:
      "A bold superhero favorite with a strong entrance, confident energy, and instant wow for the birthday child.",
    longDescription:
      "Perfect for children who want their party to feel brave, exciting, and larger than life, with a hero they recognize the second he walks in.",
    tags: ["Big entrance", "Hero favorite", "Action photos"],
    mainMediaId: "batmanMain",
    detailHref: "/batman",
    featured: true,
  },
  {
    name: "Spiderman",
    slug: "spiderman",
    category: "Hero",
    shortDescription:
      "Fast, familiar, and full of superhero energy for kids who want the party to feel exciting right away.",
    longDescription:
      "A high-recognition hero choice with pose-ready moments, playful action energy, and the kind of entrance children react to immediately.",
    tags: ["Superhero poses", "Fast energy", "Birthday favorite"],
    mainMediaId: "spidermanMain",
    insetMediaId: "spidermanPortrait",
    detailHref: "/spiderman",
    featured: true,
  },
  {
    name: "Monster High - Clawdeen Wolf",
    slug: "monster-high",
    category: "Hero",
    shortDescription:
      "A fierce, fashion-forward character with stripes, attitude, and big personality for bold party kids.",
    longDescription:
      "A fun fit for celebrations that want something a little edgier, more colorful, and full of character compared to a traditional princess or hero path.",
    tags: ["Fashion forward", "Bold costume", "Big personality"],
    mainMediaId: "monsterHighMain",
    insetMediaId: "monsterHighPortrait",
    detailHref: "/monster-high",
  },
  {
    name: "Maui",
    slug: "maui",
    category: "Hero",
    shortDescription:
      "Larger-than-life personality and playful myth-hero energy for adventurous kids.",
    longDescription:
      "A fun choice for celebrations that want a bold character feel, lots of recognition, and a hero path that leans more mythic and high-energy than classic comic-book.",
    tags: ["Bold presence", "Playful power", "High energy"],
    mainMediaId: "mauiMain",
    insetMediaId: "mauiPortrait",
    detailHref: "/maui",
  },
  {
    name: "Star Wars",
    slug: "star-wars",
    category: "Hero",
    shortDescription:
      "Galaxy-style sci-fi adventure with instant recognition and action-forward fun.",
    longDescription:
      "Great for children who want their celebration to feel fast, cinematic, and a little different from the usual princess or superhero lineup.",
    tags: ["Galaxy vibe", "Sci-fi", "Action-ready"],
    mainMediaId: "starWarsMain",
    insetMediaId: "starWarsPortrait",
    detailHref: "/star-wars",
  },
  {
    name: "Wonder Woman",
    slug: "wonder-woman",
    category: "Hero",
    shortDescription:
      "Empowering iconic hero presence with a confident entrance and bold polish.",
    longDescription:
      "A strong fit for children who want superhero excitement with a clear, iconic character presence and lots of photo-ready energy.",
    tags: ["Iconic hero", "Empowering", "Photo-ready"],
    mainMediaId: "wonderWomanMain",
    insetMediaId: "wonderWomanPortrait",
    detailHref: "/wonder-woman",
  },
  {
    name: "Olaf",
    slug: "olaf",
    category: "Mascot",
    shortDescription:
      "A bright, cheerful mascot visit that works beautifully for younger guests and instant smiles.",
    longDescription:
      "Great for frozen-themed fun, school events, and celebrations that want a playful recognizable character without adding a complicated schedule block.",
    tags: ["Frozen fun", "Little-kid smiles", "Mascot favorite"],
    mainMediaId: "olafMain",
    insetMediaId: "olafPortrait",
    detailHref: "/olaf",
    featured: true,
  },
  {
    name: "Santa",
    slug: "santa",
    category: "Mascot",
    shortDescription:
      "Classic Santa visit: warm greetings, easy seasonal photos, instant holiday cheer.",
    longDescription:
      "Perfect for winter events, community gatherings, and festive celebrations that want a familiar character moment without adding a complicated party timeline.",
    tags: ["Holiday visit", "Seasonal photos", "Event-friendly"],
    mainMediaId: "santaMain",
    insetMediaId: "santaPortrait",
    detailHref: "/santa",
  },
  {
    name: "Pink Castle Bounce House",
    slug: "pink-castle-bounce-house",
    category: "Rental",
    shortDescription:
      "A bright, high-impact add-on that gives children extra room to play and keeps the party feeling lively.",
    longDescription:
      "An easy way to make the event feel bigger from the minute guests arrive, while giving children a playful space to burn energy between party highlights.",
    tags: ["Wow at arrival", "Kid-powered fun", "Easy add-on"],
    mainMediaId: "rentalBouncePhoto",
    insetMediaId: "rentalTentPhoto",
    detailHref: "/pink-castle-bounce-house",
    featured: true,
  },
  {
    name: "Pink Party Tent",
    slug: "pink-party-tent",
    category: "Rental",
    shortDescription:
      "A bright event tent that adds color, coverage, and a coordinated visual setup to the celebration.",
    longDescription:
      "Great for outdoor events that want the setup itself to look festive, easy to spot, and clearly matched to the rest of the party styling.",
    tags: ["Outdoor setup", "Bright event look", "Easy add-on"],
    mainMediaId: "rentalTentPhoto",
    insetMediaId: "rentalBouncePhoto",
    detailHref: "/pink-party-tent",
    featured: true,
  },
];

const packageCatalog: ReadonlyArray<PackageRecord> = [
  {
    slug: "mini-visit",
    name: "Bronze",
    duration: "1 Hour",
    priceFrom: "$200",
    pricingNote: "Starting price for one character",
    description:
      "A sweet one-hour character visit for smaller celebrations or shorter party windows. The essentials done well.",
    highlights: [
      "One trained entertainer",
      "Dramatic entrance and exit",
      "Interactive storytelling",
      "Pictures with the character",
      "Singing Happy Birthday",
    ],
    characterRates: [
      { label: "1 character", price: "$200" },
      { label: "2 characters", price: "$400" },
      { label: "3 characters", price: "$680" },
      { label: "4 characters", price: "$900" },
      { label: "5 characters", price: "$1,100" },
    ],
    includedFeatures: [
      "Includes up to 10 children (additional children $5 each)",
      "Travel inside Winnipeg included",
      "Outside Winnipeg: $0.68/km from the nearest perimeter exit",
    ],
  },
  {
    slug: "storybook-celebration",
    name: "Silver",
    duration: "1.5 Hours",
    priceFrom: "$250",
    pricingNote: "Starting price for one character",
    description:
      "Our most-booked package. An extra half-hour lets the party breathe — more interaction, face painting, and gift opening with the character.",
    highlights: [
      "Everything in Bronze, plus:",
      "Gift opening with the character",
      "Face painting",
      "Temporary tattoos",
    ],
    characterRates: [
      { label: "1 character", price: "$250" },
      { label: "2 characters", price: "$500" },
      { label: "3 characters", price: "$780" },
      { label: "4 characters", price: "$1,000" },
      { label: "5 characters", price: "$1,200" },
    ],
    includedFeatures: [
      "Includes up to 10 children (additional children $5 each)",
      "Travel inside Winnipeg included",
      "Outside Winnipeg: $0.68/km from the nearest perimeter exit",
    ],
    featured: true,
  },
  {
    slug: "signature-fairytale",
    name: "Gold",
    duration: "2 Hours",
    priceFrom: "$300",
    pricingNote: "Deluxe package — starting price for one character",
    description:
      "The deluxe experience. Two full hours for grand entrances, every activity, storytelling, games, and all the keepsake photos.",
    highlights: [
      "Everything in Silver, plus:",
      "Two full hours of entertainment",
      "Room for add-on activities like tea parties, cupcake decorating, princess games, royal coronations and more",
    ],
    characterRates: [
      { label: "1 character", price: "$300" },
      { label: "2 characters", price: "$600" },
      { label: "3 characters", price: "$880" },
      { label: "4 characters", price: "$1,200" },
      { label: "5 characters", price: "$1,500" },
    ],
    includedFeatures: [
      "Includes up to 10 children (additional children $5 each)",
      "Travel inside Winnipeg included",
      "Outside Winnipeg: $0.68/km from the nearest perimeter exit",
    ],
  },
];

export const legacyPricingGuide: PricingGuide = {
  title: "Full pricing guide",
  description:
    "All party paths follow the same duration-by-character rate. Longer parties unlock more characters, activities and photo moments. Every package includes up to 10 children ($5 per additional child).",
  includedFeatures: [
    "Dramatic entrance and exit, fully in character",
    "Interactive storytelling, singing and photos",
    "Silver and Gold add face painting and temporary tattoos",
    "Customizable add-ons: tea parties, face glitter, cupcake decorating, princess games, royal coronations, treasure hunts, bubble parties, necklace beading and more",
    "Travel inside Winnipeg is included",
    "Outside Winnipeg: $0.68/km from the nearest perimeter exit",
  ],
  rows: [
    {
      duration: "1 Hour",
      rates: [
        { label: "1 character", price: "$200" },
        { label: "2 characters", price: "$400" },
        { label: "3 characters", price: "$680" },
        { label: "4 characters", price: "$900" },
        { label: "5 characters", price: "$1,100" },
      ],
    },
    {
      duration: "1.5 Hours",
      rates: [
        { label: "1 character", price: "$250" },
        { label: "2 characters", price: "$500" },
        { label: "3 characters", price: "$780" },
        { label: "4 characters", price: "$1,000" },
        { label: "5 characters", price: "$1,200" },
      ],
    },
    {
      duration: "2 Hours",
      rates: [
        { label: "1 character", price: "$300" },
        { label: "2 characters", price: "$600" },
        { label: "3 characters", price: "$880" },
        { label: "4 characters", price: "$1,200" },
        { label: "5 characters", price: "$1,500" },
      ],
    },
    {
      duration: "2.5 Hours",
      rates: [
        { label: "1 character", price: "$350" },
        { label: "2 characters", price: "$700" },
        { label: "3 characters", price: "$1,050" },
        { label: "4 characters", price: "$1,400" },
        { label: "5 characters", price: "$1,750" },
      ],
    },
    {
      duration: "3 Hours",
      rates: [
        { label: "1 character", price: "$400" },
        { label: "2 characters", price: "$800" },
        { label: "3 characters", price: "$1,280" },
        { label: "4 characters", price: "$1,600" },
        { label: "5 characters", price: "$2,000" },
      ],
    },
  ],
  footnote:
    "Includes up to 10 children. Additional children are $5 each. Travel outside Winnipeg: $0.68/km from the nearest perimeter exit.",
};

function resolveCharacter(character: CharacterRecord): ResolvedCharacter {
  return {
    ...character,
    mainMedia: getMediaAsset(character.mainMediaId as MediaId),
    insetMedia: character.insetMediaId
      ? getMediaAsset(character.insetMediaId as MediaId)
      : undefined,
  };
}

export const characters = characterCatalog.map(resolveCharacter);
export const packages = packageCatalog;

export function getCharactersByCategory(
  category: CharacterCategory,
): ReadonlyArray<ResolvedCharacter> {
  return characters.filter((character) => character.category === category);
}

export function getCharactersByCategories(
  categories: ReadonlyArray<CharacterCategory>,
): ReadonlyArray<ResolvedCharacter> {
  const list: ResolvedCharacter[] = [];
  for (const category of categories) {
    for (const character of characters) {
      if (character.category === category) {
        list.push(character);
      }
    }
  }
  return list;
}

export function pickCharacters(
  slugs: ReadonlyArray<string>,
): ReadonlyArray<ResolvedCharacter> {
  return slugs
    .map((slug) => characters.find((character) => character.slug === slug))
    .filter((character): character is ResolvedCharacter => Boolean(character));
}

export function pickPackages(
  slugs: ReadonlyArray<string>,
): ReadonlyArray<PackageRecord> {
  return slugs
    .map((slug) => packageCatalog.find((pkg) => pkg.slug === slug))
    .filter((pkg): pkg is PackageRecord => Boolean(pkg));
}

export function getCharacterBySlug(slug: string): ResolvedCharacter | undefined {
  return characters.find((character) => character.slug === slug);
}

export function getCharactersWithDetailPages(): ReadonlyArray<ResolvedCharacter> {
  return characters.filter((character) => Boolean(character.detailHref));
}
