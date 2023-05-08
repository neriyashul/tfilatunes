import Mustache from "mustache";
import template from "./sitemap-template.xml.txt";
import tfilot from "../db/data/tfilot.json";
import { Cache } from "../utils/cache";
import { createRecord } from "./record"


async function generateMustacheView(cache) {
    const lastMods =
        JSON.parse(await cache.get("pagesLastModifications")) || {};

    const urlRecords = {};

    for (let tfila of tfilot) {
        if (Object.hasOwn(tfila, "collection")) {
            let currentCollection = "";
            for (let c of tfila.collection.split("/")) {
                currentCollection += "/" + c;
                let url = `https://tfilatunes.com/collection${currentCollection}`;
                urlRecords[url] = createRecord(url, lastMods, "monthly");
            }
        }
        let url = `https://tfilatunes.com/tunes?text=${tfila.key}`;
        urlRecords[url] = createRecord(url, lastMods, "weekly");
    }

    Object.entries(urlRecords).forEach(
        ([url, obj]) => (lastMods[url] = obj.lastmod)
    );
    await cache.set("pagesLastModifications", JSON.stringify(lastMods));

    return { urls: Object.values(urlRecords) };
}

export async function onRequestGet({ env }) {
    const cache = new Cache(env.CLOUDFLARE_KV);
    const view = await generateMustacheView(cache);
    const output = Mustache.render(template, view);
    return new Response(output, {
        headers: { "Content-Type": "text/xml" },
    });
}
