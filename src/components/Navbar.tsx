import { motion } from "motion/react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Servicios', href: '#servicios' },
    { 
      name: 'Procedimientos', 
      href: '#procedimientos',
      submenu: [
        { name: 'Protocolos', href: '#protocolos' }
      ]
    },
    { name: 'Reseñas', href: '#reseñas' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Ubicación', href: '#ubicación' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 flex justify-between items-center ${
      scrolled 
        ? "bg-spa-bg/95 backdrop-blur-md shadow-sm py-4 text-spa-ink" 
        : "bg-transparent text-white"
    }`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center md:items-start"
      >
        <img 
          src="https://www.consultorioodontologicola78.com/wp-content/uploads/2026/03/logo_es.png" 
          alt="Modelet Spa" 
          className="h-12 w-auto object-contain transition-all"
          referrerPolicy="no-referrer"
        />
        <span className={`text-[8px] uppercase tracking-[0.3em] font-bold transition-opacity ${scrolled ? "opacity-40" : "opacity-60"}`}>
          Cosmetologa - Cosmiatra
        </span>
      </motion.div>

      <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium items-center">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <a 
              href={item.href} 
              className={`transition-colors hover:text-spa-olive flex items-center gap-1 ${scrolled ? "text-spa-ink" : "text-white"}`}
            >
              {item.name}
              {item.submenu && <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform" />}
            </a>
            
            {item.submenu && (
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-spa-bg/95 backdrop-blur-md shadow-xl border border-spa-ink/5 rounded-2xl p-4 min-w-[200px]">
                  {item.submenu.map((sub) => (
                    <a 
                      key={sub.name} 
                      href={sub.href} 
                      className="block py-3 px-4 text-spa-ink hover:text-spa-olive transition-colors text-[10px] tracking-[0.2em] uppercase font-bold"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="tel:+573186483523" 
          className={`hidden md:flex items-center gap-2 text-xs uppercase tracking-widest border rounded-full px-6 py-2 transition-all ${
            scrolled 
              ? "border-spa-olive text-spa-olive hover:bg-spa-olive hover:text-white" 
              : "border-white/30 text-white hover:bg-white hover:text-black"
          }`}
        >
          <Phone size={14} />
          Reservar Cita
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-spa-bg text-spa-ink p-8 flex flex-col gap-6 md:hidden shadow-xl border-t border-spa-ink/5 overflow-y-auto max-h-[80vh]"
        >
          {menuItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-4">
              <a 
                href={item.href} 
                onClick={() => !item.submenu && setIsOpen(false)} 
                className="text-xl font-serif hover:text-spa-olive transition-colors flex items-center justify-between"
              >
                {item.name}
              </a>
              {item.submenu && (
                <div className="flex flex-col gap-4 pl-6 border-l border-spa-olive/20">
                  {item.submenu.map((sub) => (
                    <a 
                      key={sub.name} 
                      href={sub.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-lg font-serif opacity-60 hover:text-spa-olive transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
