"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportReceipt = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getReportReceipt(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReportReceipt.METADATA,
        template: getReportReceipt.METADATA.path,
        path: getReportReceipt.path(query),
    });
}
exports.getReportReceipt = getReportReceipt;
(function (getReportReceipt) {
    getReportReceipt.METADATA = {
        method: "GET",
        path: "/admin/reports/receipts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReportReceipt.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/reports/receipts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getReportReceipt || (exports.getReportReceipt = getReportReceipt = {}));
//# sourceMappingURL=index.js.map