"use client";

import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Image from "next/image";

const WA_LINK = "https://walink.co/e12b25";
const IG_LINK = "https://www.instagram.com/corporekinesio/";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden py-16 text-white"
      style={{ background: "linear-gradient(135deg,#1a73e8 0%,#0d3870 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "#8AB4F8" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full opacity-10 blur-3xl"
        style={{ background: "#A6C8FF" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg ring-2 ring-white/20 flex items-center justify-center bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-primary font-bold text-xl">
                  C
                </div>
              </div>
              <div>
                <p className="text-lg font-bold">Corpore</p>
                <p className="text-xs font-semibold text-white/80">
                  Kinesiología & Fisiatría
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-white/70 leading-relaxed">
              Un espacio orientado al cuidado integral del movimiento. Rehabilitamos lesiones de manera segura y eficaz.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {[
                { href: IG_LINK, icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { href: WA_LINK, icon: <WhatsAppIcon className="h-5 w-5" />, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Contacto
            </h3>
            <a
              href="tel:+5493413061524"
              className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-white/10"
              >
                <Phone className="h-4 w-4" style={{ color: "#fff" }} />
              </span>
              3413 061524
            </a>
            <div
              className="flex items-start gap-3 text-sm"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 mt-0.5 bg-white/10"
              >
                <MapPin className="h-4 w-4" style={{ color: "#fff" }} />
              </span>
              <span>
                Entre Ríos 3753<br />
                Rosario, Santa Fe
              </span>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Horarios
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 bg-white/10"
                >
                  <Clock className="h-4 w-4" style={{ color: "#fff" }} />
                </span>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <p className="font-semibold text-white">Lunes a Viernes</p>
                  <p>Abierto todos los días de la semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Adicional */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
              Información Útil
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white text-sm">Accesibilidad</p>
                <div className="flex flex-col gap-1 mt-1 text-sm text-white/80 leading-relaxed">
                  <p>Espacio accesible para personas en silla de ruedas.</p>
                  <p>Sanitarios accesibles para personas en silla de ruedas.</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white text-sm">Medios de Pago</p>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">Tarjetas de débito.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row text-sm"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Corpore Kinesiología & Fisiatría. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right" style={{ color: "#F0F6FF" }}>
            Hecho con ❤️ en Rosario por <a href="https://www.linkedin.com/in/mateobodini/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white transition-colors underline decoration-white/30 underline-offset-4">MateoBodini</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
