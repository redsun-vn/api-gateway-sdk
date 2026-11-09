"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryStep = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function retryStep(connection, id, stage, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...retryStep.METADATA,
        template: retryStep.METADATA.path,
        path: retryStep.path(id, stage),
    }, body);
}
exports.retryStep = retryStep;
(function (retryStep) {
    retryStep.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/steps/:stage/retry",
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
    retryStep.path = (id, stage) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/steps/${encodeURIComponent(stage?.toString() ?? "null")}/retry`;
})(retryStep || (exports.retryStep = retryStep = {}));
//# sourceMappingURL=index.js.map