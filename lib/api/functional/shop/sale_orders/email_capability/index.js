"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailCapability = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getEmailCapability(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getEmailCapability.METADATA,
        template: getEmailCapability.METADATA.path,
        path: getEmailCapability.path(),
    });
}
exports.getEmailCapability = getEmailCapability;
(function (getEmailCapability) {
    getEmailCapability.METADATA = {
        method: "GET",
        path: "/shop/sale-orders/email-capability",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getEmailCapability.path = () => "/shop/sale-orders/email-capability";
})(getEmailCapability || (exports.getEmailCapability = getEmailCapability = {}));
//# sourceMappingURL=index.js.map