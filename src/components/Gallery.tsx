"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/data/content";
import { SplitText } from "./SplitText";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 bg-ink text-cream-50 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-gold-300">
            Our Work
          </span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6">
          <SplitText
            as="h2"
            from="up"
            className="font-display text-3xl md:text-5xl leading-tight text-cream-50 max-w-2xl"
            text="A few moments from our kitchen."
          />
          <a
            href="#contact"
            className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-gold-300 hover:text-gold-400 transition-colors"
          >
            Book Your Event →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-gold-300 mb-2">
                    {g.tag}
                  </div>
                  <div className="font-display text-lg md:text-xl text-cream-50 leading-tight">
                    {g.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
