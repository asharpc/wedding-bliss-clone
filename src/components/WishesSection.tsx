import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Heart, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const WishesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  // Local Storage Keys
  const STORAGE_KEYS = {
    LIKES: 'wedding_bliss_likes',
    HAS_LIKED: 'wedding_bliss_user_has_liked',
    WISHES: 'wedding_bliss_wishes'
  };

  // Initialize from API
  useEffect(() => {
    const storedHasLiked = localStorage.getItem(STORAGE_KEYS.HAS_LIKED);
    if (storedHasLiked === 'true') {
      setLiked(true);
    }

    // Fetch initial data from API
    fetch('/api/wishes')
      .then(res => res.json())
      .then((data: any) => {
        if (data && typeof data.likes === 'number') {
          setLikes(data.likes);
        }
      })
      .catch(err => console.log('Failed to fetch wishes from API', err));
  }, []);

  const removeHeart = (id: number) => {
    setFloatingHearts(prev => prev.filter(heart => heart.id !== id));
  };

  const handleLike = async (e: React.MouseEvent) => {
    let newLikes = likes;
    let newLiked = !liked;
    const type = !liked ? 'increment' : 'decrement';

    if (!liked) {
      newLikes = likes + 1;
      newLiked = true;

      // Trigger floating heart animation (Instagram style)
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 40 - 20,
        y: 0
      };
      setFloatingHearts(prev => [...prev, newHeart]);
    } else {
      newLikes = likes - 1;
      newLiked = false;
    }

    // Optimistic UI update
    setLikes(newLikes);
    setLiked(newLiked);
    localStorage.setItem(STORAGE_KEYS.HAS_LIKED, newLiked.toString());

    // Call API
    try {
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      });
    } catch (error) {
      console.error('Error updating likes:', error);
      // Revert on error if needed, but for now just logging
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newWish = {
      name: formData.name,
      message: formData.message,
    };

    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWish)
      });

      if (res.ok) {
        toast.success('Thank you for your wishes! 💕');
        setFormData({ name: '', message: '' });
      } else {
        throw new Error('Failed to save wish');
      }
    } catch (error) {
      console.error('Error saving wish:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };



  return (
    <section ref={ref} className="min-h-screen bg-background section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Like Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20 relative"
        >
          <AnimatePresence>
            {floatingHearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ opacity: 1, y: 0, x: heart.x, scale: 0.5 }}
                animate={{ opacity: 0, y: -100, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                onAnimationComplete={() => removeHeart(heart.id)}
                className="absolute pointer-events-none"
                style={{ top: '-20px' }}
              >
                <Heart className="w-8 h-8 fill-red-500 text-red-500" />
              </motion.div>
            ))}
          </AnimatePresence>
          <button
            onClick={handleLike}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/30 transition-all duration-300 hover:border-foreground relative`}
          >
            <Heart
              className={`w-6 h-6 transition-all duration-300 ${liked ? 'fill-foreground text-foreground scale-110' : 'text-foreground'
                }`}
            />
            <span className="font-body text-lg text-foreground">{likes}</span>
          </button>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="handwriting-text text-foreground/70 text-2xl md:text-3xl">
            Leave a wish, spread the joy
          </p>
        </motion.div>

        {/* Wishes Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto"
        >
          <div className="space-y-6">
            <div>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-transparent border-0 border-b border-foreground/30 rounded-none text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground px-0 py-3"
                placeholder="Your Name"
              />
            </div>

            <div>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-transparent border-0 border-b border-foreground/30 rounded-none text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground resize-none px-0 py-3"
                placeholder="Your Wishes"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 w-full py-4 border border-foreground text-foreground font-body hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Wishes
          </button>
        </motion.form>


      </div>
    </section>
  );
};

export default WishesSection;
