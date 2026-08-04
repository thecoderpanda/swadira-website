import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep cinematic backdrop (Midas-Touch feel) tuned with our warm maroon undertone
        ink: {
          DEFAULT: "#0B0507",
          800: "#140609",
          700: "#1F080D",
          600: "#2A0A0F",
        },
        cream: {
          50: "#FAF1DA",
          100: "#F1E5CD",
          200: "#E8D8B4",
          300: "#DBC69A",
        },
        maroon: {
          500: "#5A1620",
          600: "#3F0D14",
          700: "#300910",
          800: "#1F050A",
        },
        gold: {
          300: "#E7C377",
          400: "#D9AE5C",
          500: "#B8863A",
          600: "#9A6F2C",
          700: "#7C591F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        "display-alt": ["var(--font-display-alt)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "serif"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, #E7C377 0%, #B8863A 30%, #F0D48A 55%, #9A6F2C 80%, #7C591F 100%)",
        "radial-cream":
          "radial-gradient(ellipse at top, #FAF1DA 0%, #F1E5CD 60%, #E8D8B4 100%)",
        "radial-ink":
          "radial-gradient(ellipse at center, #1F080D 0%, #0B0507 80%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gold-pulse": {
          "0%,100%": { filter: "drop-shadow(0 0 14px rgba(184,134,58,0.45))" },
          "50%": { filter: "drop-shadow(0 0 34px rgba(231,195,119,0.9))" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(-6px)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "gold-pulse": "gold-pulse 4s ease-in-out infinite",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
