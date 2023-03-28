export class JsonResponse extends Response {
    constructor(data, status = 200) {
        const headers = { "content-type": "application/json" };
        const body = JSON.stringify(data);

        super(body, { headers, status });
    }
}

export class MissingParameterResponse extends JsonResponse {
    constructor() {
        super({ error: "Parameter is missing" }, 400);
    }
}

export class InvalidParameterResponse extends JsonResponse {
    constructor() {
        super({ error: "Parameter is inavlid" }, 400);
    }
}

export class ServiceErrorResponse extends JsonResponse {
    constructor(msg) {
        super({ error: msg }, 503);
    }
}

export class InternalErrorResponse extends JsonResponse {
    constructor(msg) {
        super({ error: msg }, 500);
    }
}

export class RedirectResponse extends Response {
    constructor(url) {
        super(null, {
            status: 302,
            headers: {
                Location: url,
            },
        });
    }
}
