import { isUint } from "../../utils/validator";
import { MongoDBGateway } from "../../db/mongodb-gateway";
import {
    InternalErrorResponse,
    InvalidParameterResponse,
    JsonResponse,
    MissingParameterResponse,
    ServiceErrorResponse,
} from "../../utils/response";

async function getTune({ request, params, env }) {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    const subsectionId = searchParams.get("sub");

    const isValid = isUint(id) && isUint(subsectionId);
    if (!isValid) {
        if (!id || !subsectionId) return new MissingParameterResponse();
        return new InvalidParameterResponse();
    }

    try {
        const db = new MongoDBGateway(env);
        const tune = await db.getTune(Number(id), Number(subsectionId));
        return new JsonResponse(tune);
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}

export async function onRequest(args) {
    try {
        return await getTune(args);
    } catch (error) {
        return new InternalErrorResponse(error);
    }
}
