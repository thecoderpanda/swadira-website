import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  source?: string;
  name?: string;
  phone?: string;
  email?: string;
  event?: string;
  guests?: string;
  cuisines?: string[];
  date?: string;
  notes?: string;
};

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ENQUIRY_TO || "psnaidu0811@gmail.com";
    const from = process.env.ENQUIRY_FROM || "SwadIra <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#666;font-family:Georgia,serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;width:150px;vertical-align:top;">${esc(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#111;font-family:Georgia,serif;font-size:15px;">${esc(value || "—")}</td>
      </tr>`;

    const html = `
    <div style="background:#f6f4ef;padding:32px 0;font-family:Georgia,serif;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#fff;border:1px solid #e6e1d5;">
        <tr>
          <td style="padding:28px 28px 8px;text-align:center;background:#0b0507;color:#e6c98a;font-family:Georgia,serif;">
            <div style="font-size:11px;letter-spacing:.5em;text-transform:uppercase;color:#c9a24a;">SwadIra · New Enquiry</div>
            <div style="font-size:22px;margin-top:8px;color:#f4ead2;">${esc(body.source || "Website enquiry")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("Name", body.name || "")}
              ${row("Phone", body.phone || "")}
              ${row("Email", body.email || "")}
              ${row("Event", body.event || "")}
              ${body.cuisines?.length ? row("Cuisines", body.cuisines.join(", ")) : ""}
              ${row("Guests", body.guests || "")}
              ${body.date ? row("Date", body.date) : ""}
              ${row("Notes", body.notes || "")}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 28px;background:#faf7ef;color:#7a6f57;font-family:Georgia,serif;font-size:12px;text-align:center;">
            Sent from swaadira.com · Reply directly to reach the customer.
          </td>
        </tr>
      </table>
    </div>`;

    const text = [
      `New enquiry — SwadIra website`,
      body.source ? `(${body.source})` : "",
      ``,
      `Name: ${body.name || "—"}`,
      `Phone: ${body.phone || "—"}`,
      `Email: ${body.email || "—"}`,
      `Event: ${body.event || "—"}`,
      body.cuisines?.length ? `Cuisines: ${body.cuisines.join(", ")}` : "",
      `Guests: ${body.guests || "—"}`,
      body.date ? `Date: ${body.date}` : "",
      ``,
      `Notes:`,
      body.notes || "—",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `New enquiry · ${body.name || "Unknown"}${
      body.event ? ` · ${body.event}` : ""
    }`;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo: body.email || undefined,
    });

    if (result.error) {
      return NextResponse.json(
        { ok: false, error: result.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
