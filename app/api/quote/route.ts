import { NextResponse } from "next/server";
import { validateQuote } from "@/lib/quote";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const result = validateQuote(body as Record<string, string>);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  // Email / CRM integration point.
  // When ready, send `result.data` with Resend, Nodemailer, or a webhook.
  if (process.env.QUOTE_WEBHOOK_URL) {
    const webhook = await fetch(process.env.QUOTE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    if (!webhook.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not deliver quote request." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
