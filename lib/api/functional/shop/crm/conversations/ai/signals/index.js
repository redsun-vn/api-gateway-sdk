"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignals = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getSignals(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSignals.METADATA,
        template: getSignals.METADATA.path,
        path: getSignals.path(id),
    });
}
exports.getSignals = getSignals;
(function (getSignals) {
    getSignals.METADATA = {
        method: "GET",
        path: "/shop/crm/conversations/:id/ai/signals",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSignals.path = (id) => `/shop/crm/conversations/${encodeURIComponent(id?.toString() ?? "null")}/ai/signals`;
})(getSignals || (exports.getSignals = getSignals = {}));
//# sourceMappingURL=index.js.map