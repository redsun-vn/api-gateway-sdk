"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsSource = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function analyticsSource(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...analyticsSource.METADATA,
        template: analyticsSource.METADATA.path,
        path: analyticsSource.path(query),
    });
}
exports.analyticsSource = analyticsSource;
(function (analyticsSource) {
    analyticsSource.METADATA = {
        method: "GET",
        path: "/admin/crm/leads-analytics/source",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    analyticsSource.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm/leads-analytics/source";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(analyticsSource || (exports.analyticsSource = analyticsSource = {}));
//# sourceMappingURL=index.js.map