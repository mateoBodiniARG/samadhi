"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

const mainObras = [
  { name: "PAMI", highlight: "Descuentos Exclusivos", primary: true },
  { name: "IAPOS" },
  { name: "Swiss Medical" },
  { name: "Galeno" },
  { name: "SanCor Salud" },
  { name: "Prevención Salud" },
  { name: "Jerárquicos" },
  { name: "Federada Salud" },
  { name: "La Segunda" },
  { name: "Avalian" },
];

export function ObrasSociales() {
  return (
    <section id="obras-sociales" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-secondary/40">
      
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#5B7B88]/10 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4"
          >
            <ShieldCheck className="h-4 w-4" />
            Amplia Cobertura Médica
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Trabajamos con las principales Obras Sociales del país
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Nos ocupamos de que tu tratamiento esté respaldado. Consulta por la cobertura específica de tu plan para kinesiología y terapias integrales.
          </motion.p>
        </div>

        {/* Highlighted Banner for PAMI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm shadow-inner hidden md:flex">
                  <Star className="h-8 w-8 text-white fill-white/50" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-1">Afiliados a PAMI</h3>
                  <p className="text-primary-foreground/80 font-medium text-lg">
                    Cuentan con <span className="text-white font-bold underline decoration-wavy decoration-white/50 underline-offset-4">Descuentos Exclusivos</span> en nuestros tratamientos.
                  </p>
                </div>
              </div>
              
              <a 
                href="https://walink.co/e12b25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-primary hover:bg-white/90 px-8 py-3.5 text-sm font-bold shadow-sm transition-all hover:scale-105 shrink-0"
              >
                Consultar Beneficio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Logo/Name Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {mainObras.filter(o => !o.primary).map((obra, i) => (
              <motion.div
                key={obra.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col items-center justify-center rounded-2xl bg-white aspect-[2/1] border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all p-4"
              >
                <div className="flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-bold text-foreground sm:text-lg text-sm truncate">{obra.name}</span>
                </div>
              </motion.div>
            ))}
            
            {/* 'Otras' generic card */}
            <motion.div
              className="flex flex-col items-center justify-center rounded-2xl bg-secondary aspect-[2/1] border border-primary/10 p-4"
            >
              <div className="flex items-center justify-center flex-col text-center opacity-80">
                <span className="font-bold text-primary sm:text-lg text-sm">+ Muchas otras</span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Consultanos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
