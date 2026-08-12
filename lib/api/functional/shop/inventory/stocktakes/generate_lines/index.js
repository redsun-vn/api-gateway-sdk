"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLines = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function generateLines(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...generateLines.METADATA,
        template: generateLines.METADATA.path,
        path: generateLines.path(id),
    });
}
exports.generateLines = generateLines;
(function (generateLines) {
    generateLines.METADATA = {
        method: "POST",
        path: "/shop/inventory/stocktakes/:id/generate-lines",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    generateLines.path = (id) => `/shop/inventory/stocktakes/${encodeURIComponent(id?.toString() ?? "null")}/generate-lines`;
})(generateLines || (exports.generateLines = generateLines = {}));
//# sourceMappingURL=index.js.map