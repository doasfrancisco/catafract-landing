import { cn } from "@/lib/utils";

/**
 * Official CATAFRACT logo — isotype + wordmark lockup, extracted to a
 * transparent PNG. Used on light surfaces (navbar, footer). The accessible
 * name lives on the wrapper so the image itself is decorative.
 */
export function Logo({
  className,
  label = "CATAFRACT — inicio",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      aria-label={label}
      role="img"
      className={cn("inline-flex select-none items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/catafract-logo.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-auto"
      />
    </span>
  );
}
