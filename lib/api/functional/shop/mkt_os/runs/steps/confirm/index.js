"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmStep = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function confirmStep(connection, id, stage, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...confirmStep.METADATA,
        template: confirmStep.METADATA.path,
        path: confirmStep.path(id, stage),
    }, body);
}
exports.confirmStep = confirmStep;
(function (confirmStep) {
    confirmStep.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/runs/:id/steps/:stage/confirm",
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
    confirmStep.path = (id, stage) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/steps/${encodeURIComponent(stage?.toString() ?? "null")}/confirm`;
})(confirmStep || (exports.confirmStep = confirmStep = {}));
//# sourceMappingURL=index.js.map