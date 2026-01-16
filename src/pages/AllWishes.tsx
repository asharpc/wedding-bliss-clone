import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Wish {
    id: string;
    name: string;
    message: string;
    date: string;
}

const AllWishes = () => {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/wishes')
            .then(res => res.json())
            .then((data: any) => {
                if (data && data.wishes) {
                    // Sort by date descending (newest first)
                    const sortedWishes = data.wishes.sort((a: Wish, b: Wish) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                    setWishes(sortedWishes);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch wishes', err);
                setLoading(false);
            });
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 flex items-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Application
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                        Wishes & Blessings
                    </h1>
                    <p className="font-handwriting text-2xl text-foreground/70">
                        Messages from our loved ones
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-pulse text-foreground/60 font-body">Loading wishes...</div>
                    </div>
                ) : wishes.length === 0 ? (
                    <div className="text-center py-20 text-foreground/60 font-body">
                        No wishes yet. Be the first to wish!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishes.map((wish, index) => (
                            <motion.div
                                key={wish.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white/50 backdrop-blur-sm border border-foreground/10 p-6 rounded-lg hover:border-foreground/30 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                                            <User className="w-5 h-5 text-foreground/40" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-lg text-foreground tracking-wide">
                                                {wish.name}
                                            </h3>
                                            <span className="text-xs text-foreground/40 font-body uppercase tracking-wider">
                                                {formatDate(wish.date)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-body text-foreground/80 leading-relaxed italic">
                                    "{wish.message}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllWishes;
