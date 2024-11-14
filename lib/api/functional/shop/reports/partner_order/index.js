"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerDetailReport = exports.getPartnerOrderReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPartnerOrderReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPartnerOrderReport.METADATA,
        template: getPartnerOrderReport.METADATA.path,
        path: getPartnerOrderReport.path(query),
    });
}
exports.getPartnerOrderReport = getPartnerOrderReport;
(function (getPartnerOrderReport) {
    getPartnerOrderReport.METADATA = {
        method: "GET",
        path: "/shop/reports/partner-order",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPartnerOrderReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/partner-order";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerOrderReport || (exports.getPartnerOrderReport = getPartnerOrderReport = {}));
async function getPartnerDetailReport(connection, query, partnerId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPartnerDetailReport.METADATA,
        template: getPartnerDetailReport.METADATA.path,
        path: getPartnerDetailReport.path(query, partnerId),
    });
}
exports.getPartnerDetailReport = getPartnerDetailReport;
(function (getPartnerDetailReport) {
    getPartnerDetailReport.METADATA = {
        method: "GET",
        path: "/shop/reports/partner-order/:partner_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPartnerDetailReport.path = (query, partnerId) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reports/partner-order/${encodeURIComponent(partnerId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerDetailReport || (exports.getPartnerDetailReport = getPartnerDetailReport = {}));
//# sourceMappingURL=index.js.map