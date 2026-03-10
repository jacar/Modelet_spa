import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-spa-ink/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-spa-bg w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-spa-ink/5 flex justify-between items-center">
              <h3 className="text-3xl font-serif text-spa-ink">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-spa-ink/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-spa-ink/70 leading-relaxed text-sm space-y-6">
              {content}
            </div>
            <div className="p-8 border-t border-spa-ink/5 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-spa-olive text-white rounded-full uppercase tracking-widest text-[10px] font-bold hover:scale-105 transition-transform"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
