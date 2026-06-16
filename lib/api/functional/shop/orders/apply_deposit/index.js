"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDeposit = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function applyDeposit(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...applyDeposit.METADATA,
        template: applyDeposit.METADATA.path,
        path: applyDeposit.path(id),
    }, body);
}
exports.applyDeposit = applyDeposit;
(function (applyDeposit) {
    applyDeposit.METADATA = {
        method: "POST",
        path: "/shop/orders/:id/apply-deposit",
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
    applyDeposit.path = (id) => `/shop/orders/${encodeURIComponent(id?.toString() ?? "null")}/apply-deposit`;
})(applyDeposit || (exports.applyDeposit = applyDeposit = {}));
//# sourceMappingURL=index.js.map