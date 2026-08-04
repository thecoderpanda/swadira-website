"use client";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import { SplitText } from "./SplitText";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-36 bg-ink-800 text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            What We Do
          </span>
        </div>

        <SplitText
          as="h2"
          from="up"
          className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-3xl"
          text="Catering for every celebration, big or small."
        />

        <p className="mt-6 max-w-2xl font-serif text-base md:text-lg text-cream-50/70 leading-relaxed">
          From a wedding of 2,000 guests to an intimate birthday dinner — we
          bring the same care, the same flavour, the same warmth.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-0 border-t border-gold-500/25">
          {services.map((s, i) => (
            <ServiceTile key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTile({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const borderClass =
    "border-b border-gold-500/25" +
    (index % 2 === 0 ? " md:border-r" : "");

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: (index % 2) * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden ${borderClass} py-10 md:py-14 px-2 md:px-8`}
    >
      {/* Hover fill sweep */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-br from-maroon-700 via-maroon-800 to-ink" />
      </div>

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-400 mb-3">
            {service.number}
          </div>

          <h3 className="font-display text-3xl md:text-4xl leading-tight text-cream-50 transition-transform duration-700 group-hover:translate-x-2">
            {service.title}
          </h3>

          <p className="mt-4 max-w-lg font-serif text-base text-cream-50/70 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            {service.desc}
          </p>
        </div>

        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:flex mt-2 h-11 w-11 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 group-hover:bg-gold-400 group-hover:text-ink group-hover:border-gold-400 transition-all duration-500"
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>
    </motion.a>
  );
}
