
import React from 'react';
import { motion } from 'framer-motion';

const Venue: React.FC = () => {
  return (
    <div className="relative py-24 md:py-48 px-6 bg-[#F8F4EC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Mobile becomes a stack, Desktop remains 2-column */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Content Block */}
          <div className="space-y-10 md:space-y-14 text-center lg:text-left order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="font-luxury text-xl md:text-2xl text-[#C5A46D] italic font-light leading-relaxed">
                "Where the whispers of the wild meet the symphony of our souls."
              </p>
              <div className="w-16 h-[1px] bg-[#C5A46D] mx-auto lg:mx-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-luxury text-4xl md:text-7xl text-[#3A312A] uppercase leading-[1.1] md:leading-[0.9] tracking-tight">
                Corbett <br />
                <span className="text-[#C5A46D]">Elegant Retreat</span>
              </h2>
              <div className="space-y-2">
                <p className="font-accent text-base md:text-lg text-[#3A312A]/70 uppercase tracking-widest">Ramnagar, Uttarakhand</p>
                <p className="font-accent text-xs md:text-sm text-[#3A312A]/50 max-w-sm mx-auto lg:mx-0">
                  Hanuman Dham Road, Chhoi, Madanpur Bora, Uttarakhand 244715
                </p>
              </div>
            </motion.div>

            {/* Desktop Only Button (Hidden on Mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex justify-start"
            >
              <motion.a
                href="https://share.google/bk3Ow2gaHfKfF1T2Q"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: "2rem" }}
                className="inline-flex items-center gap-6 group"
              >
                <span className="font-luxury text-lg md:text-xl uppercase tracking-[0.3em] text-[#3A312A] group-hover:text-[#C5A46D] transition-colors">
                  View Directions
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#3A312A]/20 flex items-center justify-center group-hover:border-[#C5A46D] group-hover:bg-[#C5A46D] transition-all duration-500">
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:text-[#F8F4EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Venue Image Block */}
          <div className="relative px-4 md:px-0 order-2 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Entrance" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[8px] md:border-[16px] border-[#F8F4EC]/10" />
            </motion.div>

            {/* Decorative modern frames */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-full h-full border-2 border-[#C5A46D]/20 -z-10 rounded-sm"
            />
            
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-px h-32 bg-[#C5A46D]/40 hidden lg:block" />
          </div>

          {/* Mobile Only Button (Displayed below Image) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex lg:hidden justify-center order-3 mt-8"
          >
            <motion.a
              href="https://share.google/bk3Ow2gaHfKfF1T2Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 group"
            >
              <span className="font-luxury text-lg uppercase tracking-[0.3em] text-[#3A312A]">
                View Directions
              </span>
              <div className="w-12 h-12 rounded-full border border-[#C5A46D] bg-[#C5A46D] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#F8F4EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Venue;
