import { Cache } from "../../utils/cache";

export async function onRequestGet({ env }) {
    const cache = new Cache(env.CLOUDFLARE_KV);

    try {
        const epochIn24Hours = Math.round(Date.now() / 1000) + 86000;
        await cache.set("dummy", `The time is: ${Math.round(Date.now() / 1000)}`, epochIn24Hours);
        return new Response("SUCCESS")
    } catch (error) {
        return new Response(`FAILED: ${error}`)
    }
}
