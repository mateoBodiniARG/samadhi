"use client";

import { motion, useInView } from "framer-motion";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useRef } from "react";

const days = [
  { short: "Lun", full: "Lunes",     open: true },
  { short: "Mar", full: "Martes",    open: true },
  { short: "Mié", full: "Miércoles", open: true },
  { short: "Jue", full: "Jueves",    open: true },
  { short: "Vie", full: "Viernes",   open: true },
  { short: "Sáb", full: "Sábado",    open: false },
  { short: "Dom", full: "Domingo",   open: false },
];

const WA_LINK = "https://walink.co/e12b25";

export function Horarios() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="horarios"
      ref={ref}
      style={{ position: "relative", background: "var(--background)", overflow: "hidden", padding: "5rem 0" }}
    >
      {/* Ambient blob */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "400px",
          width: "400px",
          borderRadius: "50%",
          background: "var(--primary)",
          opacity: 0.04,
          filter: "blur(100px)",
          transform: "translate(-33%, 50%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <span style={{ height: "1px", width: "2rem", background: "var(--primary)", display: "block" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--primary)" }}>
            Horarios de atención
          </span>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div
          className="horarios-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — headline + day strip */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              Encontranos{" "}
              <em style={{ fontStyle: "normal", color: "var(--primary)" }}>cuando</em>
              <br />
              nos necesitás
            </motion.h2>

            {/* Day strip */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {days.map((d, i) => (
                <motion.div
                  key={d.short}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "12px",
                    padding: "0.75rem 1rem",
                    border: d.open
                      ? "1px solid var(--border)"
                      : "1px dashed var(--border)",
                    background: d.open ? "var(--muted)" : "transparent",
                    opacity: d.open ? 1 : 0.45,
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {d.open
                      ? <CheckCircle style={{ width: "16px", height: "16px", color: "var(--primary)", flexShrink: 0 }} strokeWidth={2} />
                      : <XCircle style={{ width: "16px", height: "16px", color: "var(--muted-foreground)", flexShrink: 0 }} strokeWidth={2} />
                    }
                    <span style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: d.open ? "var(--foreground)" : "var(--muted-foreground)",
                    }}>
                      {d.full}
                    </span>
                  </div>
                  {d.open
                    ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)", fontWeight: 500 }}>
                        <span style={{ borderRadius: "9999px", background: "#EEF4FF", color: "var(--primary)", padding: "2px 8px" }}>8:30 – 12:00</span>
                        <span style={{ color: "var(--border)" }}>·</span>
                        <span style={{ borderRadius: "9999px", background: "#EEF4FF", color: "var(--primary)", padding: "2px 8px" }}>15:00 – 18:00</span>
                      </div>
                    )
                    : <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", fontWeight: 500 }}>Cerrado</span>
                  }
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — info card + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Big time display card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                borderRadius: "16px",
                background: "var(--primary)",
                color: "#fff",
                padding: "2.5rem",
                boxShadow: "0 20px 60px 0 #1A73E830",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circles */}
              <div aria-hidden="true" style={{ position: "absolute", top: "-48px", right: "-48px", width: "192px", height: "192px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
              <div aria-hidden="true" style={{ position: "absolute", bottom: "-32px", left: "-32px", width: "128px", height: "128px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.65)" }}>
                  <Clock style={{ width: "16px", height: "16px" }} strokeWidth={2} />
                  <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                    Lunes a Viernes
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div>
                    <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>Mañana</p>
                    <p style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                      8:30
                      <span style={{ fontSize: "1.5rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", marginLeft: "0.5rem" }}>– 12:00</span>
                    </p>
                  </div>
                  <div style={{ height: "1px", width: "100%", background: "rgba(255,255,255,0.12)", margin: "0.75rem 0" }} />
                  <div>
                    <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>Tarde</p>
                    <p style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                      15:00
                      <span style={{ fontSize: "1.5rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", marginLeft: "0.5rem" }}>– 18:00</span>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderRadius: "12px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", padding: "0.625rem 1rem", width: "fit-content" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Sábados y Domingos cerrado</span>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                background: "var(--muted)",
                padding: "1.25rem 1.5rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>¿Querés sacar un turno?</p>
                <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "2px", margin: "2px 0 0" }}>Escribinos directo por WhatsApp</p>
              </div>
              <div style={{ display: "flex", width: "44px", height: "44px", flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "#25D366", color: "#fff", boxShadow: "0 4px 12px rgba(37,211,102,0.35)" }}>
                <WhatsAppIcon className="w-5 h-5" />
              </div>
            </motion.a>

          </div>
        </div>
      </div>

      {/* Responsive - mobile: single column */}
      <style>{`
        @media (max-width: 1023px) {
          .horarios-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}