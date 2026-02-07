
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WeddingRingsIcon = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 mb-6 flex items-center justify-center perspective-1000">
      <motion.div 
        className="absolute w-40 h-40 bg-[#C5A46D]/10 blur-[80px] rounded-full"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ 
          rotateY: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{ 
          rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {!imageError ? (
          <div className="relative flex items-center justify-center">
            <img 
              src="https://www.pngall.com/wp-content/uploads/2016/04/Wedding-Rings-PNG-Image.png" 
              alt="Interlocking Wedding Rings"
              className="w-full h-auto max-h-[75%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              onError={() => setImageError(true)}
            />
            
            <motion.div 
              className="absolute top-[8%] left-1/2 -translate-x-1/2 z-20"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [0.95, 1.1, 0.95],
                rotate: [45, 55, 45]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <div className="absolute inset-0 bg-white shadow-[0_0_20px_white,0_0_10px_#C5A46D] rotate-45" />
                <div className="absolute inset-1 bg-[#F8F4EC]/80 rotate-45" />
                <div className="absolute top-1/2 left-[-50%] w-[200%] h-[1px] bg-white/40 blur-[0.5px]" />
                <div className="absolute left-1/2 top-[-50%] h-[200%] w-[1px] bg-white/40 blur-[0.5px]" />
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border-[5px] border-[#C5A46D] shadow-[0_5px_15px_rgba(0,0,0,0.4)] transform -translate-x-5" />
            <div className="absolute w-24 h-24 rounded-full border-[5px] border-[#C5A46D] shadow-[0_5px_15px_rgba(0,0,0,0.4)] transform translate-x-5" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

interface ScratchRevealProps {
  children: React.ReactNode;
}

const ScratchReveal: React.FC<ScratchRevealProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const drawFoil = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#C5A46D'); 
      gradient.addColorStop(0.3, '#E7DFD4'); 
      gradient.addColorStop(0.5, '#C5A46D'); 
      gradient.addColorStop(0.8, '#D6CEC3'); 
      gradient.addColorStop(1, '#C5A46D'); 
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalAlpha = 0.12;
      for (let i = 0; i < 6000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = i % 2 === 0 ? '#3A312A' : '#ffffff';
        ctx.fillRect(x, y, 1, 1);
      }
      ctx.globalAlpha = 1.0;

      ctx.strokeStyle = 'rgba(58, 49, 42, 0.04)';
      ctx.lineWidth = 0.4;
      for (let i = -canvas.width; i < canvas.width * 2; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    drawFoil();
    window.addEventListener('resize', drawFoil);

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isScratching) return;
      if (e.cancelable) e.preventDefault();
      const pos = getPos(e);
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      const brushRadius = window.innerWidth < 768 ? 40 : 55;
      ctx.arc(pos.x, pos.y, brushRadius, 0, Math.PI * 2);
      ctx.fill();

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let count = 0;
      for (let i = 3; i < pixels.length; i += 256) {
        if (pixels[i] === 0) count++;
      }
      const percentage = (count / (pixels.length / 256)) * 100;
      if (percentage > 40) {
        setIsFinished(true);
      }
    };

    const startScratching = () => {
      setIsScratching(true);
      setHasStarted(true);
    };
    const stopScratching = () => setIsScratching(false);

    canvas.addEventListener('mousedown', startScratching);
    canvas.addEventListener('touchstart', startScratching, { passive: false });
    window.addEventListener('mouseup', stopScratching);
    window.addEventListener('touchend', stopScratching);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch, { passive: false });

    return () => {
      window.removeEventListener('resize', drawFoil);
      canvas.removeEventListener('mousedown', startScratching);
      canvas.removeEventListener('touchstart', startScratching);
      window.removeEventListener('mouseup', stopScratching);
      window.removeEventListener('touchend', stopScratching);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('touchmove', scratch);
    };
  }, [isScratching]);

  return (
    <div className="relative group w-full max-w-[650px] mx-auto px-4 sm:px-0">
      <div className="absolute -inset-6 border border-[#C5A46D]/10 rounded-sm pointer-events-none" />
      <div className="absolute -inset-3 border-[0.5px] border-[#C5A46D]/20 rounded-sm pointer-events-none" />
      
      <div className="absolute -top-6 -left-6 w-8 h-8 border-t border-l border-[#C5A46D] opacity-30" />
      <div className="absolute -top-6 -right-6 w-8 h-8 border-t border-r border-[#C5A46D] opacity-30" />
      <div className="absolute -bottom-6 -left-6 w-8 h-8 border-b border-l border-[#C5A46D] opacity-30" />
      <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b border-r border-[#C5A46D] opacity-30" />

      <div 
        ref={containerRef} 
        className="relative w-full aspect-[16/9] sm:aspect-[3/1.2] lg:aspect-[3/1] flex items-center justify-center overflow-hidden rounded-sm bg-[#1A1614] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isFinished ? { opacity: 1 } : { opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-[#1E1A17] via-[#2A2420] to-[#1E1A17] px-4 sm:px-8"
          >
            <div className="absolute inset-0 bg-royal-pattern opacity-[0.03] pointer-events-none" />
            
            <AnimatePresence>
              {isFinished && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute inset-0 bg-[#C5A46D]/5 blur-[80px] rounded-full pointer-events-none"
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
               <motion.div
                 animate={isFinished ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="w-full flex items-center justify-center"
               >
                 {children}
               </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.canvas
          ref={canvasRef}
          animate={isFinished ? { 
            opacity: 0, 
            scale: 1.05, 
            filter: 'blur(40px)',
            transition: { duration: 2, ease: "easeOut" } 
          } : { opacity: 1 }}
          className={`absolute inset-0 z-10 cursor-crosshair touch-none ${isFinished ? 'pointer-events-none' : ''}`}
        />

        <AnimatePresence>
          {!hasStarted && !isFinished && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative flex flex-col items-center">
                <motion.div
                  animate={{ 
                    x: [-15, 15, -15],
                    y: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="mb-6 flex flex-col items-center"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-16 md:h-16 opacity-70">
                    {/* Simplified Hand/Finger Scratching Icon */}
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" stroke="#3A312A" strokeWidth="1" strokeLinecap="round" />
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" stroke="#3A312A" strokeWidth="1" strokeLinecap="round" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" stroke="#3A312A" strokeWidth="1" strokeLinecap="round" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-1.3-6.2-3.3L4 16.5" stroke="#3A312A" strokeWidth="1" strokeLinecap="round" />
                    
                    {/* Animated Scratch Effect Underneath */}
                    <motion.path 
                      d="M6 20C8 20 9 22 11 22C13 22 14 20 16 20" 
                      stroke="#C5A46D" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>
                
                <span className="font-luxury text-[#3A312A] tracking-[0.7em] uppercase text-[9px] sm:text-[11px] font-bold text-center block px-6 opacity-80">
                  Scratch to Reveal
                </span>
                
                <div className="w-24 h-[1px] bg-[#3A312A]/20 mt-4 overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-[#3A312A]/40"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const BubbleAnimation = () => {
  const particles = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((_, i) => {
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <motion.div
            key={i}
            initial={{ y: -100, x: `${left}vw`, opacity: 0 }}
            animate={{ 
              y: '110vh', 
              opacity: [0, opacity, opacity, 0],
              x: `${left + (Math.random() - 0.5) * 10}vw`,
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration, 
              repeat: Infinity, 
              delay, 
              ease: "linear" 
            }}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              background: 'radial-gradient(circle at 30% 30%, #F8F4EC 0%, #C5A46D 100%)',
              boxShadow: '0 0 10px rgba(197, 164, 109, 0.3)',
              filter: 'blur(0.5px)'
            }}
          />
        );
      })}
    </div>
  );
};

const CoupleHero: React.FC = () => {
  return (
    <div className="relative py-12 md:py-32 bg-[#3A312A] text-[#F8F4EC] overflow-hidden min-h-screen flex items-center">
      <BubbleAnimation />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-luxury text-xs md:text-sm mb-10 md:mb-16 tracking-[0.9em] uppercase text-[#C5A46D] font-bold"
        >
          Seeking Divine Blessings
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-12 md:mb-28">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex-1 space-y-6 md:space-y-10"
          >
            <h2 className="font-names text-7xl md:text-9xl text-[#C5A46D] leading-none drop-shadow-2xl">Gaurav</h2>
            <div className="space-y-4">
              <p className="font-luxury text-xl md:text-3xl text-white tracking-[0.2em] font-medium uppercase">Gaurav Garg</p>
              <div className="h-[0.5px] w-16 bg-[#C5A46D]/30 mx-auto" />
              <div className="space-y-2 opacity-70">
                <p className="font-accent text-[10px] md:text-xs italic text-white uppercase tracking-[0.25em]">Grandson of Late Shri Ram Kumar & Savitri Devi</p>
                <p className="font-accent text-[10px] md:text-xs italic text-white uppercase tracking-[0.25em]">Son of Mr. Ashok Kumar & Mrs. Rakhi Garg</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex flex-col items-center justify-center px-4"
          >
            <WeddingRingsIcon />
          </motion.div>

          <div className="lg:hidden flex items-center justify-center py-6 opacity-30">
            <span className="font-luxury text-5xl italic text-[#C5A46D]">&</span>
          </div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex-1 space-y-6 md:space-y-10"
          >
            <h2 className="font-names text-7xl md:text-9xl text-[#C5A46D] leading-none drop-shadow-2xl">Shubhi</h2>
            <div className="space-y-4">
              <p className="font-luxury text-xl md:text-3xl text-white tracking-[0.2em] font-medium uppercase">Shubhi Gupta</p>
              <div className="h-[0.5px] w-16 bg-[#C5A46D]/30 mx-auto" />
              <div className="space-y-2 opacity-70">
                <p className="font-accent text-[10px] md:text-xs italic text-white uppercase tracking-[0.25em]">Granddaughter of Shri Mathura Prasad & Kusuma Gupta</p>
                <p className="font-accent text-[10px] md:text-xs italic text-white uppercase tracking-[0.25em]">Daughter of Mr. Sanjay & Mrs. Neeti Gupta</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col items-center">
          <h4 className="font-luxury text-xs md:text-sm mb-12 md:mb-16 tracking-[0.7em] uppercase text-[#C5A46D] font-bold">The Royal Proclamation</h4>
          
          <ScratchReveal>
            <div className="flex flex-col items-center justify-center text-center py-4">
              <div className="relative">
                {/* Minimalist anchored dividers */}
                <div className="w-8 h-[0.5px] bg-[#C5A46D]/30 mx-auto mb-6" />
                
                <p className="font-luxury text-[2rem] sm:text-5xl md:text-7xl text-[#F8F4EC] tracking-[0.18em] font-light leading-none whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  25 • 02 • 2026
                </p>
                
                <div className="w-8 h-[0.5px] bg-[#C5A46D]/30 mx-auto mt-6" />
              </div>
            </div>
          </ScratchReveal>
        </div>
      </div>
    </div>
  );
};

export default CoupleHero;
