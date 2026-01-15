import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import { weddingData } from '@/lib/weddingData';
import CountdownTimer from './CountdownTimer';
import venueImage from '@/assets/venue-image-new.jpg';


const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();

  const isNikahPage = location.pathname.includes('nikah');
  const isReceptionPage = location.pathname.includes('reception');

  // Show both if not specifically on nikah or reception page, or if explicitly requested
  const showNikah = isNikahPage || (!isNikahPage && !isReceptionPage);
  const showReception = isReceptionPage || (!isNikahPage && !isReceptionPage);

  const addToCalendar = () => {
    const startDate = new Date('2026-02-15T11:30:00');
    const endDate = new Date('2026-02-15T21:00:00');

    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Rifha Fathima & Abdul Lihan Wedding')}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent('Nikah at 11:30 AM, Reception at 5:00 PM')}&location=${encodeURIComponent(weddingData.nikah.venue_address)}`;

    window.open(calendarUrl, '_blank');
  };

  // Get day, month, year
  const eventDate = new Date(weddingData.nikah.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const year = eventDate.getFullYear();
  const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section ref={ref} className="bg-background">
      {/* Countdown Section */}


      {/* Date Display - Modern Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center px-6 py-12 md:py-16"
      >
        <div className="flex flex-col items-center">
          {/* Month */}
          <span className="font-display text-lg md:text-xl lg:text-2xl text-foreground tracking-[0.3em] mb-2">
            {month}
          </span>
          {/* Day - Big and Bold */}
          <div className="flex items-center gap-4">
            <span className="font-display text-8xl md:text-9xl lg:text-[12rem] text-foreground font-bold leading-none">
              {day}
            </span>
            <span className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/80 tracking-widest uppercase">
              {weekday}
            </span>
          </div>
          {/* Year */}
          <span className="font-display text-xl md:text-2xl lg:text-3xl text-foreground tracking-[0.3em] mt-2">
            {year}
          </span>
        </div>
      </motion.div>



      {/* Nikah & Reception Times */}
      <div className="px-6 py-12 md:py-16">
        <div className="max-w-sm mx-auto space-y-12">
          {/* Nikah */}
          {/* Nikah */}
          {showNikah && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-4">
                NIKAH
              </h3>
              <p className="font-body text-base md:text-lg text-foreground/80">
                {weekday}
              </p>
              <p className="font-body text-lg md:text-xl text-foreground">
                {weddingData.nikah.time}
              </p>
            </motion.div>
          )}

          {/* Reception */}
          {showReception && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-4">
                RECEPTION
              </h3>
              <p className="font-body text-base md:text-lg text-foreground/80">
                {weekday}
              </p>
              <p className="font-body text-lg md:text-xl text-foreground">
                {weddingData.reception.time}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Location Section with Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center px-6 py-12"
      >
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-8">
          LOCATION
        </h3>
      </motion.div>

      {/* Venue Image - Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full"
      >
        <img
          src={venueImage}
          alt="Rozia International Convention Center"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
      </motion.div>

      {/* Venue Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center px-6 py-12 md:py-16"
      >
        <h4 className="font-display text-2xl md:text-3xl text-foreground tracking-wide mb-4">
          {weddingData.nikah.venue}
        </h4>
        <p className="font-body text-sm md:text-base text-foreground/70 max-w-md mx-auto mb-8 leading-relaxed">
          {weddingData.nikah.venue_address}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={weddingData.nikah.google_maps_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-body text-sm tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            View on Maps
          </a>

          <button
            onClick={addToCalendar}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-body text-sm tracking-wider hover:bg-foreground/90 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default DetailsSection;
