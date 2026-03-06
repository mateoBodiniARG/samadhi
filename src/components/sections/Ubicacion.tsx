"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5493413000000?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";
const MAPS_LINK =
  "https://maps.google.com/?q=Mitre+4376+Rosario+Santa+Fe";

const horarios = [
  { dia: "Lunes a Viernes", hora: "9:00 – 20:00" },
  { dia: "Sábados", hora: "9:00 – 14:00" },
  { dia: "Domingos", hora: "Cerrado" },
];

export function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7fdf9 100%)" }}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#68DCD2" }}
          >
            Encontranos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "#333333",
            }}
          >
            Visitanos en{" "}
            <em style={{ color: "#68DCD2" }}>Rosario</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {/* Direccion */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-7 flex gap-5"
              style={{
                background: "#f0fbfa",
                border: "1px solid rgba(104, 220, 210, 0.2)",
              }}
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: "rgba(104, 220, 210, 0.15)" }}
              >
                <MapPin className="h-5 w-5" style={{ color: "#68DCD2" }} />
              </div>
              <div>
                <h3
                  className="mb-1 text-lg font-semibold"
                  style={{ color: "#333333", fontWeight: 600 }}
                >
                  Dirección
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  Mitre 4376<br />
                  Rosario, Santa Fe 2000<br />
                  Argentina
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "#68DCD2" }}
                >
                  <ExternalLink className="h-3 w-3" />
                  Ver en Google Maps
                </a>
              </div>
            </motion.div>

            {/* Horarios */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-7 flex gap-5"
              style={{
                background: "#fdf5f5",
                border: "1px solid rgba(242, 164, 167, 0.2)",
              }}
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style={{ background: "rgba(242, 164, 167, 0.15)" }}
              >
                <Clock className="h-5 w-5" style={{ color: "#F2A4A7" }} />
              </div>
              <div className="flex-1">
                <h3
                  className="mb-3 text-lg font-semibold"
                  style={{ color: "#333333", fontWeight: 600 }}
                >
                  Horarios de Atención
                </h3>
                <div className="flex flex-col gap-2">
                  {horarios.map((h) => (
                    <div key={h.dia} className="flex justify-between text-sm">
                      <span style={{ color: "#4A4A4A" }}>{h.dia}</span>
                      <span
                        className="font-semibold"
                        style={{
                          color:
                            h.hora === "Cerrado" ? "#F2A4A7" : "#68DCD2",
                        }}
                      >
                        {h.hora}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl p-7"
              style={{
                background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-5 w-5 text-white" />
                <h3
                  className="text-lg font-semibold text-white"
                  style={{ fontWeight: 600 }}
                >
                  Reservá tu turno
                </h3>
              </div>
              <p className="mb-5 text-sm text-white/80 leading-relaxed">
                Escribinos por WhatsApp y te respondemos a la brevedad. ¡Sin esperas!
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ color: "#3a9e96" }}
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  Pedir turno por WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full overflow-hidden rounded-3xl shadow-xl"
            style={{
              height: "460px",
              border: "1px solid rgba(104, 220, 210, 0.2)",
            }}
          >
            <iframe
              title="Ubicación Samadhi Belleza"
              src="https://maps.google.com/maps?q=Mitre+4376+Rosario+Santa+Fe+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) brightness(1.02)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge */}
            <div
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl px-4 py-2.5 shadow-lg backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#68DCD2" }} />
              <span className="text-xs font-semibold" style={{ color: "#333333" }}>
                Samadhi · Mitre 4376, Rosario
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}