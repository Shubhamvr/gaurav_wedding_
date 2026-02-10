import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockedScreen from './components/LockedScreen';
import Blessings from './components/Blessings';
import DivineBlessings from './components/DivineBlessings';
import FamilySection from './components/FamilySection';
import CoupleHero from './components/CoupleHero';
import Itinerary from './components/Itinerary';
import Venue from './components/Venue';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import Countdown from './components/Countdown';
import ConfettiEffect from './components/ConfettiEffect';

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Global listener to "warm up" the audio context on the very first touch/click
  useEffect(() => {
    const warmup = () => {
      if (audioRef.current && audioRef.current.paused) {
        // Try to play muted to get the browser's permission early
        audioRef.current.muted = true;
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('touchstart', warmup, { once: true });
    window.addEventListener('mousedown', warmup, { once: true });
    return () => {
      window.removeEventListener('touchstart', warmup);
      window.removeEventListener('mousedown', warmup);
    };
  }, []);

  const handleOpen = () => {
    // Immediate unmuting and volume control on the primary interaction
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0; // Start silent for a fade-in effect
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Visual/Audio Sync: Fade in the volume
          let vol = 0;
          const interval = setInterval(() => {
            if (vol < 1) {
              vol += 0.1;
              if (audioRef.current) audioRef.current.volume = Math.min(vol, 1);
            } else {
              clearInterval(interval);
            }
          }, 100);
        }).catch(err => {
          console.error("Audio playback error:", err);
        });
      }
    }
    setIsUnlocked(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F8F4EC]">
      <AudioPlayer isTriggered={isUnlocked} sharedAudioRef={audioRef} />

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <LockedScreen onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full relative"
          >
            <ConfettiEffect />
            <div className="bg-royal-pattern fixed inset-0 pointer-events-none" />

            <section id="hero" className="relative z-10"><CoupleHero /></section>
            <section id="divine-blessings" className="relative z-10"><DivineBlessings /></section>
            <section id="itinerary" className="relative z-10"><Itinerary /></section>
            <section id="blessings" className="relative z-10"><Blessings /></section>
            <section id="family" className="relative z-10"><FamilySection /></section>
            <section id="venue" className="relative z-10"><Venue /></section>
            <section id="legacy" className="relative z-10"><Legacy /></section>
            <section id="countdown" className="relative z-10 py-24 bg-[#F8F4EC] border-t border-[#D6CEC3]/30">
              <Countdown targetDate="2026-02-24T00:00:00" />
            </section>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;