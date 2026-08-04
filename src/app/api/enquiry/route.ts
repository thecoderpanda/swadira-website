import { NextResponse } from "next/server";
import twilio from "twilio";

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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_WHATSAPP_FROM;
    const to = process.env.WHATSAPP_TO;

    if (!sid || !token || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Missing Twilio env vars" },
        { status: 500 },
      );
    }

    const lines = [
      `*New enquiry — SwadIra website*`,
      body.source ? `_${body.source}_` : "",
      ``,
      `*Name:* ${body.name || "—"}`,
      `*Phone:* ${body.phone || "—"}`,
      `*Email:* ${body.email || "—"}`,
      `*Event:* ${body.event || "—"}`,
      body.cuisines?.length ? `*Cuisines:* ${body.cuisines.join(", ")}` : "",
      `*Guests:* ${body.guests || "—"}`,
      body.date ? `*Date:* ${body.date}` : "",
      ``,
      `*Notes:*`,
      body.notes || "—",
    ]
      .filter(Boolean)
      .join("\n");

    const client = twilio(sid, token);
    await client.messages.create({
      from,
      to,
      body: lines,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
