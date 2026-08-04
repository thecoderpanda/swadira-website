"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { darbar } from "@/data/content";
import { SplitText } from "./SplitText";
import { MapPin, Clock } from "lucide-react";

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
      className="relative py-32 md:py-48 overflow-hidden text-cream-50"
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Our Restaurant
          </span>
          <span className="h-px w-12 bg-gold-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-devanagari text-6xl md:text-8xl lg:text-9xl text-gold-gradient leading-none mb-8"
        >
          दरबार
        </motion.div>

        <SplitText
          as="h2"
          from="up"
          className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream-50 max-w-4xl mx-auto"
          text="Darbar Restaurant"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 font-serif italic text-xl md:text-2xl text-gold-300 max-w-3xl mx-auto"
        >
          {darbar.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-8 max-w-3xl mx-auto font-serif text-lg md:text-xl text-cream-50/85 leading-relaxed"
        >
          {darbar.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16"
        >
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-gold-300 mt-1" />
            <div className="text-left">
              <div className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 mb-1">
                Location
              </div>
              <div className="font-serif text-cream-50/90 text-lg">
                {darbar.location}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-gold-300 mt-1" />
            <div className="text-left">
              <div className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 mb-1">
                Hours
              </div>
              <div className="font-serif text-cream-50/90 text-lg">
                {darbar.hours}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-14"
        >
          <a href="#contact" className="btn-gold">
            {darbar.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
