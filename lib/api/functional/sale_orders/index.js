"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOnePublic = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOnePublic(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOnePublic.METADATA,
        template: findOnePublic.METADATA.path,
        path: findOnePublic.path(id, query),
    });
}
exports.findOnePublic = findOnePublic;
(function (findOnePublic) {
    findOnePublic.METADATA = {
        method: "GET",
        path: "/sale-orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOnePublic.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findOnePublic || (exports.findOnePublic = findOnePublic = {}));
//# sourceMappingURL=index.js.map