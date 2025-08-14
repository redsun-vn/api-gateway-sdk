"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllExpenses = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllExpenses(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllExpenses.METADATA,
        template: findAllExpenses.METADATA.path,
        path: findAllExpenses.path(query),
    });
}
exports.findAllExpenses = findAllExpenses;
(function (findAllExpenses) {
    findAllExpenses.METADATA = {
        method: "GET",
        path: "/admin/crm/budgets-expenses",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllExpenses.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm/budgets-expenses";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllExpenses || (exports.findAllExpenses = findAllExpenses = {}));
//# sourceMappingURL=index.js.map