"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { milestones } from "@/data/content";
import { SplitText } from "./SplitText";

export function Milestones() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      id="legacy"
      className="relative py-24 md:py-36 overflow-hidden text-cream-50"
    >
      {/* Red Indian wedding video background */}
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
          <source src="/wedding-1.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Warm red-tinted overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,5,7,0.88) 0%, rgba(63,13,20,0.82) 50%, rgba(11,5,7,0.95) 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-[1] bg-noise opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Our Legacy
          </span>
        </div>

        <SplitText
          as="h2"
          from="up"
          className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-3xl"
          text="Forty years, told in five chapters."
        />

        <p className="mt-6 max-w-2xl font-serif text-base md:text-lg text-cream-50/75 leading-relaxed">
          A family, a copper pot, and Nagpur's biggest kitchens — the story of
          how Mr. Sanjay Naidu built SwadIra, one celebration at a time.
        </p>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent"
          />

          <div className="space-y-14 md:space-y-24">
            {milestones.map((m, i) => (
              <MilestoneRow
                key={m.year}
                year={m.year}
                title={m.title}
                desc={m.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneRow({
  year,
  title,
  desc,
  index,
}: {
  year: string;
  title: string;
  desc: string;
  index: number;
}) {
  const isRight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-14 items-center`}
    >
      {/* Dot */}
      <div
        aria-hidden
        className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-gold-400 shadow-[0_0_24px_rgba(231,195,119,0.9)]"
      />

      <div className={isRight ? "md:col-start-2 md:pl-10" : "md:pr-10 md:text-right"}>
        <div className="font-display italic text-3xl md:text-5xl text-gold-gradient leading-none">
          {year}
        </div>
        <div className="mt-3 font-display text-xl md:text-2xl text-cream-50 leading-tight">
          {title}
        </div>
        <p className="mt-4 font-serif text-base text-cream-50/75 leading-relaxed max-w-md md:ml-auto">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
