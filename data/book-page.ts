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
    title: "Booking should feel calm, clear, and exciting.",
    lead:
      "Share the basics below and we will follow up with the best next step for your celebration. Nothing is charged on this page, and availability is always confirmed by a real person.",
    blocks: [
      {
        title: "What happens next",
        paragraphs: [
          "We review your date, location, party type, and package selection, then reply with availability and any helpful follow-up questions.",
          "If your date works, we help you confirm timing, character fit, and any add-ons in plain, friendly language.",
        ],
      },
      {
        title: "Response expectations",
        paragraphs: [
          "We aim to respond to new inquiries within one to two business days. Weekends and peak party dates can sometimes take a little longer.",
          "If your celebration is coming up soon, mention that in the notes and we will do our best to prioritize fairly.",
        ],
      },
      {
        title: "Service area",
        paragraphs: [
          "Travel details are confirmed after we review your address, so we can answer accurately instead of guessing.",
          "Please include the full event location so our first reply can be as helpful as possible.",
        ],
      },
      {
        title: "Helpful notes",
        paragraphs: [
          "Things like surprise timing, apartment access, parking, or shared driveways are all useful to include.",
          "If you are deciding between characters or packages, tell us what you are choosing between and we will gladly guide you.",
        ],
      },
    ],
    footnote:
      "Every inquiry is reviewed by a real person so your reply can feel thoughtful, accurate, and easy to trust.",
  },
  form: {
    eyebrow: "Party inquiry",
    title: "Tell us about the party you are planning",
    description:
      "Complete the fields that apply. The required details help us send a focused first reply, and the notes box gives you room for anything special.",
    submitLabel: "Submit inquiry",
    pendingLabel: "Sending your request...",
    sentEyebrow: "Request sent",
    successTitle: "We received your party request.",
    successIntro:
      "Thank you for reaching out. We will review your details and follow up at the email address you provided as soon as we can.",
    successBullets: [
      "Most replies go out within one to two business days.",
      "If you use Gmail or a similar provider, it is worth checking Promotions or spam just in case our reply lands there.",
      "If your date is coming up soon, reply to our email and let us know. We will do our best to help quickly.",
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
      "We could not send your inquiry right now. Please try again in a few minutes. If it keeps happening, reach out by email and we will help from there.",
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
