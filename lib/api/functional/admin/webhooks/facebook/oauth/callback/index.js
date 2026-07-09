"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCallback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function handleCallback(connection, code, state, error) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...handleCallback.METADATA,
        template: handleCallback.METADATA.path,
        path: handleCallback.path(code, state, error),
    });
}
exports.handleCallback = handleCallback;
(function (handleCallback) {
    handleCallback.METADATA = {
        method: "GET",
        path: "/admin/webhooks/facebook/oauth/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    handleCallback.path = (code, state, error) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries({
            code,
            state,
            error,
        }))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/webhooks/facebook/oauth/callback";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(handleCallback || (exports.handleCallback = handleCallback = {}));
//# sourceMappingURL=index.js.map