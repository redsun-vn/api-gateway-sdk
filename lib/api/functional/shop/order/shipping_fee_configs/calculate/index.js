"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFee = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function calculateFee(connection, request) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...calculateFee.METADATA,
        template: calculateFee.METADATA.path,
        path: calculateFee.path(),
    }, request);
}
exports.calculateFee = calculateFee;
(function (calculateFee) {
    calculateFee.METADATA = {
        method: "POST",
        path: "/shop/order/shipping-fee-configs/calculate",
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
    calculateFee.path = () => "/shop/order/shipping-fee-configs/calculate";
})(calculateFee || (exports.calculateFee = calculateFee = {}));
//# sourceMappingURL=index.js.map