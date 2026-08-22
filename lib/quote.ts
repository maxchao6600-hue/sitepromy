import { budgetRanges, websiteTypes } from "@/lib/site";

export type QuotePayload = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  websiteType: string;
  budget: string;
  project: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuote(input: Partial<QuotePayload>) {
  const errors: Partial<Record<keyof QuotePayload, string>> = {};

  const name = input.name?.trim() ?? "";
  const businessName = input.businessName?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const websiteType = input.websiteType?.trim() ?? "";
  const budget = input.budget?.trim() ?? "";
  const project = input.project?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name.";
  if (name.length > 80) errors.name = "Name is too long.";

  if (businessName.length > 120) {
    errors.businessName = "Business name is too long.";
  }

  if (!emailPattern.test(email)) errors.email = "Please enter a valid email.";

  if (phone.length > 40) errors.phone = "Phone number is too long.";

  if (!websiteTypes.includes(websiteType as (typeof websiteTypes)[number])) {
    errors.websiteType = "Please choose a website type.";
  }

  if (!budgetRanges.includes(budget as (typeof budgetRanges)[number])) {
    errors.budget = "Please choose a budget range.";
  }

  if (project.length < 10) {
    errors.project = "Please tell us a little more about your project.";
  }
  if (project.length > 2000) {
    errors.project = "Please keep this under 2,000 characters.";
  }

  const data: QuotePayload = {
    name,
    businessName,
    email,
    phone,
    websiteType,
    budget,
    project,
  };

  return { data, errors, ok: Object.keys(errors).length === 0 };
}
