"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { menuCategories } from "@/data/content";
import { SplitText } from "./SplitText";

export function MenuSelection() {
  const [active, setActive] = useState(0);
  const cat = menuCategories[active];

  return (
    <section
      id="menu-selection"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,58,0.35) 0%, rgba(11,5,7,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold-400" />
              <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
                Curated Menus
              </span>
            </div>
            <SplitText
              as="h2"
              from="up"
              className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-2xl"
              text="Eight menus. One kitchen. Your event."
            />
            <p className="mt-6 max-w-xl font-serif text-base md:text-lg text-cream-50/70 leading-relaxed">
              Every event is different, so every menu is tailored. Pick a
              category to preview signature dishes — then request a
              personalised proposal.
            </p>
          </div>
          <Link
            href="/menus"
            className="inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.4em] uppercase text-gold-300 hover:text-gold-400 transition group whitespace-nowrap"
          >
            View All Menus
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Selector */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Category list */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex flex-col divide-y divide-gold-500/15 border-y border-gold-500/15">
              {menuCategories.map((c, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setActive(idx)}
                    className={`group relative flex items-center justify-between gap-4 py-4 md:py-5 px-1 text-left transition-all duration-500 ${
                      isActive
                        ? "text-gold-300"
                        : "text-cream-50/70 hover:text-cream-50"
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-sans text-[0.6rem] tracking-[0.35em] transition-colors ${
                          isActive ? "text-gold-400" : "text-cream-50/40"
                        }`}
                      >
                        {c.number}
                      </span>
                      <span className="font-display text-lg md:text-xl leading-tight">
                        {c.title}
                      </span>
                    </span>
                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -6,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-gold-400 shrink-0"
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                    {isActive && (
                      <motion.span
                        layoutId="menu-active-bar"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[2px] bg-gold-400"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preview card */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden border border-gold-500/25 bg-ink-800"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink-800/60 via-ink/20 to-transparent md:bg-gradient-to-l md:from-ink-800 md:via-ink-800/40 md:to-transparent" />
                    <div className="absolute top-4 left-4 font-sans text-[0.55rem] tracking-[0.4em] uppercase text-gold-300 bg-ink/70 backdrop-blur px-3 py-1.5 border border-gold-500/30">
                      {cat.number}
                    </div>
                  </div>

                  <div className="relative p-8 md:p-10 flex flex-col">
                    <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-400 mb-3">
                      {cat.kicker}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="mt-4 font-serif text-[15px] text-cream-50/75 leading-relaxed">
                      {cat.desc}
                    </p>

                    <div className="mt-6 pt-5 border-t border-gold-500/20">
                      <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-400/80 mb-3">
                        Sample Dishes
                      </div>
                      <ul className="space-y-2 font-serif text-sm text-cream-50/85">
                        {cat.samples.map((s, sIdx) => (
                          <motion.li
                            key={s}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.15 + sIdx * 0.06,
                              duration: 0.6,
                            }}
                            className="flex items-baseline gap-3 before:content-['✦'] before:text-gold-400 before:text-[0.6rem]"
                          >
                            {s}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link href="/build-your-menu" className="btn-gold">
                        Request Full Menu
                      </Link>
                      <Link
                        href="/menus"
                        className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 hover:text-gold-400 transition inline-flex items-center gap-2 group"
                      >
                        View Sample
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
