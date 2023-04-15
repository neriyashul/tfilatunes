import tefilot from "./data/tfilot.json";
import tunes from "./data/tunes.json";
import { unpack } from "../utils/tune";

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
                    let t = tune;
                    t.subsections = [subsection];
                    tunes.push(t);
                }
            }
        }
        return tunes;
    }

    getTune(id, subsectionId) {
        const tunes = this.getTunes(subsectionId);

        for (const tune of tunes) {
            if (tune.id === id) {
                return unpack(tune);
            }
        }
    }
}
