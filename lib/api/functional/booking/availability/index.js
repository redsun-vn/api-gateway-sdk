"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAvailability = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkAvailability(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...checkAvailability.METADATA,
        template: checkAvailability.METADATA.path,
        path: checkAvailability.path(query),
    });
}
exports.checkAvailability = checkAvailability;
(function (checkAvailability) {
    checkAvailability.METADATA = {
        method: "GET",
        path: "/booking/availability",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    checkAvailability.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/booking/availability";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(checkAvailability || (exports.checkAvailability = checkAvailability = {}));
//# sourceMappingURL=index.js.map