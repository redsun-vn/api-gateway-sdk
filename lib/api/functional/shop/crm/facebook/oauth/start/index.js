"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOAuth = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function startOAuth(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...startOAuth.METADATA,
        template: startOAuth.METADATA.path,
        path: startOAuth.path(query),
    });
}
exports.startOAuth = startOAuth;
(function (startOAuth) {
    startOAuth.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/oauth/start",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    startOAuth.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/facebook/oauth/start";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(startOAuth || (exports.startOAuth = startOAuth = {}));
//# sourceMappingURL=index.js.map