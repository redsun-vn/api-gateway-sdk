"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partnerConfirm = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function partnerConfirm(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...partnerConfirm.METADATA,
        template: partnerConfirm.METADATA.path,
        path: partnerConfirm.path(id),
    }, body);
}
exports.partnerConfirm = partnerConfirm;
(function (partnerConfirm) {
    partnerConfirm.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/confirm",
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
    partnerConfirm.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/confirm`;
})(partnerConfirm || (exports.partnerConfirm = partnerConfirm = {}));
//# sourceMappingURL=index.js.map