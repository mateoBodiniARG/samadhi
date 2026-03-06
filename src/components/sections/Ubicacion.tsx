"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { useRef } from "react";

const MAPS_URL = "https://maps.app.goo.gl/4cLZqVTZemMHT3pS7";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.886805390243!2d-60.64962049999999!3d-32.9803881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab65fef8f751%3A0x3e510ab4af9fbc79!2sCorpore%20Kinesiolog%C3%ADa%20y%20Fisiatr%C3%ADa!5e0!3m2!1ses-419!2sar!4v1772777778643!5m2!1ses-419!2sar";

export function Ubicacion() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ubicacion" ref={ref} className="relative bg-muted/20 py-20 sm:py-28 overflow-hidden">



      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">

        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Dónde estamos
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] text-foreground mb-12"
        >
          Vení a{" "}
          <em className="not-italic text-primary">visitarnos</em>
        </motion.h2>

        {/* ── Layout: flex row on desktop, column on mobile ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Map embed — full width, tall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/8 w-full"
          >
            <iframe
              title="Corpore Kinesiología y Fisiatría en Google Maps"
              src={MAPS_EMBED}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info row — address + buttons side by side */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="rounded-2xl bg-background border border-border shadow-sm"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              padding: "1.75rem 2rem",
            }}
          >
            {/* Address block */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.875rem",
                  flexShrink: 0,
                }}
                className="bg-primary/10"
              >
                <MapPin className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-1">
                  Dirección
                </p>
                <p className="text-xl font-black tracking-tight text-foreground leading-tight">
                  Entre Ríos 3753
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  S2000 Rosario, Santa Fe
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-shadow"
              >
                <Navigation className="h-4 w-4" strokeWidth={2.5} />
                Cómo llegar
              </motion.a>
              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-2.5 text-sm font-bold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
                Ver en Maps
              </motion.a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}