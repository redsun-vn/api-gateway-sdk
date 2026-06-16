"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreBreakdown = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function scoreBreakdown(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...scoreBreakdown.METADATA,
        template: scoreBreakdown.METADATA.path,
        path: scoreBreakdown.path(id),
    });
}
exports.scoreBreakdown = scoreBreakdown;
(function (scoreBreakdown) {
    scoreBreakdown.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/:id/score-breakdown",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    scoreBreakdown.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/score-breakdown`;
})(scoreBreakdown || (exports.scoreBreakdown = scoreBreakdown = {}));
//# sourceMappingURL=index.js.map