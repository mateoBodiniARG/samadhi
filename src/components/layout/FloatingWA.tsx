"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5493413000000?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20un%20turno.";

export function FloatingWA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="h-7 w-7 relative z-10" />
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-xl bg-[#333333]/90 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-opacity group-hover:block backdrop-blur-sm">
          ¡Pedí tu turno! 🌸
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-[#333333]/90" />
        </span>
      </a>
    </motion.div>
  );
}
