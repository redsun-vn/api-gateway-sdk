"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disable = exports.enable = exports.update = exports.create = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(id),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id/links",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/links`;
})(list || (exports.list = list = {}));
async function create(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(id),
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/links",
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
    create.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/links`;
})(create || (exports.create = create = {}));
async function update(connection, id, linkId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id, linkId),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/campaigns/:id/links/:linkId",
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
    update.path = (id, linkId) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/links/${encodeURIComponent(linkId?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function enable(connection, id, linkId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...enable.METADATA,
        template: enable.METADATA.path,
        path: enable.path(id, linkId),
    });
}
exports.enable = enable;
(function (enable) {
    enable.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/links/:linkId/enable",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    enable.path = (id, linkId) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/links/${encodeURIComponent(linkId?.toString() ?? "null")}/enable`;
})(enable || (exports.enable = enable = {}));
async function disable(connection, id, linkId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...disable.METADATA,
        template: disable.METADATA.path,
        path: disable.path(id, linkId),
    });
}
exports.disable = disable;
(function (disable) {
    disable.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/links/:linkId/disable",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    disable.path = (id, linkId) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/links/${encodeURIComponent(linkId?.toString() ?? "null")}/disable`;
})(disable || (exports.disable = disable = {}));
//# sourceMappingURL=index.js.map