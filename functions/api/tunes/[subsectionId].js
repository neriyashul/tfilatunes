import { isUint } from "../../utils/validator";
import { MongoDBGateway } from "../../db/mongodb-gateway";
import {
    InternalErrorResponse,
    InvalidParameterResponse,
    JsonResponse,
    MissingParameterResponse,
    ServiceErrorResponse,
} from "../../utils/response";

async function getTunes({ params, env }) {
    const { subsectionId } = params;

    const isValid = isUint(subsectionId);
    if (!isValid) {
        if (!subsectionId) return new MissingParameterResponse();
        return new InvalidParameterResponse();
    }

    try {
        const db = new MongoDBGateway(env);
        const tunes = await db.getTunes(Number(subsectionId));
        return new JsonResponse(tunes);
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}

export async function onRequest(args) {
    try {
        return await getTunes(args);
    } catch (error) {
        return new InternalErrorResponse(error);
    }
}
