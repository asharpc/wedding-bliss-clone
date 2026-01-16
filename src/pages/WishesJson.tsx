import { useEffect, useState } from 'react';

const WishesJson = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/wishes')
            .then(res => res.json())
            .then(apiData => {
                const jsonData = {
                    likes: apiData.likes || 0,
                    count: apiData.wishes ? apiData.wishes.length : 0,
                    wishes: apiData.wishes || [],
                    generatedAt: new Date().toISOString()
                };
                setData(jsonData);
            })
            .catch(err => {
                console.error('Error fetching wishes:', err);
                setData({ error: 'Failed to fetch data' });
            });
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
