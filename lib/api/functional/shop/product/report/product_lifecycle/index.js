"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductLifecycle = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getProductLifecycle(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductLifecycle.METADATA,
        template: getProductLifecycle.METADATA.path,
        path: getProductLifecycle.path(query),
    });
}
exports.getProductLifecycle = getProductLifecycle;
(function (getProductLifecycle) {
    getProductLifecycle.METADATA = {
        method: "GET",
        path: "/shop/product/report/product-lifecycle",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductLifecycle.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/product/report/product-lifecycle";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getProductLifecycle || (exports.getProductLifecycle = getProductLifecycle = {}));
//# sourceMappingURL=index.js.map