import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/** Word-by-word spring reveal used for large display headings. */
export function WordReveal({ text, className, wordClassName, delay = 0, as = "span" }: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={cn("inline-block", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={cn("inline-block", wordClassName)}
            variants={{
              hidden: reduced ? { opacity: 0 } : { opacity: 0, y: "0.9em", rotateX: -40 },
              show: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: reduced
                  ? { duration: 0.2 }
                  : { type: "spring", stiffness: 150, damping: 20, mass: 0.7 },
              },
            }}
            style={{ willChange: "transform, opacity" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
