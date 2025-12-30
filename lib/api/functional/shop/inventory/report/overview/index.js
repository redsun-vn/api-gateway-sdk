"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInventoryOverview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getInventoryOverview(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getInventoryOverview.METADATA,
        template: getInventoryOverview.METADATA.path,
        path: getInventoryOverview.path(query),
    });
}
exports.getInventoryOverview = getInventoryOverview;
(function (getInventoryOverview) {
    getInventoryOverview.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/overview",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getInventoryOverview.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/overview";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getInventoryOverview || (exports.getInventoryOverview = getInventoryOverview = {}));
//# sourceMappingURL=index.js.map