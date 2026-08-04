import { cn } from "@/lib/utils";

export type BrandLogoData = {
  name: string;
  /** Path under /public. If omitted, the name renders as a text wordmark. */
  src?: string;
  /** Per-logo overrides (e.g. a taller `h-*` to offset baked-in whitespace). */
  className?: string;
};

/**
 * A single logo on a trust wall. Real logos render as monochrome (grayscale),
 * muted images normalized by height; missing ones fall back to a text wordmark
 * so the wall degrades cleanly while assets are still being collected.
 */
export function BrandLogo({
  name,
  src,
  className,
}: BrandLogoData & { className?: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        // Eager, not lazy: the marquee renders a second (off-screen) copy of the
        // logos; if those stay unloaded they collapse to ~0 width and the
        // -50% seamless loop misaligns (visible jump/gap). These logos are tiny.
        loading="eager"
        className={cn(
          "h-7 w-auto shrink-0 object-contain opacity-60 grayscale transition-opacity duration-300 hover:opacity-100",
          className,
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        "shrink-0 whitespace-nowrap text-[15px] font-medium tracking-tight text-foreground/40",
        className,
      )}
    >
      {name}
    </span>
  );
}
