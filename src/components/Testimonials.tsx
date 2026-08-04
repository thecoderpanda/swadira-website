"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { testimonials, stats } from "@/data/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="voices"
      className="relative py-24 md:py-36 bg-ink-800 text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      {/* Soft background quotation mark */}
      <div
        aria-hidden
        className="absolute -top-10 left-4 md:left-14 pointer-events-none opacity-[0.06]"
      >
        <span className="font-display text-[20vw] leading-none text-gold-400">
          "
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        {/* Stats counter row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-y border-gold-500/25 py-10">
          {stats.map((s, idx) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold-400" />
            <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
              Kind Words
            </span>
          </div>

          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-xl md:text-3xl leading-snug text-cream-50 max-w-4xl"
          >
            "{t.quote}"
          </motion.blockquote>

          <motion.footer
            key={`f-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gold-400" />
            <div>
              <div className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-gold-300">
                {t.name}
              </div>
              <div className="mt-1 font-serif text-cream-50/60 text-sm">
                {t.role}
              </div>
            </div>
          </motion.footer>

          <div className="mt-8 flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Voice ${idx + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  idx === i ? "w-12 bg-gold-400" : "w-5 bg-gold-500/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl md:text-6xl leading-none text-gold-gradient">
        {n.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-3 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-cream-50/60">
        {label}
      </div>
    </div>
  );
}
