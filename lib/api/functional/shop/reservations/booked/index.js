"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllBooked = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllBooked(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllBooked.METADATA,
        path: findAllBooked.path(),
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
    findAllBooked.path = () => {
        return `/shop/reservations/booked`;
    };
})(findAllBooked || (exports.findAllBooked = findAllBooked = {}));
//# sourceMappingURL=index.js.map