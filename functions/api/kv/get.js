import { Cache } from "../../utils/cache";

export async function onRequestGet({ env }) {
    const cache = new Cache(env.CLOUDFLARE_KV);

    try {
        const value = cache.get("dummy");
        return new Response("SUCCESS: " + value);
    } catch (error) {
        return new Response(`FAILED: ${error}`);
    }
}
