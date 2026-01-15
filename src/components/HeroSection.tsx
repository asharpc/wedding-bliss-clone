import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
        >
          <source
            src="https://framerusercontent.com/assets/XT63RdS8yMFwBp3W4rUTNBBsH80.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Content - Mobile First */}
      <div className="relative z-10 text-center px-6 w-full max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-handwriting text-xl md:text-2xl text-foreground/80 mb-6"
        >
          You are cordially invited to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wider mb-4"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          INVITING YOU
          <br />
          TO CELEBRATE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-handwriting text-lg md:text-xl text-foreground/80 mt-6"
        >
          the union of two hearts
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-foreground/70 rounded-full mt-1.5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
