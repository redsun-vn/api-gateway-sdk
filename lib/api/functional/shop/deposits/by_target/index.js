"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByTarget = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByTarget(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByTarget.METADATA,
        template: findByTarget.METADATA.path,
        path: findByTarget.path(query),
    });
}
exports.findByTarget = findByTarget;
(function (findByTarget) {
    findByTarget.METADATA = {
        method: "GET",
        path: "/shop/deposits/by-target",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByTarget.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/deposits/by-target";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByTarget || (exports.findByTarget = findByTarget = {}));
//# sourceMappingURL=index.js.map