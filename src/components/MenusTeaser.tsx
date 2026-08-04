"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { menuCategories } from "@/data/content";
import { SplitText } from "./SplitText";
import { ArrowUpRight } from "lucide-react";

export function MenusTeaser() {
  const featured = menuCategories.slice(0, 4);

  return (
    <section
      id="menus"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,134,58,0.15) 0%, rgba(11,5,7,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Our Menus
          </span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6">
          <SplitText
            as="h2"
            from="up"
            className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-2xl"
            text="Menus, curated for every celebration."
          />
          <Link
            href="/menus"
            className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-gold-300 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
          >
            View All Menus
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <p className="mt-6 max-w-2xl font-serif text-base md:text-lg text-cream-50/70 leading-relaxed">
          We don't hand out one-size-fits-all price lists. Every menu is
          personally curated by Sanjay ji and his team — request a sample
          below, and we'll design a proposal around your event.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: (i % 2) * 0.1,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden border border-gold-500/20 hover:border-gold-400/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8 -mt-24 z-10">
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-2">
                  {cat.number} · {cat.kicker}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-cream-50 leading-tight">
                  {cat.title}
                </h3>
                <p className="mt-3 font-serif text-sm md:text-base text-cream-50/75 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-6 flex items-center gap-6">
                  <Link
                    href="/menus"
                    className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 hover:text-gold-400 transition inline-flex items-center gap-2 group/link"
                  >
                    Sample Menu
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                  <Link
                    href="/build-your-menu"
                    className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-cream-50/70 hover:text-gold-300 transition"
                  >
                    Plan Event →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Link href="/menus" className="btn-gold">
            Explore All 8 Menu Categories
          </Link>
          <Link href="/build-your-menu" className="btn-ghost">
            Build Your Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
