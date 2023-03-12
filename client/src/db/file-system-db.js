import tefilot from "./data/tefilot.json";
import tunes from "./data/tunes.json";

export class FileSystemDB {
    constructor() {
        this.db = { tefilot: tefilot, tunes: tunes };
    }

    getTefila(key) {
        return this.db.tefilot.find((tefila) => tefila.key === key);
    }

    getSection(subsectionId) {
        for (let tefila of this.db.tefilot) {
            for (let section of tefila.sections) {
                for (let subsection of section.subsections) {
                    if (subsection.id === subsectionId) {
                        return {
                            key: tefila.key,
                            text: section.text,
                            ...subsection,
                        };
                    }
                }
            }
        }
    }

    getTunes(subsectionId) {
        let tunes = [];
        for (const tune of this.db.tunes) {
            for (const subsection of tune.subsections) {
                if (subsection.id === subsectionId) {
                    tunes.push({
                        id: tune.id,
                        name: tune.name,
                        composer: tune.composer,
                        performance: tune.performance,
                        subsections: [subsection],
                    });
                }
            }
        }
        if (tunes.length > 0) return tunes;
    }

    #joinPerformances(tune, morePerformances) {
        let performance = tune.performance;
        if (!Object.hasOwn(performance, "label")) {
            performance.label = tune.composer;
        }

        if (morePerformances) {
            return [performance, ...morePerformances];
        } else {
            return [performance];
        }
    }

    getTune(id, subsectionId) {
        const tunes = this.getTunes(subsectionId);

        for (const tune of tunes) {
            if (tune.id === id) {
                const subsection = tune.subsections[0];
                return {
                    id: tune.id,
                    name: tune.name,
                    composer: tune.composer,
                    rate: subsection.rate,
                    performances: this.#joinPerformances(
                        tune,
                        subsection.performances
                    ),
                };
            }
        }
    }
}
