"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { brand } from "@/data/content";
import { SplitText } from "./SplitText";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

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

        {/* 4 contact cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-y border-gold-500/25 py-10">
          <ContactCard
            icon={MapPin}
            label="Visit"
            value={brand.address}
            delay={0}
          />
          <ContactCard
            icon={Phone}
            label="Call"
            value={brand.phone}
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            delay={0.08}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={brand.email}
            href={`mailto:${brand.email}`}
            delay={0.16}
          />
          <ContactCard
            icon={Globe}
            label="Web"
            value={brand.website}
            delay={0.24}
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
              have in mind and we'll send back a menu within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 grid gap-8"
          >
            <Field label="Your Name" name="name" required />
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Event Type" name="event" placeholder="Wedding, Corporate…" />
              <Field label="Guests (approx.)" name="guests" type="number" placeholder="150" />
            </div>
            <TextArea label="Tell us about your celebration" name="notes" />

            <button type="submit" className="btn-gold mt-4 self-start" disabled={sent}>
              {sent ? "Thank you — we'll be in touch ✦" : "Send Enquiry"}
            </button>
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
  delay,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  const Wrap = href ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Wrap
        href={href}
        className="group block relative py-2"
      >
        <div className="flex items-center gap-3 mb-6 text-gold-300">
          <Icon size={16} />
          <span className="font-sans text-[0.7rem] tracking-[0.45em] uppercase">
            {label}
          </span>
        </div>
        <div className="font-display text-lg md:text-xl text-cream-50 group-hover:text-gold-gradient transition-colors leading-snug">
          {value}
        </div>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-cream-50 text-lg placeholder:text-cream-50/30 focus:outline-none focus:border-gold-300 transition-colors"
      />
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-300 mb-3">
        {label}
      </span>
      <textarea
        name={name}
        rows={3}
        className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-cream-50 text-lg placeholder:text-cream-50/30 focus:outline-none focus:border-gold-300 transition-colors resize-none"
      />
    </label>
  );
}
