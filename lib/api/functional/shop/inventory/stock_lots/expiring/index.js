"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpiring = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findExpiring(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findExpiring.METADATA,
        template: findExpiring.METADATA.path,
        path: findExpiring.path(query),
    });
}
exports.findExpiring = findExpiring;
(function (findExpiring) {
    findExpiring.METADATA = {
        method: "GET",
        path: "/shop/inventory/stock-lots/expiring",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findExpiring.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/stock-lots/expiring";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findExpiring || (exports.findExpiring = findExpiring = {}));
//# sourceMappingURL=index.js.map