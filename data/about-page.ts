import { getMediaAsset } from "@/data/media";
import { primaryNavigation } from "@/data/site-shell";

export const aboutPageContent = {
  navigation: primaryNavigation,
  hero: {
    eyebrow: "About A Living Fairytale",
    title: "A locally owned family business, bringing character magic to Manitoba since 2011.",
    lead:
      "We specialize in more than just birthday parties — daycare parties, mall shows, holiday parties, charity events, business and corporate events, and special one-of-a-kind celebrations. The possibilities are endless.",
    photo: getMediaAsset("cinderellaMain"),
  },
  intro: {
    eyebrow: "What we do",
    title: "Theme-park quality character entertainment.",
    paragraphs: [
      "Our entertainers are highly trained in acting, singing and modelling. The dresses are gorgeous ball gowns that are authentic and breath-taking, and every performer is deeply knowledgeable about the character they're portraying.",
      "Our promise to you is to make this special day a memory that will last forever.",
    ],
  },
  founder: {
    eyebrow: "Meet the founder",
    name: "Charlyn Azure",
    title: "Founder & Early Childhood Educator",
    paragraphs: [
      "Once upon a time, Charlyn's love for children began the journey of A Living Fairytale. A career working with children is what drove her to complete her Early Childhood Education and receive a diploma from Red River College. As a preschool teacher, singing and dancing were a few of the precious moments in every day's work.",
      "Modelling and acting have been part of her life since she was a teenager. She studied acting throughout school and then sought out a renowned class at Capilano College in British Columbia. She continued her education in acting here in Winnipeg and has been moving forward ever since. Modelling has been another passion — she has been represented by Panache Management for over ten years.",
      "Combine all of these and you have a performer who gives you only the best of quality. As a child, Charlyn loved the enchanted elements of fairytale princess stories — the magic, the true love, the endless possibilities.",
      "This family-owned and operated business takes pride in its clientele. Repeat bookings are the foundation of the business, so reputation is everything. We strive to make sure your little one's special day is outstanding. The children won't believe that their parents brought them a real-life princess to their party.",
      "They all lived happily ever after.",
    ],
  },
  pillars: {
    eyebrow: "What you can expect",
    title: "Experience. Quality. Reliability. Safety. Customer service.",
    description:
      "These five things are the foundation of everything we do. They're the reason families keep booking us year after year.",
    items: [
      {
        title: "Experience",
        description:
          "We've been in business since 2011, and our entertainers have attended 2,000+ events. Birthdays, daycare parties, mall shows, holiday parties, charity and corporate events — we've done it all.",
      },
      {
        title: "Quality",
        description:
          "Price always reflects quality. We spare no expense on costumes, wigs, makeup and accessories, and we hire the most trained entertainers in the industry. As your family grows, you'll find our entertainment grows with you.",
      },
      {
        title: "Reliability",
        description:
          "We have never had to cancel an event on a family. When we say we're going to be there, we are. In the unlikely event that a performer is poisoned by a poisonous apple with no prince in sight, we offer a 100% money-back guarantee.",
      },
      {
        title: "Safety",
        description:
          "We run background checks on every entertainer we work with, for your peace of mind. We carry full insurance for our services — unlike most character entertainment companies — and we use industry-standard practices to keep your payment information safe.",
      },
      {
        title: "Customer Service",
        description:
          "We pride ourselves on answering every request, every question, and every concern. We work as hard as we can to customize each event to your specific needs. Your satisfaction is the goal.",
      },
    ],
  },
  cta: {
    eyebrow: "Let's plan something magical",
    title: "Ready to make their special day truly unforgettable?",
    description:
      "Send us your party date, the character you have in mind, and a few details about your celebration. A real person will reply — usually within a day.",
    primaryCta: { label: "Book a Party", href: "/book" },
    secondaryCta: { label: "Read reviews", href: "/reviews" },
  },
} as const;
