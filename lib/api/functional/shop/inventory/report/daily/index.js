"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDailyReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getDailyReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDailyReport.METADATA,
        template: getDailyReport.METADATA.path,
        path: getDailyReport.path(query),
    });
}
exports.getDailyReport = getDailyReport;
(function (getDailyReport) {
    getDailyReport.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/daily",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDailyReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/daily";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getDailyReport || (exports.getDailyReport = getDailyReport = {}));
//# sourceMappingURL=index.js.map