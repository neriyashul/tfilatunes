import Mustache from "mustache";
import template from "./sitemap-template.xml.txt";
import { Cache } from "../utils/cache";
import { createRecord } from "./record";
import tunes from "../db/data/server-tunes.json";

async function generateMustacheView(env, cache) {
    let lastMods = JSON.parse(await cache.get("tunesLastModifications")) || {};

    const urlRecords = [];
    for (let tune of tunes) {
        for (let sub of tune.subsections) {
            let url = `https://tfilatunes.com/tunes/${tune.id}?subId=${sub.id}`;
            urlRecords.push(createRecord(url, lastMods, "monthly"));
        }
    }

    urlRecords.forEach((obj) => (lastMods[obj.url] = obj.lastmod));
    await cache.set("tunesLastModifications", JSON.stringify(lastMods));

    return { urls: urlRecords };
}

export async function onRequestGet({ env }) {
    const cache = new Cache(env.CLOUDFLARE_KV);
    const view = await generateMustacheView(env, cache);
    const output = Mustache.render(template, view);
    return new Response(output, {
        headers: { "Content-Type": "text/xml" },
    });
}
