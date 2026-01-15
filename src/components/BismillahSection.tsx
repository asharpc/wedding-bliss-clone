import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BismillahSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-[50vh] flex items-center justify-center bg-background section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide leading-relaxed">
          In the name of Allah,
          <br />
          the Most Gracious, the Most Merciful
        </p>
      </motion.div>
    </section>
  );
};

export default BismillahSection;
