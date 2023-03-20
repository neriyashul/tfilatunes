import { isUint } from "../../utils/validator";
import { MongoDBGateway } from "../../db/mongodb-gateway";
import {
    InternalErrorResponse,
    InvalidParameterResponse,
    JsonResponse,
    MissingParameterResponse,
    ServiceErrorResponse,
} from "../../utils/response";

async function getSection({ params, env }) {
    const { subsectionId } = params;

    const isValid = isUint(subsectionId);
    if (!isValid) {
        if (!subsectionId) return new MissingParameterResponse();
        return new InvalidParameterResponse();
    }

    try {
        const db = new MongoDBGateway(env);
        const subsection = await db.getSection(Number(subsectionId));
        return new JsonResponse(subsection);
    } catch (error) {
        return new ServiceErrorResponse(error);
    }
}

export async function onRequest(args) {
    try {
        return await getSection(args);
    } catch (error) {
        return new InternalErrorResponse(error);
    }
}
