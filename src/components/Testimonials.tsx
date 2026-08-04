"use client";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, stats } from "@/data/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const t = testimonials[i];

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + testimonials.length) % testimonials.length);
  };
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setI((v) => (v + 1) % testimonials.length);
    }, 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="voices"
      className="relative py-24 md:py-36 bg-ink-800 text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(184,134,58,0.35) 0%, rgba(11,5,7,0) 70%)",
        }}
      />

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

        {/* Header */}
        <div className="mt-20 flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Voices from our Guests
          </span>
        </div>

        {/* Image + Quote carousel */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image side */}
          <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden border border-gold-500/25">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`img-${i}`}
                custom={dir}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Frame accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-4 border border-gold-400/30"
            />
            <div className="absolute top-4 left-4 font-sans text-[0.55rem] tracking-[0.4em] uppercase text-gold-300 bg-ink/70 backdrop-blur px-3 py-1.5 border border-gold-500/30">
              0{i + 1} / 0{testimonials.length}
            </div>
          </div>

          {/* Quote side */}
          <div className="md:col-span-7 relative min-h-[280px]">
            <Quote
              size={40}
              className="text-gold-400/60 mb-4"
              strokeWidth={1}
            />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`q-${i}`}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -dir * 40, filter: "blur(6px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="font-display italic text-xl md:text-3xl leading-snug text-cream-50">
                  "{t.quote}"
                </blockquote>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-gold-400" />
                  <div>
                    <div className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-gold-300">
                      {t.name}
                    </div>
                    <div className="mt-1 font-serif text-cream-50/60 text-sm">
                      {t.role}
                    </div>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="h-11 w-11 inline-flex items-center justify-center border border-gold-500/40 text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="h-11 w-11 inline-flex items-center justify-center border border-gold-500/40 text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => go(idx)}
                    aria-label={`Voice ${idx + 1}`}
                    className={`h-[2px] transition-all duration-500 ${
                      idx === i ? "w-12 bg-gold-400" : "w-5 bg-gold-500/30"
                    }`}
                  />
                ))}
              </div>
            </div>
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
