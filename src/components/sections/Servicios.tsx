"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
    Sparkles,
    Wind,
    Zap,
    Gem,
    ChevronRight,
    Leaf,
    Brain,
    Snowflake,
    Waves,
    Scissors,
    Eye,
    ShoppingBag,
    Heart,
} from "lucide-react";

const WA_LINK =
    "https://wa.me/5493413656207?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";

const categories = [
    {
        id: "facial",
        label: "Facial",
        icon: Sparkles,
        color: "#F2A4A7",
        lightBg: "#fdf5f5",
        tagline: "Renová tu piel, recuperá tu brillo",
        services: [
            {
                icon: Sparkles,
                name: "Tratamientos Faciales",
                desc: "Limpiezas profundas, hidratación, luminosidad y rejuvenecimiento adaptados a tu tipo de piel.",
            },
            {
                icon: Eye,
                name: "Pestañas y Cejas",
                desc: "Diseño, lifting, tinte y extensiones para una mirada perfecta y definida.",
            },
            {
                icon: Heart,
                name: "Medicina Estética",
                desc: "Procedimientos no invasivos para resultados visibles: rellenos, toxina botulínica y más.",
            },
        ],
    },
    {
        id: "bienestar",
        label: "Bienestar",
        icon: Leaf,
        color: "#68DCD2",
        lightBg: "#f0fbfa",
        tagline: "Reconectá cuerpo, mente y energía",
        services: [
            {
                icon: Wind,
                name: "Masajes",
                desc: "Masajes relajantes, descontracturantes y terapéuticos para liberar tensiones y recuperar la calma.",
            },
            {
                icon: Brain,
                name: "Reiki",
                desc: "Terapia energética que equilibra tus chakras, reduce el estrés y promueve la sanación integral.",
            },
            {
                icon: Leaf,
                name: "Nutrición",
                desc: "Asesoramiento nutricional personalizado para acompañar tus tratamientos desde adentro.",
            },
        ],
    },
    {
        id: "tecnologia",
        label: "Tecnología",
        icon: Zap,
        color: "#68DCD2",
        lightBg: "#f0fbfa",
        tagline: "Resultados reales con tecnología avanzada",
        services: [
            {
                icon: Snowflake,
                name: "Criolipólisis",
                desc: "Eliminación definitiva de grasa localizada mediante frío controlado. Sin cirugía, sin recuperación.",
            },
            {
                icon: Waves,
                name: "Ultracavitación",
                desc: "Ultrasonido focalizado para reducir medidas y moldear el cuerpo de forma no invasiva.",
            },
            {
                icon: Zap,
                name: "Depilación Definitiva",
                desc: "Sistema de última generación para eliminar el vello en forma permanente con total comodidad.",
            },
        ],
    },
    {
        id: "beauty",
        label: "Beauty",
        icon: Gem,
        color: "#F2A4A7",
        lightBg: "#fdf5f5",
        tagline: "Detalles que hacen la diferencia",
        services: [
            {
                icon: Scissors,
                name: "Manicuria",
                desc: "Manicuria tradicional, semipermanente y decoraciones para manos perfectas en todo momento.",
            },
            {
                icon: Heart,
                name: "Corporal Manual",
                desc: "Técnicas manuales de mantenimiento corporal para tonificar, drenar y mejorar la piel.",
            },
            {
                icon: Sparkles,
                name: "Alpha Synergy",
                desc: "Tecnología exclusiva para tratamientos corporales de alta performance y resultados rápidos.",
            },
            {
                icon: ShoppingBag,
                name: "Productos",
                desc: "Líneas de cosmética profesional disponibles para que continúes tu rutina en casa.",
            },
        ],
    },
];

export function Servicios() {
    const [active, setActive] = useState(0);
    const cat = categories[active];

    return (
        <section
            id="servicios"
            className="py-24 md:py-32 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #f7fdf9 0%, #ffffff 100%)" }}
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
                        Nuestros Servicios
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-4 leading-tight"
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                            fontWeight: 400,
                            color: "#333333",
                        }}
                    >
                        Todo lo que necesitás,{" "}
                        <em style={{ color: "#F2A4A7" }}>en un solo lugar</em>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto max-w-xl text-base leading-relaxed"
                        style={{ color: "#8a9ba8" }}
                    >
                        Desde tratamientos faciales hasta bienestar energético, combinamos
                        técnicas y tecnología para cuidarte de pies a cabeza.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10 flex flex-wrap items-center justify-center gap-3"
                >
                    {categories.map((c, i) => {
                        const Icon = c.icon;
                        const isActive = i === active;
                        return (
                            <button
                                key={c.id}
                                onClick={() => setActive(i)}
                                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                                style={{
                                    background: isActive ? c.color : "rgba(255,255,255,0.8)",
                                    color: isActive ? "#ffffff" : "#8a9ba8",
                                    border: `1px solid ${isActive ? c.color : "rgba(104,220,210,0.2)"}`,
                                    boxShadow: isActive ? `0 8px 20px ${c.color}40` : "none",
                                    transform: isActive ? "scale(1.05)" : "scale(1)",
                                }}
                            >
                                <Icon className="h-4 w-4" />
                                {c.label}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Services Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Tagline */}
                        <p
                            className="mb-8 text-center text-sm font-medium"
                            style={{ color: cat.color }}
                        >
                            {cat.tagline}
                        </p>

                        {/* Service Cards */}
                        <div
                            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${cat.services.length === 4
                                    ? "lg:grid-cols-4"
                                    : "lg:grid-cols-3"
                                }`}
                        >
                            {cat.services.map((service, i) => {
                                const SIcon = service.icon;
                                return (
                                    <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                        className="group relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
                                        style={{
                                            background: cat.lightBg,
                                            border: `1px solid ${cat.color}22`,
                                        }}
                                    >
                                        <div
                                            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                                            style={{ background: `${cat.color}20` }}
                                        >
                                            <SIcon className="h-5 w-5" style={{ color: cat.color }} />
                                        </div>
                                        <h3
                                            className="mb-2 text-lg font-semibold"
                                            style={{
                                                color: "#333333",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {service.name}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "#8a9ba8" }}>
                                            {service.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <p className="mb-5 text-sm" style={{ color: "#8a9ba8" }}>
                        ¿No sabés qué tratamiento es el ideal para vos?{" "}
                        <strong>¡Consultanos!</strong>
                    </p>
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
                            Pedir asesoramiento gratis
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
