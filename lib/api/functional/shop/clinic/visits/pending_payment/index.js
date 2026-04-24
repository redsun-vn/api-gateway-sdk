"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pendingPayment = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function pendingPayment(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...pendingPayment.METADATA,
        template: pendingPayment.METADATA.path,
        path: pendingPayment.path(id),
    }, input);
}
exports.pendingPayment = pendingPayment;
(function (pendingPayment) {
    pendingPayment.METADATA = {
        method: "POST",
        path: "/shop/clinic/visits/:id/pending-payment",
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
    pendingPayment.path = (id) => `/shop/clinic/visits/${encodeURIComponent(id?.toString() ?? "null")}/pending-payment`;
})(pendingPayment || (exports.pendingPayment = pendingPayment = {}));
//# sourceMappingURL=index.js.map