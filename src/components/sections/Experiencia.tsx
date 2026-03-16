"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Star } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
    }),
};

const pillars = [
    {
        icon: Leaf,
        title: "Bienestar Integral",
        desc: "Tratamos tu cuerpo y tu mente como un todo. Cada sesión es un ritual de autocuidado.",
        color: "#68DCD2",
    },
    {
        icon: Heart,
        title: "Amor Propio",
        desc: "Te acompañamos en el camino de reconectarte con vos misma, con resultados que se ven y se sienten.",
        color: "#F2A4A7",
    },
    {
        icon: Star,
        title: "Excelencia & Calidad",
        desc: "Tecnología de vanguardia y profesionales comprometidas con tu resultado y tu experiencia.",
        color: "#68DCD2",
    },
];

export function Experiencia() {
    return (
        <section
            id="nosotros"
            className="py-24 md:py-32 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7fdf9 100%)" }}
        >
            <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: "#68DCD2",  willChange: "transform, opacity" }}
                    >
                        Nuestra Filosofía
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-5 leading-tight"
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                            fontWeight: 400,
                            color: "#333333",
                            willChange: "transform, opacity",
                        }}
                    >
                        Un espacio hecho{" "}
                        <em style={{ color: "#68DCD2" }}>para vos</em>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto max-w-2xl text-base leading-relaxed"
                        style={{ color: "#8a9ba8", willChange: "transform, opacity" }}
                    >
                        En Samadhi creemos que la belleza verdadera nace del bienestar interior.
                        Combinamos tratamientos estéticos de última generación con prácticas de
                        relajación para ofrecerte una experiencia única de reconexión y cuidado personal.
                    </motion.p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            className="group relative rounded-3xl p-8 text-center transition-all duration-300 hover:sm:-translate-y-2 hover:sm:shadow-xl active:scale-[0.98] sm:active:scale-100"
                            style={{
                                background: "#ffffff",
                                border: "1px solid rgba(104, 220, 210, 0.15)",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                                willChange: "transform, opacity",
                            }}
                        >
                            {/* Icon circle */}
                            <div
                                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                                style={{ background: `${p.color}18` }}
                            >
                                <p.icon className="h-7 w-7" style={{ color: p.color }} />
                            </div>

                            <h3
                                className="mb-3 text-xl font-semibold"
                                style={{ color: "#333333", fontWeight: 600 }}
                            >
                                {p.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#8a9ba8" }}>
                                {p.desc}
                            </p>

                            {/* Bottom accent line */}
                            <div
                                className="mx-auto mt-6 h-0.5 w-12 rounded-full opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: p.color }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-20 text-center"
                    style={{ willChange: "transform, opacity" }}
                >
                    <p
                        className="mx-auto max-w-2xl leading-relaxed"
                        style={{
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: 400,
                            fontStyle: "italic",
                            color: "#4A4A4A",
                        }}
                    >
                        "Cuidar tu imagen es cuidar tu energía. Venís como clienta y te vas
                        sintiéndote la mejor versión de vos misma."
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#68DCD2" }}>
                        — El equipo de Samadhi
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
