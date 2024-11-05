"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLineMultiple = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createLineMultiple(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createLineMultiple.METADATA,
        template: createLineMultiple.METADATA.path,
        path: createLineMultiple.path(id),
    }, data);
}
exports.createLineMultiple = createLineMultiple;
(function (createLineMultiple) {
    createLineMultiple.METADATA = {
        method: "POST",
        path: "/shop/accounting/payment-terms/:id/lines/multiple",
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
    createLineMultiple.path = (id) => `/shop/accounting/payment-terms/${encodeURIComponent(id?.toString() ?? "null")}/lines/multiple`;
})(createLineMultiple || (exports.createLineMultiple = createLineMultiple = {}));
//# sourceMappingURL=index.js.map