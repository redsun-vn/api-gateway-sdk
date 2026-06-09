"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKpiSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getKpiSummary(connection, partnerUuid) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getKpiSummary.METADATA,
        template: getKpiSummary.METADATA.path,
        path: getKpiSummary.path(partnerUuid),
    });
}
exports.getKpiSummary = getKpiSummary;
(function (getKpiSummary) {
    getKpiSummary.METADATA = {
        method: "GET",
        path: "/shop/partners/:id/kpi-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getKpiSummary.path = (partnerUuid) => `/shop/partners/${encodeURIComponent(partnerUuid?.toString() ?? "null")}/kpi-summary`;
})(getKpiSummary || (exports.getKpiSummary = getKpiSummary = {}));
//# sourceMappingURL=index.js.map