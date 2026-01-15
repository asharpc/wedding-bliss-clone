import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { weddingData } from '@/lib/weddingData';

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-background px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto text-center"
      >
        <p className="font-handwriting text-lg md:text-xl text-foreground/60 mb-4">
          You are cordially invited by
        </p>

        <div className="space-y-3 mb-8">
          <p className="font-display text-lg md:text-xl text-foreground tracking-wide">
            {weddingData.groom.father} Family
          </p>
        </div>

        <div className="w-16 h-px bg-foreground/30 mx-auto mb-8" />

        <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide mb-6">
          {weddingData.bride.name.split(' ')[0]} & {weddingData.groom.name.split(' ')[1]}
        </h3>

        <p className="font-body text-xs text-foreground/50 tracking-widest uppercase">
          February 15, 2026
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
