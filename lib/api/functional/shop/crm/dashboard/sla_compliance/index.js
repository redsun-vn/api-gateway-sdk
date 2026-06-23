"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slaCompliance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function slaCompliance(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...slaCompliance.METADATA,
        template: slaCompliance.METADATA.path,
        path: slaCompliance.path(query),
    });
}
exports.slaCompliance = slaCompliance;
(function (slaCompliance) {
    slaCompliance.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/sla-compliance",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    slaCompliance.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/sla-compliance";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(slaCompliance || (exports.slaCompliance = slaCompliance = {}));
//# sourceMappingURL=index.js.map