"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsumedItems = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getConsumedItems(connection, cardId, logId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConsumedItems.METADATA,
        template: getConsumedItems.METADATA.path,
        path: getConsumedItems.path(cardId, logId),
    });
}
exports.getConsumedItems = getConsumedItems;
(function (getConsumedItems) {
    getConsumedItems.METADATA = {
        method: "GET",
        path: "/shop/treatment-cards/:cardId/sessions/:logId/consumed-items",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConsumedItems.path = (cardId, logId) => `/shop/treatment-cards/${encodeURIComponent(cardId?.toString() ?? "null")}/sessions/${encodeURIComponent(logId?.toString() ?? "null")}/consumed-items`;
})(getConsumedItems || (exports.getConsumedItems = getConsumedItems = {}));
//# sourceMappingURL=index.js.map