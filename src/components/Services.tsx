import { motion } from "motion/react";
import { 
  Sparkles, Droplets, PenTool, Syringe, Activity, Wind, FlaskConical, 
  TrendingDown, Waves, Dumbbell, Hand, Grid, Flame, Shield, Scissors
} from "lucide-react";

const facialServices = [
  { 
    name: "Limpieza facial (Básica, Profunda)", 
    icon: <Sparkles size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-7.jpg"
  },
  { 
    name: "Alta hidratación", 
    icon: <Droplets size={20} />,
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Dermapen", 
    icon: <PenTool size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/derma-1.png"
  },
  { 
    name: "Ácido hialurónico", 
    icon: <Syringe size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-3.jpg"
  },
  { 
    name: "Cera", 
    icon: <Flame size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/CERA.png"
  },
  { 
    name: "Escleroterapia", 
    icon: <Shield size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-7.jpg"
  }
];

const corporalServices = [
  { 
    name: "Tratamiento Reducfast", 
    icon: <TrendingDown size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/derma.png"
  },
  { 
    name: "Hidrolipoclasia (Micro-canula)", 
    icon: <Waves size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-2.jpg"
  },
  { 
    name: "Tonificación", 
    icon: <Dumbbell size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/Diseno-sin-titulo-5.png"
  },
  { 
    name: "Masaje reductores", 
    icon: <Hand size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/Diseno-sin-titulo-6.png"
  },
  { 
    name: "Celulitis", 
    icon: <Grid size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-6.jpg"
  },
  { 
    name: "Carboxiterapia", 
    icon: <Wind size={20} />,
    image: "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/Diseno-sin-titulo-7.png"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 md:px-24 bg-spa-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-spa-olive uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Excelencia en Estética en Medellín</span>
            <h2 className="text-4xl md:text-8xl font-serif leading-tight">Nuestros Servicios</h2>
          </div>
          <div className="hidden md:block w-px h-32 bg-spa-olive/20"></div>
          <p className="text-spa-ink/60 max-w-xs text-sm leading-relaxed italic font-serif">
            "La belleza es el equilibrio entre la ciencia y el arte del cuidado personal."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Faciales */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-px bg-spa-olive"></div>
              <h3 className="text-4xl font-serif">Tratamientos Faciales</h3>
            </div>
            <p className="text-spa-olive text-[10px] uppercase tracking-[0.3em] mb-12 font-bold opacity-60">
              Renueva la luminosidad y vida de tu piel
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facialServices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white rounded-3xl border border-spa-ink/5 hover:border-spa-olive/30 hover:shadow-xl hover:shadow-spa-olive/5 transition-all group cursor-default overflow-hidden"
                >
                  <div className="h-32 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-spa-bg flex items-center justify-center text-spa-olive group-hover:bg-spa-olive group-hover:text-white transition-colors shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-spa-ink/80 leading-tight">{service.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Corporales */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-px bg-spa-olive"></div>
              <h3 className="text-4xl font-serif">Tratamientos Corporales</h3>
            </div>
            <p className="text-spa-olive text-[10px] uppercase tracking-[0.3em] mb-12 font-bold opacity-60">
              Moldeamiento corporal con resultados sorprendentes
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corporalServices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white rounded-3xl border border-spa-ink/5 hover:border-spa-olive/30 hover:shadow-xl hover:shadow-spa-olive/5 transition-all group cursor-default overflow-hidden"
                >
                  <div className="h-32 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-spa-bg flex items-center justify-center text-spa-olive group-hover:bg-spa-olive group-hover:text-white transition-colors shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium text-spa-ink/80 leading-tight">{service.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <div className="mt-32 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-spa-olive blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <a 
              href="#contacto"
              className="relative px-16 py-8 bg-spa-ink text-white rounded-full flex flex-col items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-60">Comienza tu viaje</span>
              <span className="text-2xl font-serif">Reserva una Consulta</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
