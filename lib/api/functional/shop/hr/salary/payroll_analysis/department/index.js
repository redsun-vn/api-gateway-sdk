"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllByDepartment = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllByDepartment(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllByDepartment.METADATA,
        template: findAllByDepartment.METADATA.path,
        path: findAllByDepartment.path(query),
    });
}
exports.findAllByDepartment = findAllByDepartment;
(function (findAllByDepartment) {
    findAllByDepartment.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/payroll-analysis/department",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllByDepartment.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/payroll-analysis/department";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllByDepartment || (exports.findAllByDepartment = findAllByDepartment = {}));
//# sourceMappingURL=index.js.map