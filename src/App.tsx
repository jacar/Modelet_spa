/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Protocols from "./components/Protocols";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LatestProcedures from "./components/LatestProcedures";
import Reviews from "./components/Reviews";
import Map from "./components/Map";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-spa-olive selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-spa-olive z-[60] origin-left" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Subtle transition section */}
        <section className="bg-spa-bg py-24 flex justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-xl px-6"
          >
            <p className="font-serif italic text-2xl text-spa-ink/50 leading-relaxed">
              "En el silencio del spa, encontramos los susurros de nuestra propia sabiduría."
            </p>
          </motion.div>
        </section>

        <Services />
        
        <LatestProcedures />
        
        <Reviews />
        
        <About />

        <Protocols />

        <Map />

        {/* Experience Section - Minimalist Grid */}
        <section id="experiencia" className="py-32 bg-spa-bg px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-[600px] rounded-3xl overflow-hidden relative group">
                   <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000" 
                    alt="Experiencia 1" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-black/20 flex items-end p-12">
                      <h3 className="text-white text-4xl font-serif">La Experiencia</h3>
                   </div>
                </div>
                <div className="h-[600px] rounded-3xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
                    alt="Experiencia 3" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-end p-12">
                    <h3 className="text-white text-4xl font-serif">Paz Interior</h3>
                  </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
