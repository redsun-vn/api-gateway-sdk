"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSpace = exports.updateSpace = exports.findOneSpace = exports.findAllSpace = exports.createSpace = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createSpace(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSpace.METADATA,
        template: createSpace.METADATA.path,
        path: createSpace.path(),
    }, input);
}
exports.createSpace = createSpace;
(function (createSpace) {
    createSpace.METADATA = {
        method: "POST",
        path: "/attachments/shop/spaces",
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
    createSpace.path = () => "/attachments/shop/spaces";
})(createSpace || (exports.createSpace = createSpace = {}));
async function findAllSpace(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllSpace.METADATA,
        template: findAllSpace.METADATA.path,
        path: findAllSpace.path(query),
    });
}
exports.findAllSpace = findAllSpace;
(function (findAllSpace) {
    findAllSpace.METADATA = {
        method: "GET",
        path: "/attachments/shop/spaces",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllSpace.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/attachments/shop/spaces";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllSpace || (exports.findAllSpace = findAllSpace = {}));
async function findOneSpace(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneSpace.METADATA,
        template: findOneSpace.METADATA.path,
        path: findOneSpace.path(id),
    });
}
exports.findOneSpace = findOneSpace;
(function (findOneSpace) {
    findOneSpace.METADATA = {
        method: "GET",
        path: "/attachments/shop/spaces/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneSpace.path = (id) => `/attachments/shop/spaces/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOneSpace || (exports.findOneSpace = findOneSpace = {}));
async function updateSpace(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSpace.METADATA,
        template: updateSpace.METADATA.path,
        path: updateSpace.path(id),
    }, input);
}
exports.updateSpace = updateSpace;
(function (updateSpace) {
    updateSpace.METADATA = {
        method: "PUT",
        path: "/attachments/shop/spaces/:id",
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
    updateSpace.path = (id) => `/attachments/shop/spaces/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateSpace || (exports.updateSpace = updateSpace = {}));
async function deleteSpace(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteSpace.METADATA,
        template: deleteSpace.METADATA.path,
        path: deleteSpace.path(id),
    });
}
exports.deleteSpace = deleteSpace;
(function (deleteSpace) {
    deleteSpace.METADATA = {
        method: "DELETE",
        path: "/attachments/shop/spaces/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteSpace.path = (id) => `/attachments/shop/spaces/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteSpace || (exports.deleteSpace = deleteSpace = {}));
//# sourceMappingURL=index.js.map