"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOne(connection, id, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        path: findOne.path(id, shopId),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/:shopId/payment-links/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOne.path = (id, shopId) => {
        return `/${encodeURIComponent(shopId ?? "null")}/payment-links/${encodeURIComponent(id ?? "null")}`;
    };
})(findOne || (exports.findOne = findOne = {}));
//# sourceMappingURL=index.js.map