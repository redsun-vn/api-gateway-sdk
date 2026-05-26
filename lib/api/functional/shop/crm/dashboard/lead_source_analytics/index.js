"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadSourceAnalytics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function leadSourceAnalytics(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leadSourceAnalytics.METADATA,
        template: leadSourceAnalytics.METADATA.path,
        path: leadSourceAnalytics.path(query),
    });
}
exports.leadSourceAnalytics = leadSourceAnalytics;
(function (leadSourceAnalytics) {
    leadSourceAnalytics.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/lead-source-analytics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leadSourceAnalytics.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/lead-source-analytics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leadSourceAnalytics || (exports.leadSourceAnalytics = leadSourceAnalytics = {}));
//# sourceMappingURL=index.js.map