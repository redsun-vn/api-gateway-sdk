"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createReservation(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createReservation.METADATA,
        template: createReservation.METADATA.path,
        path: createReservation.path(),
    }, data);
}
exports.createReservation = createReservation;
(function (createReservation) {
    createReservation.METADATA = {
        method: "POST",
        path: "/booking/reserve",
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
    createReservation.path = () => "/booking/reserve";
})(createReservation || (exports.createReservation = createReservation = {}));
//# sourceMappingURL=index.js.map