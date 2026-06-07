"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQualifyGate = exports.getQualifyGate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getQualifyGate(connection, pipelineId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getQualifyGate.METADATA,
        template: getQualifyGate.METADATA.path,
        path: getQualifyGate.path(pipelineId),
    });
}
exports.getQualifyGate = getQualifyGate;
(function (getQualifyGate) {
    getQualifyGate.METADATA = {
        method: "GET",
        path: "/shop/crm/pipelines/:id/qualify-gate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getQualifyGate.path = (pipelineId) => `/shop/crm/pipelines/${encodeURIComponent(pipelineId?.toString() ?? "null")}/qualify-gate`;
})(getQualifyGate || (exports.getQualifyGate = getQualifyGate = {}));
async function updateQualifyGate(connection, pipelineId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateQualifyGate.METADATA,
        template: updateQualifyGate.METADATA.path,
        path: updateQualifyGate.path(pipelineId),
    }, body);
}
exports.updateQualifyGate = updateQualifyGate;
(function (updateQualifyGate) {
    updateQualifyGate.METADATA = {
        method: "PATCH",
        path: "/shop/crm/pipelines/:id/qualify-gate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updateQualifyGate.path = (pipelineId) => `/shop/crm/pipelines/${encodeURIComponent(pipelineId?.toString() ?? "null")}/qualify-gate`;
})(updateQualifyGate || (exports.updateQualifyGate = updateQualifyGate = {}));
//# sourceMappingURL=index.js.map