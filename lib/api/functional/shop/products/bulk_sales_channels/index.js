"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkAssignSalesChannels = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bulkAssignSalesChannels(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bulkAssignSalesChannels.METADATA,
        template: bulkAssignSalesChannels.METADATA.path,
        path: bulkAssignSalesChannels.path(),
    }, input);
}
exports.bulkAssignSalesChannels = bulkAssignSalesChannels;
(function (bulkAssignSalesChannels) {
    bulkAssignSalesChannels.METADATA = {
        method: "PUT",
        path: "/shop/products/bulk-sales-channels",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    bulkAssignSalesChannels.path = () => "/shop/products/bulk-sales-channels";
})(bulkAssignSalesChannels || (exports.bulkAssignSalesChannels = bulkAssignSalesChannels = {}));
//# sourceMappingURL=index.js.map