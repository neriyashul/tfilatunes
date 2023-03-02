const fs = require("fs");
const path = require("path");

class FileSystemDB {
    constructor() {
        const tefilotPath = path.join(__dirname, "tefilot.json");
        const tefilot = JSON.parse(fs.readFileSync(tefilotPath, "utf-8"));

        const tunesPath = path.join(__dirname, "tunes.json");
        const tunes = JSON.parse(fs.readFileSync(tunesPath, "utf-8"));
        this.db = { tefilot, tunes };
    }

    getTefila(key) {
        return this.db.tefilot.find((tefila) => tefila.key === key);
    }

    // getSection: this.db.tefilot.find({ "sections.subsections.id": 1200 }, { "sections.$": 1, key: 1 })
    getSection(subsectionId) {
        for (let tefila of this.db.tefilot) {
            for (let section of tefila.sections) {
                for (let subsection of section.subsections) {
                    if (subsection.id === subsectionId) {
                        return {
                            key: tefila.key,
                            sections: [section],
                        };
                    }
                }
            }
        }
    }

    // this.db.tunes.find({ "subsections.id": 1200 }, { "subsections.$": 1, name: 1, composer: 1, performance: 1 })
    getTunes(subsectionId) {
        let tunes = [];
        for (const tune of this.db.tunes) {
            for (const subsection of tune.subsections) {
                if (subsection.id === subsectionId) {
                    tunes.push({
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

    getTune(id) {
        for (const tune of this.db.tunes) {
            if (tune.id === id) {
                return tune;
            }
        }
    }
}

module.exports = FileSystemDB;
