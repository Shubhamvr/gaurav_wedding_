
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventCardProps {
  date: string;
  title: string;
  time: string;
  description?: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, title, time, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto h-80 group perspective-1000">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-sm border border-[#C5A46D]/20 shadow-2xl bg-white/60"
      >
        {/* Content behind the doors */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-5">
          <p className="font-accent text-[#C5A46D] text-xs uppercase tracking-[0.4em] font-bold">{date}</p>
          <h3 className="font-luxury text-3xl md:text-5xl text-[#3A312A] uppercase tracking-wide">{title}</h3>
          
          {/* Decorative Divider with Circles */}
          <div className="flex items-center justify-center gap-6 opacity-40">
            <div className="w-6 h-[0.5px] bg-[#C5A46D]" />
            <div className="w-1 h-1 rounded-full bg-[#C5A46D]" />
            <div className="w-6 h-[0.5px] bg-[#C5A46D]" />
          </div>

          <p className="font-luxury text-2xl text-[#3A312A]/70">{time}</p>
          {description && <p className="font-accent text-sm italic text-[#3A312A]/70 max-w-[280px] font-medium leading-relaxed">{description}</p>}
        </div>

        <AnimatePresence>
          {!isOpen && (
            <>
              {/* Left Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#3A312A] z-10 border-r border-[#C5A46D]/30 shadow-[5px_0_15px_rgba(0,0,0,0.3)]"
              >
                {/* Decorative Handle */}
                <div className="absolute top-1/2 right-12 md:right-16 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Right Sliding Door */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#3A312A] z-10 border-l border-[#C5A46D]/30 shadow-[-5px_0_15px_rgba(0,0,0,0.3)]"
              >
                {/* Decorative Handle */}
                <div className="absolute top-1/2 left-12 md:left-16 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C5A46D]/20 flex items-center justify-center">
                  <div className="w-5 h-[1px] bg-[#C5A46D]/40" />
                </div>
              </motion.div>

              {/* Call to Action Text */}
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4"
              >
                <p className="font-luxury text-[#C5A46D] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold bg-[#3A312A] py-2 px-6 border border-[#C5A46D]/20">
                  Tap to Unveil
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Itinerary: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-[#F8F4EC]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-24 space-y-6">
          <h2 className="font-luxury text-4xl md:text-6xl text-[#3A312A] uppercase tracking-widest">The Wedding Ceremony</h2>
          <div className="flex items-center justify-center gap-8 opacity-50">
            <div className="w-12 h-[1px] bg-[#C5A46D]" />
            <div className="w-1.5 h-1.5 rounded-full border border-[#C5A46D]" />
            <div className="w-12 h-[1px] bg-[#C5A46D]" />
          </div>
          <p className="font-accent text-[#C5A46D] text-sm tracking-[0.6em] uppercase font-bold">Wednesday, 25th February 2026</p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <EventCard 
              date="25 FEB 2026" 
              title="The Wedding Reception" 
              time="07:00 PM Onwards" 
              description="Baraat Arrival followed by the Sacred Wedding Ceremony and Dinner."
            />
          </motion.div>
        </div>

        <div className="mt-24">
          <p className="font-luxury text-xl md:text-2xl italic text-[#3A312A]/60 tracking-wider">
            "Your presence is the most cherished gift of our union."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
