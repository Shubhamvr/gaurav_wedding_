
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3A312A] text-[#F8F4EC] py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-20">
        
        <div className="space-y-10">
          <p className="font-luxury text-lg tracking-[0.3em] uppercase opacity-50">Need Assistance?</p>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            <a 
              href="tel:7017391975" 
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <span className="w-12 h-12 rounded-full border border-[#C5A46D]/40 flex items-center justify-center group-hover:border-[#C5A46D]">
                 <svg className="w-5 h-5 text-[#C5A46D]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </span>
              <span className="font-accent text-xl tracking-widest">7017391975</span>
            </a>
            <a 
              href="tel:7017666130" 
              className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <span className="w-12 h-12 rounded-full border border-[#C5A46D]/40 flex items-center justify-center group-hover:border-[#C5A46D]">
                 <svg className="w-5 h-5 text-[#C5A46D]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </span>
              <span className="font-accent text-xl tracking-widest">7017666130</span>
            </a>
          </div>
        </div>

        <div className="pt-24 space-y-12">
          <div className="flex justify-center items-center gap-6 opacity-40">
            <div className="w-16 h-[1px] bg-[#C5A46D]" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 17 18 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 18 12 22 12 22Z" stroke="#C5A46D" strokeWidth="1" />
            </svg>
            <div className="w-16 h-[1px] bg-[#C5A46D]" />
          </div>
          
          <div className="space-y-2">
            <p className="font-accent text-sm tracking-[0.3em] uppercase opacity-70">
              We look forward to your gracious presence.
            </p>
            <div className="pt-8">
              <p className="font-accent text-[10px] md:text-xs tracking-[0.1em] text-[#C5A46D]/60 uppercase">
                Contact Shubham to get your custom wedding e-invite at <a href="tel:+917983930426" className="underline hover:text-[#C5A46D] transition-colors">+91 7983930426</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
