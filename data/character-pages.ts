import { princessPageContent } from "@/data/princess-page";
import {
  getCharacterBySlug,
  pickCharacters,
  pickPackages,
} from "@/data/catalog";
import type { CharacterPageContent } from "@/data/types";

const sharedPackageSlugs = [
  "mini-visit",
  "storybook-celebration",
  "signature-fairytale",
] as const;

const princessCharacterPages = {
  ariel: {
    title: "Ariel parties full of bright smiles, playful wonder, and sea-inspired magic.",
    description:
      "Ariel brings warm energy, mermaid sparkle, and an easy child-friendly presence that makes birthdays feel lively from the first hello.",
    highlights: [
      "Wonderful for children who love mermaids and bright color",
      "Sweet one-on-one interaction and photo-friendly moments",
      "A playful fit for birthdays that want a lively princess feel",
    ],
    panelTitle: "A princess page made for mermaid-dream birthdays.",
    panelDescription:
      "Families usually choose Ariel when they want a colorful princess look, playful charm, and a character who feels instantly approachable.",
    supportingCards: [
      {
        eyebrow: "Party feel",
        title: "Bright and playful",
        description:
          "A lovely pick when you want the room to feel cheerful, colorful, and full of little smiles.",
      },
      {
        eyebrow: "Photo moments",
        title: "Beautiful close-up interaction",
        description:
          "Her action photos tend to shine in the warm one-on-one moments children remember most.",
      },
      {
        eyebrow: "Good fit",
        title: "Great for mermaid-loving birthdays",
        description:
          "Especially fun for guests who love ocean colors, imaginative play, and a princess who feels lively right away.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "Her warm, curious energy",
        description:
          "Ariel feels playful, friendly, and easy to connect with from the first moment she arrives.",
      },
      {
        eyebrow: "What parents love",
        title: "Lovely photos with real personality",
        description:
          "The bright hair, rich costume colors, and close-up child interaction create especially memorable images.",
      },
      {
        eyebrow: "Why it works",
        title: "She brings magic without feeling too formal",
        description:
          "That balance makes her a great fit for celebrations that want elegance and fun at the same time.",
      },
    ],
    relatedCharacters: ["belle", "jasmine", "rapunzel"],
  },
  belle: {
    title: "Belle parties that feel elegant, warm, and instantly storybook.",
    description:
      "Belle is perfect for families who want a classic princess entrance, soft golden visuals, and a celebration that photographs beautifully from beginning to end.",
    highlights: [
      "A timeless favorite for classic princess birthdays",
      "Beautiful yellow gown moments that stand out in photos",
      "Warm, polished interaction from entrance to goodbye",
    ],
    panelTitle: "Classic fairytale beauty with a calm, confident party rhythm.",
    panelDescription:
      "Belle works especially well when families want that instantly recognizable royal look while keeping the celebration warm, graceful, and child-centered.",
    supportingCards: [
      {
        eyebrow: "Visual impact",
        title: "A gown that reads beautifully in every photo",
        description:
          "Belle's look adds immediate wow-factor the moment she steps into the party space.",
      },
      {
        eyebrow: "Birthday energy",
        title: "Elegant without feeling stiff",
        description:
          "Children still get warmth and playfulness, while parents get a polished storybook atmosphere.",
      },
      {
        eyebrow: "Best for",
        title: "Families who want a true classic",
        description:
          "A lovely fit when Belle is already the princess your child talks about most.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "The royal fairytale feeling",
        description:
          "Belle creates the kind of princess moment that feels instantly familiar and special at the same time.",
      },
      {
        eyebrow: "What parents love",
        title: "A polished look that elevates the whole room",
        description:
          "Her action and portrait pairings make it easy to see how well her look carries in party photos.",
      },
      {
        eyebrow: "Why it works",
        title: "She suits both intimate and larger celebrations",
        description:
          "Belle feels just as lovely in a cozy home visit as she does in a bigger event space.",
      },
    ],
    relatedCharacters: ["cinderella", "sleeping-beauty", "sofia"],
  },
  cinderella: {
    title: "Cinderella parties filled with blue-gown magic, sweet moments, and timeless sparkle.",
    description:
      "Cinderella is a beautiful fit for families who want graceful photos, polished interaction, and a princess presence that feels instantly magical.",
    highlights: [
      "A classic blue-gown favorite for dreamier celebrations",
      "Lovely for keepsake photos and sweet storybook moments",
      "Warm, polished energy that feels special for the birthday child",
    ],
    panelTitle: "A princess choice that feels elegant from every angle.",
    panelDescription:
      "Cinderella is often the pick when parents want the most classic fairytale silhouette and children want the kind of princess moment that feels iconic.",
    supportingCards: [
      {
        eyebrow: "Party feel",
        title: "Soft sparkle and graceful pacing",
        description:
          "Her presence naturally gives the celebration a calmer, more elegant rhythm.",
      },
      {
        eyebrow: "Photo moments",
        title: "Beautiful action and portrait options",
        description:
          "The real party photo plus the clean costume portrait make her page especially easy to book from.",
      },
      {
        eyebrow: "Best for",
        title: "Classic princess birthdays",
        description:
          "Perfect when the dream is a blue gown, a polished entrance, and a celebration that feels truly magical.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "The true fairytale feel",
        description:
          "Cinderella instantly delivers the look and feeling many children picture when they imagine a princess party.",
      },
      {
        eyebrow: "What parents love",
        title: "A refined visual style that photographs beautifully",
        description:
          "Her costume and interaction style keep the page feeling premium and memorable.",
      },
      {
        eyebrow: "Why it works",
        title: "She brings wonder without overcomplicating the party",
        description:
          "That makes her an easy yes for parents who want something magical and polished.",
      },
    ],
    relatedCharacters: ["elsa", "belle", "snow-white"],
  },
  elsa: {
    title: "Elsa parties with frozen sparkle, warm smiles, and the big reactions families hope for.",
    description:
      "Elsa is one of the clearest wow-factor choices in the lineup, balancing icy visual magic with warm interaction that keeps the experience sweet and child-friendly.",
    highlights: [
      "A high-demand favorite for frozen-themed birthdays",
      "Shimmering visuals and photo-ready party moments",
      "Warm, reassuring interaction behind the icy glamour",
    ],
    panelTitle: "The frozen favorite that still feels warm in the room.",
    panelDescription:
      "Families usually choose Elsa when they want immediate excitement, recognizable styling, and a princess children light up around on sight.",
    supportingCards: [
      {
        eyebrow: "Visual impact",
        title: "An instant frozen-party moment",
        description:
          "Her gown, braid, and icy color palette make the party feel themed the second she arrives.",
      },
      {
        eyebrow: "Photo moments",
        title: "Close-up magic with children",
        description:
          "Elsa's action photos are especially strong when the party includes face paint, dress-up, and child-to-character connection.",
      },
      {
        eyebrow: "Best for",
        title: "Birthdays with a frozen obsession",
        description:
          "If Elsa is the name you hear every day at home, this page is built to make booking her easy.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "The instant recognition",
        description:
          "Elsa gets big reactions right away, especially from children already living in a frozen world at home.",
      },
      {
        eyebrow: "What parents love",
        title: "A princess page that already shows the real magic",
        description:
          "The party image and portrait pairing make it easy to picture the actual celebration, not just a costume.",
      },
      {
        eyebrow: "Why it works",
        title: "She feels exciting and polished at the same time",
        description:
          "That balance is a big part of why frozen-themed bookings stay so popular.",
      },
    ],
    relatedCharacters: ["cinderella", "ariel", "rapunzel"],
  },
  jasmine: {
    title: "Jasmine parties with bright color, adventurous spirit, and a warm princess welcome.",
    description:
      "Jasmine is a beautiful choice for children who want a princess that feels bold, kind, and instantly memorable in person and in photos.",
    highlights: [
      "A vibrant pick for children who love adventurous princesses",
      "Lovely hug moments and child-to-character interaction",
      "A rich color palette that stands out in party galleries",
    ],
    panelTitle: "A princess page with bold color and a genuinely warm feel.",
    panelDescription:
      "Jasmine works especially well when families want something elegant but slightly less expected than the most traditional gown-based choices.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "Rich teal and gold details",
        description:
          "Her costume brings a very different color story to the page, which helps her stand apart immediately.",
      },
      {
        eyebrow: "Party feel",
        title: "Warm and welcoming",
        description:
          "The strongest Jasmine moments tend to be the close, smile-filled interactions children remember most.",
      },
      {
        eyebrow: "Best for",
        title: "Families wanting something a little different",
        description:
          "A great fit if your child loves princesses but gravitates toward brighter, bolder favorites.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "Her adventurous princess energy",
        description:
          "Jasmine feels lively and exciting while still reading clearly as a polished princess choice.",
      },
      {
        eyebrow: "What parents love",
        title: "Strong one-on-one connection in photos",
        description:
          "Her main image shows the kind of hug and emotional moment parents love seeing in a booking gallery.",
      },
      {
        eyebrow: "Why it works",
        title: "She gives the lineup more variety",
        description:
          "That makes Jasmine a strong choice when families want a princess party that feels special and slightly different.",
      },
    ],
    relatedCharacters: ["ariel", "rapunzel", "tinker-bell"],
  },
  rapunzel: {
    title: "Rapunzel parties with golden color, playful charm, and sunshine-filled princess energy.",
    description:
      "Rapunzel is made for children who love braids, laughter, and a princess page that feels bright, playful, and full of personality.",
    highlights: [
      "A favorite for children who love Rapunzel's playful spirit",
      "Distinctive braid and costume styling that reads instantly",
      "A warm, lively choice for lighthearted celebrations",
    ],
    panelTitle: "A page built for the princess who feels playful from the very first glance.",
    panelDescription:
      "Rapunzel tends to shine when families want princess magic with a little more humor, sunshine, and spirited fun woven through it.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "That instantly recognizable braid",
        description:
          "Her look stands out right away and helps children connect the second they see her.",
      },
      {
        eyebrow: "Party feel",
        title: "Lighthearted and cheerful",
        description:
          "Rapunzel's energy leans sweet, playful, and welcoming rather than overly formal.",
      },
      {
        eyebrow: "Best for",
        title: "Children who want a princess with personality",
        description:
          "She is a wonderful fit when your child loves the fun, lively side of princess magic.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "Her sunny, curious energy",
        description:
          "Rapunzel feels cheerful and animated, which helps children warm up quickly during the visit.",
      },
      {
        eyebrow: "What parents love",
        title: "A page that showcases the full costume beautifully",
        description:
          "Her main image gives a clear look at the braid, the palette, and the overall character feel.",
      },
      {
        eyebrow: "Why it works",
        title: "She keeps the party whimsical without losing polish",
        description:
          "That makes Rapunzel a strong bridge between playful fun and premium presentation.",
      },
    ],
    relatedCharacters: ["jasmine", "elsa", "sofia"],
  },
  "sleeping-beauty": {
    title: "Sleeping Beauty parties with soft pink elegance and timeless fairytale warmth.",
    description:
      "Sleeping Beauty is perfect for families who want a classic rosy fairytale mood, gentle princess interaction, and a celebration that feels calm and lovely.",
    highlights: [
      "A timeless pink-gown favorite for softer celebrations",
      "Sweet, low-pressure interaction that feels warm and graceful",
      "Wonderful for birthdays that want a romantic storybook look",
    ],
    panelTitle: "The gentle pink princess page for calm, lovely celebration energy.",
    panelDescription:
      "Families often choose Sleeping Beauty when they want something elegant and unmistakably royal, but with a softer tone than the bigger wow-factor picks.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "A classic pink fairytale palette",
        description:
          "Her look instantly gives the page that soft storybook romance parents and children both love.",
      },
      {
        eyebrow: "Party feel",
        title: "Gentle and graceful",
        description:
          "Sleeping Beauty tends to create the kind of quiet magical moments that feel especially sweet in person.",
      },
      {
        eyebrow: "Best for",
        title: "Families who want timeless princess magic",
        description:
          "A beautiful option when your child loves a true pink-gown princess moment.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "The soft pink princess dream",
        description:
          "Her gown and look feel instantly magical for children drawn to the most classic princess styling.",
      },
      {
        eyebrow: "What parents love",
        title: "A warm, approachable photo story",
        description:
          "The action image shows the kind of gentle one-on-one interaction families trust and remember.",
      },
      {
        eyebrow: "Why it works",
        title: "She brings calm beauty to the lineup",
        description:
          "That makes her especially lovely for more intimate or softer-toned celebrations.",
      },
    ],
    relatedCharacters: ["belle", "cinderella", "sofia"],
  },
  "snow-white": {
    title: "Snow White parties with cheerful color, classic charm, and bright little-girl magic.",
    description:
      "Snow White is a timeless favorite for younger princess fans, bringing bold storybook color and a warm, friendly party presence.",
    highlights: [
      "A classic favorite that younger guests recognize quickly",
      "Bright, storybook colors that read beautifully in photos",
      "A cheerful fit for parties that want a traditional princess feel",
    ],
    panelTitle: "A bright classic princess page with plenty of storybook charm.",
    panelDescription:
      "Snow White works especially well when families want one of the most iconic fairytale looks in the lineup and a princess younger children respond to right away.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "Bold classic princess color",
        description:
          "Her red, blue, and yellow palette adds instant fairytale character to any party setting.",
      },
      {
        eyebrow: "Party feel",
        title: "Cheerful and friendly",
        description:
          "Snow White's page leans warm, approachable, and especially lovely for mixed-age guest lists.",
      },
      {
        eyebrow: "Best for",
        title: "Children who love the original classics",
        description:
          "She is a wonderful choice when your child lights up around the most timeless princess stories.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "A princess who feels instantly familiar",
        description:
          "Snow White brings one of the most recognizable silhouettes in the entire lineup.",
      },
      {
        eyebrow: "What parents love",
        title: "Classic fairytale photos with strong color",
        description:
          "Her page looks beautiful in galleries because her costume reads so clearly in both portraits and action shots.",
      },
      {
        eyebrow: "Why it works",
        title: "She keeps the party feeling joyful and easy",
        description:
          "That simplicity makes Snow White a great fit for many younger-birthday celebrations.",
      },
    ],
    relatedCharacters: ["cinderella", "sleeping-beauty", "sofia"],
  },
  sofia: {
    title: "Sofia parties with sweet purple sparkle and a warm, younger-princess feel.",
    description:
      "Sofia is often the perfect choice for little ones who want a princess they recognize right away and feel comfortable around from the start.",
    highlights: [
      "A gentle, younger favorite that feels instantly approachable",
      "Lovely purple styling with soft sparkle and warmth",
      "A sweet fit for smaller birthdays and early princess fans",
    ],
    panelTitle: "A princess page built for the little ones who want their very own princess friend.",
    panelDescription:
      "Sofia tends to shine for younger ages, cozy birthday spaces, and families who want a princess choice that feels especially easy to say yes to.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "Purple sparkle with a child-friendly feel",
        description:
          "Her look reads as polished and magical while still feeling especially inviting to younger guests.",
      },
      {
        eyebrow: "Party feel",
        title: "Sweet and approachable",
        description:
          "Sofia creates a welcoming tone that helps shy children warm up more easily.",
      },
      {
        eyebrow: "Best for",
        title: "Early princess birthdays",
        description:
          "A lovely option for children just starting to fall in love with princess parties.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "A princess that feels like a friend",
        description:
          "Sofia's warm expression and gentle styling make her especially easy for younger children to connect with.",
      },
      {
        eyebrow: "What parents love",
        title: "A softer, sweeter booking option",
        description:
          "Her page gives families another recognizable character without the bigger, more dramatic look of some other princesses.",
      },
      {
        eyebrow: "Why it works",
        title: "She brings a younger-friendly balance to the lineup",
        description:
          "That makes Sofia a smart choice for smaller, sweeter, age-appropriate celebrations.",
      },
    ],
    relatedCharacters: ["sleeping-beauty", "belle", "rapunzel"],
  },
  "tinker-bell": {
    title: "Tinker Bell parties with pixie sparkle, playful color, and fairy-sized charm.",
    description:
      "Tinker Bell is a whimsical choice for celebrations that want something magical, bright, and just a little more playful than a classic royal look.",
    highlights: [
      "A fairy favorite for children who love sparkle and whimsy",
      "Bright green styling that stands apart in photos",
      "A playful option that still feels polished and photo-ready",
    ],
    panelTitle: "A fairy page full of pixie energy and bright little magical details.",
    panelDescription:
      "Tinker Bell is ideal for families who want a softer fairy feel, a fun splash of color, and a character that instantly changes the mood of the party.",
    supportingCards: [
      {
        eyebrow: "Visual style",
        title: "The page reads brighter and more playful",
        description:
          "Her green palette and fairy silhouette add variety and help the lineup feel more complete.",
      },
      {
        eyebrow: "Party feel",
        title: "Whimsical and lighthearted",
        description:
          "Tinker Bell is a lovely fit when you want something magical without leaning fully into a royal tone.",
      },
      {
        eyebrow: "Best for",
        title: "Children who love fairies and sparkle",
        description:
          "A perfect option for guests who want pixie magic, not just a traditional princess gown.",
      },
    ],
    highlightCards: [
      {
        eyebrow: "What children love",
        title: "The fairy look feels instantly fun",
        description:
          "Tinker Bell gives the lineup a playful magical option children recognize right away.",
      },
      {
        eyebrow: "What parents love",
        title: "A different visual mood without losing polish",
        description:
          "That variety helps the princess page feel more complete and more useful when families are comparing options.",
      },
      {
        eyebrow: "Why it works",
        title: "She broadens the lineup beautifully",
        description:
          "Tinker Bell adds a fairy path for families who want magic with a lighter, more whimsical feel.",
      },
    ],
    relatedCharacters: ["jasmine", "rapunzel", "ariel"],
  },
} as const;

export const princessDetailSlugs = Object.keys(
  princessCharacterPages,
) as ReadonlyArray<keyof typeof princessCharacterPages>;

export function getPrincessCharacterPage(
  slug: string,
): CharacterPageContent | undefined {
  const character = getCharacterBySlug(slug);
  if (!character || character.category !== "Princess") {
    return undefined;
  }

  const config = princessCharacterPages[
    slug as keyof typeof princessCharacterPages
  ];
  if (!config) {
    return undefined;
  }

  return {
    slug,
    navigation: princessPageContent.navigation,
    hero: {
      eyebrow: character.name,
      title: config.title,
      description: config.description,
      highlights: config.highlights,
      primaryCta: {
        label: `Book ${character.name}`,
        href: "/book",
      },
      secondaryCta: {
        label: "See all princesses",
        href: "/princess#characters",
      },
      mainMedia: character.mainMedia,
      insetMedia: character.insetMedia,
      panelEyebrow: "Why families choose her",
      panelTitle: config.panelTitle,
      panelDescription: config.panelDescription,
      supportingCards: config.supportingCards,
    },
    sections: {
      highlights: {
        eyebrow: "Why this princess works",
        title: `${character.name} should feel magical in the room and beautiful in the photos.`,
        description:
          "These are the details parents usually care about most when they are choosing between princesses for the big day.",
      },
      related: {
        eyebrow: "More princess favorites",
        title: "Still comparing? Here are a few more beautiful options families love.",
        description:
          "Every princess page stays inside the same booking flow, so you can compare favorites without losing momentum.",
      },
      packages: {
        eyebrow: "Package options",
        title: `Choose the package that fits your ${character.name} party best.`,
        description:
          "The package structure stays consistent so parents can compare time, pacing, and party feel quickly.",
      },
    },
    highlightCards: config.highlightCards,
    relatedCharacters: config.relatedCharacters,
    packageSlugs: sharedPackageSlugs,
    cta: {
      eyebrow: "Ready to book this princess?",
      title: `Tell us about the party and we will help plan the right ${character.name} experience.`,
      description:
        "Share the date, the birthday details, and any special notes. We will follow up with availability and the clearest next step.",
      notes: [
        `Great for families already leaning toward ${character.name}`,
        "Easy to pair with travel notes, add-ons, and special requests",
        "One calm booking form covers the full princess lineup",
      ],
      primaryCta: {
        label: `Start a ${character.name} request`,
        href: "/book",
      },
      secondaryCta: {
        label: "Back to princesses",
        href: "/princess#characters",
      },
    },
  };
}

export function getPrincessCharacterPageRelated(slug: string) {
  const content = getPrincessCharacterPage(slug);
  if (!content) {
    return [];
  }
  return pickCharacters(content.relatedCharacters);
}

export function getPrincessCharacterPagePackages(slug: string) {
  const content = getPrincessCharacterPage(slug);
  if (!content) {
    return [];
  }
  return pickPackages(content.packageSlugs);
}
