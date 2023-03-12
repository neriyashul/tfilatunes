export default class DBGateway {
    async #fetchData(path) {
        const baseUrl = import.meta.env.VITE_SERVER_URL;
        const url = `${baseUrl}api/${path}`;
        return await fetch(url).then((response) => response.json());
    }

    async getTunes(subsectionId) {
        return this.#fetchData(`tunes/${subsectionId}`);
    }

    async getTune(id, subsectionId) {
        return this.#fetchData(`tune/${id}?sub=${subsectionId}`);
    }
}
