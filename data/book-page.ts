export const bookPageContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Princess", href: "/princess" },
    { label: "Heroes", href: "/heroes" },
    { label: "Mascots", href: "/mascots" },
    { label: "Book", href: "/book" },
  ],
  trustColumn: {
    eyebrow: "Book your party",
    title: "Let's plan something magical.",
    lead:
      "Tell us a little about your celebration and we'll help you choose the party type, package, and character that fits your child, your theme, and your event.",
    blocks: [
      {
        title: "Clear package options",
        paragraphs: [
          "Simple choices that make it easier to book with confidence.",
        ],
      },
      {
        title: "Friendly follow-up",
        paragraphs: [
          "We'll review your inquiry and get back to you with the next steps.",
        ],
      },
      {
        title: "Party types for different celebrations",
        paragraphs: [
          "Princesses, heroes, mascots, and rentals all live under one easy booking path.",
        ],
      },
      {
        title: "Built to stay parent-friendly",
        paragraphs: [
          "A warm, polished process that keeps things easy to understand from the start.",
        ],
      },
    ],
    footnote:
      "Before you send your inquiry: Weekend dates and popular characters can book up quickly, especially during busy seasons. Sending your request earlier gives you the best chance of securing the experience you want.",
  },
  form: {
    eyebrow: "Party inquiry",
    title: "Book your party",
    description:
      "Share a few details below and we'll help bring your celebration to life.",
    submitLabel: "Check availability & start my booking",
    pendingLabel: "Sending your request...",
    sentEyebrow: "Request sent",
    successTitle: "Your inquiry has been sent.",
    successIntro:
      "Thank you for reaching out to A Living Fairytale. We've received your party details and will review your request as soon as possible.",
    successBullets: [
      "We'll check the details you submitted.",
      "We'll follow up with the next steps.",
      "If we need anything else, we'll let you know.",
    ] as const,
    successWithParentEmail:
      "We also sent a short confirmation to your email so you have a record of what you submitted.",
    successParentEmailFailed:
      "Your request reached our team, but the automatic confirmation email did not go out. You will still hear from us at the address you provided.",
    resetLabel: "Send another inquiry",
    backHomeLabel: "Back to homepage",
    errorSummary: "A few fields need your attention before we can send this.",
    errorSummaryLead:
      "Please check the messages below each field, update anything that looks off, and try again.",
    nonValidationHelp:
      "If this keeps happening, email us with your party date and city and we will gladly help without the form.",
    deliveryFailed:
      "We couldn't send your inquiry just yet. Please review the form and try again. If the issue continues, you can contact us directly and we'll be happy to help.",
    submissionNotAccepted:
      "We could not submit that request. Please wait a moment and try again, or contact us by email with your party details.",
    selectPlaceholder: "Select an option",
    validation: {
      parentName: "Please enter the parent or guardian name.",
      phoneRequired: "Please add a phone number we can reach you on.",
      phoneDigits: "That number looks too short - please double-check the area code.",
      emailRequired: "Please add your email so we can reply.",
      emailInvalid: "That email address does not look quite right - please check for typos.",
      partyType: "Please choose a party type.",
      packageSlug: "Please choose a package.",
      preferredCharacter:
        "Please tell us which character, mascot, or rental you have in mind.",
      partyDate: "Please choose the party date.",
      partyDateInvalid: "Please choose a valid calendar date for the party.",
      partyDatePast: "Party date cannot be in the past - choose today or a future date.",
      startTime: "Please choose a start time.",
      childAge: "Please add the birthday child's age or write something like turning 5.",
      address: "Please add the full event address so we can plan travel accurately.",
      addressTooLong:
        "Address is too long - please shorten it to 500 characters or less.",
      notesTooLong:
        "Notes are too long - please shorten them to 2,000 characters or less and try again.",
    },
  },
} as const;
