import tfilot from "./data/tfilot.json";

export function getTfilot() {
    return tfilot.map((tfila) => ({ key: tfila.key, name: tfila.name }));
}

export function getSubsectionName(tfilaKey, id) {
    for (let tfila of tfilot) {
        if (tfila.key === tfilaKey) {
            for (let section of tfila.sections) {
                if (section.subsections) {
                    for (let sub of section.subsections) {
                        if (sub.id === id) {
                            return sub.name;
                        }
                    }
                }
            }
        }
    }
}

export function getSubsections(key) {
    const tfila = tfilot.filter((tfila) => tfila.key === key);
    if (tfila.length === 0) return null;

    let subs = [];
    for (let section of tfila[0].sections) {
        if (section.subsections) {
            for (let sub of section.subsections) {
                subs.push({
                    id: sub.id,
                    name: sub.name,
                });
            }
        }
    }
    return subs;
}
