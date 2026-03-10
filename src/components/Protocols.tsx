import { motion } from "motion/react";
import { ClipboardCheck, Sparkles, Activity, ShieldCheck } from "lucide-react";

const protocols = [
  {
    icon: <ClipboardCheck size={32} />,
    title: "Diagnóstico Clínico",
    description: "Iniciamos con una evaluación exhaustiva de tu piel y estructura corporal para identificar necesidades específicas y objetivos reales.",
    step: "01"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Diseño Personalizado",
    description: "Creamos un protocolo único combinando técnicas de cosmiatría y estética avanzada, seleccionando los activos y tecnologías ideales para ti.",
    step: "02"
  },
  {
    icon: <Activity size={32} />,
    title: "Ejecución de Alta Precisión",
    description: "Aplicación de tratamientos (Dermapen, Ácido Hialurónico, Reducfast, etc.) bajo estrictos estándares clínicos y la maestría de Claudia Ruíz.",
    step: "03"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Seguimiento Post-Clínico",
    description: "Acompañamiento continuo y recomendaciones de mantenimiento para asegurar que los resultados sean duraderos y satisfactorios.",
    step: "04"
  }
];

export default function Protocols() {
  return (
    <section id="protocolos" className="py-32 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-spa-olive uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Metodología Modelet</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8">Protocolos de Excelencia</h2>
          <p className="text-spa-ink/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada tratamiento en Modelet Spa sigue un rigor clínico diseñado para garantizar seguridad, eficacia y una experiencia transformadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-spa-bg border border-spa-ink/5 hover:border-spa-olive/20 transition-all group relative overflow-hidden"
            >
              <div className="text-spa-olive/20 font-serif text-8xl absolute -top-4 -right-4 group-hover:text-spa-olive/10 transition-colors">
                {protocol.step}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-spa-olive mb-8 relative z-10">
                {protocol.icon}
              </div>
              
              <h3 className="text-2xl font-serif mb-4 relative z-10">{protocol.title}</h3>
              <p className="text-spa-ink/60 text-sm leading-relaxed relative z-10">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[50px] bg-spa-olive text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h4 className="text-3xl font-serif mb-4">¿Lista para iniciar tu transformación?</h4>
            <p className="opacity-80 text-lg">Agenda hoy tu cita de valoración y descubre el protocolo ideal para tus objetivos.</p>
          </div>
          <a 
            href="https://wa.me/573186483523?text=Hola%20Claudia,%20quiero%20agendar%20mi%20cita%20de%20valoración." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-spa-olive rounded-full uppercase tracking-widest text-xs font-bold hover:bg-spa-bg transition-colors shrink-0"
          >
            Agendar Valoración
          </a>
        </div>
      </div>
    </section>
  );
}
