export type Testimonial = {
  slug: string;
  author: string;
  role: string;
  quote: string;
  featured?: boolean;
};

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    slug: "peter-wheatley",
    author: "Peter Wheatley",
    role: "StandardAero Children's Christmas Party",
    quote:
      "A Living Fairytale was the biggest highlight at the StandardAero Christmas party. The positive feedback we received from parents was overwhelming. A majority of the children were so enthralled with the characters that they did not partake in any of the other attractions. The characters were fun, engaging, and accommodating to the kids. A Living Fairytale was such a hit, that several parents have contacted them to entertain at their child's birthday party.",
    featured: true,
  },
  {
    slug: "kal-barteski",
    author: "Kal Barteski",
    role: "A Living Fairytale parent",
    quote:
      "Cinderella DAZZLED our party and made the day completely unforgettable. THANK YOU! Amazing job! So much fun!",
    featured: true,
  },
  {
    slug: "kim",
    author: "Kim",
    role: "A Living Fairytale parent",
    quote:
      "Charlyn (aka Elsa), you were an absolute hit! I can't tell you how many parents commented on how professional and realistic you and Anna were. Thank you again for making Ella's party excellent. And thank you for the \u201Cextras\u201D that you included. It is very much appreciated.",
  },
  {
    slug: "cheryl-cn-rail",
    author: "Cheryl",
    role: "CN Rail Family Fun Day",
    quote:
      "I have one major disappointment with Saturday's event.... I WANTED A PICTURE WITH THE PRINCESSES TOO! Charlyn, you guys were spectacular and the talk of the town! We will be booking you again next year!",
    featured: true,
  },
  {
    slug: "mandy",
    author: "Mandy",
    role: "A Living Fairytale parent",
    quote:
      "I wanted to say a huge thank you for making Camryn's party so special! These little girls were amazed that Princess Aurora came to visit them and that just makes me want to smile! You are so amazing with our children, so professional, such a great role model for them. Every activity you did with them was so age appropriate and geared just to them. You managed your time with them so well and it took so much entertainment pressure off of us parents! The memories that we have from it will last a lifetime! Camryn is already asking for Elsa to come to her party next year!",
  },
  {
    slug: "shannon",
    author: "Shannon",
    role: "A Living Fairytale parent",
    quote:
      "Your performance, as well as the girls, was extremely professional and totally in character of the princesses you all were depicting. All three of you are talented young ladies whose love of children is clearly evident. You looked absolutely beautiful; the dresses were amazing, even the way you spoke was spot on by all of you! Thank you for so joyfully coming to our home and providing such a unique party experience. I will be recommending you to anyone I know with a little girl!",
  },
  {
    slug: "lyela",
    author: "Lyela",
    role: "A Living Fairytale parent",
    quote:
      "My daughter was absolutely amazed that she met the Princesses yesterday! She cannot stop talking about Ava's birthday party, and of course asked me if she can have all of the princesses at her birthday party too! I, too, was impressed with all of your costumes, make up, and performances. I have been to Disney World twice and you all looked and acted like the real deal.",
    featured: true,
  },
];

export function getFeaturedTestimonials(): ReadonlyArray<Testimonial> {
  return testimonials.filter((t) => t.featured);
}
