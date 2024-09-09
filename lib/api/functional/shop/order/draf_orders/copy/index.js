"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCopy = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createCopy(connection, draftId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...createCopy.METADATA,
        template: createCopy.METADATA.path,
        path: createCopy.path(draftId),
    });
}
exports.createCopy = createCopy;
(function (createCopy) {
    createCopy.METADATA = {
        method: "POST",
        path: "/shop/order/draf-orders/:id/copy",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    createCopy.path = (draftId) => `/shop/order/draf-orders/${encodeURIComponent(draftId?.toString() ?? "null")}/copy`;
})(createCopy || (exports.createCopy = createCopy = {}));
//# sourceMappingURL=index.js.map