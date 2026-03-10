import { motion } from "motion/react";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);

  const legalContent = {
    privacy: (
      <div className="space-y-4">
        <p><strong>Política de Privacidad - Modelet Spa</strong></p>
        <p>En Modelet Spa, valoramos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal de acuerdo con la Ley 1581 de 2012 de Protección de Datos Personales en Colombia.</p>
        <p>1. Recopilación de Datos: Recopilamos información necesaria para agendar citas y realizar protocolos estéticos seguros.</p>
        <p>2. Uso de Información: Sus datos se utilizan exclusivamente para la gestión de servicios estéticos y comunicaciones directas de Modelet Spa.</p>
        <p>3. Seguridad: Implementamos medidas técnicas y administrativas para proteger sus datos contra acceso no autorizado.</p>
        <p>4. Sus Derechos: Usted tiene derecho a conocer, actualizar y rectificar sus datos personales en cualquier momento.</p>
      </div>
    ),
    terms: (
      <div className="space-y-4">
        <p><strong>Términos de Servicio - Modelet Spa</strong></p>
        <p>Al utilizar los servicios de Modelet Spa, usted acepta los siguientes términos:</p>
        <p>1. Citas y Cancelaciones: Se requiere aviso previo de 24 horas para cancelaciones o reprogramaciones.</p>
        <p>2. Evaluación Médica: Todos los tratamientos están sujetos a una evaluación previa por parte de Claudia Ruíz para determinar la idoneidad del procedimiento.</p>
        <p>3. Resultados: Los resultados de los tratamientos estéticos pueden variar según cada paciente y el seguimiento de las recomendaciones post-procedimiento.</p>
        <p>4. Pagos: Los servicios deben ser cancelados al momento de su realización o según el plan de tratamiento acordado.</p>
      </div>
    ),
    health: (
      <div className="space-y-4">
        <p><strong>Políticas de Salud en Colombia</strong></p>
        <p>Modelet Spa cumple estrictamente con la normativa de salud vigente en Colombia, incluyendo:</p>
        <p>1. Bioseguridad: Seguimos los protocolos de bioseguridad establecidos por el Ministerio de Salud para centros de estética y cosmetología.</p>
        <p>2. Habilitación: Nuestros servicios se prestan bajo los estándares de calidad exigidos por las autoridades sanitarias locales.</p>
        <p>3. Consentimiento Informado: Todo paciente debe firmar un consentimiento informado antes de cualquier procedimiento invasivo o no invasivo.</p>
        <p>4. Ética Profesional: Bajo la dirección de Claudia Ruíz, garantizamos una práctica ética y profesional en todos nuestros protocolos.</p>
      </div>
    )
  };

  return (
    <footer id="contacto" className="bg-spa-bg pt-32 pb-12 px-6 md:px-24 border-t border-spa-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-12 flex flex-col items-center md:items-start">
              <img 
                src="https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/logo-footer.png" 
                alt="Modelet Spa" 
                className="h-32 md:h-48 w-auto object-contain mb-6"
                referrerPolicy="no-referrer"
              />
              <p className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40 text-center md:text-left">Cosmetologa - Cosmiatra</p>
            </div>
            <p className="text-2xl font-serif italic text-spa-ink/60 max-w-md">
              Suscríbete a nuestro boletín para experiencias exclusivas y consejos de bienestar.
            </p>
            <div className="mt-8 flex gap-4">
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="bg-transparent border-b border-spa-ink/20 py-4 w-full max-w-xs focus:outline-none focus:border-spa-olive transition-colors"
              />
              <button className="uppercase tracking-widest text-[10px] font-bold">Unirse</button>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-8 opacity-40">Ubicación</h4>
            <div className="flex items-start gap-3 text-sm opacity-70 leading-loose">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>Cl. 45A #77 a 10<br />Los Pinos, Medellín<br />Laureles, Antioquia</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-8 opacity-40">Contacto</h4>
            <div className="flex flex-col gap-4 text-sm opacity-70">
              <a href="tel:+573186483523" className="hover:text-spa-olive transition-colors">+57 318 648 3523</a>
              <a href="mailto:klauruizg@gmail.com" className="hover:text-spa-olive transition-colors">klauruizg@gmail.com</a>
              <div className="flex gap-6 mt-4">
                <a href="https://www.instagram.com/modeletspac/" target="_blank" rel="noopener noreferrer" className="hover:text-spa-olive transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:klauruizg@gmail.com" className="hover:text-spa-olive transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-spa-ink/5 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2024 Modelet Spa. Todos los derechos reservados.</p>
            <span className="hidden md:inline">|</span>
            <p>DESARROLLO : <a href="https://www.jacomeovalle.com" target="_blank" rel="noopener noreferrer" className="hover:text-spa-olive transition-colors">www.jacomeovalle.com</a></p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-4 md:mt-0">
            <button onClick={() => setModalType('privacy')} className="hover:text-spa-olive transition-colors">Política de Privacidad</button>
            <button onClick={() => setModalType('terms')} className="hover:text-spa-olive transition-colors">Términos de Servicio</button>
            <button onClick={() => setModalType('health')} className="hover:text-spa-olive transition-colors">Políticas de Salud en Colombia</button>
          </div>
        </div>

        <LegalModal 
          isOpen={modalType === 'privacy'} 
          onClose={() => setModalType(null)} 
          title="Política de Privacidad" 
          content={legalContent.privacy} 
        />
        <LegalModal 
          isOpen={modalType === 'terms'} 
          onClose={() => setModalType(null)} 
          title="Términos de Servicio" 
          content={legalContent.terms} 
        />
        <LegalModal 
          isOpen={modalType === 'health'} 
          onClose={() => setModalType(null)} 
          title="Políticas de Salud en Colombia" 
          content={legalContent.health} 
        />
      </div>
    </footer>
  );
}
