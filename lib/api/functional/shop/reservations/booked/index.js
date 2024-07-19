"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllBooked = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllBooked(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllBooked.METADATA,
        template: findAllBooked.METADATA.path,
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
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservations/booked";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllBooked || (exports.findAllBooked = findAllBooked = {}));
//# sourceMappingURL=index.js.map