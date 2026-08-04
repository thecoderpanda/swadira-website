import Image from "next/image";
import { brand, nav } from "@/data/content";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink-800 text-cream-50 overflow-hidden border-t border-gold-500/20">
      {/* Ornamental top edge */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(231,195,119,0.55) 50%, transparent 100%)",
        }}
      />
      {/* Warm glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,134,58,0.18) 0%, rgba(63,13,20,0.0) 70%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-14 pt-24 pb-10">
        {/* Centered brand block */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="स्वादIRA — A Legacy by Sanjay Naidu"
            width={1500}
            height={1023}
            className="h-24 md:h-28 w-auto object-contain opacity-95"
          />
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-400/60" />
            <span className="font-serif italic text-base md:text-xl text-cream-50">
              A Legacy by Mr. Sanjay Naidu
            </span>
            <span className="h-px w-10 bg-gold-400/60" />
          </div>
          <p className="mt-6 max-w-xl font-serif text-cream-50/70 leading-relaxed">
            Three generations of Vidarbha hospitality — plated with modern
            finesse. Proudly rooted in Nagpur since 1990.
          </p>

          <div className="mt-8 flex gap-3">
            {[
              { I: Instagram, href: "#", label: "Instagram" },
              { I: Facebook, href: "#", label: "Facebook" },
              { I: Youtube, href: "#", label: "YouTube" },
            ].map(({ I, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-400 hover:text-ink hover:border-gold-400 transition-all duration-500 hover:-translate-y-0.5"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="my-14 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(184,134,58,0.35), transparent)",
          }}
        />

        {/* Four-column grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Explore */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Explore
            </h4>
            <ul className="space-y-3 font-serif text-cream-50/80 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-2 hover:text-gold-300 transition"
                  >
                    <span>{n.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kitchen */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Kitchen
            </h4>
            <ul className="space-y-4 font-serif text-cream-50/80 text-[15px]">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold-300 mt-1 shrink-0" />
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold-300 transition"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold-300 mt-1 shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-gold-300 transition break-all"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-300 mt-1 shrink-0" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold-300 mt-1 shrink-0" />
                <span>{brand.hours}</span>
              </li>
            </ul>
          </div>

          {/* Darbar */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Darbar Restaurant
            </h4>
            <div className="font-devanagari text-2xl text-gold-gradient mb-3">
              दरबार
            </div>
            <p className="font-serif text-cream-50/75 text-[15px] leading-relaxed">
              At Rameson's Hotel, Nagpur.
            </p>
            <p className="mt-2 font-serif text-cream-50/60 text-sm leading-relaxed">
              Lunch 12:30 – 3:00 PM
              <br />
              Dinner 7:00 – 11:00 PM
            </p>
            <a
              href="#darbar"
              className="mt-5 inline-flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-gold-300 hover:text-gold-400 transition group"
            >
              Reserve a Table
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Legacy */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-gold-400 mb-6">
              Legacy
            </h4>
            <ul className="space-y-4 font-serif text-cream-50/80 text-[15px]">
              <li>
                <span className="font-display italic text-2xl text-gold-gradient block leading-none">
                  40+
                </span>
                <span className="text-cream-50/60 text-sm">
                  Years of catering
                </span>
              </li>
              <li>
                <span className="font-display italic text-2xl text-gold-gradient block leading-none">
                  15
                </span>
                <span className="text-cream-50/60 text-sm">
                  Years at Gondwana Club
                </span>
              </li>
              <li>
                <span className="font-display italic text-2xl text-gold-gradient block leading-none">
                  2,400+
                </span>
                <span className="text-cream-50/60 text-sm">
                  Celebrations plated
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-16 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(184,134,58,0.35), transparent)",
          }}
        />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-cream-50/45">
          <span>
            © {new Date().getFullYear()} स्वादIRA · All flavours reserved.
          </span>
          <span className="flex items-center gap-2">
            Crafted with <span className="text-gold-300">✦</span> in Nagpur
          </span>
        </div>
      </div>
    </footer>
  );
}
