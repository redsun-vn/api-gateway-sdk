"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerDetailReport = exports.getPartnerReport = void 0;
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
        path: "/shop/report/partner-report",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
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
        const location = "/shop/report/partner-report";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerReport || (exports.getPartnerReport = getPartnerReport = {}));
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
        path: "/shop/report/partner-report/:partner_id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
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
        const location = `/shop/report/partner-report/${encodeURIComponent(partnerId ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerDetailReport || (exports.getPartnerDetailReport = getPartnerDetailReport = {}));
//# sourceMappingURL=index.js.map