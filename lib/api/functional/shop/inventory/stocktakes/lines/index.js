"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLines = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findLines(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findLines.METADATA,
        template: findLines.METADATA.path,
        path: findLines.path(id),
    });
}
exports.findLines = findLines;
(function (findLines) {
    findLines.METADATA = {
        method: "GET",
        path: "/shop/inventory/stocktakes/:id/lines",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findLines.path = (id) => `/shop/inventory/stocktakes/${encodeURIComponent(id?.toString() ?? "null")}/lines`;
})(findLines || (exports.findLines = findLines = {}));
//# sourceMappingURL=index.js.map