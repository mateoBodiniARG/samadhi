"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Users, Award } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK = "https://walink.co/e12b25";

const stats = [
  { icon: <Users className="h-4 w-4" />, value: "500+", label: "Pacientes" },
  { icon: <Award className="h-4 w-4" />, value: "8+", label: "Años de exp." },
  { icon: <Star className="h-4 w-4 fill-current" />, value: "5", label: "Valoración" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle blue tint on left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #EEF4FF 0%, #ffffff 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "50%",
          height: "100%",
          opacity: 0.035,
          backgroundImage:
            "radial-gradient(circle, #1A73E8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          {/* Badge */}
          <motion.div {...fadeUp(0)}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.375rem 1rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                background: "#EEF4FF",
                color: "#1A73E8",
                border: "1px solid #1A73E833",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#1A73E8",
                  display: "inline-block",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              Lic. Valero María del Rocío · Mat. 2308/2
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.08)}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              <span style={{ color: "#1e293b" }}>Corpore</span>
              <br />
              <span style={{ position: "relative", display: "inline-block", color: "#1A73E8" }}>
                Kinesiología
                {/* wavy underline */}
                <svg
                  aria-hidden="true"
                  style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%" }}
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M2 7C60 2 150 2 298 7"
                    stroke="#1A73E8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
              <br />
              <span style={{ color: "#5b7b88", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 700 }}>
                &amp; Fisiatría
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.16)}
            style={{
              maxWidth: "480px",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "#4a4a4a",
              margin: 0,
            }}
          >
            Tratamientos personalizados para rehabilitar lesiones de manera segura y
            eficaz, centrados en los objetivos de recuperación de cada paciente.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.24)} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.75rem 1.5rem",
                fontSize: "0.875rem",
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
              <Calendar className="h-4 w-4" />
              Sacar Turno
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.32)}
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingTop: "0.5rem" }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A73E8",
                  }}
                >
                  {s.icon}
                  {s.value}
                </span>
                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#6b7280" }}>
                  {s.label}
                </span>
              </div>
            ))}
            <div style={{ width: "1px", height: "40px", background: "#E2E8F0", margin: "0 0.5rem" }} />
            <span style={{ fontSize: "0.75rem", color: "#6b7280", maxWidth: "120px", lineHeight: 1.4 }}>
              Obras sociales y PAMI aceptados
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Main image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              height: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 32px 80px 0 #1A73E820, 0 8px 32px 0 #00000012",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-clinic.png"
              alt="Consultorio de Kinesiología y Fisiatría Corpore"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Bottom overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background: "linear-gradient(to top, #1A73E815, transparent)",
              }}
            />
          </div>

          {/* Floating: availability */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-32px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              background: "#fff",
              padding: "12px 16px",
              boxShadow: "0 8px 32px 0 #00000018",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "#EEF4FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Calendar className="h-5 w-5" style={{ color: "#1A73E8" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.7rem", color: "#6b7280" }}>Próximo turno</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1e293b" }}>
                Disponible hoy
              </span>
            </div>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                marginLeft: "4px",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                flexShrink: 0,
              }}
            />
          </motion.div>

          {/* Floating: rating */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "-16px",
              right: "-24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              background: "#fff",
              padding: "10px 16px",
              boxShadow: "0 8px 32px 0 #00000018",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    style={{ width: "14px", height: "14px", fill: "#FBBF24", color: "#FBBF24", flexShrink: 0 }}
                  />
                ))}
              </div>
              <span style={{ marginTop: "2px", fontSize: "0.7rem", fontWeight: 600, color: "#1e293b" }}>
                5 · Google Reviews
              </span>
            </div>
          </motion.div>

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-40px",
              top: "-40px",
              width: "256px",
              height: "256px",
              borderRadius: "50%",
              background: "#1A73E8",
              opacity: 0.08,
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 4rem 1.5rem !important;
          }
          .hero-grid > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
