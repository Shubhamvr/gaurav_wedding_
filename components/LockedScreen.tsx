
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onOpen: () => void;
}

const LockedScreen: React.FC<Props> = ({ onOpen }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1A1614] relative overflow-hidden">
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A312A]/60 via-transparent to-[#1A1614]" />
      </div>

      {/* Minimalist Border Frame */}
      <div className="absolute inset-6 md:inset-12 border border-[#C5A46D]/10 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C5A46D]/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C5A46D]/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C5A46D]/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C5A46D]/40" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center z-10 flex flex-col items-center justify-between h-[80vh]">
        
        {/* Top: Divine Invocation */}
        <div className="space-y-6 pt-12">
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="w-px h-12 md:h-20 bg-gradient-to-b from-transparent via-[#C5A46D] to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-accent text-[#C5A46D] text-[9px] md:text-xs tracking-[0.6em] uppercase font-bold"
          >
            Seeking the Grace of the Divine
          </motion.p>
        </div>

        {/* Middle: Ancestral Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="space-y-4"
        >
          <h1 className="font-luxury text-[#F8F4EC] text-2xl md:text-4xl lg:text-5xl leading-tight tracking-[0.05em] font-light">
            With the blessings of our <br className="hidden md:block" />
            <span className="text-[#C5A46D] italic font-medium">elders & ancestors</span>
          </h1>
          <p className="font-luxury text-[#F8F4EC]/60 text-sm md:text-lg tracking-widest uppercase">
            We invite you to witness our union
          </p>
        </motion.div>

        {/* Bottom: CTA Area with UPWARD guidance */}
        <div className="w-full flex flex-col items-center gap-10 pb-12">
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="group relative px-10 md:px-20 py-5 md:py-6 bg-transparent overflow-hidden"
          >
            {/* Animated Button Border */}
            <span className="absolute inset-0 border border-[#C5A46D]/30 group-hover:border-[#C5A46D] transition-colors duration-500" />
            <motion.span 
              className="absolute inset-0 border border-[#C5A46D]"
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative z-10 font-luxury text-[#C5A46D] text-lg md:text-2xl tracking-[0.3em] uppercase font-medium group-hover:text-[#1A1614] transition-colors duration-500">
              Open Invitation
            </span>

            {/* Hover Fill Effect */}
            <div className="absolute inset-0 bg-[#C5A46D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          </motion.button>

          {/* Upward Indicator - Directing to the button */}
          <motion.div 
            className="flex flex-col items-center gap-4 cursor-pointer"
            onClick={onOpen}
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              {/* Upward Arrow */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="#C5A46D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-accent text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#F8F4EC]/40 font-bold">
                Unveil the Magic
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gold Dust Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C5A46D] rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{ 
              duration: Math.random() * 4 + 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LockedScreen;
