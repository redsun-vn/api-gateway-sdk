"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAutoPromote = exports.getAutoPromote = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getAutoPromote(connection, pipelineId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAutoPromote.METADATA,
        template: getAutoPromote.METADATA.path,
        path: getAutoPromote.path(pipelineId),
    });
}
exports.getAutoPromote = getAutoPromote;
(function (getAutoPromote) {
    getAutoPromote.METADATA = {
        method: "GET",
        path: "/shop/crm/pipelines/:id/auto-promote",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAutoPromote.path = (pipelineId) => `/shop/crm/pipelines/${encodeURIComponent(pipelineId?.toString() ?? "null")}/auto-promote`;
})(getAutoPromote || (exports.getAutoPromote = getAutoPromote = {}));
async function updateAutoPromote(connection, pipelineId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateAutoPromote.METADATA,
        template: updateAutoPromote.METADATA.path,
        path: updateAutoPromote.path(pipelineId),
    }, body);
}
exports.updateAutoPromote = updateAutoPromote;
(function (updateAutoPromote) {
    updateAutoPromote.METADATA = {
        method: "PATCH",
        path: "/shop/crm/pipelines/:id/auto-promote",
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
    updateAutoPromote.path = (pipelineId) => `/shop/crm/pipelines/${encodeURIComponent(pipelineId?.toString() ?? "null")}/auto-promote`;
})(updateAutoPromote || (exports.updateAutoPromote = updateAutoPromote = {}));
//# sourceMappingURL=index.js.map