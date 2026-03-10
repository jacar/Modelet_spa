import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Carolina Mendoza",
    procedure: "Hidrolipoclasia",
    text: "Increíble cambio. El equipo de Modelet Spa es muy profesional y los resultados en mi abdomen son notorios desde la primera sesión. ¡Súper recomendados!",
    rating: 5
  },
  {
    name: "Andrés Restrepo",
    procedure: "Limpieza Facial Profunda",
    text: "Mi piel nunca se había sentido tan limpia y renovada. El ambiente es súper relajante y la atención al detalle es excepcional.",
    rating: 5
  },
  {
    name: "Valentina Gómez",
    procedure: "Masaje de Moldeamiento",
    text: "He probado varios lugares en Medellín y ninguno como este. La técnica de los masajes es superior y el espacio es simplemente hermoso.",
    rating: 5
  },
  {
    name: "Mariana Silva",
    procedure: "Radiofrecuencia",
    text: "Excelente servicio. Me explicaron todo el proceso con mucha paciencia y me sentí muy cómoda durante todo el tratamiento. Los resultados son reales.",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="resenas" className="py-32 bg-spa-olive text-spa-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-60">Testimonios</span>
          <h2 className="text-5xl md:text-6xl font-serif">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 opacity-10">
            <Quote size={120} />
          </div>

          <div className="relative min-h-[450px] md:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center px-12"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-white" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold tracking-widest uppercase">{reviews[currentIndex].name}</h4>
                  <p className="text-sm opacity-60 uppercase tracking-widest mt-2">{reviews[currentIndex].procedure}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-spa-olive transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-spa-olive transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
