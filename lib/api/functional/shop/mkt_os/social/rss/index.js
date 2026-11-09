"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeed = exports.updateFeed = exports.createFeed = exports.listFeeds = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listFeeds(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listFeeds.METADATA,
        template: listFeeds.METADATA.path,
        path: listFeeds.path(),
    });
}
exports.listFeeds = listFeeds;
(function (listFeeds) {
    listFeeds.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/rss",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listFeeds.path = () => "/shop/mkt-os/social/rss";
})(listFeeds || (exports.listFeeds = listFeeds = {}));
async function createFeed(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createFeed.METADATA,
        template: createFeed.METADATA.path,
        path: createFeed.path(),
    }, body);
}
exports.createFeed = createFeed;
(function (createFeed) {
    createFeed.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/rss",
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
    createFeed.path = () => "/shop/mkt-os/social/rss";
})(createFeed || (exports.createFeed = createFeed = {}));
async function updateFeed(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateFeed.METADATA,
        template: updateFeed.METADATA.path,
        path: updateFeed.path(id),
    }, body);
}
exports.updateFeed = updateFeed;
(function (updateFeed) {
    updateFeed.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/rss/:id",
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
    updateFeed.path = (id) => `/shop/mkt-os/social/rss/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateFeed || (exports.updateFeed = updateFeed = {}));
async function deleteFeed(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteFeed.METADATA,
        template: deleteFeed.METADATA.path,
        path: deleteFeed.path(id),
    });
}
exports.deleteFeed = deleteFeed;
(function (deleteFeed) {
    deleteFeed.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/rss/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteFeed.path = (id) => `/shop/mkt-os/social/rss/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteFeed || (exports.deleteFeed = deleteFeed = {}));
//# sourceMappingURL=index.js.map