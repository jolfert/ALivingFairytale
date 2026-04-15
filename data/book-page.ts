export const bookPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Mascots", href: "/mascots" },
    { label: "Book", href: "/book" },
  ],
  trustColumn: {
    eyebrow: "Book with confidence",
    title: "A calm inquiry flow—built to grow into email, CRM, and scheduling.",
    lead:
      "Submit the details below and we will follow up with you directly. Nothing is charged on this screen, and no automated promises are made about availability until a human confirms your date.",
    blocks: [
      {
        title: "What happens next",
        paragraphs: [
          "We review your date, location, party type, and package selection, then reply with availability and any clarifying questions.",
          "If the date works, we align on timing, add-ons, and arrival logistics in plain language—same tone as the rest of the site.",
        ],
      },
      {
        title: "Response expectations",
        paragraphs: [
          "We aim to respond to new inquiries within one to two business days. Weekends and peak seasons can run slightly longer.",
          "If your party is soon, say so in the notes field and we will prioritize as fairly as we can.",
        ],
      },
      {
        title: "Service area",
        paragraphs: [
          "Travel rules, mileage, and fees are confirmed during planning—not guessed from a map widget on this page.",
          "Include your full address so we can answer accurately the first time we reply.",
        ],
      },
      {
        title: "Helpful notes",
        paragraphs: [
          "Surprises, shared driveways, apartment gates, and parking limits are all useful in the notes field.",
          "If you are deciding between characters or packages, say what you are weighing—we are happy to guide.",
        ],
      },
    ],
    footnote:
      "Inquiries are delivered by email (Resend). We do not store submissions in a database until you add one—your record of the request is the message in your inbox.",
  },
  form: {
    eyebrow: "Party inquiry",
    title: "Tell us what you are planning",
    description:
      "Complete the fields that apply. Required items keep the first reply focused; optional notes reduce back-and-forth later.",
    submitLabel: "Submit inquiry",
    pendingLabel: "Sending inquiry…",
    successTitle: "You are all set—we have your inquiry.",
    successIntro:
      "Your party details were sent to our team by email. We will follow up at the address you provided; there is nothing else you need to do on this page.",
    successBullets: [
      "Most replies go out within one to two business days (sometimes a little longer on weekends).",
      "If you use Gmail or similar, peek at Promotions or spam if our reply is not in your inbox.",
      "If your date is soon, reply to our email and say so—we will do our best to prioritize fairly.",
    ] as const,
    successWithParentEmail:
      "We also sent a short confirmation to your email so you have a receipt of what you submitted.",
    successParentEmailFailed:
      "Your inquiry reached our team, but we could not send the automatic confirmation email. You will still hear from us at the address you provided.",
    errorSummary: "A few fields need your attention before we can send this.",
    errorSummaryLead:
      "Please check the messages below each field, update anything that looks off, and try again.",
    deliveryFailed:
      "We could not send your inquiry right now. Please try again in a few minutes. If it keeps happening, email us with your party date and we will help from there.",
    submissionNotAccepted:
      "We could not submit that request. Please wait a moment and try again, or reach out by email with your party details.",
    validation: {
      parentName: "Please enter the parent or guardian name.",
      phoneRequired: "Please add a phone number we can reach you on.",
      phoneDigits: "That number looks too short—please double-check the area code.",
      emailRequired: "Please add your email so we can reply.",
      emailInvalid: "That email address does not look quite right—please check for typos.",
      partyType: "Please choose a party type.",
      packageSlug: "Please choose a package.",
      preferredCharacter: "Please tell us which character or rental you have in mind.",
      partyDate: "Please choose the party date.",
      partyDateInvalid: "Please choose a valid calendar date for the party.",
      partyDatePast: "Party date cannot be in the past—choose today or a future date.",
      startTime: "Please choose a start time.",
      childAge: "Please add the birthday child’s age (or “turning …”).",
      address: "Please add the full event address so we can plan travel accurately.",
      addressTooLong:
        "Address is too long—please shorten to 500 characters or less (we only need enough to plan travel).",
      notesTooLong:
        "Notes are too long—please shorten to 2,000 characters or less and try again.",
    },
  },
} as const;
