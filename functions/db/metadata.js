import tfilot from "./data/tfilot.json";

function getSubsectionNames() {
    const names = {};
    for (let tfila of tfilot) {
        for (let section of tfila.sections) {
            for (let sub of section.subsections) {
                names[sub.id] = sub.name;
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

    const subs = tfila[0].sections
        .map((sec) =>
            sec.subsections.map((sub) => ({
                id: sub.id,
                name: sub.name,
            }))
        )
        .flat();
    return subs;
}
