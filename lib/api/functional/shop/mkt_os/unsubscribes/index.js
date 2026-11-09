"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUnsubscribes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listUnsubscribes(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listUnsubscribes.METADATA,
        template: listUnsubscribes.METADATA.path,
        path: listUnsubscribes.path(query),
    });
}
exports.listUnsubscribes = listUnsubscribes;
(function (listUnsubscribes) {
    listUnsubscribes.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/unsubscribes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listUnsubscribes.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/unsubscribes";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listUnsubscribes || (exports.listUnsubscribes = listUnsubscribes = {}));
//# sourceMappingURL=index.js.map