import tfilot from "./data/tfilot.json";

function getSubsectionNames() {
    const names = {};
    for (let tfila of tfilot) {
        for (let section of tfila.sections) {
            if (section.subsections) {
                for (let sub of section.subsections) {
                    names[sub.id] = sub.name;
                }
            }
        }
    }
    return names;
}
const subsectionNames = getSubsectionNames();

export function getTfilot() {
    return tfilot.map((tfila) => ({ key: tfila.key, name: tfila.name }));
}

export function getSubsectionName(id) {
    return subsectionNames[id];
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
