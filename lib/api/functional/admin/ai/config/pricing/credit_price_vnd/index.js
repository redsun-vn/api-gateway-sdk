"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreditPriceVnd = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCreditPriceVnd(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCreditPriceVnd.METADATA,
        template: getCreditPriceVnd.METADATA.path,
        path: getCreditPriceVnd.path(),
    });
}
exports.getCreditPriceVnd = getCreditPriceVnd;
(function (getCreditPriceVnd) {
    getCreditPriceVnd.METADATA = {
        method: "GET",
        path: "/admin/ai/config/pricing/credit-price-vnd",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCreditPriceVnd.path = () => "/admin/ai/config/pricing/credit-price-vnd";
})(getCreditPriceVnd || (exports.getCreditPriceVnd = getCreditPriceVnd = {}));
//# sourceMappingURL=index.js.map