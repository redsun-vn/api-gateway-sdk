"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllBooked = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllBooked(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllBooked.METADATA,
        path: findAllBooked.path(query),
    });
}
exports.findAllBooked = findAllBooked;
(function (findAllBooked) {
    findAllBooked.METADATA = {
        method: "GET",
        path: "/shop/reservations/booked",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAllBooked.path = (query) => {
        const variables = query;
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded = search.toString();
        return `/shop/reservations/booked${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(findAllBooked || (exports.findAllBooked = findAllBooked = {}));
//# sourceMappingURL=index.js.map