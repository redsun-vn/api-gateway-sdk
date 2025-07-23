"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromDeal = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createFromDeal(connection, dealId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...createFromDeal.METADATA,
        template: createFromDeal.METADATA.path,
        path: createFromDeal.path(dealId),
    });
}
exports.createFromDeal = createFromDeal;
(function (createFromDeal) {
    createFromDeal.METADATA = {
        method: "POST",
        path: "/admin/crm/quotes/create-from-deal/:dealId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    createFromDeal.path = (dealId) => `/admin/crm/quotes/create-from-deal/${encodeURIComponent(dealId?.toString() ?? "null")}`;
})(createFromDeal || (exports.createFromDeal = createFromDeal = {}));
//# sourceMappingURL=index.js.map