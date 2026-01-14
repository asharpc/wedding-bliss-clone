import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { weddingData } from '@/lib/weddingData';

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="handwriting-text text-foreground/70 text-3xl md:text-4xl mb-6">
            With love,
          </p>
          
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wider mb-8">
            {weddingData.bride.name.split(' ')[0]} & {weddingData.groom.name.split(' ')[0]}
          </h3>

          <div className="w-24 h-px bg-foreground/30 mx-auto mb-8" />

          <p className="font-body text-sm text-muted-foreground mb-2">
            We look forward to celebrating with you
          </p>
          <p className="font-body text-xs text-muted-foreground/70">
            February 15, 2026 • Rozia International Convention Centre
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-foreground/10"
        >
          <p className="font-body text-xs text-muted-foreground/50">
            Made with ❤️ for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
