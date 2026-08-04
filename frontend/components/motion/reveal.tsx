"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";

// Signature ease — a calm, expensive-feeling ease-out.
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Once a blur-in animation finishes, strip the inline `filter` so no
 * `blur(0px)` layer lingers. A resting `filter` (even blur(0)) keeps the
 * element on its own GPU layer and janks scrolling on mobile — clearing it
 * keeps the entrance effect while leaving a cheap, filter-free resting state.
 */
function clearFilter(el: HTMLElement | null) {
  if (el) el.style.filter = "";
}

/**
 * Force every Reveal/Stagger to its shown state. The Navbar dispatches
 * `reveal:all` right before a smooth in-page scroll so the page doesn't travel
 * through sections still hidden by their scroll-reveal (which read as blank /
 * "not loading"). Latches on for the rest of the session once fired.
 */
function useRevealAll() {
  const [all, setAll] = React.useState(false);
  React.useEffect(() => {
    const on = () => setAll(true);
    window.addEventListener("reveal:all", on);
    return () => window.removeEventListener("reveal:all", on);
  }, []);
  return all;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to delay before animating in. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Render element tag. */
  as?: keyof typeof motion;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "ref">;

/**
 * Fade-up + subtle blur-in as the element scrolls into view. The blur is
 * removed from the inline style once the animation settles (see clearFilter),
 * so the effect plays on every device without leaving a scroll-janking layer.
 * Honors prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const revealAll = useRevealAll();
  const desktop = useIsDesktop();
  const ref = React.useRef<HTMLDivElement>(null);
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  // Blur-in only on desktop — animating `filter: blur` on every section as it
  // enters janks scrolling on mobile. Mobile keeps the cheap fade + rise.
  const hidden = desktop
    ? { opacity: 0, y, filter: "blur(6px)" }
    : { opacity: 0, y };
  const shown = desktop
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 1, y: 0 };
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={hidden}
      animate={revealAll ? shown : undefined}
      whileInView={revealAll ? undefined : shown}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: revealAll ? 0.2 : 0.55,
        ease: EASE,
        delay: revealAll ? 0 : delay,
      }}
      onAnimationComplete={() => clearFilter(ref.current)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

// Mobile variant without the blur filter (see Reveal above for the reason).
const itemVariantsPlain: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Parent that staggers its `<StaggerItem>` children into view. */
export function Stagger({
  children,
  className,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const revealAll = useRevealAll();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={revealAll ? "show" : undefined}
      whileInView={revealAll ? undefined : "show"}
      viewport={{ once, margin: "-30px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const ref = React.useRef<HTMLDivElement>(null);
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={desktop ? itemVariants : itemVariantsPlain}
      onAnimationComplete={() => clearFilter(ref.current)}
    >
      {children}
    </motion.div>
  );
}
