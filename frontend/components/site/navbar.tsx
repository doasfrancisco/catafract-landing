"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // True while the menu is open AND during its close animation, so we can drop
  // the navbar's backdrop-blur meanwhile: recomputing that blur every frame
  // during the roll-up made the close feel heavier once the glass bar showed.
  const [menuActive, setMenuActive] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile sheet is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? menuActive
            ? "border-b border-border bg-background"
            : "border-b border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="rounded-md text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contacto" className={buttonVariants({ size: "sm" })}>
            Agendar diagnóstico
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setMenuActive(true);
              setOpen(true);
            }
          }}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/60 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence onExitComplete={() => setMenuActive(false)}>
        {open && (
          <motion.div
            key="mobile-menu"
            // Roll-up: el panel crece/colapsa en ALTURA (se recoge hacia la
            // barra, como una persiana) en vez de desvanecerse. Fundir un panel
            // blanco sobre contenido blanco dejaba un "hueco blanco" al cerrar;
            // recogerlo en altura revela el contenido de atrás de forma limpia.
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              transition: { duration: 0.26, ease: [0.22, 0.61, 0.36, 1] },
            }}
            exit={{
              height: 0,
              transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
            }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-3 w-full"
                onClick={() => {
                  setOpen(false);
                  window.location.hash = "#contacto";
                }}
              >
                Agendar diagnóstico
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
