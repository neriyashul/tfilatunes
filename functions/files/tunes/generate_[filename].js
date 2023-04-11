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
        // const db = new MongoDBGateway(env);
        // const tunesBySubs = await db.getRangeTunes(
        //     Number(minId),
        //     Number(maxId)
        // );
        const tunesBySubs = [
            {
                _id: 210,
                tunes: [
                    {
                        name: "ברכה על ההלל אשכזני",
                        composer: "עממי - אשכנזי",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 220,
                tunes: [
                    {
                        name: "יהי שלום בחילך",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "כחומר ביד היוצר",
                        composer: "ר' שלום חאריטונוב",
                        rate: 5,
                    },
                    { name: "ניגון סיפור מעשיות", composer: "", rate: 5 },
                    {
                        name: "הנה אל ישועתי (הבדלה)",
                        composer: "מודז'יץ",
                        rate: 5,
                    },
                    { name: "ושמחת בחגך", composer: 'חב"ד', rate: 5 },
                    {
                        name: "על הדבש ועל העוקץ",
                        composer: "נעמי שמר",
                        rate: 4,
                    },
                    { name: "אהבת עולם", composer: "ר' שלמה קרליבך", rate: 5 },
                    { name: "המלוכה והממשלה", composer: "", rate: 5 },
                    {
                        name: "שומרים הפקד",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "מלוך", composer: "ר' שלמה קרליבך", rate: 5 },
                ],
            },
            {
                _id: 230,
                tunes: [
                    { name: "מקימי", composer: "יוסף קרדונר", rate: 5 },
                    { name: "מקימי", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "מי כה' אלוקינו (מקימי)",
                        composer: "אפרים רוזנבלום",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 250,
                tunes: [
                    { name: "יבנה המקדש", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "אליהו הנביא",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "אדיר הוא", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "המעביר בניו / מזמור שירו",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "אשר ברא", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "מזמור לתודה",
                        composer: "מיוחס לר' זושא מנאפולי",
                        rate: 5,
                    },
                    { name: "ניגון שמחה", composer: 'חב"ד', rate: 5 },
                    {
                        name: "מנוחה ושמחה",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "בצאת ישראל", composer: "נפתלי קמפה", rate: 5 },
                    {
                        name: "בצאת ישראל",
                        composer: "הדברי ישראל ממודז'יץ",
                        rate: 5,
                    },
                    {
                        name: "ויאתיו (ויתנו לך כתר מלוכה)",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "ואני נתתי לך / יפרח בימיו צדיק",
                        composer: "ר' ישראל מרוזי'ן",
                        rate: 5,
                    },
                    {
                        name: "שומרים הפקד",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "אורך ימים אשביעהו",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 260,
                tunes: [
                    { name: "ישראל בטח בה'", composer: "ר' שלמה קרליבך" },
                    { name: "ארץ ארץ ארץ", composer: "שייקה פייקוב", rate: 5 },
                ],
            },
            {
                _id: 270,
                tunes: [
                    { name: "יברך את בית ישראל", composer: "עממי", rate: 5 },
                    {
                        name: "שים שלום (ברכנו אבינו)",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "ניגון חסידי הצמח צדק",
                        composer: 'חסידי אדמו"ר הצמח צדק',
                        rate: 5,
                    },
                    {
                        name: "השמיעיני את קולך",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "אליהו הנביא",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "כי הרבית",
                        composer: "ר' אברהם מלוביצקי",
                        rate: 5,
                    },
                    { name: "ירושלים של זהב", composer: "נעמי שמר", rate: 5 },
                    {
                        name: "ואני נתתי לך / יפרח בימיו צדיק",
                        composer: "ר' ישראל מרוזי'ן",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 280,
                tunes: [
                    { name: "שבחי ירושלים", composer: "אביהו מדינה", rate: 3 },
                    {
                        name: "שובי נפשי למנוחיכי (איטי)",
                        composer: "ר' שלמה קרליבך",
                    },
                    {
                        name: "שובי נפשי למנוחיכי (מהיר)",
                        composer: "ר' שלמה קרליבך",
                    },
                ],
            },
            {
                _id: 290,
                tunes: [
                    {
                        name: "אנא ה' כי אני עבדך",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "למען אחי ורעי",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "מה אשיב לה'", composer: "", rate: 5 },
                    {
                        name: "מה אשיב לה'",
                        composer: "אבינועם וולפסון (עממי)",
                        rate: 5,
                    },
                    { name: "אל בורות המים", composer: "נעמי שמר", rate: 4 },
                ],
            },
            {
                _id: 300,
                tunes: [
                    {
                        name: "עולה על הכל",
                        composer: "ר' אברהם מלוביצקי",
                        rate: 4,
                    },
                    {
                        name: "הללו את ה'",
                        composer: `האדמו"ר האמרי אש ממודז'יץ`,
                        rate: 5,
                    },
                    { name: "המלך בשדה", composer: "עממי", rate: 5 },
                    { name: "ניגון שמחה", composer: 'חב"ד', rate: 5 },
                    {
                        name: "ניגון קרלין (בר יוחאי)",
                        composer: "קרלין",
                        rate: 5,
                    },
                    { name: "הללו את ה'", composer: "עממי - אשכנזי", rate: 5 },
                    {
                        name: "המעביר בניו / מזמור שירו",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "הללו את ה'", composer: 'חב"ד', rate: 5 },
                    {
                        name: "יבנה יבנה יבנה המקדש",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "השבעתי", composer: "פנחס ברייער", rate: 4 },
                ],
            },
            {
                _id: 306,
                tunes: [
                    {
                        name: "אלי אתה ואודך",
                        composer: `ר' שניאור זלמן מלאדי (חב"ד)`,
                        rate: 5,
                    },
                ],
            },
            {
                _id: 310,
                tunes: [
                    { name: "מן המיצר", composer: "עממי", rate: 5 },
                    { name: "מן המיצר", composer: "", rate: 5 },
                    {
                        name: "כל העולם כולו",
                        composer: "ר' ברוך חייט",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 320,
                tunes: [
                    { name: "קול רינה", composer: "ר' חיים בנט" },
                    { name: "קול רינה", composer: "עממי - אשכנזי" },
                ],
            },
            {
                _id: 330,
                tunes: [
                    {
                        name: "ניגון חסידי הצמח צדק",
                        composer: 'חסידי אדמו"ר הצמח צדק',
                        rate: 5,
                    },
                    { name: "לא אמות", composer: "ר' ברוך צ'ייט", rate: 5 },
                    { name: "שמחה לארצך", composer: "ר' שלמה קרליבך", rate: 5 },
                    { name: "ברכי נפשי", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "אלי אתה ואודך",
                        composer: `ר' שניאור זלמן מלאדי (חב"ד)`,
                        rate: 5,
                    },
                    {
                        name: "הטוב הטוב הטוב",
                        composer: "ר' בן ציון שנקר",
                        rate: 5,
                    },
                    { name: "פתחו לי", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "על הדבש ועל העוקץ",
                        composer: "נעמי שמר",
                        rate: 5,
                    },
                    { name: "אוחילה לאל", composer: "ר' הלל פלאי", rate: 5 },
                    { name: "בני היכלא", composer: "האחים ולדמן", rate: 5 },
                    { name: "אודך", composer: "אלי ליפסקר", rate: 5 },
                    { name: "ברוך ה'", composer: "", rate: 5 },
                    { name: "לא אמות", composer: "עממי - אשכנזי", rate: 5 },
                    { name: "מה שהיה היה", composer: "ברסלב", rate: 5 },
                ],
            },
            {
                _id: 340,
                tunes: [
                    { name: "בספר חיים", composer: "", rate: 5 },
                    {
                        name: "ניגון חסידי הצמח צדק",
                        composer: 'חסידי אדמו"ר הצמח צדק',
                        rate: 5,
                    },
                    {
                        name: "ניגון הבעל שם טוב",
                        composer: "הבעל שם טוב",
                        rate: 5,
                    },
                    { name: "והיא שעמדה", composer: "יונתן רזאל", rate: 5 },
                    {
                        name: "שפכי כמים ליבך",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "אדיר הוא", composer: "ר' שלמה קרליבך", rate: 5 },
                    {
                        name: "ניגון ברדיצ׳ב",
                        composer: "ר' לוי יצחק מברדיצ'ב",
                        rate: 5,
                    },
                    {
                        name: "אום אני חומה / לך אמר ליבי",
                        composer: "ר' דוד כהן",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 350,
                tunes: [
                    {
                        name: "הבט (אלוקים צבאות שוב נא)",
                        composer: "ר' הלל פלאי",
                        rate: 4,
                    },
                    {
                        name: "ופרוס עלינו",
                        composer: "ר' שלמה קרליבך",
                        rate: 4,
                    },
                    { name: "אל תירא ישראל", composer: "אביהו מדינה", rate: 4 },
                    {
                        name: "תודה על כל מה שנתת",
                        composer: "עוזי חיטמן",
                        rate: 4,
                    },
                    { name: "מה נאוו עלי", composer: "עממי בבלי", rate: 4 },
                    {
                        name: "ויאתיו (ויתנו לך כתר מלוכה)",
                        composer: "ר' שלמה קרליבך",
                        rate: 4,
                    },
                    {
                        name: "אלי אתה ואודך",
                        composer: `ר' שניאור זלמן מלאדי (חב"ד)`,
                        rate: 4,
                    },
                    { name: "והיא שעמדה", composer: "יונתן רזאל", rate: 4 },
                    {
                        name: "כל העולם כולו",
                        composer: "ר' ברוך צ'ייט",
                        rate: 4,
                    },
                    {
                        name: "ניגון קראקוב",
                        composer: "ר' שלמה קרליבך",
                        rate: 4,
                    },
                    {
                        name: "ניגון חסידי הצמח צדק",
                        composer: 'חסידי אדמו"ר הצמח צדק',
                        rate: 4,
                    },
                    {
                        name: "יברכך ה' מציון",
                        composer: "דוד ויינקרנץ",
                        rate: 4,
                    },
                    { name: "אשא עיני", composer: "ר' שלמה קרליבך", rate: 4 },
                ],
            },
            {
                _id: 360,
                tunes: [
                    { name: "אשא עיני", composer: "ר' שלמה קרליבך", rate: 5 },
                    { name: "מה נאוו עלי", composer: "עממי בבלי", rate: 5 },
                    {
                        name: "הבט (אלוקים צבאות שוב נא)",
                        composer: "ר' הלל פלאי",
                        rate: 5,
                    },
                    {
                        name: "ניגון חסידי הצמח צדק",
                        composer: 'חסידי אדמו"ר הצמח צדק',
                        rate: 5,
                    },
                    {
                        name: "ניגון קראקוב",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    {
                        name: "יברכך ה' מציון",
                        composer: "דוד ויינקרנץ",
                        rate: 5,
                    },
                    {
                        name: "כל העולם כולו",
                        composer: "ר' ברוך צ'ייט",
                        rate: 5,
                    },
                    {
                        name: "ופרוס עלינו",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "והיא שעמדה", composer: "יונתן רזאל", rate: 5 },
                    {
                        name: "ויאתיו (ויתנו לך כתר מלוכה)",
                        composer: "ר' שלמה קרליבך",
                        rate: 5,
                    },
                    { name: "אל תירא ישראל", composer: "אביהו מדינה", rate: 5 },
                    {
                        name: "תודה על כל מה שנתת",
                        composer: "עוזי חיטמן",
                        rate: 5,
                    },
                ],
            },
            {
                _id: 370,
                tunes: [
                    {
                        name: "יהללוך ה' אלוקינו",
                        composer: "משה לאופר",
                        rate: 5,
                    },
                    {
                        name: "עושה שלום במרומיו",
                        composer: "נורית הירש",
                        rate: 5,
                    },
                ],
            },
        ];

        const view = generateMustacheView(tfila, tunesBySubs);
        const output = Mustache.render(template, view);
        return new Response(output, {
            headers: { "Content-Type": "text/html" },
        });
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}
