
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DivineBlessings: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  // The specific stunning artistic image provided by the user
  const divineImageUrl = "https://image2url.com/r2/default/images/1770313595152-9c4ff167-fdb5-4c98-8234-1607dd813d80.webp";

  return (
    <div className="py-32 px-6 text-center bg-[#F8F4EC] relative overflow-hidden min-h-screen flex items-center">
      {/* Refined Background Texture & Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-royal-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#C5A46D]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#C5A46D]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative flex flex-col items-center"
        >
          {/* Modern Frame with Multi-layered Borders - Blended with Artwork Tones */}
          <div className="relative mb-20 group w-full max-w-5xl">
             {/* Ethereal Glow Aura - Softened to match image warmth */}
             <div className="absolute inset-0 bg-[#C5A46D]/10 blur-[120px] rounded-full scale-110 opacity-40 transition-opacity group-hover:opacity-80" />
             
             {/* Decorative Outer Thin Frame - Reduced harshness */}
             <div className="absolute -inset-4 border border-[#C5A46D]/5 rounded-sm pointer-events-none" />
             
             {/* 
                Dynamic Frame: 
                - bg-[#1E1510] sampled from the artwork's deep shadows for seamless blending.
                - Responsive aspect ratio: Taller on mobile (4:5) to show more vertical detail, 
                  Cinematic (21:9) on large screens for a gallery feel.
             */}
             <div className="relative z-10 w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] overflow-hidden rounded-sm shadow-[0_40px_80px_-20px_rgba(30,21,16,0.5)] bg-[#1E1510] border border-[#C5A46D]/20 flex items-center justify-center">
                {!imageError ? (
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    src={divineImageUrl} 
                    alt="Radha Krishna Divine Blessing" 
                    className="w-full h-full object-cover object-center contrast-[1.02] brightness-105 transition-transform duration-[10s] group-hover:scale-105"
                    style={{ transform: 'rotate(0deg)' }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1E1510] bg-royal-pattern opacity-20">
                     {/* Patterned Fallback */}
                  </div>
                )}
                
                {/* Modern Image Overlays & Framing - Softened edges for seamless feel */}
                <div className="absolute inset-0 border-[8px] md:border-[16px] border-[#1E1510]/10 pointer-events-none" />
                <div className="absolute inset-0 border border-white/5 pointer-events-none m-[6px] md:m-[14px]" />
                
                {/* Artistic Vignette - Draws focus to the center (Radha & Krishna) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1510]/40 via-transparent to-[#1E1510]/20 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(30,21,16,0.6)] pointer-events-none" />
             </div>

             {/* Modern Accent Ornament */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 w-full max-w-md opacity-40">
                <div className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[#C5A46D]" />
                <div className="w-2 h-2 rounded-full bg-[#C5A46D] rotate-45" />
                <div className="flex-1 h-[0.5px] bg-gradient-to-l from-transparent to-[#C5A46D]" />
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <p className="font-accent text-[#C5A46D] text-[10px] md:text-xs tracking-[0.8em] uppercase font-bold">
                Om Namo Bhagavate Vasudevaya
              </p>
              <div className="w-12 h-[1px] bg-[#C5A46D]/30 mx-auto" />
            </div>
            
            <h2 className="font-luxury text-5xl md:text-7xl text-[#3A312A] shimmer uppercase tracking-[0.05em] leading-[1.1]">
              Seeking <br />
              <span className="italic font-normal">Divine Grace</span>
            </h2>

            <p className="font-luxury text-2xl md:text-3xl italic tracking-wider text-[#3A312A]/80 leading-relaxed px-4 max-w-4xl mx-auto">
              "Through their eternal love, we seek blessings for a path filled with devotion, harmony, and joy as we embark on our sacred journey together."
            </p>
            
            <div className="pt-12 space-y-4">
              <div className="flex justify-center items-center gap-8 opacity-30">
                <div className="w-12 h-[1px] bg-[#C5A46D]" />
                <div className="w-1.5 h-1.5 rounded-full border border-[#C5A46D]" />
                <div className="w-12 h-[1px] bg-[#C5A46D]" />
              </div>
              <p className="font-accent text-xs md:text-sm text-[#C5A46D] tracking-[0.6em] uppercase font-semibold">
                Vande Krishnam Jagatgurum
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DivineBlessings;
