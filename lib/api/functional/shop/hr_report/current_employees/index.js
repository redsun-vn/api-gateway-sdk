"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentEmployees = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getCurrentEmployees(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getCurrentEmployees.METADATA,
        template: getCurrentEmployees.METADATA.path,
        path: getCurrentEmployees.path(query),
    });
}
exports.getCurrentEmployees = getCurrentEmployees;
(function (getCurrentEmployees) {
    getCurrentEmployees.METADATA = {
        method: "GET",
        path: "/shop/hr-report/current-employees",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getCurrentEmployees.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/current-employees";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getCurrentEmployees || (exports.getCurrentEmployees = getCurrentEmployees = {}));
//# sourceMappingURL=index.js.map