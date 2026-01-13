"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getOverview(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOverview.METADATA,
        template: getOverview.METADATA.path,
        path: getOverview.path(query),
    });
}
exports.getOverview = getOverview;
(function (getOverview) {
    getOverview.METADATA = {
        method: "GET",
        path: "/shop/product/report/overview",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOverview.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/report/overview";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getOverview || (exports.getOverview = getOverview = {}));
//# sourceMappingURL=index.js.map