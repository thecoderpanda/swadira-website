"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl border-b",
          scrolled
            ? "bg-ink/95 border-gold-500/25 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
            : "bg-ink/80 border-gold-500/15 py-4",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-14 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center leading-none">
            <Image
              src="/logo.png"
              alt="स्वादIRA — A Legacy by Sanjay Naidu"
              width={3164}
              height={3289}
              priority
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative font-sans text-[0.7rem] tracking-[0.35em] uppercase text-cream-50/80 hover:text-gold-300 transition-colors group"
              >
                {n.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-5 py-2.5 font-sans text-[0.7rem] tracking-[0.35em] uppercase text-cream-50 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500"
          >
            Reserve
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-cream-50"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-6">
                <Image
                  src="/logo.png"
                  alt="स्वादIRA"
                  width={3164}
                  height={3289}
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="text-cream-50"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>
              <nav className="flex flex-col items-start justify-center flex-1 gap-6 px-8">
                {nav.map((n, i) => (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="display-hero text-6xl text-cream-50 hover:text-gold-gradient transition"
                  >
                    {n.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
