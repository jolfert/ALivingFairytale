import {
  INQUIRY_ADDRESS_MAX_LENGTH,
  INQUIRY_NOTES_MAX_LENGTH,
} from "@/data/book-inquiry-limits";

export const partyTypeOptions = [
  { value: "princess", label: "Princess party" },
  { value: "hero", label: "Hero / superhero party" },
  { value: "mascot", label: "Mascot / costume character" },
  { value: "rental", label: "Rental add-on" },
  { value: "combined", label: "Character + rental (combined)" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type PartyTypeValue = (typeof partyTypeOptions)[number]["value"];

export const inquiryFormFields = [
  {
    name: "parentName",
    label: "Parent / guardian name",
    kind: "text",
    required: true,
    width: "full",
    autoComplete: "name",
  },
  {
    name: "phone",
    label: "Phone",
    kind: "tel",
    required: true,
    width: "half",
    autoComplete: "tel",
  },
  {
    name: "email",
    label: "Email",
    kind: "email",
    required: true,
    width: "half",
    autoComplete: "email",
  },
  {
    name: "partyType",
    label: "Party type",
    kind: "select",
    required: true,
    width: "half",
    optionSource: "partyTypes" as const,
    autoComplete: "off",
  },
  {
    name: "packageSlug",
    label: "Package",
    kind: "select",
    required: true,
    width: "half",
    optionSource: "packages" as const,
    autoComplete: "off",
  },
  {
    name: "preferredCharacter",
    label: "Preferred character or rental",
    kind: "text",
    required: true,
    width: "full",
    placeholder: "e.g., Storybook Mouse, bounce house, or open to ideas",
    autoComplete: "off",
  },
  {
    name: "partyDate",
    label: "Party date",
    kind: "date",
    required: true,
    width: "half",
    autoComplete: "off",
  },
  {
    name: "startTime",
    label: "Start time",
    kind: "time",
    required: true,
    width: "half",
    autoComplete: "off",
  },
  {
    name: "childAge",
    label: "Birthday child age",
    kind: "text",
    required: true,
    width: "half",
    placeholder: "e.g., 4 or turning 5",
    autoComplete: "off",
  },
  {
    name: "address",
    label: "Event address",
    kind: "textarea",
    required: true,
    width: "full",
    rows: 3,
    maxLength: INQUIRY_ADDRESS_MAX_LENGTH,
    placeholder: "Street, city, and any gate or building notes we should know",
    autoComplete: "street-address",
  },
  {
    name: "notes",
    label: "Notes / special requests",
    kind: "textarea",
    required: false,
    width: "full",
    rows: 4,
    maxLength: INQUIRY_NOTES_MAX_LENGTH,
    placeholder: "Allergies, parking, surprise timing, or other helpful context",
    autoComplete: "off",
  },
] as const;

export type InquiryFieldName = (typeof inquiryFormFields)[number]["name"];
