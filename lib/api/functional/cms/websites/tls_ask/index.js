"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tlsAsk = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function tlsAsk(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...tlsAsk.METADATA,
        template: tlsAsk.METADATA.path,
        path: tlsAsk.path(query),
    });
}
exports.tlsAsk = tlsAsk;
(function (tlsAsk) {
    tlsAsk.METADATA = {
        method: "GET",
        path: "/cms/websites/tls-ask",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    tlsAsk.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/cms/websites/tls-ask";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(tlsAsk || (exports.tlsAsk = tlsAsk = {}));
//# sourceMappingURL=index.js.map