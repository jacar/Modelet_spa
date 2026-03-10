import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-1.jpg",
    tagline: "Tranquilidad Redefinida",
    title: "Modelet Spa",
    subtitle: "Claudia Ruíz - Cosmetologa - Cosmiatra"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/REDUCFAST.jpg",
    tagline: "Experiencia y Profesionalismo",
    title: "Estética Avanzada",
    subtitle: "Resultados Reales para tu Bienestar"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-1-1.jpg",
    tagline: "Tecnología de Vanguardia",
    title: "Dermapen",
    subtitle: "Inducción de Colágeno para una Piel Perfecta"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-2.jpg",
    tagline: "Reducción y Moldeamiento",
    title: "Hidrolipoclasia",
    subtitle: "Tratamiento efectivo para reducir celulitis y grasa localizada"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-3.jpg",
    tagline: "Rejuvenecimiento Facial",
    title: "Ácido Hialurónico",
    subtitle: "Volumen y Armonía para tu Rostro"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-4.jpg",
    tagline: "Perfilamiento Facial",
    title: "Rino modelación",
    subtitle: "Armonización nasal sin cirugía"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-5.jpg",
    tagline: "Estética Facial",
    title: "Alisamiento Nasal",
    subtitle: "Define y perfecciona tu perfil"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-6.jpg",
    tagline: "Cuidado Corporal",
    title: "Celulitis",
    subtitle: "Tratamiento integral para una piel firme y tersa"
  },
  {
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-7.jpg",
    tagline: "Cuidado de la Piel",
    title: "Limpieza Facial",
    subtitle: "Renueva la luminosidad y vida de tu piel"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-spa-ink">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Spa Atmosphere" 
              className="w-full h-full object-cover brightness-[0.6]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white/80 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mb-6">
              {slides[currentSlide].tagline}
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-9xl font-serif leading-tight md:leading-none mb-4 px-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/60 uppercase tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-xs font-bold mb-12 px-4">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap px-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-6 sm:w-8 md:w-12 h-1 transition-all duration-500 ${
                currentSlide === idx ? "bg-white w-10 sm:w-12 md:w-20" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center"
        >
          <div className="w-px h-24 bg-white/30 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}
