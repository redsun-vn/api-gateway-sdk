"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportPackageReceipt = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getReportPackageReceipt(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReportPackageReceipt.METADATA,
        template: getReportPackageReceipt.METADATA.path,
        path: getReportPackageReceipt.path(query),
    });
}
exports.getReportPackageReceipt = getReportPackageReceipt;
(function (getReportPackageReceipt) {
    getReportPackageReceipt.METADATA = {
        method: "GET",
        path: "/admin/reports/package-receipts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReportPackageReceipt.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/reports/package-receipts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getReportPackageReceipt || (exports.getReportPackageReceipt = getReportPackageReceipt = {}));
//# sourceMappingURL=index.js.map