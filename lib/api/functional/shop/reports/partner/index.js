"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPartnerReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPartnerReport.METADATA,
        template: getPartnerReport.METADATA.path,
        path: getPartnerReport.path(query),
    });
}
exports.getPartnerReport = getPartnerReport;
(function (getPartnerReport) {
    getPartnerReport.METADATA = {
        method: "GET",
        path: "/shop/reports/partner",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPartnerReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/partner";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerReport || (exports.getPartnerReport = getPartnerReport = {}));
//# sourceMappingURL=index.js.map