"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Florencia Molaro",
    isLocalGuide: true,
    stars: 5,
    text: "Centro de depilación láser, tratamientos faciales, y más. La atención es excelente. La dueña es muy organizada, son responsables con los horarios y con la atención de los tratamientos que lleva cada clienta. Tienen stock de Idraët, y otras marcas de cosmetología natural.",
  },
  {
    name: "Guillermo",
    isLocalGuide: true,
    stars: 5,
    text: "Excelente atención. Desde que empecé a ir me cambió por completo la cara. Me controlaron el acné y me asesoraron para mi cuidado diario.",
  },
  {
    name: "Cristian Amoroso",
    isLocalGuide: true,
    stars: 5,
    text: "El mejor lugar de estética de Rosario desde las instalaciones hasta los profesionales que tienen, destacando a Paola del Barco que es una excelente nutricionista y con la supervisión de Meliza en todas las áreas.",
  },
  {
    name: "Ro' Ianes",
    isLocalGuide: true,
    stars: 5,
    text: "Super recomendable!! Excelente atención, puntuales, completísimo!! Hay todo tipo de tratamientos en un solo lugar.",
  },
  {
    name: "Mariana Malvarez",
    isLocalGuide: false,
    stars: 5,
    text: "Excelente atención y servicio. Las chicas y el lugar son divinos.",
  },
  {
    name: "Lucia Pérez",
    isLocalGuide: false,
    stars: 5,
    text: "Es muy buena la atención, el ambiente y todo lo que hacen ahí. Lo súper recomiendo.",
  },
  {
    name: "Susana Luna",
    isLocalGuide: true,
    stars: 5,
    text: "Sin palabras. El mejor lugar para la belleza. Geniales las chicas, maravilloso. Lo súper recomiendo. Gracias chicas por todo.",
  },
  {
    name: "Sandra Bosch",
    isLocalGuide: false,
    stars: 5,
    text: "Excelente atención y las chicas, divinas.",
  },
  {
    name: "Marce García Betrosqui",
    isLocalGuide: true,
    stars: 5,
    text: "Fantástica atención, muy profesionales para atender cada consulta.",
  },
];

const AVATAR_COLORS: Record<string, string> = {
  F: "#F2A4A7",
  G: "#68DCD2",
  C: "#a8e6e0",
  R: "#F2A4A7",
  M: "#68DCD2",
  L: "#f8c8ca",
  S: "#68DCD2",
};
function avatarColor(name: string) {
  return AVATAR_COLORS[name[0]] ?? "#8a9ba8";
}

// Minimal Google "G" SVG
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function Reviews() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const scrollPrev = () => { emblaApi?.scrollPrev(); autoplay.current.reset(); };
  const scrollNext = () => { emblaApi?.scrollNext(); autoplay.current.reset(); };

  return (
    <section
      id="opiniones"
      className="py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fdf5f5 0%, #f0fbfa 50%, #ffffff 100%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#68DCD2",  willChange: "transform, opacity" }}
          >
            Google Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-3xl md:text-5xl font-semibold leading-tight"
            style={{ color: "#333333",  willChange: "transform, opacity" }}
          >
            Lo que dicen nuestras{" "}
            <span style={{ color: "#F2A4A7" }}>clientas</span>
          </motion.h2>
          {/* Google rating bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex items-center justify-center gap-2"
            style={{ willChange: "opacity" }}
          >
            <GoogleIcon />
            <span className="text-sm font-semibold" style={{ color: "#333333" }}>
              4.9
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#FBBC05" }} />
              ))}
            </div>
            <span className="text-sm" style={{ color: "#8a9ba8" }}>
              en Google
            </span>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="flex-shrink-0 w-[min(340px,85vw)]"
                >
                  <div
                    className="h-full rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(104, 220, 210, 0.18)",
                      boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Top row: avatar + name + google icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
                          style={{ background: avatarColor(r.name) }}
                        >
                          {r.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight" style={{ color: "#333333" }}>
                            {r.name}
                          </p>
                          {r.isLocalGuide && (
                            <p className="text-xs" style={{ color: "#8a9ba8" }}>
                              Local Guide
                            </p>
                          )}
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(r.stars)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#FBBC05" }} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#4A4A4A" }}>
                      "{r.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
              style={{
                borderColor: "rgba(104, 220, 210, 0.35)",
                color: "#68DCD2",
                background: "#ffffff",
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { emblaApi?.scrollTo(i); autoplay.current.reset(); }}
                  aria-label={`Ir a reseña ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: selectedIndex === i ? 20 : 8,
                    height: 8,
                    background: selectedIndex === i ? "#68DCD2" : "rgba(104,220,210,0.3)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
              style={{
                borderColor: "rgba(104, 220, 210, 0.35)",
                color: "#68DCD2",
                background: "#ffffff",
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
