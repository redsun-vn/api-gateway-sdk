"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubsFromReceiptV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createSubsFromReceiptV2(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSubsFromReceiptV2.METADATA,
        template: createSubsFromReceiptV2.METADATA.path,
        path: createSubsFromReceiptV2.path(),
    }, data);
}
exports.createSubsFromReceiptV2 = createSubsFromReceiptV2;
(function (createSubsFromReceiptV2) {
    createSubsFromReceiptV2.METADATA = {
        method: "POST",
        path: "/shop/receipts/create-v2",
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
    createSubsFromReceiptV2.path = () => "/shop/receipts/create-v2";
})(createSubsFromReceiptV2 || (exports.createSubsFromReceiptV2 = createSubsFromReceiptV2 = {}));
//# sourceMappingURL=index.js.map