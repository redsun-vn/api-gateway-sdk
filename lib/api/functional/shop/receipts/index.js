"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.findOne = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/receipts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/receipts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/receipts/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/receipts/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function clone(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...clone.METADATA,
        template: clone.METADATA.path,
        path: clone.path(id),
    });
}
exports.clone = clone;
(function (clone) {
    clone.METADATA = {
        method: "POST",
        path: "/shop/receipts/:id/clone",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    clone.path = (id) => `/shop/receipts/${encodeURIComponent(id?.toString() ?? "null")}/clone`;
})(clone || (exports.clone = clone = {}));
//# sourceMappingURL=index.js.map