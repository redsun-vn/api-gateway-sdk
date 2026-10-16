"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffSellingExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffSellingExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffSellingExport.METADATA,
        template: staffSellingExport.METADATA.path,
        path: staffSellingExport.path(query),
    });
}
exports.staffSellingExport = staffSellingExport;
(function (staffSellingExport) {
    staffSellingExport.METADATA = {
        method: "GET",
        path: "/shop/analytics/staff-selling/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staffSellingExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/analytics/staff-selling/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffSellingExport || (exports.staffSellingExport = staffSellingExport = {}));
//# sourceMappingURL=index.js.map