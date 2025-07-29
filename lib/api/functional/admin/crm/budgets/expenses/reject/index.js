"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectExpense = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function rejectExpense(connection, budgetId, expenseId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...rejectExpense.METADATA,
        template: rejectExpense.METADATA.path,
        path: rejectExpense.path(budgetId, expenseId),
    }, data);
}
exports.rejectExpense = rejectExpense;
(function (rejectExpense) {
    rejectExpense.METADATA = {
        method: "PUT",
        path: "/admin/crm/budgets/:budgetId/expenses/:expenseId/reject",
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
    rejectExpense.path = (budgetId, expenseId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/${encodeURIComponent(expenseId?.toString() ?? "null")}/reject`;
})(rejectExpense || (exports.rejectExpense = rejectExpense = {}));
//# sourceMappingURL=index.js.map