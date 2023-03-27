import { isUint } from "../utils/validator";
import { sendEmail } from "../utils/email";
import { MongoDBGateway } from "../db/mongodb-gateway";
import { InvalidParameterResponse } from "../utils/response";

import { sha256 } from "../utils/crypto";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startsWithNumber(str) {
    return /^\d/.test(str);
}

function extractYouTubeId(url) {
    if (!url) return url;
    if (url.length == "11" && !url.includes("/") && !url.includes("&"))
        return url;
    var youtubeId = "";
    var match;

    // Regular expressions to match different URL formats
    var embedRegex =
        /(?:embed|v|vi|\/e\/|\/v\/|\/vi\/|watch\?v=|\/embed\/)([\w-]{11})/;
    var shortUrlRegex = /youtu\.be\/([\w-]{11})/;

    // Check for different URL formats and extract the ID
    if ((match = embedRegex.exec(url)) !== null) {
        youtubeId = match[1];
    } else if ((match = shortUrlRegex.exec(url)) !== null) {
        youtubeId = match[1];
    } else if (url.indexOf("watch") !== -1) {
        youtubeId = url.split("v=")[1].substr(0, 11);
    }

    return youtubeId;
}

function extractStartAt(url) {
    if (!url) return url;
    let time = url.split("t=")[1];
    if (time) {
        time = time.split("&")[0];
        time = time.split("s")[0];
        if (isUint(time)) return Number(time);
    }
    return null;
}

function extractPerformanceField(key) {
    let arr = key.split("-");
    let perfId = arr[0];
    let fieldName = arr[1];
    return [perfId, fieldName];
}

function stylePerfomanceField(fieldName, value) {
    switch (fieldName) {
        case "link":
            return extractYouTubeId(value);
        case "startAt":
        case "endAt":
            return Number(value);
        default:
            return value;
    }
}

function formatPerformances(inputJson) {
    const performances = {};
    for (const [key, value] of Object.entries(inputJson)) {
        if (!startsWithNumber(key)) continue;

        let [id, fieldName] = extractPerformanceField(key);
        if (!performances[id]) {
            performances[id] = {};
        }

        let formatedValue = stylePerfomanceField(fieldName, value);

        if (fieldName === "link") {
            performances[id]["videoId"] = formatedValue;
            if (!performances[id]["startAt"]) {
                let startAt = extractStartAt(value);
                if (startAt) performances[id]["startAt"] = startAt;
            }
        } else {
            performances[id][fieldName] = formatedValue;
        }
    }
    return Object.values(performances);
}

function formatTune(inputJson) {
    let tune = {
        id: getRandomInt(100000),
        name: inputJson.name,
        composer: inputJson.composer,
        performance: {
            videoId: extractYouTubeId(inputJson.link),
            startAt:
                Number(inputJson.startAt) || extractStartAt(inputJson.link),
        },
        subsections: [{ id: Number(inputJson.subsectionId) }],
    };

    let performer = inputJson.performer;
    if (performer && !tune.name.includes(performer)) {
        tune.performance.label = tune.name + " - " + performer;
    }
    if (inputJson.rate) {
        tune.subsections[0].rate = Number(inputJson.rate);
    }

    let performances = formatPerformances(inputJson);
    if (performances.length > 0) {
        tune.subsections[0].performances = performances;
    }

    return tune;
}

/**
 * POST /api/add-tune
 */
export async function onRequestPost({ request, env }) {
    try {
        let input = await request.formData();

        let inputJson = {};
        let password = null;
        for (let [key, value] of input) {
            if (key === "password") {
                password = value;
            } else {
                inputJson[key] = value;
            }
        }

        console.log("inputJson", inputJson);
        let tune = formatTune(inputJson);

        if (password) {
            const hashAdmPwd = await sha256(env.ADMIN_PASSWORD);
            const hashPwd = await sha256(password);
            if (hashPwd === hashAdmPwd) {
                return new Response(JSON.stringify(tune));
            } else {
                return new Response("wrong password", { status: 401 });
            }
        } else {
            let subject = "מנגינה חדשה - " + tune.id;
            sendEmail(subject, JSON.stringify(tune));
        }

        return Response.redirect("/upload-successful", 302);
    } catch (error) {
        return new InvalidParameterResponse(error);
    }
}
