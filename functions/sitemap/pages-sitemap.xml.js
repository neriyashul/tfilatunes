import Mustache from "mustache";
import template from "./sitemap-template.xml.txt";
import tfilot from "../db/data/tfilot.json";
import { Cache } from "../utils/cache";
import { createRecord } from "./record";

const indexRecord = {
    loc: "https://tfilatunes.com",
    lastmod: "2023-05-08",
    changefreq: "monthly",
    priority: 1.0,
};

async function getTfilaPageRecords(cache) {
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
    return Object.values(urlRecords);
}

function getMenuPageRecords() {
    const pages = [
        "https://tfilatunes.com/files",
        "https://tfilatunes.com/add-tune",
        "https://tfilatunes.com/contribute",
        "https://tfilatunes.com/about"
    ]
    return pages.map((url) => ({
        loc: url,
        lastmod: "2023-05-08",
        changefreq: "monthly",
        priority: 0.95,
    }));
}

async function generateMustacheView(cache) {
    const tfilotRecords = await getTfilaPageRecords(cache);
    const menuRecords = getMenuPageRecords();

    return { urls: [indexRecord, ...menuRecords, ...tfilotRecords] };
}

export async function onRequestGet({ env }) {
    const cache = new Cache(env.CLOUDFLARE_KV);
    const view = await generateMustacheView(cache);
    const output = Mustache.render(template, view);
    return new Response(output, {
        headers: { "Content-Type": "text/xml" },
    });
}
