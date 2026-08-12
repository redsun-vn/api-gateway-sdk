"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countByBarcode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function countByBarcode(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...countByBarcode.METADATA,
        template: countByBarcode.METADATA.path,
        path: countByBarcode.path(id),
    }, input);
}
exports.countByBarcode = countByBarcode;
(function (countByBarcode) {
    countByBarcode.METADATA = {
        method: "POST",
        path: "/shop/inventory/stocktakes/:id/count-by-barcode",
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
    countByBarcode.path = (id) => `/shop/inventory/stocktakes/${encodeURIComponent(id?.toString() ?? "null")}/count-by-barcode`;
})(countByBarcode || (exports.countByBarcode = countByBarcode = {}));
//# sourceMappingURL=index.js.map