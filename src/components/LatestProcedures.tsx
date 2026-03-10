import { motion } from "motion/react";

const procedures = [
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/fd.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/sew.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/et.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/ert.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/03.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/002.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/001.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/Gemini_Generated_Image_avrxt4avrxt4avrx.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/gg.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/dgf.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/rt.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/ty.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/04.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/43.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/5t.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/r5.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/trr.png",
  "https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/dtg.png"
];

export default function LatestProcedures() {
  return (
    <section id="procedimientos" className="py-32 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-spa-olive uppercase tracking-widest text-xs font-semibold mb-4 block">Resultados Reales</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">Nuestros últimos procedimientos.</h2>
          <p className="text-spa-ink/60 mt-6 max-w-xl text-lg leading-relaxed">
            Explora la transformación y el cuidado que brindamos en cada uno de nuestros tratamientos. Resultados visibles que hablan de nuestra dedicación.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {procedures.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="aspect-square rounded-2xl overflow-hidden bg-spa-bg group relative cursor-pointer"
            >
              <img
                src={url}
                alt={`Procedimiento ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-spa-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
