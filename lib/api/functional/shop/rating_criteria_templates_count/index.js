"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function count(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...count.METADATA,
        template: count.METADATA.path,
        path: count.path(query),
    });
}
exports.count = count;
(function (count) {
    count.METADATA = {
        method: "GET",
        path: "/shop/rating-criteria-templates-count",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    count.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/rating-criteria-templates-count";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(count || (exports.count = count = {}));
//# sourceMappingURL=index.js.map