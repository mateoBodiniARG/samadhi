import { Hero } from "@/components/sections/Hero";
import { Experiencia } from "@/components/sections/Experiencia";
import { Servicios } from "@/components/sections/Servicios";
import { Reviews } from "@/components/sections/Reviews";
import { Ubicacion } from "@/components/sections/Ubicacion";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Experiencia />
      <Servicios />
      <Reviews />
      <Ubicacion />
      <Footer />
    </div>
  );
}
