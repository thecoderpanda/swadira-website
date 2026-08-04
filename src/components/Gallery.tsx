"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/content";
import { SplitText } from "./SplitText";

export function Gallery() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const item = gallery[i];

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + gallery.length) % gallery.length);
  };
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setI((v) => (v + 1) % gallery.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,134,58,0.3) 0%, rgba(11,5,7,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-14">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold-400" />
              <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
                Our Work
              </span>
            </div>
            <SplitText
              as="h2"
              from="up"
              className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-2xl"
              text="A few moments from our kitchen."
            />
          </div>
          <div className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-300">
            0{i + 1} / 0{gallery.length}
          </div>
        </div>

        {/* Carousel stage */}
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          {/* Big image */}
          <div className="lg:col-span-9 relative aspect-[16/10] overflow-hidden border border-gold-500/25 bg-ink-800">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={item.src}
                custom={dir}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Frame accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-4 border border-gold-400/25"
            />

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cap-${item.src}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  delay: 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-x-6 md:inset-x-10 bottom-6 md:bottom-10"
              >
                <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-3">
                  {item.tag}
                </div>
                <div className="font-display text-2xl md:text-4xl text-cream-50 leading-tight max-w-2xl">
                  {item.title}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev/next overlay */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prev}
                aria-label="Previous"
                className="ml-3 md:ml-5 h-12 w-12 inline-flex items-center justify-center border border-gold-500/40 bg-ink/50 backdrop-blur text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={next}
                aria-label="Next"
                className="mr-3 md:mr-5 h-12 w-12 inline-flex items-center justify-center border border-gold-500/40 bg-ink/50 backdrop-blur text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
              {gallery.map((g, idx) => (
                <button
                  key={g.src}
                  onClick={() => go(idx)}
                  aria-label={g.title}
                  className={`group relative aspect-square overflow-hidden border transition-all duration-500 ${
                    idx === i
                      ? "border-gold-400 opacity-100"
                      : "border-gold-500/20 opacity-60 hover:opacity-100 hover:border-gold-400/60"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  {idx === i && (
                    <motion.div
                      layoutId="gallery-active"
                      className="absolute inset-0 border border-gold-400"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bars */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                idx === i ? "w-14 bg-gold-400" : "w-6 bg-gold-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
