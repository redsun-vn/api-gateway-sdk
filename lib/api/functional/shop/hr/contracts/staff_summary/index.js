"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffSummary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffSummary(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffSummary.METADATA,
        template: staffSummary.METADATA.path,
        path: staffSummary.path(query),
    });
}
exports.staffSummary = staffSummary;
(function (staffSummary) {
    staffSummary.METADATA = {
        method: "GET",
        path: "/shop/hr/contracts/staff-summary",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staffSummary.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/contracts/staff-summary";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffSummary || (exports.staffSummary = staffSummary = {}));
//# sourceMappingURL=index.js.map