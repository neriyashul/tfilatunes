export class Cache {
    constructor(kv) {
        this.kv = kv;
    }

    async get(key) {
        await this.kv.get(key);
    }

    async set(key, value, expirationEpoch) {
        await this.kv.put(key, value, { expiration: expirationEpoch });
    }
}
