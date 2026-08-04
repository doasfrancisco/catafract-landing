"use client";

import * as React from "react";

/**
 * True on >= md (768px) screens. Starts `false` (mobile-first) so heavy
 * animations never run before we know the viewport and stay off on phones,
 * where they were making scrolling feel laggy. Flips on after mount on desktop.
 */
export function useIsDesktop() {
  const [desktop, setDesktop] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}
