"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadConversion = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function leadConversion(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leadConversion.METADATA,
        template: leadConversion.METADATA.path,
        path: leadConversion.path(query),
    });
}
exports.leadConversion = leadConversion;
(function (leadConversion) {
    leadConversion.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/lead-conversion",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leadConversion.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/lead-conversion";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leadConversion || (exports.leadConversion = leadConversion = {}));
//# sourceMappingURL=index.js.map