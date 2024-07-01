"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffBestSelling = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffBestSelling(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staffBestSelling.METADATA,
        template: staffBestSelling.METADATA.path,
        path: staffBestSelling.path(query),
    });
}
exports.staffBestSelling = staffBestSelling;
(function (staffBestSelling) {
    staffBestSelling.METADATA = {
        method: "GET",
        path: "/shop/report/staff-selling",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    staffBestSelling.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/staff-selling";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staffBestSelling || (exports.staffBestSelling = staffBestSelling = {}));
//# sourceMappingURL=index.js.map