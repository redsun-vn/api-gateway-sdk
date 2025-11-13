"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findOne = exports.findPublicRatings = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findPublicRatings(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findPublicRatings.METADATA,
        template: findPublicRatings.METADATA.path,
        path: findPublicRatings.path(query),
    });
}
exports.findPublicRatings = findPublicRatings;
(function (findPublicRatings) {
    findPublicRatings.METADATA = {
        method: "GET",
        path: "/ratings",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findPublicRatings.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/ratings";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findPublicRatings || (exports.findPublicRatings = findPublicRatings = {}));
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
        path: "/ratings/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/ratings/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function create(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(),
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/ratings",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    create.path = () => "/ratings";
})(create || (exports.create = create = {}));
//# sourceMappingURL=index.js.map