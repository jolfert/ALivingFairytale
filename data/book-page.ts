import { primaryNavigation } from "@/data/site-shell";

export const bookPageContent = {
  navigation: primaryNavigation,
  trustColumn: {
    eyebrow: "Book your party",
    title: "Let's plan the magic.",
    lead:
      "Send us the date, the character, and a few details. A real person will reply — usually within a day — with availability and the next steps.",
    blocks: [
      {
        title: "One form covers everything",
        paragraphs: [
          "Princesses, superheroes, mascots and rentals all come through this form. Just pick the party type and tell us what you have in mind.",
        ],
      },
      {
        title: "A real person reads every inquiry",
        paragraphs: [
          "Charlyn and the team review every request personally. No autoresponders, no bots — just a real reply with the next step.",
        ],
      },
      {
        title: "Travel & pricing",
        paragraphs: [
          "Inside Winnipeg, travel is included. Outside the perimeter, it's $0.68/km from the nearest perimeter exit. All packages include up to 10 children; additional children are $5 each.",
        ],
      },
      {
        title: "We haven't cancelled an event since 2011",
        paragraphs: [
          "When we say we'll be there, we are. In the unlikely event that we can't deliver, we offer a 100% money-back guarantee.",
        ],
      },
    ],
    footnote:
      "Weekend dates fill quickly in the spring and fall. If you have a specific date in mind, send your request as early as you can.",
  },
  form: {
    eyebrow: "Party inquiry",
    title: "Tell us about your party",
    description:
      "Fill in whatever you know. If something is flexible or you're not sure yet, skip it — we can sort the rest out in the reply.",
    submitLabel: "Send my inquiry",
    pendingLabel: "Sending your request...",
    sentEyebrow: "Request sent",
    successTitle: "Thank you! Your inquiry is on its way.",
    successIntro:
      "Thank you for reaching out to A Living Fairytale. We've received your party details and Charlyn or the team will review your request personally.",
    successBullets: [
      "We'll confirm availability for your date.",
      "We'll reply with the next step — usually within a day.",
      "If we need anything else, we'll ask.",
    ] as const,
    successWithParentEmail:
      "We also sent a short confirmation to your email so you have a record of what you submitted.",
    successParentEmailFailed:
      "Your request reached us, but the confirmation email didn't go out. You'll still hear back from us at the address you provided.",
    resetLabel: "Send another inquiry",
    backHomeLabel: "Back to home",
    errorSummary: "A few fields need your attention before we can send this.",
    errorSummaryLead:
      "Please check the messages below each field, update anything that looks off, and try again.",
    nonValidationHelp:
      "If this keeps happening, email us with your party date and city and we'll take it from there.",
    deliveryFailed:
      "We couldn't send your inquiry just yet. Please review the form and try again. If the issue continues, you can contact us directly and we'll be happy to help.",
    submissionNotAccepted:
      "We couldn't submit that request. Please wait a moment and try again, or contact us by email with your party details.",
    selectPlaceholder: "Select an option",
    validation: {
      parentName: "Please enter the parent or guardian name.",
      phoneRequired: "Please add a phone number we can reach you on.",
      phoneDigits: "That number looks too short — please double-check the area code.",
      emailRequired: "Please add your email so we can reply.",
      emailInvalid: "That email address doesn't look quite right — please check for typos.",
      partyType: "Please choose a party type.",
      packageSlug: "Please choose a package.",
      preferredCharacter:
        "Please tell us which character, mascot or rental you have in mind.",
      partyDate: "Please choose the party date.",
      partyDateInvalid: "Please choose a valid calendar date for the party.",
      partyDatePast: "Party date cannot be in the past — choose today or a future date.",
      startTime: "Please choose a start time.",
      childAge: "Please add the birthday child's age or write something like \"turning 5\".",
      address: "Please add the full event address so we can plan travel accurately.",
      addressTooLong:
        "Address is too long — please shorten it to 500 characters or less.",
      notesTooLong:
        "Notes are too long — please shorten them to 2,000 characters or less and try again.",
    },
  },
} as const;
