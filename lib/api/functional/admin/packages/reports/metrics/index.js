"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPackageReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPackageReport.METADATA,
        template: getPackageReport.METADATA.path,
        path: getPackageReport.path(query),
    });
}
exports.getPackageReport = getPackageReport;
(function (getPackageReport) {
    getPackageReport.METADATA = {
        method: "GET",
        path: "/admin/packages/reports/metrics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPackageReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/packages/reports/metrics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPackageReport || (exports.getPackageReport = getPackageReport = {}));
//# sourceMappingURL=index.js.map