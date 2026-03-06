"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Shirt, FileText, Clock } from "lucide-react";
import { useRef, useState } from "react";

type IndicacionItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  note?: string;
};

const indicaciones: IndicacionItem[] = [
  {
    id: "ropa",
    icon: <Shirt className="h-5 w-5" />,
    title: "Vestimenta Adecuada",
    content: [
      "Te recomendamos venir con ropa cómoda y deportiva para facilitar la evaluación y los ejercicios.",
      "Si tu lesión es en rodilla o pierna, es ideal traer pantalón corto.",
      "Para lesiones de hombro, sugerimos traer una musculosa o prenda holgada.",
    ],
    note: "Contamos con vestuarios por si necesitás cambiarte al llegar a la clínica.",
  },
  {
    id: "estudios",
    icon: <FileText className="h-5 w-5" />,
    title: "Estudios Previos",
    content: [
      "Recordá traer cualquier estudio de imagen reciente (radiografías, resonancias magnéticas, ecografías).",
      "Si tenés derivación médica o pedido de kinesiología, traelo impreso o en formato digital.",
    ],
    note: "Revisaremos todos tus estudios en la primera sesión para planificar un tratamiento adecuado.",
  },
  {
    id: "puntualidad",
    icon: <Clock className="h-5 w-5" />,
    title: "Turnos y Puntualidad",
    content: [
      "Te pedimos llegar 10 minutos antes de tu primer turno para completar la ficha clínica.",
      "Si no podés asistir, avisanos con al menos 24hs de anticipación para reprogramar tu lugar.",
    ],
    note: "Nos esforzamos por respetar los horarios para brindar una atención de calidad y sin esperas.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  item: IndicacionItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  inView: boolean;
}) {
  const isList = Array.isArray(item.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
    >
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-primary/30 shadow-md bg-background"
            : "border-border bg-background hover:border-primary/20 hover:shadow-sm"
        }`}
      >
        {/* Header */}
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          {/* Index number */}
          <span
            className="text-[11px] font-black tracking-widest tabular-nums shrink-0"
            style={{ color: isOpen ? "var(--primary)" : undefined }}
          >
            0{index + 1}
          </span>

          {/* Icon */}
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
              isOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
            }`}
          >
            {item.icon}
          </div>

          {/* Title */}
          <span className="flex-1 font-bold text-foreground text-base">
            {item.title}
          </span>

          {/* Arrow */}
          <ChevronRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          />
        </button>

        {/* Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-1 border-t border-border/60">
                {/* Left accent bar + content */}
                <div
                  className="pl-5 mt-4 space-y-3"
                  style={{ borderLeft: "2px solid var(--primary)" }}
                >
                  {isList ? (
                    <ul className="space-y-3">
                      {(item.content as string[]).map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07, duration: 0.25 }}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.content as string}
                    </p>
                  )}

                  {item.note && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 flex items-start gap-2 rounded-xl px-4 py-3 bg-primary/8"
                    >
                      <span className="text-xs font-semibold leading-relaxed text-primary">
                        {item.note}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Indicaciones() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="indicaciones" ref={ref} className="relative bg-background py-20 sm:py-28">

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
            Guías para pacientes
          </span>
        </motion.div>

        {/* ── Layout ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Headline block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ maxWidth: "36rem" }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] text-foreground">
              Todo lo que necesitás{" "}
              <em className="not-italic text-primary">saber</em>
              <br />
              antes de venir
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Seguí estas indicaciones para que tu primera visita sea fluida y podamos enfocarnos en lo más importante: tu recuperación.
            </p>
          </motion.div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "42rem" }}>
            {indicaciones.map((item, i) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={i}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                inView={inView}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}