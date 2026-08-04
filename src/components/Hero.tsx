"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

/**
 * Royalty-free Indian buffet / food footage hosted on Mixkit
 * (free for commercial use, no attribution required).
 * Multiple sources → browser picks the first that plays.
 */
const VIDEO_SOURCES = [
  "/hero.mp4",
  "https://videos.pexels.com/video-files/31974227/13624678_1920_1080_25fps.mp4",
];

// Warm Indian wedding buffet poster fallback (red drapes, marigolds, food counter)
const POSTER =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[92svh] w-full overflow-hidden bg-ink"
    >
      {/* Cinematic video background */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
        >
          {VIDEO_SOURCES.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        <Image
          src={POSTER}
          alt=""
          fill
          priority
          className="object-cover -z-10"
        />
      </motion.div>

      {/* Overlays — royal-red wash that keeps the buffet warm and visible */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(63,13,20,0.55) 0%, rgba(48,9,16,0.35) 40%, rgba(31,5,10,0.7) 80%, rgba(11,5,7,0.98) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(90,22,32,0.15) 0%, rgba(11,5,7,0.65) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-[1] bg-noise opacity-40" />

      {/* Content — centred, calmer, smaller */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[92svh] flex-col items-center justify-center text-center px-6"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-10 bg-gold-400" />
          <span className="font-sans text-[0.68rem] tracking-[0.5em] uppercase text-gold-300">
            Nagpur · Since 1990
          </span>
          <span className="h-px w-10 bg-gold-400" />
        </motion.div>

        {/* Exact reference logo — arch, cloche, स्वादIRA wordmark, tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative animate-gold-pulse"
        >
          {/* Soft cream aura so the maroon glyphs stay readable on dark bg */}
          <div
            aria-hidden
            className="absolute inset-0 -m-16 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(250,241,218,0.22) 0%, rgba(250,241,218,0.08) 40%, rgba(250,241,218,0) 70%)",
              filter: "blur(30px)",
            }}
          />
          <Image
            src="/logo.svg"
            alt="स्वादIRA — A Legacy by Sanjay Naidu"
            width={1536}
            height={1024}
            priority
            className="relative w-[320px] sm:w-[460px] md:w-[600px] lg:w-[720px] h-auto"
            style={{
              filter:
                "brightness(1.18) contrast(1.08) saturate(1.15) drop-shadow(0 8px 24px rgba(0,0,0,0.55))",
            }}
          />
        </motion.div>

        {/* Short warm description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-6 max-w-2xl font-serif text-base md:text-lg text-cream-50/80 leading-relaxed"
        >
          Nagpur's family catering house — cooking royal weddings, grand
          parties and cherished celebrations for over 35 years.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold">
            Book a Tasting
          </a>
          <a href="#services" className="btn-ghost">
            See Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 inset-x-0 z-10 flex items-center justify-center gap-2 pointer-events-none text-gold-300"
      >
        <span className="font-sans text-[0.6rem] tracking-[0.5em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={12} />
        </motion.div>
      </motion.div>
    </section>
  );
}
