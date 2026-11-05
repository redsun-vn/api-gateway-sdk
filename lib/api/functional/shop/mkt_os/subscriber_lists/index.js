"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveList = exports.updateList = exports.createList = exports.lists = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function lists(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...lists.METADATA,
        template: lists.METADATA.path,
        path: lists.path(query),
    });
}
exports.lists = lists;
(function (lists) {
    lists.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-lists",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    lists.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/subscriber-lists";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(lists || (exports.lists = lists = {}));
async function createList(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createList.METADATA,
        template: createList.METADATA.path,
        path: createList.path(),
    }, body);
}
exports.createList = createList;
(function (createList) {
    createList.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/subscriber-lists",
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
    createList.path = () => "/shop/mkt-os/subscriber-lists";
})(createList || (exports.createList = createList = {}));
async function updateList(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateList.METADATA,
        template: updateList.METADATA.path,
        path: updateList.path(id),
    }, body);
}
exports.updateList = updateList;
(function (updateList) {
    updateList.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/subscriber-lists/:id",
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
    updateList.path = (id) => `/shop/mkt-os/subscriber-lists/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateList || (exports.updateList = updateList = {}));
async function archiveList(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...archiveList.METADATA,
        template: archiveList.METADATA.path,
        path: archiveList.path(id),
    });
}
exports.archiveList = archiveList;
(function (archiveList) {
    archiveList.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/subscriber-lists/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    archiveList.path = (id) => `/shop/mkt-os/subscriber-lists/${encodeURIComponent(id?.toString() ?? "null")}`;
})(archiveList || (exports.archiveList = archiveList = {}));
//# sourceMappingURL=index.js.map