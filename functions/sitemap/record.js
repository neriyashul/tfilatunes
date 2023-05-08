

export function createRecord(url, lastMods, changefreq, priority = 0.9) {
    if (!Object.hasOwn(lastMods, url)) {
        const currentDate = new Date().toISOString().split("T")[0];
        lastMods[url] = currentDate;
    }
    return {
        loc: url,
        lastmod: lastMods[url],
        changefreq: changefreq,
        priority: priority,
    };
}
