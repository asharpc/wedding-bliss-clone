interface Env {
    WEDDING_WISHES_KV: KVNamespace;
}

interface Wish {
    id: string;
    name: string;
    message: string;
    date: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const { env } = context;
        // Get wishes and likes from KV
        const wishesStr = await env.WEDDING_WISHES_KV.get("raw_wishes");
        const likesStr = await env.WEDDING_WISHES_KV.get("likes_count");

        const wishes = wishesStr ? JSON.parse(wishesStr) : [];
        const likes = likesStr ? parseInt(likesStr) : 0;

        return new Response(JSON.stringify({ wishes, likes }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { request, env } = context;
        const newWish = await request.json() as Wish;

        // Validate input
        if (!newWish.name || !newWish.message) {
            return new Response("Missing name or message", { status: 400 });
        }

        // Get existing wishes
        const wishesStr = await env.WEDDING_WISHES_KV.get("raw_wishes");
        let wishes: Wish[] = wishesStr ? JSON.parse(wishesStr) : [];

        // Add new wish
        wishes.push({
            ...newWish,
            id: Date.now().toString(),
            date: new Date().toISOString()
        });

        // Save back to KV
        await env.WEDDING_WISHES_KV.put("raw_wishes", JSON.stringify(wishes));

        return new Response(JSON.stringify({ success: true, wish: newWish }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
