
import React from 'react';

const LotusIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
    <path d="M12 22C12 22 17 18 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 18 12 22 12 22Z" stroke="#C5A46D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C12 22 22 17 22 11C22 8.23858 19.7614 6 17 6C15.5 6 14 6.5 13 7.5" stroke="#C5A46D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C12 22 2 17 2 11C2 8.23858 4.23858 6 7 6C8.5 6 10 6.5 11 7.5" stroke="#C5A46D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V2" stroke="#C5A46D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Blessings: React.FC = () => {
  const elders = [
    "Late Shri Ram Kumar Garg & Savitri Devi",
    "Late Shri LalJi Mal Garg & Nihali Devi",
    "Late Shri Chandrabhan Garg & Nari Devi"
  ];

  return (
    <div className="py-24 px-6 text-center bg-[#F8F4EC] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <LotusIcon />
        </div>
        
        <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest">
          Seeking the Blessings
        </h2>

        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 max-w-4xl mx-auto">
          {elders.map((name, i) => (
            <span key={i} className="font-accent text-sm md:text-lg text-[#3A312A]/80 flex items-center text-center px-2">
              {name} 
              {i < elders.length - 1 && (
                <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blessings;
