import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BismillahSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="min-h-[50vh] flex items-center justify-center bg-background px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Arabic Bismillah with floating animation */}
        <motion.p
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-relaxed"
          style={{ fontFamily: "'Amiri', 'Georgia', serif" }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        {/* English Translation with floating animation */}
        <motion.p
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="font-body text-sm md:text-base lg:text-lg text-foreground/70 tracking-wide leading-relaxed italic"
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BismillahSection;
