"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffBestSellingExport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffBestSellingExport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffBestSellingExport.METADATA,
        template: staffBestSellingExport.METADATA.path,
        path: staffBestSellingExport.path(query),
    });
}
exports.staffBestSellingExport = staffBestSellingExport;
(function (staffBestSellingExport) {
    staffBestSellingExport.METADATA = {
        method: "GET",
        path: "/shop/report/staff-selling/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staffBestSellingExport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/staff-selling/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffBestSellingExport || (exports.staffBestSellingExport = staffBestSellingExport = {}));
//# sourceMappingURL=index.js.map