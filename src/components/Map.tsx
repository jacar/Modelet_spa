import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";

export default function Map() {
  const address = "Cl. 45A #77 a 10, Los Pinos, Medellín, Laureles, Medellín, Antioquia";
  const mapLink = "https://maps.app.goo.gl/4a7b2u13LucVeqrq9";
  
  // Coordenadas aproximadas para el iframe basado en la dirección
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.062635465661!2d-75.5976527241355!3d6.255474426210037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429007f300001%3A0x4a7b2u13LucVeqrq9!2sCl.%2045a%20%2377-10%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Laureles%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco";

  return (
    <section id="ubicacion" className="py-32 bg-spa-bg px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-spa-olive uppercase tracking-widest text-xs font-semibold mb-4 block">Visítanos</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8">Nuestra Ubicación</h2>
            <p className="text-spa-ink/60 text-lg leading-relaxed mb-10">
              Te esperamos en el corazón de Laureles, un espacio diseñado para tu tranquilidad y bienestar. Ven y descubre la experiencia Modelet.
            </p>
            
            <div className="flex items-start gap-4 p-8 bg-white rounded-3xl shadow-sm border border-spa-ink/5 mb-8">
              <div className="w-12 h-12 rounded-full bg-spa-olive/10 flex items-center justify-center shrink-0">
                <MapPin className="text-spa-olive" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Dirección</h4>
                <p className="text-spa-ink/80 leading-relaxed">{address}</p>
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-spa-olive font-bold uppercase tracking-widest text-[10px] hover:opacity-70 transition-opacity"
                >
                  Ver en Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative group">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Modelet Spa"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
