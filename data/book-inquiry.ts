import {
  INQUIRY_ADDRESS_MAX_LENGTH,
  INQUIRY_NOTES_MAX_LENGTH,
} from "@/data/book-inquiry-limits";

export const partyTypeOptions = [
  { value: "princess", label: "Princess party" },
  { value: "hero", label: "Superhero party" },
  { value: "mascot", label: "Mascot visit" },
  { value: "rental", label: "Rental only" },
  { value: "combined", label: "Character + rental" },
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
    label: "Preferred character, mascot, or rental",
    kind: "text",
    required: true,
    width: "full",
    placeholder:
      "For example: Snowfall Princess, Skyline Hero, Storybook Mouse, or pink bounce house",
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
    placeholder: "For example: 4 or turning 5",
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
    placeholder:
      "Street, city, and any gate, suite, or parking notes we should know",
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
    placeholder:
      "Tell us about surprise timing, favorite characters, allergies, setup notes, or anything else that would help",
    autoComplete: "off",
  },
] as const;

export type InquiryFieldName = (typeof inquiryFormFields)[number]["name"];
