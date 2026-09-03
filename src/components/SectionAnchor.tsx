import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

/** Placeholder anchor block for sections that will be built out next. */
export function SectionAnchor({ id, eyebrow, title, children, className }: Props) {
  return (
    <section
      id={id}
      data-section-anchor
      className={cn("relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36", className)}
    >
      <Reveal>
        <p className="font-display text-xs uppercase tracking-[0.4em] text-neon">{eyebrow}</p>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-8">
        {children ?? (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            This section is reserved and will be built in the next iteration.
          </p>
        )}
      </Reveal>
    </section>
  );
}
