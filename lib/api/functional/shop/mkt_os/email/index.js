"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coupons = exports.products = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function products(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...products.METADATA,
        template: products.METADATA.path,
        path: products.path(query),
    });
}
exports.products = products;
(function (products) {
    products.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/email/products",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    products.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/email/products";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(products || (exports.products = products = {}));
async function coupons(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...coupons.METADATA,
        template: coupons.METADATA.path,
        path: coupons.path(),
    });
}
exports.coupons = coupons;
(function (coupons) {
    coupons.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/email/coupons",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    coupons.path = () => "/shop/mkt-os/email/coupons";
})(coupons || (exports.coupons = coupons = {}));
//# sourceMappingURL=index.js.map