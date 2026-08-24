import { budgetRanges, websiteTypes } from "@/lib/site";

export type QuotePayload = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  websiteType: string;
  currentWebsite: string;
  budget: string;
  timeline: string;
  project: string;
};

type ValidateOptions = {
  websiteTypes?: readonly string[];
  budgetRanges?: readonly string[];
  timelines?: readonly string[];
  messages?: {
    name?: string;
    nameTooLong?: string;
    businessNameTooLong?: string;
    email?: string;
    phoneTooLong?: string;
    websiteType?: string;
    currentWebsiteTooLong?: string;
    budget?: string;
    timelineTooLong?: string;
    project?: string;
    projectTooLong?: string;
  };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuote(input: Partial<QuotePayload>, options?: ValidateOptions) {
  const errors: Partial<Record<keyof QuotePayload, string>> = {};
  const types = options?.websiteTypes ?? websiteTypes;
  const ranges = options?.budgetRanges ?? budgetRanges;
  const messages = options?.messages ?? {};

  const name = input.name?.trim() ?? "";
  const businessName = input.businessName?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const websiteType = input.websiteType?.trim() ?? "";
  const currentWebsite = input.currentWebsite?.trim() ?? "";
  const budget = input.budget?.trim() ?? "";
  const timeline = input.timeline?.trim() ?? "";
  const project = input.project?.trim() ?? "";

  if (name.length < 2) errors.name = messages.name ?? "Please enter your name.";
  if (name.length > 80) errors.name = messages.nameTooLong ?? "Name is too long.";

  if (businessName.length > 120) {
    errors.businessName = messages.businessNameTooLong ?? "Business name is too long.";
  }

  if (!emailPattern.test(email)) {
    errors.email = messages.email ?? "Please enter a valid email.";
  }

  if (phone.length > 40) errors.phone = messages.phoneTooLong ?? "Phone number is too long.";

  if (!types.includes(websiteType)) {
    errors.websiteType = messages.websiteType ?? "Please choose a website type.";
  }

  if (currentWebsite.length > 200) {
    errors.currentWebsite =
      messages.currentWebsiteTooLong ?? "Website URL is too long.";
  }

  if (!ranges.includes(budget)) {
    errors.budget = messages.budget ?? "Please choose a budget range.";
  }

  if (timeline.length > 80) {
    errors.timeline = messages.timelineTooLong ?? "Timeline is too long.";
  }

  if (project.length < 10) {
    errors.project = messages.project ?? "Please tell us a little more about your project.";
  }
  if (project.length > 2000) {
    errors.project = messages.projectTooLong ?? "Please keep this under 2,000 characters.";
  }

  const data: QuotePayload = {
    name,
    businessName,
    email,
    phone,
    websiteType,
    currentWebsite,
    budget,
    timeline,
    project,
  };

  return { data, errors, ok: Object.keys(errors).length === 0 };
}
