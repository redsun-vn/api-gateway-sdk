"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.createExpense = exports.findOneExpense = exports.findAllExpenses = exports.stats = exports.reject = exports.approve = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.approve = __importStar(require("./approve"));
exports.reject = __importStar(require("./reject"));
exports.stats = __importStar(require("./stats"));
async function findAllExpenses(connection, budgetId, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllExpenses.METADATA,
        template: findAllExpenses.METADATA.path,
        path: findAllExpenses.path(budgetId, query),
    });
}
exports.findAllExpenses = findAllExpenses;
(function (findAllExpenses) {
    findAllExpenses.METADATA = {
        method: "GET",
        path: "/admin/crm/budgets/:budgetId/expenses",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllExpenses.path = (budgetId, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllExpenses || (exports.findAllExpenses = findAllExpenses = {}));
async function findOneExpense(connection, budgetId, expenseId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneExpense.METADATA,
        template: findOneExpense.METADATA.path,
        path: findOneExpense.path(budgetId, expenseId),
    });
}
exports.findOneExpense = findOneExpense;
(function (findOneExpense) {
    findOneExpense.METADATA = {
        method: "GET",
        path: "/admin/crm/budgets/:budgetId/expenses/:expenseId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneExpense.path = (budgetId, expenseId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/${encodeURIComponent(expenseId?.toString() ?? "null")}`;
})(findOneExpense || (exports.findOneExpense = findOneExpense = {}));
async function createExpense(connection, budgetId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createExpense.METADATA,
        template: createExpense.METADATA.path,
        path: createExpense.path(budgetId),
    }, data);
}
exports.createExpense = createExpense;
(function (createExpense) {
    createExpense.METADATA = {
        method: "POST",
        path: "/admin/crm/budgets/:budgetId/expenses",
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
    createExpense.path = (budgetId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses`;
})(createExpense || (exports.createExpense = createExpense = {}));
async function updateExpense(connection, budgetId, expenseId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateExpense.METADATA,
        template: updateExpense.METADATA.path,
        path: updateExpense.path(budgetId, expenseId),
    }, data);
}
exports.updateExpense = updateExpense;
(function (updateExpense) {
    updateExpense.METADATA = {
        method: "PUT",
        path: "/admin/crm/budgets/:budgetId/expenses/:expenseId",
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
    updateExpense.path = (budgetId, expenseId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/${encodeURIComponent(expenseId?.toString() ?? "null")}`;
})(updateExpense || (exports.updateExpense = updateExpense = {}));
async function deleteExpense(connection, budgetId, expenseId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteExpense.METADATA,
        template: deleteExpense.METADATA.path,
        path: deleteExpense.path(budgetId, expenseId),
    });
}
exports.deleteExpense = deleteExpense;
(function (deleteExpense) {
    deleteExpense.METADATA = {
        method: "DELETE",
        path: "/admin/crm/budgets/:budgetId/expenses/:expenseId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteExpense.path = (budgetId, expenseId) => `/admin/crm/budgets/${encodeURIComponent(budgetId?.toString() ?? "null")}/expenses/${encodeURIComponent(expenseId?.toString() ?? "null")}`;
})(deleteExpense || (exports.deleteExpense = deleteExpense = {}));
//# sourceMappingURL=index.js.map