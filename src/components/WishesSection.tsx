import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <section ref={ref} className="min-h-screen bg-background section-padding relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://framerusercontent.com/assets/XT63RdS8yMFwBp3W4rUTNBBsH80.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wider mb-4">
            SEND YOUR WISHES
          </h2>
          <p className="handwriting-text text-foreground/70">
            Leave a wish, spread the joy
          </p>
        </motion.div>

        {/* Like Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={handleLike}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 ${
              liked 
                ? 'border-red-500 bg-red-500/10' 
                : 'border-foreground/30 hover:border-foreground/50'
            }`}
          >
            <Heart 
              className={`w-6 h-6 transition-all duration-300 ${
                liked ? 'fill-red-500 text-red-500 scale-110' : 'text-foreground'
              }`}
            />
            <span className="font-body text-lg text-foreground">{likes}</span>
          </button>
        </motion.div>

        {/* Wishes Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Your Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="font-body text-sm text-muted-foreground mb-2 block">
              Your Wishes
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
              placeholder="Write your heartfelt wishes for the couple..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-body text-base py-6"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Wishes
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default WishesSection;
