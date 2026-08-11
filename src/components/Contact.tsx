"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { brand } from "@/data/content";
import { SplitText } from "./SplitText";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  event: string;
  guests: string;
  notes: string;
};

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    event: "",
    guests: "",
    notes: "",
  });

  const onChange =
    <K extends keyof ContactForm>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Contact form", ...form }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data.error || "Failed to send");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Get in Touch
          </span>
        </div>

        <SplitText
          as="h2"
          from="up"
          className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-3xl"
          text="Tell us about your event. We'll take it from there."
        />

        {/* Contact cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-gold-500/25 py-10">
          <ContactCard
            icon={MapPin}
            label="Visit"
            value={brand.address}
            delay={0}
          />
          <ContactCard
            icon={Phone}
            label="Call"
            lines={brand.phones.map((p) => ({
              text: p,
              href: `tel:${p.replace(/\s/g, "")}`,
            }))}
            delay={0.08}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={brand.email}
            href={`mailto:${brand.email}`}
            delay={0.16}
          />
        </div>

        {/* Form */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="font-display italic text-2xl md:text-3xl text-gold-gradient leading-tight">
              Share a few details.
            </div>
            <p className="mt-5 font-serif text-base text-cream-50/80 leading-relaxed max-w-md">
              A wedding, an office lunch, a family birthday — tell us what you
              have in mind and we'll reply on WhatsApp within the hour.
            </p>

            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-gold-400/50 px-5 py-3 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            onSubmit={submit}
            className="lg:col-span-7 grid gap-8"
          >
            <Field
              label="Your Name"
              name="name"
              required
              value={form.name}
              onChange={onChange("name")}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <Field
                label="Phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={onChange("phone")}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Field
                label="Event Type"
                name="event"
                placeholder="Wedding, Corporate…"
                value={form.event}
                onChange={onChange("event")}
              />
              <Field
                label="Guests (approx.)"
                name="guests"
                type="number"
                placeholder="150"
                value={form.guests}
                onChange={onChange("guests")}
              />
            </div>
            <TextArea
              label="Tell us about your celebration"
              name="notes"
              value={form.notes}
              onChange={onChange("notes")}
            />

            <button
              type="submit"
              disabled={sending || sent}
              className="btn-gold mt-4 self-start inline-flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <MessageCircle size={16} />
              {sent
                ? "Enquiry sent ✦"
                : sending
                  ? "Sending…"
                  : "Send Enquiry"}
            </button>
            {error && (
              <div className="font-sans text-xs text-red-300/90 tracking-wider">
                {error}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  lines,
  delay,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value?: string;
  href?: string;
  lines?: { text: string; href?: string }[];
  delay: number;
}) {
  const Wrap = href && !lines ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Wrap href={lines ? undefined : href} className="group block relative py-2">
        <div className="flex items-center gap-3 mb-6 text-gold-300">
          <Icon size={16} />
          <span className="font-sans text-[0.7rem] tracking-[0.45em] uppercase">
            {label}
          </span>
        </div>
        {lines ? (
          <div className="flex flex-col gap-2">
            {lines.map((l) =>
              l.href ? (
                <a
                  key={l.text}
                  href={l.href}
                  className="font-display text-lg md:text-xl text-cream-50 hover:text-gold-gradient transition-colors leading-snug"
                >
                  {l.text}
                </a>
              ) : (
                <span
                  key={l.text}
                  className="font-display text-lg md:text-xl text-cream-50 leading-snug"
                >
                  {l.text}
                </span>
              ),
            )}
          </div>
        ) : (
          <div className="font-display text-base sm:text-lg md:text-xl text-cream-50 group-hover:text-gold-gradient transition-colors leading-snug break-words">
            {value}
          </div>
        )}
      </Wrap>
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block group">
      <span className="block font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-300 mb-3">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-cream-50 text-lg placeholder:text-cream-50/30 focus:outline-none focus:border-gold-300 transition-colors"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <label className="block">
      <span className="block font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-300 mb-3">
        {label}
      </span>
      <textarea
        name={name}
        rows={3}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-cream-50 text-lg placeholder:text-cream-50/30 focus:outline-none focus:border-gold-300 transition-colors resize-none"
      />
    </label>
  );
}
