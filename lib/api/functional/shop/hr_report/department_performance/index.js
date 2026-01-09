"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartmentPerformance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDepartmentPerformance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDepartmentPerformance.METADATA,
        template: getDepartmentPerformance.METADATA.path,
        path: getDepartmentPerformance.path(query),
    });
}
exports.getDepartmentPerformance = getDepartmentPerformance;
(function (getDepartmentPerformance) {
    getDepartmentPerformance.METADATA = {
        method: "GET",
        path: "/shop/hr-report/department-performance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDepartmentPerformance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/department-performance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDepartmentPerformance || (exports.getDepartmentPerformance = getDepartmentPerformance = {}));
//# sourceMappingURL=index.js.map