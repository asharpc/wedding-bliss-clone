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
        <p className="font-handwriting text-xl md:text-2xl text-foreground/70 mb-6">
          With love and blessings
        </p>
        
        <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
          {weddingData.bride.name.split(' ')[0]} & {weddingData.groom.name.split(' ')[0]}
        </h3>
        
        <div className="w-16 h-px bg-foreground/30 mx-auto mb-8" />
        
        <p className="font-body text-xs text-foreground/50 tracking-widest uppercase">
          February 15, 2026
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
