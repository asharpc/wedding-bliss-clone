import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const WishesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [likes, setLikes] = useState(247);
  const [liked, setLiked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setLiked(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your wishes! 💕');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={ref} className="min-h-screen bg-background section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Like Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20"
        >
          <button
            onClick={handleLike}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/30 transition-all duration-300 hover:border-foreground`}
          >
            <Heart 
              className={`w-6 h-6 transition-all duration-300 ${
                liked ? 'fill-foreground text-foreground scale-110' : 'text-foreground'
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
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-transparent border-0 border-b border-foreground/30 rounded-none text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-foreground px-0 py-3"
                placeholder="Your Email"
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
