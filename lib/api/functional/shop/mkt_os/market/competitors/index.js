"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompetitor = exports.createCompetitor = exports.listCompetitors = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listCompetitors(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listCompetitors.METADATA,
        template: listCompetitors.METADATA.path,
        path: listCompetitors.path(query),
    });
}
exports.listCompetitors = listCompetitors;
(function (listCompetitors) {
    listCompetitors.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/market/competitors",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listCompetitors.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/market/competitors";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listCompetitors || (exports.listCompetitors = listCompetitors = {}));
async function createCompetitor(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createCompetitor.METADATA,
        template: createCompetitor.METADATA.path,
        path: createCompetitor.path(),
    }, body);
}
exports.createCompetitor = createCompetitor;
(function (createCompetitor) {
    createCompetitor.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/market/competitors",
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
    createCompetitor.path = () => "/shop/mkt-os/market/competitors";
})(createCompetitor || (exports.createCompetitor = createCompetitor = {}));
async function updateCompetitor(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateCompetitor.METADATA,
        template: updateCompetitor.METADATA.path,
        path: updateCompetitor.path(id),
    }, body);
}
exports.updateCompetitor = updateCompetitor;
(function (updateCompetitor) {
    updateCompetitor.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/market/competitors/:id",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updateCompetitor.path = (id) => `/shop/mkt-os/market/competitors/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateCompetitor || (exports.updateCompetitor = updateCompetitor = {}));
//# sourceMappingURL=index.js.map