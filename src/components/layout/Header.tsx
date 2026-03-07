"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
];

const WA_LINK =
  "https://wa.me/5493413656207?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-[#68DCD2]/20 bg-white/95 backdrop-blur-md shadow-sm shadow-[#68DCD2]/10"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #68DCD2 0%, #a8e6e0 100%)",
            }}
          >
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight hidden sm:block">
            <span
              className="block text-sm font-bold tracking-wide"
              style={{ color: "#333333" }}
            >
              Samadhi
            </span>
            <span className="block text-xs font-medium" style={{ color: "#68DCD2" }}>
              Estética & Bienestar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="rounded-full px-5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
            style={{ background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 100%)" }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Pedir Turno
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#e8f8f7]"
                style={{ color: "#68DCD2" }}
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] flex flex-col p-0 gap-0"
              showCloseButton={false}
            >
              <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-[#e8f3f2]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #68DCD2 0%, #a8e6e0 100%)",
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <SheetTitle className="text-base font-bold leading-tight text-[#333333]">
                    Samadhi Belleza
                  </SheetTitle>
                </div>
                <SheetClose asChild>
                  <button
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#e8f8f7]"
                    style={{ color: "#68DCD2" }}
                    aria-label="Cerrar menú"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </SheetClose>
              </SheetHeader>

              <nav className="flex flex-col px-3 py-4">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Menú
                </p>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-[#e8f8f7] hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mx-5 h-px bg-[#e8f3f2]" />

              <div className="flex items-start gap-3 px-5 py-4">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground leading-snug">
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p>Mitre 4376, Rosario</p>
                  <p>Santa Fe, Argentina</p>
                </div>
              </div>

              <div className="mx-5 h-px bg-[#e8f3f2]" />

              <div className="mt-auto px-5 pb-6 pt-4">
                <Button
                  className="w-full rounded-full shadow-md text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 100%)",
                  }}
                  asChild
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-4 w-4" />
                    Pedir Turno Online
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
