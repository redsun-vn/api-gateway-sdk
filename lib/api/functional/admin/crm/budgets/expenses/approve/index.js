"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveExpense = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function approveExpense(connection, budgetId, expenseId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approveExpense.METADATA,
        template: approveExpense.METADATA.path,
        path: approveExpense.path(budgetId, expenseId),
    }, data);
}
exports.approveExpense = approveExpense;
(function (approveExpense) {
    approveExpense.METADATA = {
        method: "PUT",
        path: "/admin/crm/budgets/:budgetId/expenses/:expenseId/approve",
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
    approveExpense.path = (budgetId, expenseId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/${encodeURIComponent(expenseId?.toString() ?? "null")}/approve`;
})(approveExpense || (exports.approveExpense = approveExpense = {}));
//# sourceMappingURL=index.js.map