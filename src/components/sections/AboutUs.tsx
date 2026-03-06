"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Zap,
  Brain,
  Wind,
  Dumbbell,
  Droplets,
  Users,
  Star,
  Award,
  Layers,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { value: 5, suffix: "+", label: "Años de trayectoria", icon: Award },
  { value: 300, suffix: "+", label: "Pacientes acompañados", icon: Users },
  { value: 10, suffix: "", label: "Especialidades", icon: Layers },
  { value: 4.9, suffix: "★", label: "Calificación en Google", icon: Star },
];

const specialties = [
  { icon: Activity, label: "Lesiones deportivas y traumatológicas", color: "#16a34a" },
  { icon: Droplets, label: "Drenaje linfático", color: "#0284c7" },
  { icon: Users, label: "Geriatría", color: "#7c3aed" },
  { icon: Brain, label: "Neurología", color: "#db2777" },
  { icon: Wind, label: "Respiratoria", color: "#0891b2" },
  { icon: Zap, label: "Taping neuromuscular", color: "#d97706" },
  { icon: Layers, label: "Ventosas neumáticas", color: "#dc2626" },
  { icon: Dumbbell, label: "Gimnasio terapéutico", color: "#059669" },
  { icon: Activity, label: "Discapacidad", color: "#6366f1" },
];

/* ─── Animated counter ───────────────────────────────────────── */
function useCounter(target: number, duration = 1400, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);
  return count;
}

/* ─── Stat strip item ─────────────────────────────────────────── */
function StatItem({
  stat,
  index,
  triggered,
}: {
  stat: (typeof stats)[0];
  index: number;
  triggered: boolean;
}) {
  const count = useCounter(stat.value, 1400, triggered);
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-start gap-1 border-l-2 border-primary/30 pl-5 py-1"
    >
      <div className="flex items-center gap-2 text-primary/70">
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-muted-foreground">
          {stat.label}
        </span>
      </div>
      <span className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground leading-none">
        {count}
        <span className="text-primary text-2xl sm:text-3xl">{stat.suffix}</span>
      </span>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-background py-20 sm:py-28 overflow-hidden"
    >


      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">

        {/* ── Eyebrow label ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Sobre nosotros
          </span>
          <span className="h-px w-8 bg-primary" />
        </motion.div>

        {/* ── Content ── */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.08] text-foreground">
              Kinesiología{" "}
              <em className="not-italic text-primary">con foco</em>
              <br />
              en tu recuperación
            </h2>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              En <strong className="font-semibold text-foreground">Corporekinesio</strong>, combinamos el rigor profesional con un trato humano y cercano. Nuestra directora,{" "}
              <span className="font-medium text-foreground">
                Lic. Valero María del Rocío (Mat. 2308/2)
              </span>
              , lidera un equipo comprometido con tu bienestar desde el primer día.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cada tratamiento es diseñado a medida, integrando técnicas modernas y un seguimiento constante. Porque recuperarse bien no es solo volver al punto de partida, sino superarlo.
            </p>
          </motion.div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} triggered={inView} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Especialidades
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.04, ease: "easeOut" }}
                    className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    <Icon
                      className="h-3 w-3 shrink-0"
                      style={{ color: s.color }}
                      strokeWidth={2.5}
                    />
                    <span className="text-[12px] font-medium text-foreground whitespace-nowrap">
                      {s.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}