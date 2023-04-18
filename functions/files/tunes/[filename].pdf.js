import { Base64 } from "js-base64";
import { InvalidParameterResponse } from "../../utils/response";
import { generateHtml } from "./generate-html";

async function streamToString(stream) {
    const strings = [];
    const decoder = new TextDecoder();

    for await (const chunk of stream) {
        let str = decoder.decode(chunk);
        strings.push(str);
    }

    return strings.join("");
}

function buildJob(filename, html) {
    return {
        tasks: {
            "send-html": {
                operation: "import/base64",
                file: Base64.encode(html),
                filename: filename + ".html",
            },
            "convert-html-to-pdf": {
                operation: "convert",
                input_format: "html",
                output_format: "pdf",
                engine: "chrome",
                input: ["send-html"],
                zoom: 1,
                print_background: false,
                display_header_footer: false,
                wait_until: "load",
                wait_time: 0,
                filename: filename + ".pdf",
            },
            "export-pdf": {
                operation: "export/url",
                input: ["convert-html-to-pdf"],
                inline: true,
                archive_multiple_files: false,
            },
        },
        tag: "jobbuilder",
    };
}

async function convertHtmlToPdf(env, filename, html) {
    const api_key = env.CLOUDCONVERT_API_KEY;

    const res = await fetch("https://sync.api.cloudconvert.com/v2/jobs", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${api_key}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(buildJob(filename, html)),
    });

    if (!res.ok) return null;
    const jsonBody = JSON.parse(await streamToString(res.body));

    for (let task of jsonBody.data.tasks) {
        if (task.name === "export-pdf") {
            if (task.status === "finished") {
                return task.result.files[0].url;
            }
        }
    }
    return null;
}

async function streamToResponse(response) {
    let { readable, writable } = new TransformStream();
    response.body.pipeTo(writable);
    return new Response(readable, response);
}

export async function onRequestGet({ params, env }) {
    const filename = decodeURI(params.filename);
    let pdfUrl;

    try {
        const html = await generateHtml(filename, env);
        pdfUrl = await convertHtmlToPdf(env, filename, html);
        const res = await fetch(pdfUrl);
        return await streamToResponse(res);
    } catch (error) {
        return new InvalidParameterResponse();
    }
}
