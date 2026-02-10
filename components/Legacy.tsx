
import React from 'react';
import { motion } from 'framer-motion';

const Legacy: React.FC = () => {
  const firms = [
    "R.K Rice Mill",
    "Ram Kumar & Sons",
    "R.K Agro Mill",
    "R.K Agro Seeds"
  ];

  return (
    <div className="relative bg-[#F8F4EC] border-y border-[#D6CEC3]/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left: Special Love From */}
        <div className="p-8 md:p-24 bg-[#3A312A] flex flex-col justify-center text-center lg:text-left relative group">
          {/* Subtle background motif */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-royal-pattern" />
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 space-y-12"
          >
            <div className="space-y-4">
              <span className="font-accent text-[#C5A46D] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">With Affection</span>
              <h3 className="font-luxury text-4xl md:text-6xl text-[#F8F4EC] uppercase leading-none">
                Special <br />
                <span className="text-[#C5A46D]">Love From</span>
              </h3>
            </div>

            <div className="space-y-2">
              <p className="font-names text-5xl md:text-8xl text-[#C5A46D]">
                Tarang & Rudrakshi
              </p>
              <p className="font-luxury text-2xl md:text-4xl text-[#F8F4EC] tracking-[0.1em] uppercase opacity-90">
                Agarwal
              </p>
            </div>

            <div className="pt-8 md:pt-12 flex justify-center lg:justify-start">
              <div className="w-24 h-[1px] bg-[#C5A46D]/40" />
            </div>
          </motion.div>
        </div>

        {/* Right: Family Business (Renamed from Legacy) */}
        <div className="p-8 md:p-24 flex flex-col justify-center text-center lg:text-right border-b lg:border-b-0 lg:border-l border-[#D6CEC3]/30">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="font-accent text-[#C5A46D] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">Our Heritage</span>
              <h3 className="font-luxury text-4xl md:text-6xl text-[#3A312A] uppercase leading-none">
                Family <br />
                <span className="text-[#C5A46D]">Business</span>
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8">
              {firms.map((firm, i) => (
                <div key={i} className="flex flex-col md:flex-row-reverse items-center md:items-baseline gap-2 md:gap-6 group">
                  <span className="font-accent text-[9px] md:text-[10px] text-[#C5A46D] opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <p className="font-luxury text-xl md:text-3xl text-[#3A312A] tracking-wide group-hover:-translate-x-2 transition-transform duration-500">
                    {firm}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Legacy;
