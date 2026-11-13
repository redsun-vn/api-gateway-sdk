"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextSlot = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function nextSlot(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...nextSlot.METADATA,
        template: nextSlot.METADATA.path,
        path: nextSlot.path(query),
    });
}
exports.nextSlot = nextSlot;
(function (nextSlot) {
    nextSlot.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/next-slot",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    nextSlot.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/social/next-slot";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(nextSlot || (exports.nextSlot = nextSlot = {}));
//# sourceMappingURL=index.js.map