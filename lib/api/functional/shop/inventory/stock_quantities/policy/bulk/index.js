"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPolicyBulk = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setPolicyBulk(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setPolicyBulk.METADATA,
        template: setPolicyBulk.METADATA.path,
        path: setPolicyBulk.path(),
    }, input);
}
exports.setPolicyBulk = setPolicyBulk;
(function (setPolicyBulk) {
    setPolicyBulk.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-quantities/policy/bulk",
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
    setPolicyBulk.path = () => "/shop/inventory/stock-quantities/policy/bulk";
})(setPolicyBulk || (exports.setPolicyBulk = setPolicyBulk = {}));
//# sourceMappingURL=index.js.map