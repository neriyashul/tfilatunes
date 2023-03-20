import { isHyphenatedText } from "../../utils/validator";
import { MongoDBGateway } from "../../db/mongodb-gateway";
import {
    InternalErrorResponse,
    InvalidParameterResponse,
    JsonResponse,
    MissingParameterResponse,
    ServiceErrorResponse,
} from "../../utils/response";

async function getTfila({ params, env }) {
    const key = params.key;
    const isValid = isHyphenatedText(key);
    if (!isValid) {
        if (!key) return new MissingParameterResponse();
        return new InvalidParameterResponse();
    }

    try {
        const db = new MongoDBGateway(env);
        const tfila = await db.getTfila(key);
        return new JsonResponse(tfila);
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}

export async function onRequest(args) {
    try {
        return await getTfila(args);
    } catch (error) {
        return new InternalErrorResponse(error);
    }
}
