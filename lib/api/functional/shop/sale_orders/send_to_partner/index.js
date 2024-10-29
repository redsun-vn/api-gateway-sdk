"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToPartner = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendToPartner(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...sendToPartner.METADATA,
        template: sendToPartner.METADATA.path,
        path: sendToPartner.path(id),
    });
}
exports.sendToPartner = sendToPartner;
(function (sendToPartner) {
    sendToPartner.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/send-to-partner",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    sendToPartner.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/send-to-partner`;
})(sendToPartner || (exports.sendToPartner = sendToPartner = {}));
//# sourceMappingURL=index.js.map