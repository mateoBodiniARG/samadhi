"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
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
  { href: "#horarios", label: "Horarios" },
  { href: "#servicios", label: "Especialidades" },
  { href: "#obras-sociales", label: "Obras Sociales" },
  { href: "#opiniones", label: "Por qué elegirnos" },
  { href: "#ubicacion", label: "Ubicación" },
];

const WA_LINK = "https://walink.co/e12b25";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-sm ring-1 ring-black/5 bg-white flex items-center justify-center">
            {/* Provide a placeholder or the actual logo if available. Ensure src matches public folder later. */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold bg-primary">
              C
            </div>
          </div>
          <div className="leading-tight hidden sm:block">
            <span className="block text-sm font-bold text-foreground">
              Corpore
            </span>
            <span className="block text-xs text-primary font-medium">
              Kinesiología & Fisiatría
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-7 text-sm font-medium">
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



        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ color: "#1A73E8" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#EEF4FF")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
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
              <SheetHeader className="flex flex-row items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white flex-shrink-0 font-bold bg-primary"
                  >
                    C
                  </div>
                  <SheetTitle className="text-base font-bold leading-tight">
                    Corpore Kinesiología
                  </SheetTitle>
                </div>
                <SheetClose asChild>
                  <button
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{ color: "#1A73E8" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#EEF4FF")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    aria-label="Cerrar menú"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </SheetClose>
              </SheetHeader>

              {/* Mobile Navigation links */}
              <nav className="flex flex-col px-3 py-4">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Menú
                </p>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mx-5 h-px bg-border" />

              {/* Address */}
              <div className="flex items-start gap-3 px-5 py-4">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground leading-snug">
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p>Entre Ríos 3753, Rosario</p>
                  <p>Santa Fe, Argentina</p>
                </div>
              </div>

              <div className="mx-5 h-px bg-border" />

              {/* Mobile CTA */}
              <div className="mt-auto px-5 pb-6 pt-4">
                <Button
                  className="w-full rounded-full shadow-md text-sm font-semibold bg-primary hover:bg-primary/90 text-white"
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
