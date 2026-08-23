"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/i18n";
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
  const { t } = useLanguage();
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

    const result = validateQuote(values, {
      websiteTypes: t.form.websiteTypes,
      budgetRanges: t.form.budgetRanges,
      messages: t.form.errors,
    });
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
      <div className="rounded-2xl border border-white/10 bg-surface-2 p-10">
        <p className="eyebrow text-accent">{t.form.successEyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          {t.form.successTitle}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-cream/55">
          {t.form.successBody}
        </p>
        <div className="mt-8">
          <Button onClick={() => setStatus("idle")}>{t.form.sendAnother}</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-surface-2 p-8"
    >
      <div className="grid grid-cols-2 gap-5">
        <Field
          label={t.form.name}
          name="name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          required
        />
        <Field
          label={t.form.businessName}
          name="businessName"
          autoComplete="organization"
          value={values.businessName}
          error={errors.businessName}
          onChange={(value) => update("businessName", value)}
        />
        <Field
          label={t.form.email}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          required
        />
        <Field
          label={t.form.phone}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => update("phone", value)}
        />
        <SelectField
          label={t.form.websiteType}
          name="websiteType"
          value={values.websiteType}
          error={errors.websiteType}
          onChange={(value) => update("websiteType", value)}
          required
          placeholder={t.form.selectOption}
          options={t.form.websiteTypes}
        />
        <SelectField
          label={t.form.budget}
          name="budget"
          value={values.budget}
          error={errors.budget}
          onChange={(value) => update("budget", value)}
          required
          placeholder={t.form.selectOption}
          options={t.form.budgetRanges}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="project" className="text-sm font-medium text-cream">
          {t.form.project}
          <span className="text-muted"> *</span>
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
          placeholder={t.form.projectPlaceholder}
        />
        {errors.project ? (
          <p id="project-error" className="mt-2 text-sm text-red-400">
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
        <p className="mt-4 text-sm text-red-400" role="alert">
          {t.form.error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-row items-center gap-3">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? t.form.submitting : t.form.submit}
        </Button>
        <p className="text-xs leading-5 text-muted">{t.form.footerNote}</p>
      </div>
    </form>
  );
}

function fieldClass(invalid: boolean, extra?: string) {
  return cn(
    "w-full rounded-lg border bg-ink px-3.5 py-2.5 text-sm text-cream outline-none transition-colors placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent",
    invalid ? "border-red-400" : "border-white/10 focus-visible:border-accent/40",
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
      <label htmlFor={name} className="text-sm font-medium text-cream">
        {label}
        {required ? <span className="text-muted"> *</span> : null}
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
        <p id={errorId} className="mt-2 text-sm text-red-400">
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
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-cream">
        {label}
        {required ? <span className="text-muted"> *</span> : null}
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
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
