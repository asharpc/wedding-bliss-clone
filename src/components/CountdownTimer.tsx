import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getEventDate } from '@/lib/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = getEventDate();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="text-center">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-handwriting text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 md:mb-12"
      >
        Counting the moments
      </motion.p>

      {/* Timer Grid - Mobile First */}
      <div className="grid grid-cols-4 gap-2 md:gap-6 lg:gap-8 max-w-sm md:max-w-lg mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            {/* Number */}
            <div className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground font-bold leading-none">
              {String(unit.value).padStart(2, '0')}
            </div>
            {/* Label */}
            <div className="font-body text-xs md:text-sm text-foreground/70 uppercase tracking-widest mt-2">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
