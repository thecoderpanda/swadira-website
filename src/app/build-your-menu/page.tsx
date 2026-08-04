"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { eventTypes, cuisineOptions, brand } from "@/data/content";
import { SplitText } from "@/components/SplitText";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

type FormState = {
  event: string;
  cuisines: string[];
  guests: string;
  date: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const STEPS = ["Event", "Cuisine", "Guests", "Details", "Sent"] as const;

export default function BuildYourMenuPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    event: "",
    cuisines: [],
    guests: "",
    date: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const canAdvance =
    (step === 0 && form.event) ||
    (step === 1 && form.cuisines.length > 0) ||
    (step === 2 && Number(form.guests) > 0) ||
    (step === 3 && form.name && form.phone);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const toggleCuisine = (c: string) =>
    setForm((f) => ({
      ...f,
      cuisines: f.cuisines.includes(c)
        ? f.cuisines.filter((x) => x !== c)
        : [...f.cuisines, c],
    }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <section className="relative min-h-screen bg-ink text-cream-50 overflow-hidden">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,5,7,0.92) 0%, rgba(48,9,16,0.82) 50%, rgba(11,5,7,0.98) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-14 pt-32 pb-24">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
              Build Your Menu
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <SplitText
            as="h1"
            from="up"
            className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-3xl mx-auto"
            text="Design your celebration in four steps."
          />
          <p className="mt-6 font-serif text-base md:text-lg text-cream-50/75 max-w-2xl mx-auto leading-relaxed">
            Tell us what you're planning. We'll send back a curated proposal
            — sample menu, pricing and a call from Sanjay ji himself.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-14 grid grid-cols-4 gap-3">
          {STEPS.slice(0, 4).map((label, i) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="h-[3px] w-full bg-cream-50/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-400 to-gold-300"
                  initial={{ width: "0%" }}
                  animate={{
                    width: i < step ? "100%" : i === step ? "60%" : "0%",
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-sans text-[0.55rem] tracking-[0.35em] uppercase transition ${
                    i <= step ? "text-gold-300" : "text-cream-50/40"
                  }`}
                >
                  0{i + 1} · {label}
                </span>
                {i < step && (
                  <Check size={11} className="text-gold-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="mt-12 relative border border-gold-500/25 bg-ink/60 backdrop-blur-md p-8 md:p-12 min-h-[420px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                  Step 01
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                  What are we celebrating?
                </h2>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {eventTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, event: t }))}
                      className={`px-4 py-6 border text-left transition-all duration-300 hover:-translate-y-0.5 ${
                        form.event === t
                          ? "border-gold-400 bg-gold-400/10 text-gold-300"
                          : "border-gold-500/25 text-cream-50/85 hover:border-gold-400/60 hover:text-gold-300"
                      }`}
                    >
                      <div className="font-display text-base md:text-lg leading-tight">
                        {t}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                  Step 02
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                  Which cuisines call to you?
                </h2>
                <p className="mt-3 font-serif text-sm text-cream-50/65">
                  Pick as many as you like.
                </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {cuisineOptions.map((c) => {
                    const active = form.cuisines.includes(c);
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleCuisine(c)}
                        className={`relative px-4 py-6 border text-left transition-all duration-300 hover:-translate-y-0.5 ${
                          active
                            ? "border-gold-400 bg-gold-400/10 text-gold-300"
                            : "border-gold-500/25 text-cream-50/85 hover:border-gold-400/60 hover:text-gold-300"
                        }`}
                      >
                        <div className="font-display text-base md:text-lg leading-tight">
                          {c}
                        </div>
                        {active && (
                          <Check
                            size={14}
                            className="absolute top-3 right-3 text-gold-400"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                  Step 03
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                  How many will we be feeding?
                </h2>
                <div className="mt-10 grid md:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="block font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                      Approx. Guest Count
                    </span>
                    <input
                      type="number"
                      min={1}
                      value={form.guests}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, guests: e.target.value }))
                      }
                      placeholder="e.g. 350"
                      className="w-full bg-transparent border-b border-gold-500/40 py-3 font-display text-3xl md:text-4xl text-cream-50 placeholder:text-cream-50/25 focus:outline-none focus:border-gold-300 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                      Event Date (optional)
                    </span>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, date: e.target.value }))
                      }
                      className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-lg text-cream-50 focus:outline-none focus:border-gold-300 transition-colors"
                    />
                  </label>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {[100, 250, 500, 1000, 2500].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({ ...f, guests: String(n) }))
                      }
                      className="px-4 py-2 border border-gold-500/25 hover:border-gold-400 font-sans text-[0.6rem] tracking-[0.35em] uppercase text-cream-50/75 hover:text-gold-300 transition"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step3"
                onSubmit={submit}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                  Step 04
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                  Where should we send your proposal?
                </h2>
                <div className="mt-8 grid gap-6">
                  <TextField
                    label="Your Name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    required
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <TextField
                      label="Phone"
                      value={form.phone}
                      type="tel"
                      onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                      required
                    />
                    <TextField
                      label="Email"
                      value={form.email}
                      type="email"
                      onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    />
                  </div>
                  <label className="block">
                    <span className="block font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                      Anything else we should know?
                    </span>
                    <textarea
                      value={form.notes}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, notes: e.target.value }))
                      }
                      rows={3}
                      className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-cream-50 text-base placeholder:text-cream-50/25 focus:outline-none focus:border-gold-300 transition-colors resize-none"
                      placeholder="Live counters, dietary preferences, venue…"
                    />
                  </label>
                </div>

                {/* Recap */}
                <div className="mt-10 p-5 border border-gold-500/20 bg-ink/40">
                  <div className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-gold-400 mb-3">
                    Your Proposal Brief
                  </div>
                  <ul className="font-serif text-sm text-cream-50/85 space-y-1.5">
                    <li>
                      <span className="text-cream-50/50">Event:</span>{" "}
                      {form.event || "—"}
                    </li>
                    <li>
                      <span className="text-cream-50/50">Cuisines:</span>{" "}
                      {form.cuisines.join(", ") || "—"}
                    </li>
                    <li>
                      <span className="text-cream-50/50">Guests:</span>{" "}
                      {form.guests || "—"}
                    </li>
                    {form.date && (
                      <li>
                        <span className="text-cream-50/50">Date:</span>{" "}
                        {form.date}
                      </li>
                    )}
                  </ul>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-8"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-400 text-gold-300 mb-6">
                  <Check size={28} />
                </div>
                <SplitText
                  as="h2"
                  from="up"
                  className="font-display text-3xl md:text-4xl text-cream-50 leading-tight"
                  text="Thank you — your brief is with us."
                />
                <p className="mt-6 font-serif text-base md:text-lg text-cream-50/80 max-w-xl mx-auto leading-relaxed">
                  Sanjay ji or a senior member of the SwadIra team will call
                  you within 24 hours with a personalised master menu and
                  proposal.
                </p>
                <div className="mt-8 font-serif text-sm text-cream-50/60">
                  Need us sooner?{" "}
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="text-gold-300 hover:text-gold-400 transition"
                  >
                    {brand.phone}
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link href="/" className="btn-gold">
                    Back to Home
                  </Link>
                  <Link href="/menus" className="btn-ghost">
                    Browse Menus
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav */}
        {step < 4 && (
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={step === 0}
              className="inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-cream-50/70 hover:text-gold-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ArrowLeft size={14} />
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canAdvance}
                className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                Continue
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={!canAdvance}
                className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                Send My Brief
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
        {label}
        {required && <span className="text-gold-400/60"> ·</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-gold-500/40 py-3 font-serif text-lg text-cream-50 placeholder:text-cream-50/25 focus:outline-none focus:border-gold-300 transition-colors"
      />
    </label>
  );
}
