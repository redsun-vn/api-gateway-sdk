"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOnePublic = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOnePublic(connection, uuid, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOnePublic.METADATA,
        template: findOnePublic.METADATA.path,
        path: findOnePublic.path(uuid, query),
    });
}
exports.findOnePublic = findOnePublic;
(function (findOnePublic) {
    findOnePublic.METADATA = {
        method: "GET",
        path: "/sale-orders/:uuid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOnePublic.path = (uuid, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/sale-orders/${encodeURIComponent(uuid?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findOnePublic || (exports.findOnePublic = findOnePublic = {}));
//# sourceMappingURL=index.js.map