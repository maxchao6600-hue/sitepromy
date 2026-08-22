"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { budgetRanges, websiteTypes } from "@/lib/site";
import { validateQuote, type QuotePayload } from "@/lib/quote";

const initial: QuotePayload = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  websiteType: "",
  budget: "",
  project: "",
};

export function QuoteForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof QuotePayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof QuotePayload>(key: K, value: QuotePayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return;

    const result = validateQuote(values);
    setErrors(result.errors);
    if (!result.ok) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/10 bg-white p-8 sm:p-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent-ink">
          Request received
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Thanks — we&apos;ll take a look.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink/65">
          We&apos;ll review your project details and follow up using the email you
          provided. If you&apos;d like to add anything, you can send another
          request below.
        </p>
        <div className="mt-8">
          <Button tone="light" onClick={() => setStatus("idle")}>
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          required
        />
        <Field
          label="Business name"
          name="businessName"
          autoComplete="organization"
          value={values.businessName}
          error={errors.businessName}
          onChange={(value) => update("businessName", value)}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          required
        />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => update("phone", value)}
        />
        <SelectField
          label="Website type"
          name="websiteType"
          value={values.websiteType}
          error={errors.websiteType}
          onChange={(value) => update("websiteType", value)}
          required
          options={websiteTypes}
        />
        <SelectField
          label="Budget range"
          name="budget"
          value={values.budget}
          error={errors.budget}
          onChange={(value) => update("budget", value)}
          required
          options={budgetRanges}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="project" className="text-sm font-medium text-ink">
          Tell us about your project
          <span className="text-ink/40"> *</span>
        </label>
        <textarea
          id="project"
          name="project"
          rows={6}
          value={values.project}
          onChange={(event) => update("project", event.target.value)}
          aria-invalid={Boolean(errors.project)}
          aria-describedby={errors.project ? "project-error" : undefined}
          className={fieldClass(Boolean(errors.project), "mt-2 min-h-32 resize-y")}
          placeholder="What does your business do, and what do you want the website to achieve?"
        />
        {errors.project ? (
          <p id="project-error" className="mt-2 text-sm text-red-700">
            {errors.project}
          </p>
        ) : null}
      </div>

      <p className="hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </p>

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          Something went wrong sending your request. Please try again in a
          moment.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" tone="light" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Get My Free Quote"}
        </Button>
        <p className="text-xs leading-5 text-ink/50">
          No obligation. We&apos;ll reply with a suitable next step.
        </p>
      </div>
    </form>
  );
}

function fieldClass(invalid: boolean, extra?: string) {
  return cn(
    "w-full rounded-lg border bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus-visible:ring-2 focus-visible:ring-accent",
    invalid ? "border-red-400" : "border-ink/12 focus-visible:border-ink/30",
    extra,
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-ink/40"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass(Boolean(error), "mt-2")}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: readonly string[];
  required?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-ink/40"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass(Boolean(error), "mt-2")}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
