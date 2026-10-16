"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffOrderByShift = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffOrderByShift(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffOrderByShift.METADATA,
        template: staffOrderByShift.METADATA.path,
        path: staffOrderByShift.path(query),
    });
}
exports.staffOrderByShift = staffOrderByShift;
(function (staffOrderByShift) {
    staffOrderByShift.METADATA = {
        method: "GET",
        path: "/shop/analytics/staff-order",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staffOrderByShift.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/staff-order";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffOrderByShift || (exports.staffOrderByShift = staffOrderByShift = {}));
//# sourceMappingURL=index.js.map