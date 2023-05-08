import { joinURLs } from "../utils/address";

export class MongoDBGateway {
    constructor(env) {
        this.apiKey = env.MONGO_API_KEY;
        this.baseURL = env.MONGO_BASE_URL;
    }

    async #post(url, body) {
        const fullUrl = joinURLs(this.baseURL, url);
        await fetch(fullUrl, {
            method: "POST",
            headers: {
                apiKey: this.apiKey,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: body,
        });
    }

    async #get(url) {
        const fullUrl = joinURLs(this.baseURL, url);
        const response = await fetch(fullUrl, {
            headers: {
                apiKey: this.apiKey,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return response.json();
    }

    async getTfila(key) {
        return await this.#get(`/tfila?key=${key}`);
    }

    async getSection(subsectionId) {
        return await this.#get(`/section?subsectionId=${subsectionId}`);
    }

    async getRangeTunes(minSubsectionId, maxSubsectionId) {
        return await this.#get(
            `/tunes?minSubsectionId=${minSubsectionId}&maxSubsectionId=${maxSubsectionId}`
        );
    }

    async getTunes(subsectionIds) {
        if (!subsectionIds) return null;
        if (typeof subsectionIds == "string" || typeof subsectionIds == "number") {
            return await this.#get(`/tunes?subsectionId=${subsectionIds}`);
        } else if (subsectionIds.length == 0) {
            return await this.#get(`/tunes?subsectionId=${subsectionIds[0]}`);
        } else {
            return await this.#get(
                `/tunes?subsectionIds=${JSON.stringify(subsectionIds)}`
            );
        }
    }

    async getAllTunes() {
        return await this.#get(`/tunes`);
    }

    async getTune(id, subsectionId) {
        return await this.#get(`/tune?id=${id}&subsectionId=${subsectionId}`);
    }

    async postTune(tune) {
        await this.#post(`/tune`, JSON.stringify(tune));
    }
}
