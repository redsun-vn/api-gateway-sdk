"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberSummaryReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMemberSummaryReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMemberSummaryReport.METADATA,
        template: getMemberSummaryReport.METADATA.path,
        path: getMemberSummaryReport.path(query),
    });
}
exports.getMemberSummaryReport = getMemberSummaryReport;
(function (getMemberSummaryReport) {
    getMemberSummaryReport.METADATA = {
        method: "GET",
        path: "/shop/reports/loyalty-member-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMemberSummaryReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/loyalty-member-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMemberSummaryReport || (exports.getMemberSummaryReport = getMemberSummaryReport = {}));
//# sourceMappingURL=index.js.map