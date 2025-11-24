"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberOrderReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMemberOrderReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMemberOrderReport.METADATA,
        template: getMemberOrderReport.METADATA.path,
        path: getMemberOrderReport.path(query),
    });
}
exports.getMemberOrderReport = getMemberOrderReport;
(function (getMemberOrderReport) {
    getMemberOrderReport.METADATA = {
        method: "GET",
        path: "/shop/reports/loyalty-member-order",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMemberOrderReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/loyalty-member-order";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMemberOrderReport || (exports.getMemberOrderReport = getMemberOrderReport = {}));
//# sourceMappingURL=index.js.map