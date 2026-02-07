
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isTriggered: boolean;
  sharedAudioRef: React.RefObject<HTMLAudioElement | null>;
}

const SpeakerIcon = ({ isMuted }: { isMuted: boolean }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="relative z-10"
  >
    <path 
      d="M11 5L6 9H2V15H6L11 19V5Z" 
      stroke="#C5A46D" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill={isMuted ? "none" : "#C5A46D"}
      fillOpacity={isMuted ? 0 : 0.2}
    />
    {!isMuted ? (
      <>
        <motion.path 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
          d="M15.54 8.46002C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" 
          stroke="#C5A46D" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <motion.path 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, times: [0, 0.5, 1] }}
          d="M19.07 4.93002C20.9447 6.80527 21.9979 9.34836 21.9979 12C21.9979 14.6517 20.9447 17.1948 19.07 19.07" 
          stroke="#C5A46D" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </>
    ) : (
      <path 
        d="M22 2L2 22" 
        stroke="#C5A46D" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    )}
  </svg>
);

const AudioPlayer: React.FC<Props> = ({ isTriggered, sharedAudioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicUrl = "https://image2url.com/r2/default/audio/1770227098585-65e632e8-e6fc-424c-b3d7-98be7579d605.mp3";

  useEffect(() => {
    const audio = sharedAudioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      
      // Attempt muted autoplay immediately
      // This is allowed by browsers and prepares the stream
      audio.muted = true;
      audio.play().catch(() => {
        console.debug("Autoplay pending user interaction...");
      });
      
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, [sharedAudioRef]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!sharedAudioRef.current) return;
    
    if (isPlaying) {
      sharedAudioRef.current.pause();
    } else {
      sharedAudioRef.current.muted = false;
      sharedAudioRef.current.play().catch(console.error);
    }
  };

  return (
    <>
      <audio 
        ref={sharedAudioRef} 
        src={musicUrl} 
        loop 
        autoPlay
        muted
        preload="auto"
        playsInline
        crossOrigin="anonymous"
      />

      <AnimatePresence>
        {isTriggered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="relative group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#3A312A] border-2 border-[#C5A46D] rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.8)] overflow-visible"
              aria-label={isPlaying ? "Mute Royal Music" : "Play Royal Music"}
            >
              <AnimatePresence>
                {isPlaying && (
                  <>
                    <motion.div
                      key="ripple-1"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border border-[#C5A46D]/30"
                    />
                    <motion.div
                      key="pulse-glow"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-[#C5A46D]/10 blur-md"
                    />
                  </>
                )}
              </AnimatePresence>

              <motion.div
                animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <SpeakerIcon isMuted={!isPlaying} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AudioPlayer;
