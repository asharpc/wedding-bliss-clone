import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { weddingData, formatDate } from '@/lib/weddingData';
import CountdownTimer from './CountdownTimer';

const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const addToCalendar = () => {
    const startDate = new Date('2026-02-15T11:30:00');
    const endDate = new Date('2026-02-15T21:00:00');
    
    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Rifha Fathima & Abdul Lihan Wedding')}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent('Nikah at 11:30 AM, Reception at 5:00 PM')}&location=${encodeURIComponent(weddingData.nikah.venue_address)}`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <section ref={ref} className="min-h-screen bg-background section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <CountdownTimer />
        </motion.div>

        {/* Nikah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-6">
            NIKAH
          </h3>
          <p className="font-body text-lg md:text-xl text-foreground mb-2">
            {formatDate(weddingData.nikah.date)}
          </p>
          <p className="font-body text-lg md:text-xl text-foreground">
            {weddingData.nikah.time}
          </p>
        </motion.div>

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-6">
            RECEPTION
          </h3>
          <p className="font-body text-lg md:text-xl text-foreground mb-2">
            {formatDate(weddingData.reception.date)}
          </p>
          <p className="font-body text-lg md:text-xl text-foreground">
            {weddingData.reception.time}
          </p>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-6">
            VENUE
          </h3>
          <p className="font-body text-lg md:text-xl text-foreground mb-2">
            {weddingData.nikah.venue}
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-10">
            {weddingData.nikah.venue_address}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={weddingData.nikah.google_maps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-foreground underline underline-offset-4 hover:no-underline transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              View on Maps
            </a>
            
            <button
              onClick={addToCalendar}
              className="font-body text-foreground underline underline-offset-4 hover:no-underline transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
