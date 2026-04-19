import { primaryNavigation } from "@/data/site-shell";

export const bookPageContent = {
  navigation: primaryNavigation,
  trustColumn: {
    eyebrow: "Book your party",
    title: "Let's plan the magic.",
    lead:
      "Send us the date, the character, and a few details. A real person replies within a day.",
    blocks: [
      {
        title: "One form, all party paths",
        paragraphs: [
          "Princesses, superheroes, mascots and rentals all come through this form.",
        ],
      },
      {
        title: "A real person reads every inquiry",
        paragraphs: [
          "No bots, no autoresponders. Charlyn and the team review every request personally.",
        ],
      },
      {
        title: "Travel + fine print",
        paragraphs: [
          "Travel inside Winnipeg is included. Outside the perimeter, it's $0.68/km. Every package covers up to 10 children; additional children are $5 each.",
        ],
      },
    ],
    footnote:
      "Weekend dates book fast in spring and fall. If you have a specific date in mind, send your request as early as you can.",
  },
  form: {
    eyebrow: "Party inquiry",
    title: "Tell us about your party",
    description:
      "Fill in what you know. Skip what you don't — we can sort it in the reply.",
    submitLabel: "Send my inquiry",
    pendingLabel: "Sending...",
    sentEyebrow: "Request sent",
    successTitle: "Thank you! Your inquiry is on its way.",
    successIntro:
      "We've received your details. Charlyn or the team will review your request personally.",
    successBullets: [
      "We'll confirm availability for your date.",
      "We'll reply with the next step — usually within a day.",
      "If we need anything else, we'll ask.",
    ] as const,
    successWithParentEmail:
      "We also sent a confirmation to your email so you have a record.",
    successParentEmailFailed:
      "Your request reached us, but the confirmation email didn't go out. You'll still hear back from us.",
    resetLabel: "Send another inquiry",
    backHomeLabel: "Back to home",
    errorSummary: "A few fields need your attention before we can send this.",
    errorSummaryLead:
      "Check the messages below each field, update anything that looks off, and try again.",
    nonValidationHelp:
      "If this keeps happening, email us with your party date and city and we'll take it from there.",
    deliveryFailed:
      "We couldn't send your inquiry just yet. Please try again — or contact us directly if the issue continues.",
    submissionNotAccepted:
      "We couldn't submit that request. Please wait a moment and try again.",
    selectPlaceholder: "Select an option",
    validation: {
      parentName: "Please enter the parent or guardian name.",
      phoneRequired: "Please add a phone number we can reach you on.",
      phoneDigits: "That number looks too short — please double-check the area code.",
      emailRequired: "Please add your email so we can reply.",
      emailInvalid: "That email address doesn't look quite right.",
      partyType: "Please choose a party type.",
      packageSlug: "Please choose a package.",
      preferredCharacter:
        "Please tell us which character, mascot or rental you have in mind.",
      partyDate: "Please choose the party date.",
      partyDateInvalid: "Please choose a valid calendar date for the party.",
      partyDatePast: "Party date cannot be in the past.",
      startTime: "Please choose a start time.",
      childAge: "Please add the birthday child's age.",
      address: "Please add the full event address so we can plan travel.",
      addressTooLong:
        "Address is too long — please shorten it to 500 characters or less.",
      notesTooLong:
        "Notes are too long — please shorten them to 2,000 characters or less.",
    },
  },
} as const;
