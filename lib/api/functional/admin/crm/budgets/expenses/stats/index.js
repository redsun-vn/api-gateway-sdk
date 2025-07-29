"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseStats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getExpenseStats(connection, budgetId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getExpenseStats.METADATA,
        template: getExpenseStats.METADATA.path,
        path: getExpenseStats.path(budgetId),
    });
}
exports.getExpenseStats = getExpenseStats;
(function (getExpenseStats) {
    getExpenseStats.METADATA = {
        method: "GET",
        path: "/admin/crm/budgets/:budgetId/expenses/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getExpenseStats.path = (budgetId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/stats`;
})(getExpenseStats || (exports.getExpenseStats = getExpenseStats = {}));
//# sourceMappingURL=index.js.map