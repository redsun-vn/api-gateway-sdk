"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyPayroll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMonthlyPayroll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMonthlyPayroll.METADATA,
        template: getMonthlyPayroll.METADATA.path,
        path: getMonthlyPayroll.path(query),
    });
}
exports.getMonthlyPayroll = getMonthlyPayroll;
(function (getMonthlyPayroll) {
    getMonthlyPayroll.METADATA = {
        method: "GET",
        path: "/shop/hr-report/monthly-payroll",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMonthlyPayroll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr-report/monthly-payroll";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMonthlyPayroll || (exports.getMonthlyPayroll = getMonthlyPayroll = {}));
//# sourceMappingURL=index.js.map