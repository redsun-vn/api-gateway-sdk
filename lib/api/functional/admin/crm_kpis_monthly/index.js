"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKPIProgressMonthly = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getKPIProgressMonthly(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getKPIProgressMonthly.METADATA,
        template: getKPIProgressMonthly.METADATA.path,
        path: getKPIProgressMonthly.path(query),
    });
}
exports.getKPIProgressMonthly = getKPIProgressMonthly;
(function (getKPIProgressMonthly) {
    getKPIProgressMonthly.METADATA = {
        method: "GET",
        path: "/admin/crm-kpis-monthly",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getKPIProgressMonthly.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm-kpis-monthly";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getKPIProgressMonthly || (exports.getKPIProgressMonthly = getKPIProgressMonthly = {}));
//# sourceMappingURL=index.js.map