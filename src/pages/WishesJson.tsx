import { useEffect, useState } from 'react';

const WishesJson = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const STORAGE_KEYS = {
            LIKES: 'wedding_bliss_likes',
            HAS_LIKED: 'wedding_bliss_user_has_liked',
            WISHES: 'wedding_bliss_wishes'
        };

        const likes = localStorage.getItem(STORAGE_KEYS.LIKES);
        const wishes = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHES) || '[]');

        // Construct the data object
        const jsonData = {
            likes: likes ? parseInt(likes, 10) : 0,
            count: wishes.length,
            wishes: wishes,
            generatedAt: new Date().toISOString()
        };

        setData(jsonData);
    }, []);

    if (!data) return null;

    return (
        <pre style={{
            padding: '20px',
            fontSize: '14px',
            fontFamily: 'monospace',
            backgroundColor: '#f4f4f4',
            margin: 0,
            minHeight: '100vh',
            overflow: 'auto'
        }}>
            {JSON.stringify(data, null, 2)}
        </pre>
    );
};

export default WishesJson;
