"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointActivityReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPointActivityReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPointActivityReport.METADATA,
        template: getPointActivityReport.METADATA.path,
        path: getPointActivityReport.path(query),
    });
}
exports.getPointActivityReport = getPointActivityReport;
(function (getPointActivityReport) {
    getPointActivityReport.METADATA = {
        method: "GET",
        path: "/shop/reports/loyalty-point-activity",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPointActivityReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/loyalty-point-activity";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPointActivityReport || (exports.getPointActivityReport = getPointActivityReport = {}));
//# sourceMappingURL=index.js.map