"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubsFromReceipt = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createSubsFromReceipt(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSubsFromReceipt.METADATA,
        template: createSubsFromReceipt.METADATA.path,
        path: createSubsFromReceipt.path(),
    }, data);
}
exports.createSubsFromReceipt = createSubsFromReceipt;
(function (createSubsFromReceipt) {
    createSubsFromReceipt.METADATA = {
        method: "POST",
        path: "/shop/receipts/create-subs-from-receipt",
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
    createSubsFromReceipt.path = () => "/shop/receipts/create-subs-from-receipt";
})(createSubsFromReceipt || (exports.createSubsFromReceipt = createSubsFromReceipt = {}));
//# sourceMappingURL=index.js.map