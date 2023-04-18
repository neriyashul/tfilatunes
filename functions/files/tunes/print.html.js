import { InvalidParameterResponse } from "../../utils/response";
import { generateHtml } from "./generate-html";

export async function onRequestGet({ params, env }) {
    const filename = decodeURI(params.filename);
    try {
        const html = await generateHtml(filename, env);
        return new Response(html);
    } catch (error) {
        return new InvalidParameterResponse();
    }
}
