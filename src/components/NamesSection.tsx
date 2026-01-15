import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { weddingData } from '@/lib/weddingData';

const NamesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background px-6 py-16 md:py-24">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center">
        {/* Bride Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Bride Name - Large Display */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-4">
            {weddingData.bride.name.toUpperCase()}
          </h2>
          <p className="font-body text-xs md:text-sm text-foreground/60 tracking-[0.2em] uppercase mb-2">
            Daughter of {weddingData.bride.father}
          </p>
          <p className="font-body text-xs text-foreground/50 mb-1">
            Granddaughter of {weddingData.bride.grandfather}
          </p>
          <p className="font-handwriting text-lg md:text-xl text-foreground/50">
            {weddingData.bride.location}
          </p>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="my-10 md:my-14"
        >
          <span className="font-handwriting text-4xl md:text-5xl text-foreground/70">&</span>
        </motion.div>

        {/* Groom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-4">
            {weddingData.groom.name.toUpperCase()}
          </h2>
          <p className="font-body text-xs md:text-sm text-foreground/60 tracking-[0.2em] uppercase mb-2">
            Son of {weddingData.groom.father}
          </p>
          <p className="font-body text-xs text-foreground/50 mb-1">
            Grandson of {weddingData.groom.grandfather}
          </p>
          <p className="font-handwriting text-lg md:text-xl text-foreground/50">
            {weddingData.groom.location}
          </p>
        </motion.div>

        {/* Getting Married */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 md:mt-20 font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-[0.2em]"
        >
          ARE GETTING MARRIED
        </motion.p>
      </div>
    </section>
  );
};

export default NamesSection;
