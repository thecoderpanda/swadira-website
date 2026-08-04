"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "./SplitText";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      {/* Soft background devanagari accent */}
      <motion.div
        aria-hidden
        style={{ y: drift }}
        className="pointer-events-none absolute inset-x-0 top-10 flex justify-center opacity-[0.045]"
      >
        <span className="font-devanagari text-[18vw] leading-none text-cream-50">
          स्वाद
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Our Story
          </span>
        </div>

        <SplitText
          as="h2"
          from="up"
          className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-3xl"
          text="A family kitchen. Three generations. One promise."
        />

        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="font-display italic text-2xl md:text-3xl text-gold-gradient leading-tight">
              Sanjay Naidu
            </div>
            <div className="mt-2 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-400">
              Founder · Head Chef
            </div>
            <div className="mt-6 h-px w-16 bg-gold-500/40" />
            <p className="mt-6 font-serif text-base text-cream-50/70 leading-relaxed">
              "Every plate that leaves our kitchen carries a little bit of our
              family. That is our only recipe."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-5 font-serif text-base md:text-lg leading-relaxed text-cream-50/85"
          >
            <p>
              Sanjay Naidu has been feeding Nagpur for over{" "}
              <span className="text-gold-300">40 years</span>. What began as a
              small family kitchen grew into one of Central India's most
              trusted catering houses.
            </p>
            <p>
              For{" "}
              <span className="text-gold-300">
                15 unbroken years he ran the in-house kitchen at the historic
                Gondwana Club
              </span>
              , cooking for Nagpur's oldest members and their families.
              Today, he also runs{" "}
              <span className="text-gold-300">
                Darbar Restaurant at Rameson's Hotel
              </span>{" "}
              — bringing the same wedding-grade recipes to a daily table.
            </p>
            <p>
              Every dish is cooked on live fire, spiced by hand, and tasted
              by Sanjay ji himself before it reaches your plate. That is our
              rule. That is the whole recipe.
            </p>
          </motion.div>
        </div>

        {/* Three small legacy notes */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-gold-500/20 pt-12">
          {[
            { k: "1990", v: "Started in Jaripatka, Nagpur" },
            { k: "Live Fire", v: "Every dish, every event" },
            { k: "Vidarbha", v: "Family recipes, modern plating" },
          ].map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.9 }}
            >
              <div className="font-display italic text-2xl md:text-3xl text-gold-gradient">
                {it.k}
              </div>
              <div className="mt-2 font-serif text-cream-50/65 text-sm md:text-base tracking-wide">
                {it.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
