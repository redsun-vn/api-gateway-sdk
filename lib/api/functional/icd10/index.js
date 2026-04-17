"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = exports.all = exports.search = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(query),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/icd10",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/icd10";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function search(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...search.METADATA,
        template: search.METADATA.path,
        path: search.path(query),
    });
}
exports.search = search;
(function (search) {
    search.METADATA = {
        method: "GET",
        path: "/icd10/search",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    search.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/icd10/search";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(search || (exports.search = search = {}));
async function all(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...all.METADATA,
        template: all.METADATA.path,
        path: all.path(),
    });
}
exports.all = all;
(function (all) {
    all.METADATA = {
        method: "GET",
        path: "/icd10/all",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    all.path = () => "/icd10/all";
})(all || (exports.all = all = {}));
async function findOne(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(code),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/icd10/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (code) => `/icd10/${encodeURIComponent(code?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
//# sourceMappingURL=index.js.map