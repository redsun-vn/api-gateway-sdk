"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function callback(connection, platform, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...callback.METADATA,
        template: callback.METADATA.path,
        path: callback.path(platform, query),
    });
}
exports.callback = callback;
(function (callback) {
    callback.METADATA = {
        method: "GET",
        path: "/ads/:platform/oauth/callback",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    callback.path = (platform, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/ads/${encodeURIComponent(platform?.toString() ?? "null")}/oauth/callback`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(callback || (exports.callback = callback = {}));
//# sourceMappingURL=index.js.map