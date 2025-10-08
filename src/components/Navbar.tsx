"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Ícono WhatsApp minimal (SVG propio, para no “techear” con mil íconos)
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path d="M19.11 17.2c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.2-.44-2.3-1.4-.85-.75-1.42-1.68-1.59-1.96-.16-.28-.02-.43.12-.56.13-.13.28-.32.41-.48.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.61-1.46-.84-1.99-.22-.52-.44-.45-.61-.46l-.52-.01c-.18 0-.49.07-.75.35-.25.28-.99.97-.99 2.37 0 1.4 1.02 2.76 1.16 2.94.14.18 2.01 3.08 4.88 4.2 1.81.74 2.52.81 3.43.68.55-.08 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.19-.53-.33z" fill="currentColor"/>
      <path d="M26.5 5.5c-4.7-4.7-12.3-4.7-17 0-3.8 3.8-4.5 9.6-1.8 14.1L6 28l8.6-1.6c4.4 2.4 9.9 1.6 13.6-2.1 4.7-4.7 4.7-12.3 0-17zm-1.8 15.2c-3.1 3.1-7.8 3.8-11.6 1.7l-.84-.45-5.1.95.97-4.98-.49-.86C5.3 12.8 6 8.1 9.1 5c3.9-3.9 10.3-3.9 14.2 0s3.9 10.3 0 14.2z" fill="currentColor"/>
    </svg>
  );
}

const NAV = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/inversion", label: "Inversión" },
  { href: "/insights", label: "Guías & Insights" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Sombra suave al hacer scroll (sensación Apple)
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const calLink =
    process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/tu-org/visita-proyecto";
  const waPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";
  const waHref = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    "Hola, quiero hablar con un asesor de VREYES sobre proyectos disponibles."
  )}`;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-2xl transition-shadow ${
        elevated ? "shadow-[0_12px_40px_rgba(14,33,73,0.08)]" : "shadow-none"
      }`}
    >
      {/* Top bar de confianza */}
      <div className="hidden border-b border-white/60 bg-brand-sand/80 text-[13px] text-brand-mute md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="tracking-wide">
            Acompañamiento boutique para tu próxima propiedad. Agenda o escríbenos ahora.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+56212345678" className="hover:underline underline-offset-4">
              +56 2 1234 5678
            </a>
            <span className="text-brand-navy/30">|</span>
            <a href="mailto:contacto@vreyes.cl" className="hover:underline underline-offset-4">
              contacto@vreyes.cl
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Marca */}
        <Link href="/" className="flex items-center gap-3">
          {/* Reemplaza por tu logo si lo tienes */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy font-black text-white">
            V
          </div>
          <span className="select-none text-[18px] font-semibold tracking-tight text-brand-navy">
            VREYES<span className="text-brand-gold">.cl</span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-lg px-3 py-2 text-sm transition ${
                isActive(href)
                  ? "text-brand-navy after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[2px] after:bg-brand-gold"
                  : "text-brand-mute hover:text-brand-navy"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Acciones */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-navy/10 bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg"
          >
            Agendar visita
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-600/15"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <button
            className="md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          />
        </div>

        {/* Hamburguesa mobile */}
        <button
          className="inline-flex items-center justify-center rounded-lg border border-brand-navy/15 bg-white p-2 text-brand-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="h-4 w-5">
            <div className="mb-[5px] h-[2px] w-full bg-current" />
            <div className="mb-[5px] h-[2px] w-full bg-current" />
            <div className="h-[2px] w-full bg-current" />
          </div>
        </button>
      </div>

      {/* Panel mobile */}
      {open && (
        <div className="border-t border-white/60 bg-white/95 md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col gap-1">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-[15px] ${
                      isActive(href)
                        ? "bg-brand-navy/5 text-brand-navy"
                        : "text-brand-mute hover:bg-brand-sand/80"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-brand-navy px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Agendar visita
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
