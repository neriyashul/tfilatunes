import Mustache from "mustache";
import template from "./template.html";
import {
    getSubsections,
    getTfilot,
    getSubsectionName,
} from "../../db/metadata";
import { MongoDBGateway } from "../../db/mongodb-gateway";

const tfilot = getTfilot();

function filenameToTfila(name) {
    for (let tfila of tfilot) {
        if (name.includes(tfila.name.replaceAll(" ", "_"))) {
            return tfila;
        }
    }
}

function generateMustacheView(tfila, tunesBySubs) {
    return {
        tfilaName: tfila.name,
        subsections: tunesBySubs.map((obj) => ({
            name: getSubsectionName(tfila.key, obj._id),
            rates: groupByRate(obj.tunes).map((tunesByRate) => ({
                rate: tunesByRate.rate,
                tunes: tunesByRate.tunes.map((tune) => ({
                    name: tune.name,
                    composer: tune.composer,
                })),
            })),
        })),

        rateLabel: function () {
            return rateToLabel(this.rate);
        },

        label: function () {
            if (this.composer) {
                return this.name + " - " + this.composer;
            } else {
                return this.name;
            }
        },

        date: new Date().toLocaleDateString("he-il").replaceAll(".", "/"),
    };
}

function groupByRate(tunes) {
    const rates = {};
    for (let tune of tunes) {
        let rate = tune.rate || "no_rate";
        if (rates[rate]) {
            rates[rate].push(tune);
        } else {
            rates[rate] = [tune];
        }
    }
    const groups = Object.entries(rates).map(([k, v]) => ({
        rate: k,
        tunes: v,
    }));
    groups.sort((a, b) => (Number(a.rate) > Number(b.rate) ? -1 : 1));
    console.log("groups", groups);
    return groups;
}

function rateToLabel(rate) {
    switch (Number(rate)) {
        case 1:
            return "אין התאמה למילים (☆1):";
        case 2:
            return "התאמה לא טובה למילים (☆2):";
        case 3:
            return "התאמה סבירה למילים (☆3):";
        case 4:
            return "התאמה די טובה למילים (☆4):";
        case 5:
            return "התאמה מלאה למילים (☆5):";
        default:
            return "ללא דירוג:";
    }
}

export async function generateHtml(filename, env) {
    const tfila = filenameToTfila(filename);
    const key = tfila?.key;
    if (!key) throw new Error("invalid filename");

    const subsections = getSubsections(key);
    const subIds = subsections.map((sub) => sub.id);

    const db = new MongoDBGateway(env);
    const tunesBySubs = await db.getTunes(subIds);

    const view = generateMustacheView(tfila, tunesBySubs);
    const html = Mustache.render(template, view);
    return html;
}
