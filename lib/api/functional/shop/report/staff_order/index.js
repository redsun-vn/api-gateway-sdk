"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffOrderReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffOrderReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffOrderReport.METADATA,
        template: staffOrderReport.METADATA.path,
        path: staffOrderReport.path(query),
    });
}
exports.staffOrderReport = staffOrderReport;
(function (staffOrderReport) {
    staffOrderReport.METADATA = {
        method: "GET",
        path: "/shop/report/staff-order",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staffOrderReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/staff-order";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffOrderReport || (exports.staffOrderReport = staffOrderReport = {}));
//# sourceMappingURL=index.js.map