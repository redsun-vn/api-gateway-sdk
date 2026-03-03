"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIn = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkIn(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...checkIn.METADATA,
        template: checkIn.METADATA.path,
        path: checkIn.path(id),
    }, input);
}
exports.checkIn = checkIn;
(function (checkIn) {
    checkIn.METADATA = {
        method: "POST",
        path: "/shop/treatment-cards/:id/check-in",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    checkIn.path = (id) => `/shop/treatment-cards/${encodeURIComponent(id?.toString() ?? "null")}/check-in`;
})(checkIn || (exports.checkIn = checkIn = {}));
//# sourceMappingURL=index.js.map