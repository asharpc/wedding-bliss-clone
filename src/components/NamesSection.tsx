import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { weddingData } from '@/lib/weddingData';

const NamesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="name-text text-foreground">{weddingData.groom.name.split(' ')[0]}</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 tracking-widest uppercase">
            Son of {weddingData.groom.father}
          </p>
          <p className="font-body text-xs md:text-sm text-muted-foreground/70 mt-2">
            Grandson of {weddingData.groom.grandfather}
          </p>
          <p className="handwriting-text text-foreground/60 mt-2">{weddingData.groom.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="my-12 md:my-16"
        >
          <span className="handwriting-text text-4xl md:text-5xl text-foreground/80">&</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="name-text text-foreground">{weddingData.bride.name.split(' ')[0]}</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 tracking-widest uppercase">
            Daughter of {weddingData.bride.father}
          </p>
          <p className="font-body text-xs md:text-sm text-muted-foreground/70 mt-2">
            Granddaughter of {weddingData.bride.grandfather}
          </p>
          <p className="handwriting-text text-foreground/60 mt-2">{weddingData.bride.location}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 font-display text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wider"
        >
          ARE GETTING MARRIED
        </motion.p>
      </div>
    </section>
  );
};

export default NamesSection;
