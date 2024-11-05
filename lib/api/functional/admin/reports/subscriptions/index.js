"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportSubscriptions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getReportSubscriptions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getReportSubscriptions.METADATA,
        template: getReportSubscriptions.METADATA.path,
        path: getReportSubscriptions.path(query),
    });
}
exports.getReportSubscriptions = getReportSubscriptions;
(function (getReportSubscriptions) {
    getReportSubscriptions.METADATA = {
        method: "GET",
        path: "/admin/reports/subscriptions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getReportSubscriptions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/reports/subscriptions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getReportSubscriptions || (exports.getReportSubscriptions = getReportSubscriptions = {}));
//# sourceMappingURL=index.js.map