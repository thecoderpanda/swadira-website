"use client";
import { motion, type Variants } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  from?: "up" | "down" | "blur";
  once?: boolean;
};

const upVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const blurVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: "blur(14px)" },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.05,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const motionMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  as = "h2",
  from = "up",
  once = true,
}: Props) {
  const words = text.split(" ");
  const variants = from === "blur" ? blurVariants : upVariants;
  const MotionTag = motionMap[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className={from === "up" ? "inline-block overflow-hidden align-bottom" : "inline-block"}
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            custom={i}
            variants={variants}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
