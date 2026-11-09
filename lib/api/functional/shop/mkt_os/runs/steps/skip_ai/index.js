"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipStepAi = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function skipStepAi(connection, id, stage) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...skipStepAi.METADATA,
        template: skipStepAi.METADATA.path,
        path: skipStepAi.path(id, stage),
    });
}
exports.skipStepAi = skipStepAi;
(function (skipStepAi) {
    skipStepAi.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/steps/:stage/skip-ai",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    skipStepAi.path = (id, stage) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/steps/${encodeURIComponent(stage?.toString() ?? "null")}/skip-ai`;
})(skipStepAi || (exports.skipStepAi = skipStepAi = {}));
//# sourceMappingURL=index.js.map