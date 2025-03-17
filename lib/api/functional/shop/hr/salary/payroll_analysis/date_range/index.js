"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllByDateRange = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllByDateRange(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByDateRange.METADATA,
        template: findAllByDateRange.METADATA.path,
        path: findAllByDateRange.path(query),
    });
}
exports.findAllByDateRange = findAllByDateRange;
(function (findAllByDateRange) {
    findAllByDateRange.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/payroll-analysis/date-range",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllByDateRange.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/payroll-analysis/date-range";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByDateRange || (exports.findAllByDateRange = findAllByDateRange = {}));
//# sourceMappingURL=index.js.map