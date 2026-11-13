"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = exports.updateTag = exports.createTag = exports.listTags = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listTags(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listTags.METADATA,
        template: listTags.METADATA.path,
        path: listTags.path(),
    });
}
exports.listTags = listTags;
(function (listTags) {
    listTags.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/tags",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listTags.path = () => "/shop/mkt-os/social/tags";
})(listTags || (exports.listTags = listTags = {}));
async function createTag(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createTag.METADATA,
        template: createTag.METADATA.path,
        path: createTag.path(),
    }, body);
}
exports.createTag = createTag;
(function (createTag) {
    createTag.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/tags",
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
    createTag.path = () => "/shop/mkt-os/social/tags";
})(createTag || (exports.createTag = createTag = {}));
async function updateTag(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateTag.METADATA,
        template: updateTag.METADATA.path,
        path: updateTag.path(id),
    }, body);
}
exports.updateTag = updateTag;
(function (updateTag) {
    updateTag.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/tags/:id",
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
    updateTag.path = (id) => `/shop/mkt-os/social/tags/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateTag || (exports.updateTag = updateTag = {}));
async function deleteTag(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteTag.METADATA,
        template: deleteTag.METADATA.path,
        path: deleteTag.path(id),
    });
}
exports.deleteTag = deleteTag;
(function (deleteTag) {
    deleteTag.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/tags/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteTag.path = (id) => `/shop/mkt-os/social/tags/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteTag || (exports.deleteTag = deleteTag = {}));
//# sourceMappingURL=index.js.map