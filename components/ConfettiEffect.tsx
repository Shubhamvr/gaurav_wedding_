
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ConfettiEffect: React.FC = () => {
  // Theme-only colors: Gold, Espresso, Ivory, Soft Taupe
  const colors = ['#C5A46D', '#3A312A', '#F8F4EC', '#D6CEC3', '#C5A46D'];
  const shapes = ['rect', 'circle', 'triangle', 'ribbon'];
  
  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      shape: shapes[i % shapes.length],
      left: Math.random() * 100,
      size: Math.random() * 10 + 4,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
      swayRange: (Math.random() - 0.5) * 100,
      swaySpeed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((p) => {
        let borderRadius = '0px';
        let clipPath = 'none';
        let width = p.size;
        let height = p.size;

        if (p.shape === 'circle') {
          borderRadius = '50%';
        } else if (p.shape === 'triangle') {
          clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        } else if (p.shape === 'ribbon') {
          width = p.size * 0.4;
          height = p.size * 2;
        }

        return (
          <motion.div
            key={p.id}
            initial={{ 
              y: -50, 
              x: `${p.left}vw`, 
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              opacity: 1 
            }}
            animate={{ 
              y: '110vh', 
              x: [`${p.left}vw`, `${p.left + (p.swayRange / 10)}vw`, `${p.left}vw`],
              rotateX: p.rotateX + 1080,
              rotateY: p.rotateY + 720,
              rotateZ: p.rotateZ + 360,
              opacity: [1, 1, 0]
            }}
            transition={{ 
              y: { duration: p.duration, delay: p.delay, ease: "linear" },
              x: { duration: p.duration / p.swaySpeed, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: p.duration, delay: p.delay, ease: "linear" },
              rotateY: { duration: p.duration, delay: p.delay, ease: "linear" },
              rotateZ: { duration: p.duration, delay: p.delay, ease: "linear" },
              opacity: { duration: 0.5, delay: p.delay + p.duration - 0.5 }
            }}
            className="absolute shadow-sm"
            style={{
              width,
              height,
              backgroundColor: p.color,
              borderRadius,
              clipPath,
              border: p.color === '#F8F4EC' ? '1px solid rgba(197, 164, 109, 0.2)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiEffect;
