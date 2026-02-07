
import React from 'react';

const FamilySection: React.FC = () => {
  const pillars = [
    "Kishan Garg", "Late Rajendar Garg", "Roshan Garg", 
    "Babu Ram Garg", "Dharampal Garg", "Shrinivas Garg", 
    "Mahesh Garg", "Brahma Nand Garg", "Sanjay Garg"
  ];

  const brothers = [
    "Manish Garg", "Saurabh Garg", "Tarun Garg", "Himanshu Garg",
    "Anil Garg", "Shilesh Garg", "Nikhil Garg", "Nilesh Garg",
    "Aman Garg", "Siddharth Garg", "Devansh Garg", "Suvansh Garg"
  ];

  const littleOnes = [
    "Parv", "Varn", "Atharv", "Shaurya", "Aditri", 
    "Jigishah", "Kesari", "Shree", "Hitishah", "Aviraj", "Anamya"
  ];

  return (
    <div className="py-24 px-6 bg-[#F8F4EC] border-b border-[#D6CEC3]/30">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Pillars Section */}
        <div className="mb-32">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Pillars of Our Family
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 max-w-5xl mx-auto">
            {pillars.map((name, i) => (
              <span key={i} className="font-accent text-sm md:text-base text-[#3A312A]/80 flex items-center px-2">
                {name} 
                {i < pillars.length - 1 && (
                  <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Brothers Section */}
        <div className="mb-32">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Brothers
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 max-w-5xl mx-auto">
            {brothers.map((name, i) => (
              <span key={i} className="font-accent text-sm md:text-base text-[#3A312A]/80 flex items-center px-2">
                {name} 
                {i < brothers.length - 1 && (
                  <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* The Little Ones Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="font-luxury text-4xl md:text-5xl mb-20 shimmer uppercase tracking-widest px-4">
            The Little Ones
          </h2>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
            {littleOnes.map((name, i) => (
              <span key={i} className="font-accent text-sm md:text-base text-[#3A312A]/80 flex items-center px-2">
                {name} 
                {i < littleOnes.length - 1 && (
                  <span className="hidden md:inline-block ml-8 text-[#C5A46D] text-xs font-bold">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
