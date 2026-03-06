"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  CalendarCheck,
  Sparkles,
  Clock,
} from "lucide-react";

const WA_LINK = "https://walink.co/e12b25";

const pillars = [
  {
    icon: UserCheck,
    title: "Atención 100% personalizada",
    desc: "Cada paciente tiene un plan de tratamiento diseñado a medida, con seguimiento constante de su evolución.",
    color: "#1A73E8",
    bg: "#EEF4FF",
  },
  {
    icon: ShieldCheck,
    title: "Profesionales certificados",
    desc: "Equipo con formación universitaria y capacitación continua en las técnicas más actualizadas de kinesiología.",
    color: "#0891b2",
    bg: "#EFF9FC",
  },
  {
    icon: HeartHandshake,
    title: "Trato humano y cercano",
    desc: "Nos importa cómo te sentís. Preguntamos, escuchamos y acompañamos en cada etapa de tu recuperación.",
    color: "#7c3aed",
    bg: "#F5F0FF",
  },
  {
    icon: CalendarCheck,
    title: "Turnos respetados",
    desc: "Puntualidad garantizada. Tu tiempo es valioso — nuestras sesiones siempre arrancan a horario.",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Sparkles,
    title: "Espacio impecable",
    desc: "Instalaciones modernas, limpias y confortables pensadas para que te sientas a gusto desde que entrás.",
    color: "#d97706",
    bg: "#FFFBEB",
  },
  {
    icon: Clock,
    title: "Obras sociales y PAMI",
    desc: "Trabajamos con las principales obras sociales para que accedas a tu tratamiento sin complicaciones.",
    color: "#dc2626",
    bg: "#FFF1F2",
  },
];

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="opiniones"
      ref={ref}
      style={{
        position: "relative",
        background: "var(--muted)",
        overflow: "hidden",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ height: "1px", width: "2rem", background: "var(--primary)", display: "block" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--primary)" }}>
              Por qué elegirnos
            </span>
            <span style={{ height: "1px", width: "2rem", background: "var(--primary)", display: "block" }} />
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              color: "var(--foreground)",
              margin: "0 0 1rem",
            }}
          >
            Comprometidos con{" "}
            <em style={{ fontStyle: "normal", color: "var(--primary)" }}>tu bienestar</em>
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            En Corporekinesio, cada detalle está pensado para que tu experiencia
            sea segura, cómoda y efectiva.
          </p>
        </motion.div>

        {/* Grid of pillars */}
        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  borderRadius: "16px",
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  padding: "1.5rem",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: "44px",
                    height: "44px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: p.bg,
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ width: "22px", height: "22px", color: p.color }} strokeWidth={1.75} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      margin: "0 0 0.375rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--muted-foreground)",
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              padding: "0.75rem 1.75rem",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg,#1A73E8,#1558b0)",
              boxShadow: "0 4px 24px 0 #1A73E840",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px 0 #1A73E850";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px 0 #1A73E840";
            }}
          >
            Reservar mi turno
          </a>
        </motion.div>
      </div>

      {/* Mobile: 2-col grid */}
      <style>{`
        @media (max-width: 1023px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
