import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { weddingData, formatDate } from '@/lib/weddingData';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';

const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const addToCalendar = () => {
    const startDate = new Date('2026-02-15T11:30:00');
    const endDate = new Date('2026-02-15T21:00:00');
    
    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Abdul Lihan & Rifha Fathima Wedding')}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent('Nikah at 11:30 AM, Reception at 5:00 PM')}&location=${encodeURIComponent(weddingData.nikah.venue_address)}`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <section ref={ref} className="min-h-screen bg-secondary/30 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wider mb-4">
            SAVE THE DATE
          </h2>
          <p className="handwriting-text text-foreground/70">
            We can't wait to celebrate with you
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <CountdownTimer />
        </motion.div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Nikah */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 tracking-wider">
              NIKAH
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="font-body text-foreground">{formatDate(weddingData.nikah.date)}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="font-body text-foreground">{weddingData.nikah.time}</span>
              </div>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 tracking-wider">
              RECEPTION
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="font-body text-foreground">{formatDate(weddingData.reception.date)}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="font-body text-foreground">{weddingData.reception.time}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-foreground" />
            <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
              VENUE
            </h3>
          </div>
          
          <p className="font-body text-lg md:text-xl text-foreground mb-2">
            {weddingData.nikah.venue}
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            {weddingData.nikah.venue_address}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={() => window.open(weddingData.nikah.google_maps_link, '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Maps
            </Button>
            
            <Button
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={addToCalendar}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;
