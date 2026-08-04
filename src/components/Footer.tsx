import Image from "next/image";
import { brand, nav } from "@/data/content";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink-800 text-cream-50 overflow-hidden border-t border-gold-500/15">
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-14 py-20">
        {/* Colossal wordmark */}
        <div className="pb-12 border-b border-gold-500/20 flex flex-col gap-2">
          <span className="font-display italic text-5xl md:text-7xl text-gold-gradient leading-none">
            SwadIra
          </span>
          <span className="font-serif italic text-lg md:text-2xl text-cream-50/70">
            A Legacy by Mr. Sanjay Naidu
          </span>
        </div>

        <div className="grid md:grid-cols-4 gap-10 py-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="SwadIra" width={451} height={359} className="h-16 w-auto object-contain" />
              <div>
                <div className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-gold-300">
                  {brand.tagline}
                </div>
                <div className="mt-1 font-serif text-cream-50/60 text-sm">
                  Nagpur · Since 1990
                </div>
              </div>
            </div>
            <p className="mt-8 font-serif text-cream-50/70 max-w-md leading-relaxed">
              Three generations of Vidarbha hospitality, plated with modern finesse. Proudly rooted in Nagpur.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 font-serif text-cream-50/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-gold-300 transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Kitchen
            </h4>
            <ul className="space-y-3 font-serif text-cream-50/80">
              <li>{brand.phone}</li>
              <li>{brand.email}</li>
              <li>{brand.address}</li>
              <li>{brand.hours}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-cream-50/40 border-t border-gold-500/15">
          <span>© {new Date().getFullYear()} SwadIra. All flavours reserved.</span>
          <span>Crafted with ✦ in Nagpur</span>
        </div>
      </div>
    </footer>
  );
}
