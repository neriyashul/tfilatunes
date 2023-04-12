import Mustache from "mustache";
import template from "./template.html";
import {
    getSubsections,
    getTfilot,
    getSubsectionName,
} from "../../db/metadata";
import { MongoDBGateway } from "../../db/mongodb-gateway";
import { ServiceErrorResponse } from "../../utils/response";

const tfilot = getTfilot();

function filenameToTfila(name) {
    if (name.includes("קבלת_שבת")) {
        return tfilot[0];
    } else if (name.includes("הלל")) {
        return tfilot[1];
    }
}

function generateMustacheView(tfila, tunesBySubs) {
    return {
        tfilaName: tfila.name,
        subsections: tunesBySubs.map((obj) => ({
            name: getSubsectionName(obj._id),
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

export async function onRequestGet({ params, env }) {
    const filename = decodeURI(params.filename);
    const tfila = filenameToTfila(filename);
    const key = tfila?.key;
    if (!key) return new Response("invalid page");

    const subsections = getSubsections(key);
    const minId = subsections[0].id;
    const maxId = subsections[subsections.length - 1].id;

    try {
        const db = new MongoDBGateway(env);
        const tunesBySubs = await db.getRangeTunes(minId, maxId);

        const view = generateMustacheView(tfila, tunesBySubs);
        const output = Mustache.render(template, view);
        return new Response(output, {
            headers: { "Content-Type": "text/html" },
        });
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}
