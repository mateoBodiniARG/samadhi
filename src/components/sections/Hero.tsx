"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ChevronDown, Sparkles } from "lucide-react";

const WA_LINK =
  "https://wa.me/5493413656207?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #f0fbfa 40%, #fdf5f5 75%, #ffffff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "#68DCD2" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: "#F2A4A7" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "#68DCD2" }}
      />

      {/* Floating decorative petals */}
      {[
        { size: 180, top: "8%", right: "6%", opacity: 0.12, delay: 0 },
        { size: 100, top: "20%", left: "4%", opacity: 0.08, delay: 2 },
        { size: 140, bottom: "12%", left: "8%", opacity: 0.10, delay: 1 },
        { size: 80, bottom: "20%", right: "12%", opacity: 0.09, delay: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            bottom: (p as { bottom?: string }).bottom,
            left: (p as { left?: string }).left,
            right: (p as { right?: string }).right,
            background:
              i % 2 === 0
                ? `rgba(104, 220, 210, ${p.opacity})`
                : `rgba(242, 164, 167, ${p.opacity})`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i * 1.5,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(104, 220, 210, 0.12)",
            color: "#3a9e96",
            border: "1px solid rgba(104, 220, 210, 0.3)",
          }}
        >
          <Sparkles className="h-3 w-3" />
          Estética Facial & Corporal · Rosario
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-4 leading-[1.15] tracking-tight px-2"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 5rem)",
            fontWeight: 600,
            color: "#333333",
          }}
        >
          Cree en ti y
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 50%, #F2A4A7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
              paddingBottom: "0.05em",
            }}
          >
            todo será posible
          </span>
        </motion.h1>


        {/* Subtitle */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
          style={{ color: "#8a9ba8", fontWeight: 400 }}
        >
          Un espacio diseñado para que te reconectes con vos misma. Tratamientos
          faciales, corporales y de bienestar que cuidan tu cuerpo y tu alma.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #68DCD2 0%, #5bc5bb 100%)",
            }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2.5 h-5 w-5" />
              Pedir turno por WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
            style={{
              color: "#4A4A4A",
              borderColor: "rgba(104, 220, 210, 0.4)",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            <a href="#servicios">Ver nuestros servicios</a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {[
            { value: "+8", label: "Años de experiencia" },
            { value: "+2500", label: "Clientas felices" },
            { value: "14+", label: "Tipos de tratamientos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-semibold"
                style={{ color: "#68DCD2" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#68DCD2", opacity: 0.7 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" style={{ color: "#68DCD2" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
