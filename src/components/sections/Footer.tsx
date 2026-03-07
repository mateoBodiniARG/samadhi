"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, Facebook, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5493413656207?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
];

const serviceLinks = [
  "Tratamientos Faciales",
  "Masajes & Reiki",
  "Criolipólisis",
  "Depilación Definitiva",
  "Manicuria",
  "Pestañas & Cejas",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #1a3c38 0%, #0f2420 100%)",
        color: "#a8d5d0",
      }}
    >
      {/* Main footer */}
      <div className="container mx-auto px-6 md:px-8 max-w-6xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 100%)",
                }}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white tracking-wide">Samadhi</p>
                <p className="text-xs" style={{ color: "#68DCD2" }}>
                  Estética & Bienestar
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 opacity-80">
              Un espacio de belleza, relajación y amor propio en el corazón de Rosario.
            </p>
            <p
              className="text-sm italic mb-6"
              style={{ color: "#a8e6e0", fontSize: "1rem" }}
            >
              "Cree en ti y todo será posible"
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/samadhibellezayrelax/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/samadhibellezayrelax/", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:scale-110"
                  style={{
                    background: "rgba(104, 220, 210, 0.12)",
                    color: "#68DCD2",
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{
                  background: "rgba(37, 211, 102, 0.15)",
                  color: "#25D366",
                }}
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: "#68DCD2" }}>
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: "#68DCD2" }}>
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm opacity-70 transition-opacity hover:opacity-100 hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: "#68DCD2" }}>
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "#68DCD2" }} />
                <span>
                  Mitre 4376<br />
                  Rosario, Santa Fe 2000
                </span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-80 transition-opacity hover:opacity-100 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                <span>Turnos por WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(104, 220, 210, 0.1)" }}
      >
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50">
          <p>© {year} Samadhi Estética. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con ❤️ en Rosario por{" "}
            <a
              href="https://www.linkedin.com/in/mateobodini/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              MateoBodini
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
