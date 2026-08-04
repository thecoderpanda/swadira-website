"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { menuCategories } from "@/data/content";
import { SplitText } from "@/components/SplitText";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function MenusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden bg-ink text-cream-50">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,5,7,0.85) 0%, rgba(48,9,16,0.7) 50%, rgba(11,5,7,0.98) 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-14 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-gold-400" />
            <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
              The SwadIra Menus
            </span>
          </motion.div>

          <SplitText
            as="h1"
            from="up"
            className="font-display text-4xl md:text-7xl leading-[1.05] text-cream-50 max-w-4xl"
            text="Every menu, personally curated."
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-8 max-w-2xl font-serif text-base md:text-lg text-cream-50/80 leading-relaxed"
          >
            Eight thoughtfully composed menu categories — from wedding thalis
            to boardroom platters. Every event is different, so every menu is
            tailored. Below is a taste of what we cook. For the full master
            menu book and pricing, request a personalised proposal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/build-your-menu" className="btn-gold">
              Build Your Menu
            </Link>
            <a href="#menus-grid" className="btn-ghost">
              Browse Categories
            </a>
          </motion.div>

          <motion.a
            href="#menus-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 inline-flex items-center gap-3 text-gold-300"
          >
            <span className="font-sans text-[0.6rem] tracking-[0.5em] uppercase">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={12} />
            </motion.span>
          </motion.a>
        </div>
      </section>

      {/* Grid */}
      <section
        id="menus-grid"
        className="relative py-24 md:py-32 bg-ink-800 text-cream-50 overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuCategories.map((cat, i) => (
              <motion.article
                key={cat.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: (i % 3) * 0.08,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden border border-gold-500/20 hover:border-gold-400/60 bg-ink transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute top-4 left-4 font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 bg-ink/70 backdrop-blur-md px-3 py-1.5 border border-gold-500/30">
                    {cat.number}
                  </div>
                </div>

                <div className="relative p-6 md:p-8">
                  <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                    {cat.kicker}
                  </div>
                  <h3 className="font-display text-2xl text-cream-50 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-3 font-serif text-sm text-cream-50/70 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-gold-500/20">
                    <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-400/80 mb-3">
                      Sample Dishes
                    </div>
                    <ul className="space-y-1.5 font-serif text-sm text-cream-50/80">
                      {cat.samples.map((s) => (
                        <li
                          key={s}
                          className="flex items-baseline gap-2 before:content-['✦'] before:text-gold-400 before:text-[0.6rem]"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <Link
                      href="/build-your-menu"
                      className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 hover:text-gold-400 transition inline-flex items-center gap-2 group/link"
                    >
                      Request Full Menu
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-24 md:py-32 bg-ink text-cream-50 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(184,134,58,0.18) 0%, rgba(11,5,7,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 md:px-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
              A Curated Proposal
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <SplitText
            as="h2"
            from="up"
            className="font-display text-3xl md:text-5xl leading-tight text-cream-50"
            text="Tell us about your event. We'll design the menu."
          />
          <p className="mt-6 font-serif text-base md:text-lg text-cream-50/75 leading-relaxed max-w-2xl mx-auto">
            Skip the guesswork. Answer four short questions and we'll send
            you a personalised proposal — with a sample master menu and
            tailored pricing for your guest count.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/build-your-menu" className="btn-gold">
              Start Your Proposal
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Speak to the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
