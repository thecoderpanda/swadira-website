"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { darbar } from "@/data/content";
import { SplitText } from "./SplitText";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Darbar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <section
      ref={ref}
      id="darbar"
      className="relative py-24 md:py-36 overflow-hidden text-cream-50"
    >
      {/* Second red wedding video background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/wedding-2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,5,7,0.92) 0%, rgba(48,9,16,0.85) 45%, rgba(11,5,7,0.96) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-[1] bg-noise opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-14">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold-400" />
              <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
                Our Restaurant
              </span>
            </div>

            <div className="font-devanagari text-2xl md:text-3xl text-gold-gradient mb-4">
              दरबार
            </div>

            <SplitText
              as="h2"
              from="up"
              className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-2xl"
              text={darbar.tagline}
            />

            <p className="mt-8 max-w-xl font-serif text-base md:text-lg text-cream-50/80 leading-relaxed">
              {darbar.body}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-300 mt-1" />
                <div>
                  <div className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 mb-1">
                    Location
                  </div>
                  <div className="font-serif text-cream-50/85">
                    {darbar.location}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold-300 mt-1" />
                <div>
                  <div className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 mb-1">
                    Hours
                  </div>
                  <div className="font-serif text-cream-50/85">
                    {darbar.hours}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#contact" className="btn-gold">
                {darbar.cta}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="relative rounded-2xl border border-gold-500/25 bg-ink/60 backdrop-blur-md p-8 md:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl"
              />
              <div className="relative">
                <div className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-300">
                  On the menu tonight
                </div>
                <ul className="mt-6 divide-y divide-gold-500/15">
                  {[
                    { d: "Saoji Mutton", p: "Vidarbha classic" },
                    { d: "Dum Awadhi Biryani", p: "Slow-sealed pot" },
                    { d: "Kakori Kebab", p: "Live tandoor" },
                    { d: "Dal Bukhara", p: "Simmered overnight" },
                    { d: "Puran Poli & Basundi", p: "House dessert" },
                  ].map((it) => (
                    <li
                      key={it.d}
                      className="py-4 flex items-baseline justify-between gap-4"
                    >
                      <span className="font-display text-lg md:text-xl text-cream-50">
                        {it.d}
                      </span>
                      <span className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-gold-300 text-right">
                        {it.p}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-gold-300 group cursor-pointer">
                  <span className="font-sans text-[0.65rem] tracking-[0.4em] uppercase">
                    View Full Menu
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
