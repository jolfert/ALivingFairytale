export type FAQ = {
  question: string;
  answer: string;
};

export const bookingFaqs: ReadonlyArray<FAQ> = [
  {
    question: "How far in advance should I book?",
    answer:
      "As early as you can — weekend dates fill fast in the spring and fall. We recommend 4–6 weeks ahead for weekends, though we can often accommodate shorter notice.",
  },
  {
    question: "Do you travel outside Winnipeg?",
    answer:
      "Yes. Travel inside Winnipeg is included. Outside the city, we charge $0.68/km from the nearest perimeter exit.",
  },
  {
    question: "How many children are included?",
    answer:
      "Every package includes up to 10 children. Additional children are $5 per child.",
  },
  {
    question: "Can I book more than one character?",
    answer:
      "Yes — 1 to 5 characters at any duration. Check the pricing page for the full rate card.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "We'll confirm the deposit amount in our reply. Every booking is secured with a partial deposit up front, with the balance due on the event day.",
  },
  {
    question: "What happens if you have to cancel?",
    answer:
      "We've never cancelled an event since 2011. In the extremely unlikely event that we can't deliver on our end, we offer a 100% money-back guarantee.",
  },
  {
    question: "What should I have ready for the party?",
    answer:
      "Just a space for the character to arrive grandly and room for children to gather for activities and photos. We'll bring everything else.",
  },
];
