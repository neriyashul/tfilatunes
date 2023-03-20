import { joinURLs } from "../utils/address";

export class MongoDBGateway {
    constructor(env) {
        this.apiKey = env.API_KEY;
        this.baseURL = env.BASE_URL;
    }

    async #get(url) {
        console.log("url", url);
        console.log("baseURl", this.baseURL);
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

    async getTunes(subsectionId) {
        return await this.#get(`/tunes?subsectionId=${subsectionId}`);
    }

    async getTune(id, subsectionId) {
        return await this.#get(`/tune?id=${id}&subsectionId=${subsectionId}`);
    }
}
