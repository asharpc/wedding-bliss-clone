import { motion } from 'framer-motion';
import { weddingData } from '@/lib/weddingData';

const StickyHeader = () => {
    // Extract first names
    const brideFirstName = weddingData.bride.name.split(' ')[0].toUpperCase();
    const groomFirstName = weddingData.groom.name.split(' ')[1].toUpperCase();

    return (
        <div className="fixed top-6 left-6 z-50 pointer-events-none mix-blend-difference">
            <div className="flex flex-col items-start leading-none">
                <motion.div
                    animate={{
                        x: [0, 5, 0],
                        y: [0, -2, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="font-display text-xl md:text-2xl text-white font-bold tracking-widest"
                >
                    {brideFirstName} &
                </motion.div>
                <motion.div
                    animate={{
                        x: [0, -5, 0],
                        y: [0, 2, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="font-display text-xl md:text-2xl text-white font-bold tracking-widest pl-4"
                >
                    {groomFirstName}
                </motion.div>
            </div>
        </div>
    );
};

export default StickyHeader;
