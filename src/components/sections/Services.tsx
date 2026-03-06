"use client";

import { motion, Easing } from "framer-motion";
import { Stethoscope, Activity, Sparkles, Accessibility, Brain, HandHeart, Wind, Droplets, Dumbbell } from "lucide-react";

const serviceCategories = [
  {
    title: "Kinesiología Integral",
    icon: <Activity className="h-6 w-6" />,
    services: [
      { name: "Lesiones Deportivas y Traumatológicas", desc: "Rehabilitación específica para recuperar tu nivel óptimo post-lesión o cirugía.", icon: <Activity className="h-5 w-5" /> },
      { name: "Neurología y Respiratoria", desc: "Tratamientos enfocados en patologías del sistema nervioso y afecciones pulmonares.", icon: <Brain className="h-5 w-5" /> },
      { name: "Geriatría y Discapacidad", desc: "Atención especializada para mejorar la movilidad y calidad de vida en adultos mayores y pacientes con discapacidad.", icon: <Accessibility className="h-5 w-5" /> },
    ]
  },
  {
    title: "Terapias Especiales",
    icon: <HandHeart className="h-6 w-6" />,
    services: [
      { name: "Drenaje Linfático", desc: "Técnica manual suave para estimular la circulación y eliminar la retención de líquidos.", icon: <Droplets className="h-5 w-5" /> },
      { name: "Taping Neuromuscular", desc: "Vendaje terapéutico para aliviar el dolor, reducir la inflamación y facilitar el movimiento.", icon: <Stethoscope className="h-5 w-5" /> },
      { name: "Ventosas Neumáticas", desc: "Terapia de succión para descontracturar, mejorar el flujo sanguíneo y aliviar dolores crónicos.", icon: <Wind className="h-5 w-5" /> },
    ]
  },
  {
    title: "Bienestar y Estética",
    icon: <Sparkles className="h-6 w-6" />,
    services: [
      { name: "Gimnasio Terapéutico y Elongación", desc: "Rutinas guiadas para potenciar tu fuerza funcional y flexibilidad preventiva.", icon: <Dumbbell className="h-5 w-5" /> },
      { name: "Depilación Definitiva", desc: "Tecnología avanzada para el cuidado estético e integral de tu piel.", icon: <Sparkles className="h-5 w-5" /> },
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as Easing } },
};

export function Services() {
  return (
    <section id="servicios" className="py-24 relative bg-secondary/30">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white text-primary shadow-sm border border-border"
          >
            <Stethoscope className="h-4 w-4" />
            Especialidades Médicas
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Cuidado Integral del Movimiento
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos un enfoque clínico y terapéutico completo, abarcando desde la rehabilitación específica hasta el bienestar preventivo y estético.
          </p>
        </motion.div>

        {/* Categories Layout */}
        <div className="space-y-20">
          {serviceCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {category.services.map((svc) => (
                  <motion.div
                    key={svc.name}
                    variants={cardVariants}
                    className="group relative flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover reveal gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      {svc.icon}
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{svc.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
