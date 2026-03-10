import { motion } from "motion/react";

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-spa-olive text-spa-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-full overflow-hidden border-[20px] border-white/10"
          >
            <img 
              src="https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/modelet-6.jpg" 
              alt="Claudia Ruíz - Modelet Spa" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 bg-spa-bg text-spa-ink p-12 rounded-3xl hidden md:block shadow-2xl">
            <p className="font-serif text-3xl italic leading-tight">
              17 Años de <br /> Experiencia
            </p>
            <p className="text-xs uppercase tracking-widest mt-4 font-bold opacity-60">Claudia Ruíz</p>
          </div>
        </div>

        <div>
          <span className="uppercase tracking-[0.3em] text-[10px] mb-8 block opacity-60">Nuestra Filosofía</span>
          <h2 className="text-4xl md:text-6xl mb-10 leading-tight">Ciencia y Estética en Armonía en Medellín.</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            En Modelet Spa, el referente de bienestar en Medellín bajo la dirección de Claudia Ruíz, fusionamos la ciencia de la cosmiatría con la estética avanzada para ofrecerte resultados reales y transformadores. Nuestra filosofía se centra en realzar tu belleza natural a través de protocolos personalizados que combinan tecnología de vanguardia y una trayectoria clínica de 17 años.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-12">
            Desde la armonización facial con ácido hialurónico y rino-modelación, hasta tratamientos corporales de alta precisión como la hidrolipoclasia y Reducfast, cada procedimiento es ejecutado con la maestría y el cuidado que tu cuerpo merece. No solo transformamos tu apariencia, renovamos tu confianza.
          </p>
          <button 
            onClick={() => document.getElementById('protocolos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/30 rounded-full uppercase tracking-widest text-xs hover:bg-white hover:text-spa-olive transition-all"
          >
            Descubre Nuestros Protocolos
          </button>
        </div>
      </div>
    </section>
  );
}
