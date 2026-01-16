interface Env {
    WEDDING_WISHES_KV: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { request, env } = context;
        const { type } = await request.json() as { type: 'increment' | 'decrement' };

        let currentLikes = await env.WEDDING_WISHES_KV.get("likes_count");
        let likes = currentLikes ? parseInt(currentLikes) : 0;

        if (type === 'increment') {
            likes++;
        } else if (type === 'decrement') {
            likes = Math.max(0, likes - 1);
        }

        await env.WEDDING_WISHES_KV.put("likes_count", likes.toString());

        return new Response(JSON.stringify({ likes }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
