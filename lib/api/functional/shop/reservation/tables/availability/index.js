"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAvailability = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkAvailability(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...checkAvailability.METADATA,
        template: checkAvailability.METADATA.path,
        path: checkAvailability.path(id, query),
    });
}
exports.checkAvailability = checkAvailability;
(function (checkAvailability) {
    checkAvailability.METADATA = {
        method: "GET",
        path: "/shop/reservation/tables/:id/availability",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    checkAvailability.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/tables/${encodeURIComponent(id?.toString() ?? "null")}/availability`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(checkAvailability || (exports.checkAvailability = checkAvailability = {}));
//# sourceMappingURL=index.js.map